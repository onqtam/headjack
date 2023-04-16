# Concerns with Headjack

<!--

TODO:

mark concerns with some color or shape that are not just relevant to headjack but any decentralized solution

other protocols also suffer from this - how do you update an element identifiable with a hash?

Concern: might be prohibitively expensive to maintain different versions of feeds for the dame account based on different applications and what they “support”

concern: a complete mess of message types with overlapping functionality

The limiting factor: data processing & computation

data problem: separate sets of indexes from different infrastructure companies? in case someone is spammy and infra company X doesn't want to work with them? We can still have some sort of federated queries.

Todo: how to combat brigading? Concern: might not be able to do it because not a single system

not all business models translate easily:
Starting today, Twitter will share ad revenue with creators for ads that appear in their reply threads
https://twitter.com/elonmusk/status/1621544497388875777

Concern: it will never be possible to display an accurate view count like twitter can (what about youtube?)

not being able to hide the like counter - bad for mental health?

mistakes such as doing some action publicly when intended for a private action...

algorithmic interference - even if you've chosen a good algorithm, it may be using signals from others who are using worse algorithms and thus the worse algorithms are influencing the better one

what if an application generates too much data for the infrastructure companies to process and are relying on their own - how to unify queries & indexes across infrastructures?

-->

A list of the most important problems & challenges for the project:

<!-- toc -->

# Data problems

- Proofs for individual documents for a URI might be quite big - if there are 1 million events by all users in a blob that a big application anchors with a single commit (realistic for something like Twitter if it anchors once every 10 seconds), then we'd need about 20 hashes (log(1000000)) in a binary Merkle tree in order to prove the authenticity of any individual element. Suppose an event is just a simple reaction - probably less than 100 bytes including everything necessary. With 32 byte hashes we would end up with 0.64kb just for the proof of inclusion in the blob with 1 million elements which is at least 6.4 times larger than the data itself.
    - This isn't a problem for infrastructure companies that store the entire data blobs or the applications that publish them as there's enormous overlap in the proofs for the elements witin a blob (so the proof overhead will be less that the entire blob itself and it can even be entirely skipped as the proofs can be re-generated), but entities like IDMs that want to cache individual elements for their users out of the aggregate blobs will have to store a lot more data.
    - A possible way to reduce the size of proofs is to use much wider trees (not binary but with a branching factor of up to 1024, or maybe even more!) with KZG vector commitments - they allow us to prove that an element is part of a set with a small constant size proof - without having to provide the hashes of all sister elements. Ethereum will be moving to a [Verkle tree](https://vitalik.ca/general/2021/06/18/verkle.html) structure for the same reasons - reducing the depth of the tree and the size of proofs for individual elements. 1 million elements can be represented with a tree with a branching factor of 1000 and depth 2 and only 2 KZG proofs would be required to prove the inclusion of any element. However, it's not clear what the performance costs would be when uzing KZG commitments (or their size) - <u>**this should be researched.**</u>

<!--

Reducing merkle proof sizes with Verkle Tries
"It’s a constant size proof regardless of the width."
https://members.delphidigital.io/reports/the-hitchhikers-guide-to-ethereum
Guide to the Ethereum Roadmap | Jon Charbonneau of Delphi Digital
https://www.youtube.com/watch?v=xuLyZaty9iI
vector commitments (Merkle proofs)
https://blog.ethereum.org/2021/12/02/verkle-tree-structure/
https://www.youtube.com/watch?v=RGJOQHzg3UQ
https://vitalik.ca/general/2021/06/18/verkle.html
https://notes.ethereum.org/@vbuterin/verkle_tree_eip

Stateless Ethereum: How Verkle Trees Make Ethereum Lean and Mean
https://www.youtube.com/watch?v=Q7rStTKwuYs

the first multi-client #VerkleTree test with @go_ethereum and @nethermindeth nodes in consensus.
https://twitter.com/jasoriatanishq/status/1627692040015478785

https://vitalik.ca/general/2022/09/17/layer_3.html#why-you-cant-just-keep-scaling-by-stacking-rollups-on-top-of-rollups
"Note that because data on rollups is the scarcest resource, a practical implementation of such a scheme would use a SNARK or a KZG proof, rather than a Merkle proof directly, to save space."


https://ethresear.ch/t/using-polynomial-commitments-to-replace-state-roots/7095

https://twitter.com/SalomonCrypto/status/1581462447491194880
https://twitter.com/SalomonCrypto/status/1583573077081792512



OMG !!!
https://cointelegraph.com/explained/merkle-trees-vs-verkle-trees-explained
> "A Verkle tree would require less than 150 bytes to produce a proof for a tree with a billion data points, compared to a typical binary Merkle tree's around 1 kilobyte."


OMG !!!
Verkle Trees John Kuszmaul
paper introducing verkle trees - talks about reference implementation with sha256 & proof size reduction
https://math.mit.edu/research/highschool/primes/materials/2018/Kuszmaul.pdf

HEX-BLOOM: An Efficient Method for Authenticity and Integrity Verification in Privacy-preserving Computing
https://eprint.iacr.org/2021/773.pdf





== stupid stuff START ==

what if messages contain always the hash of the newest block - the chain tip? If the message is signed by the application (so the user doesn't have to) and the hash of the chain tip is included then you can prove that this message was created at least at that point in time - not earlier. And then you can look for invalidations of the access tokens / permissions for that app to post on behalf of the user. Similar to Farcaster - the message was created and signed at some point (or later), but ..... fuck, this doesn't work :|

what if apps had to occasionally commit sets of messages that have been published in the past X number of blocks (with some IDs), such that we can later check if a message was forged much later (after an access token revocation) and "inserted" at a prior time? what if apps had a nonce that gets incremented for every message they publish - forever? ... fuck, this doesn't work :|

what if KZG vector commitments can help? with a tree with a branching factor of 1000 for 1B elements we'd need only 1 million KZG proofs

what if we separated the inclusion (merkle) proofs from the publishing of data? what if we just published the IPFS CID of the blob (which could have a tree structure & header & so on) and also the application nonce (new type of nonce), but the inclusion proofs were submitted separately in an even more compact way? any benefits in that?

what if apps maintain 2 separate sets of inclusion proofs - the original ones, & those that I'm thinking of in here?

== stupid stuff END ==


-->

- Edits/updates or deleting a document will result in a different URI - the original URI/document are unaffected. This means that all infra & apps will have to monitor the network for updates of elements but some might miss it because an update may come from anywhere - not necessarily from the original application that posted the event.
    - One option is whenever an edit/update/delete is made, the application that's used to generate it would have to explicitly notify the IDM of the user (and maybe also the original application) that there's been an update. The IDM may keep a compact map of document URIs that have had changes and point to the URI of the latest version of those documents (but no intermediate versions) without any proofs. All updates should always refer to the URI of the original version of an event. However, there are 3 problems with this: **1)** if the IDM doesn't check the authenticity of the edits/updates it may be fooled into thinking that the user has changed something, **2)** an application might not inform the IDM, **3)** this will lead to additional storage requirements for IDMs, and **4)** this will lead to a lot of traffic & requests from all kinds of applications to IDMs just to check if there's been an update for a document before visualizing it. <u>**A better solution is needed.**</u>

<!-- Concern: leaked decryption keys for private data -->

> "Consistency is incredibly important for creating a compelling user experience." - [Moxie](https://signal.org/blog/the-ecosystem-is-moving/)

- State growth - Headjack keeps a lot of the history in its materialized state in order to guarantee historic data availability so that anyone can generate proofs for older events - not just the "current view" (which also constantly grows because of more and more accounts). However, most of this is compact integers (block ranges for ownership & authorizations, nonce mappings, etc.) and growth will not be very high - should be well below that of Solana even with billions of accounts. If necessary, history older than some threshold (a decade?) could be pruned - older documents with already generated & cached proofs will be self-authenticating and other services could provide archival nodes without pruned history as well.

# Complexity & confusion

- Counters & other aggregates could be different depending on the application / inrfastructure / filters used for it. The landscape of possibilities will be far greater than what is currently possible - it will take time for the dust to settle & people to learn mental models for how to think about data and the different ways it can be presented.

- It would be easy for applications to show different versions of documents because applications & IDMs might be faulty - fracturing & distorting the state of the system.

# Centralization risks

The follownig risks are inevitable because we're targeting everything digital at a worldwide scale - there is no better solution and it is an improvement to the status quo in terms of lowering the bar for new entrants to come in and compete.

- The market will consolidate to only a few infrastructure companies & IDMs in this scale-free network because of **1)** [efficiency](https://subconscious.substack.com/i/59924410/scale-free-networks-emerge-because-they-are-efficient), **2)** [selection pressure](https://subconscious.substack.com/i/59924410/scale-free-networks-emerge-because-of-selection-pressure), and **3)** [preferential attachment](https://subconscious.substack.com/i/59924410/scale-free-networks-emerge-due-to-preferential-attachment).

- The few biggest infrastructure companies could become the choke points for censorship, but at least new entrants can come in, although it would be prohibitively expensive for them to ingest & index all historic data - it's more likely & practical they'll operate forward from a certain point in time and ignore most or everything before that.

- Some applications might depend too much on specific indexes that can be maintained cost-effectively only by the biggest infrastructure companies and that way they may end up locked-in with nowhere else to go.

- IDMs & applications could lock-in users by not adhering to the standards for interoperable data & messages by offering custom features, but this problem exists on the web today as well with other open protocols and a strong culture of checking if interoperability is maintained can counteract this.

# Trust issues

- Very few users might bind a keypair to their accounts because it's complicated & feels "unnecessary" leading to more control for IDMs over users.

Users with no keys - 
This is the tradeoff required for mass adoption

- Users without keypairs will probably have to trust their IDMs in regards to the ownership of their names as transactions & changes won't be explicitly signed by them.

- If something goes wrong with an IDM

# name squatting

- how to handle the name registration and avoiding hoarding




# Privacy concerns & regulations around data

- Could be very addictive - no way to hide like count

no right to be forgotten?

what if you by mistake like adult content through your main account and that event gets cached by others - unable to be deleted?

https://blog.mollywhite.net/is-acceptably-non-dystopian-self-sovereign-identity-even-possible

ClearviewAI, but on stereoids
https://twitter.com/WolfieChristl/status/1604121118578823171
The cat is out of the bag
https://twitter.com/driesdepoorter/status/1569285878089908231
https://metro.co.uk/2022/09/14/ai-art-project-reveals-truth-behind-influencers-instagram-photos-17371535/

Con: extremely easy to detect the personality type of anyone with high accuracy based on their activity - Cambridge Analytica on stereoids

with open data anyone could build a classifier and label certain people as gay - without their consent.

anyone analyzing data more easily at scale?
Panopticon as a service?
https://en.wikipedia.org/wiki/Panopticon

- big disadvantage: once data is out - it is out. Services should honor delete & purge requests but there's no way to force them. Any distributed system will be like this


complexity around connections and subscriptions - if they're private then that would hinder discoverability...



Cambridge analytica
Targeting
> "Show us 14 photos of yourself and we can identify who you are." - [Eric Schmidt](https://www.azquotes.com/quote/838235)
concern: availability cascades & mimetic theory
Targeted harassment campaigns

concern: Identify gay ppl in Iran

Concern: negative reputation - others posting mean stuff on your wall - you can control who can do that in Facebook (for a reason) - think about this













# Other challenges

This brave new world of new types of media will be at odds with the current system:
    problem: apple does not allow apps with internal app stores?
        https://youtu.be/fW9-dEOSX8A?t=562



# TODO:

takedown requests & liability

# to address in other pages:

problem: if your content gets bundled up in an IPFS blob from an application and there's CSAM from someone else in it...
    blob should be chunked by userfor easy removal

- moderation

# to think about

- spam
https://twitter.com/cfenollosa/status/1566484145446027265
https://news.ycombinator.com/item?id=32715437
https://news.ycombinator.com/item?id=32718591
perhaps spam in email is a harder problem compared to Headjack where everything is tied to identity & it might cost money to create an account?
- Sybil attack - spam, bloat, state growth with dead IDs
    https://maciek.blog/dit/
    list of solutions to the sybil attack problem:
        https://blog.mollywhite.net/is-acceptably-non-dystopian-self-sovereign-identity-even-possible/
    - Pruning?

- settlement is not native to this system
the lack of financial integration & composability with other chains might be an issue?

- Image/video hosting/caching

concern: with better traceability, censoring events could be easier, but important documents can still circle around with proofs of authenticity

Concern: status inequality - even if one platform and set of algorithms let newcomers have a chance, other platforms may not. But maybe it balances on aggregate

https://slatestarcodex.com/2018/10/30/sort-by-controversial/

# no longer true

Con: everyone will see the authorized apps?









- Social graphs & DMs are facilitated by [IDMs](IDM.md) which resemble [Farcaster](others_list.md#farcaster)'s managed hosts and [Bluesky](others_list.md#bluesky)'s Personal Data Servers - a centralization point with some trust assumptions and potential for data breaches. However, this is the best tradeoff that would allow for true mass adoption and is still a massive improvement to the status quo. A big failure scenario is if an IDM that manages millions of accounts goes rogue or shuts down:
    - Those that have not bound a keypair to their accounts will effectively be stuck.
    - The chain could get congested by those who have keypairs and suddenly all at once start submitting on-chain transactions directly to move to another IDM but that problem can be alleviated through [signature aggregation](https://ethresear.ch/t/an-off-chain-bls-aggregation-scheme-which-might-reduce-the-casper-finalization-to-1-min/5427) if the signed payload is the same like for example if a big chunk of them move from IDM `666` to IDM `42` specifically.
        - If they haven't exported their off-chain data managed by their previous IDM it could be lost - social graph, DMs, preferences, etc.
        - However, these problems (loss from a "trusted" service going down and network congestion on rare events) will be shared by any solution that has "trusted" services that are required to reach any meaningful scale. Some users could run their own version of an IDM for their private data but they'll have to pay for more bytes on-chain which is not something that everyone could be doing at once.

- Updates & deletes to content may not be applied/displayed properly in all applications - there will always be those that don't honor edits or [purge requests](https://github.com/bluesky-social/adx/blob/main/architecture.md#purge-requests-hard-removal). However, this is a problem with almost any decentralized protocol and most established applications will be honoring these types of messages or else people will simply move to different ones. In the end, this will not be an issue on any meaningful scale as social forces will solve it.

- Data pointed to by a URI is not by itself [self-authenticating](https://en.wikipedia.org/wiki/Self-authenticating_document) - it needs accompanying cryptographic Merkle proofs that only full blockchain nodes can generate. However, no solution provides fully self-authenticating content as keypairs might have changed - there will always be a need to consult with a [logically centralized](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) entity. Also archiving & bookmarking services (or fully self-contained articles/books with no external dependencies) that don't want to rely on repetitive requests to the blockchain in the future may request these proofs initially and store them along with the data.

- what happens if an event that's not anchored yet becomes illegitimate by an IDM unauthorizing an application before the content is anchored? Confusing for people...




- the unlimited amount & combinatorial explosion of customization & preferences might be too expensive for the infrastructure to support them

- changing something from public to private and the other way around


- what happens if some new application is very spammy? should the infra just pay the costs for storage by default?
- what if a specific application is very spammy and infrasturcture blacklists it, but some users use it and expect their creations & edits to be visible elsewhere?



concern: its impossible to have updated views & indexes for every aggregate with a big enough different filtration criteria, but its important for any view to be possible, so that eventually it gets calculated & surfaces
