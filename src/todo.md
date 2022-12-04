# To think about

- read & think about permissions, sub-app/domain authorization, private data, "Data Access Controllers", "data domain"
    https://blog.ceramic.network/capability-based-data-security-on-ceramic/
    https://en.wikipedia.org/wiki/Capability-based_security
    https://en.wikipedia.org/wiki/Object-capability_model
    https://blog.sia.tech/mysky-your-home-on-the-global-operating-system-of-the-future-5a288f89825c
    how about JWT objects? delegation chain with the same or lesser permissions? revocation?

    https://research.google/pubs/pub41892/

    google: authz
        https://www.cloudflare.com/learning/access-management/authn-vs-authz/
        https://cyral.com/glossary/authentication-authn-versus-authorization-authz/

    google: acl vs ucan
        https://noti.st/expede/IHl7BE/slides
        https://noti.st/expede/IHl7BE/present

    google: revoke oauth token

    - zCaps
        https://w3c-ccg.github.io/zcap-spec/
        https://docs.walt.id/v/storage-kit/concepts/advanced-concepts/components/theory-authorization-capabilities

    - UCAN
        https://www.youtube.com/watch?v=grec5KQeU2U
        https://www.youtube.com/watch?v=rQgecoUvmjU
        https://ucan.xyz/
        https://fission.codes/blog/auth-without-backend/
        https://blog.web3.storage/posts/intro-to-ucan

    - research: Capability-based security vs traditional UNIX permissions and Access Control Lists.
        https://en.wikipedia.org/wiki/Capability-based_security
        https://en.wikipedia.org/wiki/Principle_of_least_privilege

    - Think about scopes of authorization - multidimensionality

    - figure out a plan to plug into existing SAML/OAuth/OpenID infrastructure for authentication and authorization
        https://en.wikipedia.org/wiki/OAuth
        https://twitter.com/docknetwork/status/1570034345649532931
        https://twitter.com/auth0
        https://auth0.com/docs/secure/tokens/json-web-tokens
        https://en.wikipedia.org/wiki/OAuth

        !!! What Is Single Sign-on (SSO)? How It Works !!!
        https://www.youtube.com/watch?v=O1cRJWYF-g4


    - revocation
        https://github.com/google/trillian/blob/master/docs/papers/RevocationTransparency.pdf

        https://webcache.googleusercontent.com/search?q=cache:HjwUSYfeg2UJ:https://www.links.org/files/RevocationTransparency.pdf&cd=1&hl=bg&ct=clnk&gl=bg

        https://fc18.ifca.ai/bitcoin/papers/bitcoin18-final29.pdf

        https://www.researchgate.net/profile/Nikita-Korzhitskii/publication/359054411_Postcertificates_for_Revocation_Transparency/links/622611aaa39db062db87f509/Postcertificates-for-Revocation-Transparency.pdf

        https://dl.acm.org/doi/10.1145/2019599.2019602

- === URIs

    - URI VERSIONING !!! https://github.com/farcasterxyz/protocol/pull/1/files#diff-41a06fd4fdc96d9d6ab16fe8478ce9f47df511b62815efe372a601afd369a125R87

    - section about URIs & principles for their development?
        https://github.com/farcasterxyz/protocol/pull/1/files#diff-41a06fd4fdc96d9d6ab16fe8478ce9f47df511b62815efe372a601afd369a125R7

    - URI for a profile? what would it look like? just the integer index?

    - URIs for other chains - chain-agnostic way?
        https://github.com/farcasterxyz/protocol/pull/1/files#diff-41a06fd4fdc96d9d6ab16fe8478ce9f47df511b62815efe372a601afd369a125R30

    - uri length limit - 2048

    - URIs for DMs?

    - message type in URI?
        https://github.com/farcasterxyz/protocol/pull/1/files#diff-41a06fd4fdc96d9d6ab16fe8478ce9f47df511b62815efe372a601afd369a125R76

    - what about URIs starting with block numbers? under a specific protocol schema?

    - URIs: how to translate from number URI to a name URI? can we ask the blockchain "which names were owned by account X at block height H and with which nonce?" and how do we pick which to use if there are multiple ones?

    - New URI schema so that we can use the current name of an app for an old URI when the name was different?

    - https://en.wikipedia.org/wiki/URI_fragment

    - how to address content on other blockchains? what would the URIs be?

    - Tag creation (which get an ID on-chain) so that anyone can reference it & organize around it. Following tags?
        Headjack may offer the ability to give permanent IDs on-chain similar to accounts for concepts & abstract entities in order to facilitate 
        TODO: how to address items from off-chain collections in the URI differently & better?
        CHANGE THE URI MODEL! allow for this! make it more general!
        sets/collections from an entity!

    - PROBLEM: what if a name is just a number - how does that impact URIs? there can be collisions... must find a way to resolve such conflicts
        - should there be some schema in part of the URI - perhaps before the nonce? what if the URI contains the ID of the message type as well?
        !!! How about a mixed URI where the application has a name but the user is an integer? must distinguish in the URI schema!

        look what substack does with the URIs (both point to the same article):
            https://subconscious.substack.com/p/layered-protocols
            https://subconscious.substack.com/i/53901934/the-internet-is-layered

    - URI to show content published from application A through another application? how to share links from a specific application?

    - URIs for on-chain authorization events?

    - handle redirects? twitter.com => twitter, so that all content URLs use twitter and the .com one is just used for convenience? or wtf?


== RESEARCH:

- single use credential

- blind signature

- accumulators
    https://en.wikipedia.org/wiki/Accumulator_(cryptography)
    Accumulator (cryptography) vs merkle tree
    https://medium.com/asecuritysite-when-bob-met-alice/bloom-filters-merkle-trees-and-accumulators-27bc2f7baf5a

- https://web.dev/signed-exchanges/

- same origin policy & CORS
    https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
    https://twitter.com/gordonbrander/status/1536721539818606592
    https://en.wikipedia.org/wiki/Same-origin_policy

    https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
    https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

- https://blog.google/technology/safety-security/one-step-closer-to-a-passwordless-future/

- https://fidoalliance.org/

- look into Verkle trees & KZG proofs / commitments
    https://vitalik.ca/general/2022/09/17/layer_3.html#why-you-cant-just-keep-scaling-by-stacking-rollups-on-top-of-rollups
    "Note that because data on rollups is the scarcest resource, a practical implementation of such a scheme would use a SNARK or a KZG proof, rather than a Merkle proof directly, to save space."

    https://twitter.com/SalomonCrypto/status/1581462447491194880
    https://twitter.com/SalomonCrypto/status/1583573077081792512


- How to toggle content to be either public/private? Once it is out it is out :|

- build a transactional system on top of Headjack addressing? incentive layer for DA & build staking & whatnot on top of that? big bottleneck for SC chains: state access. What if a chain solves for addressing of content such that the state of an app can be sharded on many machines and yet remain addressable? BOUNDLESS addressability.

- Private off chain content - what about the ipfs blob header and the visibility of which users are in the blob?

- https://webmonetization.org/
- https://interledger.org/

- CanDID - using existing credentials to prove things about you with TLS, intel SGX & maybe ZK
    https://www.youtube.com/watch?v=Y-M6G5656PU
    https://eprint.iacr.org/2020/934.pdf
    https://www.candid.id/

- how to: Not be visible that im part of some subreddit but still be included in the public counter?

- use "scroll-to-text-fragment" for non-twitter external quotes in the URLs

- what if you create a private post for 20 specific followers - you could insert a unique watermark which gets signed along with the payload and then if any of them leak it it would be known who did it - no more piracy?

- new action type: grant ability to someone to "edit" & publish a new version of an item - but not to post on your behalf entirely - only if it's about a specific document or namespace/collection?

- da pomislq: Kak tochno shte se proverqva authenticity-to na private actions za accs bez keypair?

- off-chain NFTs as verifiable credentials? ways to change ownership on-chain?
    https://en.wikipedia.org/wiki/Provenance

- how to make things with a URI an NFT

- Only ipfs hash to a header blob and no merkle root on chain?

- Think about Headjack through the lens of Palantir Foundry & granular data access & permissions

- What if the application web2 website is no longer around?

- how to handle live streaming? what should the URI point to? what's the message type?

- Topics such as $RUNE & hashtags - how do they get parsed?

- https://indieweb.org/Webmention

- https://ipld.io/docs/schemas/
    https://proto.school/anatomy-of-a-cid/02/

- think about content hosting (especially files & images)

- TLS & certificates standards?
    https://en.wikipedia.org/wiki/X.509

- protected tweets - LOL - followers are also private unless permitted?
paywalls? how?
How to create a view of the discussion with only paid subscribers?

- explore how to link private details to identity with ZK
    ppl will anonymously talk about companies and prove stuff with ZK and others will make algorithms to surface such signal

- telegram and such mass group chats & channels

- figure out additional ways for CDN for content & keeping it up & alive besides just user & application archiving

- think about if retroactive revocation is good or just complicates things. Other projects explicitly don't allow it - instead they use tombstones (specific messages) to signal that content was not authorized. What about changes to user's interest graph though?
https://spec.dsnp.org/DSNP/Identity.html#retroactive-revocation-of-delegation
    - Offchain Tombstones are worse than on-chain retroactive revocations because proofs for old block heights need to be invalidated - they shouldn't be possible from the latest block height

    on chain retroactive revocation is important (for up to a week) because otherwise with off-chain tombstones the chain will still be able to generate valid proofs for invalid content as the chain doesn't see anything off of it

    uncomment and show again the `# On proof permanence` part of uris.md

- What would browsers become?

- use different book generator
    https://github.com/gohugoio/hugo - shows sidebar on the right with the ToC of the page
    also this: https://github.com/zjp-CN/mdbook-theme
    https://github.com/facebook/docusaurus
    like this one? https://github.com/dvitanov/lorevc
    this one shows even the H1 headings in the outline on the left:
        http://mermaid-js.github.io/mermaid/
    gitbook? also shows the outline on the right for the headings in a page:
        https://docs.gitbook.com/organizations/member-management/roles#reviewer
    https://github.com/badboy/mdbook-toc/pull/26

- style external & internal to the book links differently?
    https://css-tricks.com/snippets/css/style-links-depending-on-destination/
    https://jsfiddle.net/97sdnwhq/
    a[href="http://google.com"]:link { color:purple; }

- rework the changes in the themes to not have copy-pasted files in the theme/css directory with a few changes but instead to use this in book.toml: `additional-css=["the_file.css"]`
    changes in general.css: background-image: var(--bg-img);
    changes in variables.css: --bg-img: url("../images/background.jpg");
    OR use "RIGHTWARDS ARROW WITH HOOK" manually as a symbol:
        https://www.w3schools.com/charsets/ref_utf_arrows.asp

- use summary sections at the start of pages like here: https://www.lore.vc/phase-i-preparation

== final touches on the book:
- resolve TODOs
- resolve differences in tenses - can/will/is - present and future
- more bold in the text to highlight specific sentences & give them more weight

# Postponed

- merge accounts created from different IDMs?

- think about "Feature Detection Is Better than Version Detection"
    https://github.com/oilshell/oil/wiki/Feature-Detection-Is-Better-than-Version-Detection

- fork a browser (chrome)
    idea to fork chrome to support this URI scheme natively

- Can Headjack be used interplanetary?

- talk about the fact that anything can be self-hosted - IDMs & applications

- look into DID methods
    https://github.com/bluesky-social/adx/blob/main/docs/architecture.md#did-methods

    https://identity.foundation/

- by addressing data and using different views to browse it we minimize the effect of phishing. but what about custom JS websites?
    messages that are viewable only through a specific view?
        "warning, you're about to view a custom website"
    easy to identify links to "outside of the addressing"

- can CRDTs be used like in farcaster?
    https://github.com/farcasterxyz/protocol#4-replication

- how does The Graph fit into this?!

- proving non-membership in a set with sorted merkle trees
    https://crypto.stackexchange.com/a/83291/77499
    https://www.geeksforgeeks.org/blockchain-merkle-trees/
    potential problem: might be slow to re-generate the entire tree when inserting in the middle
    https://crypto.stackexchange.com/a/31915/77499
    https://crypto.stackexchange.com/questions/31914/proof-of-non-membership-on-a-merkle-tree
    > "Worst of all, you cannot easily update the tree without rebuilding it. To make an update you need to know the whole universe, not just the tip R as is the case for membership. Thus the construct is suitable for static dictionaries which are seldom updated, as well as short round membership protocols like joinmarket below."

# memes

- Drake: no middlemen, better aligned middlemen

# licenses & trademarks

Headjack trademark is free!
https://uspto.report/TM/85455962

Need to buy this model for the logo?
https://www.threeding.com/3d-model/10127-headjack-from-matrix-1999
https://cults3d.com/en/3d-model/various/headjack-from-the-matrix-1999
https://www.renderhub.com/cosplayitemsrock/headjack-from-the-matrix-1999
https://in.pinterest.com/pin/headjack-from-the-matrix-1999--788692953497982225/

# other

elon musk & ChatGPT on how to visualize tree structured comments
https://twitter.com/elonmusk/status/1599259281584402432

# Phrases that don't have a place yet

- digitally we are in the soviet union - you're not allowed to freely migrate from one part to another - you need to ask permission. Interoperable identity & permanent addressing enables everything on top



> "Throughout history, decentralization has been a remarkably effective evolutionary strategy. Just ask the Fungi Kingdom, which has continuously thrived for over 1.3 billion years. Uniquely adaptive masters of survival, fungi forgo a central “brain” in favor of a mycelium network: a branching, underground root system that distributes control throughout the organism. Mycelium networks efficiently allocate resources, respond to external stimuli, and remain functional even if one part of the organism is destroyed." - [source](https://guide.getzion.com/inspiration-for-zion)

- DNS
    DNS was the original “decentralization” (although not in the crypto sense)
    RSS was an attempt for the next iteration
    How do you store your friend list?
    But rss is too technical
    Dns got overloaded too many times

["Information wants to be free"](https://en.wikipedia.org/wiki/Information_wants_to_be_free)

block explorers are the future of browsing
https://twitter.com/balajis/status/1406400770581303297

lowest common denominator UX is fine but the power users should be able to go crazy - let them separate signal from noise on a global level

> "The web is like an ever-growing library with billions of books and no central filing system." - [how Google works (archived)](https://perma.cc/9HE2-VZF9), already [changed](https://www.google.com/search/howsearchworks/how-search-works/organizing-information/)

if something like TikTok & short clips are here to stay - at least let's interweave them with the rest of the data in the world and provide an offramp for people using it - show the links to things outside of them through interlinked content



The game theory behind why competing applications (presentation layers/interfaces/views - probably operated by a company with a business model) would freely share the activity of their users with others to display is that if they don't they would be effectively denying reach - users would migrate to a competitor because the cost to do so is 0 - [`voice and exit`](https://en.wikipedia.org/wiki/Exit,_Voice,_and_Loyalty_Model). Current social media platforms are monopolies because identities are not portable and the network effects are in private database silos - a problem practically insurmountable for incumbents.


<!-- We need to be realistic and focus on the essence - Headjack decentralizes only the most important part of monopolies - identity - and thus leveling the playing field for competition. It accomplishes this by avoiding the need for keypairs & signatures by default through an on-chain authorization mechanism while maintaining the optionality for anyone to be fully self-sovereign & explicit - acting as a base layer for competing & interoperable services. It also facilitates data-centric addressing of content under a global namespace which further disincentivizes hoarding data in silos. -->


Designed to stand the test of time - best crypto-economic guarantees, capital efficiency, and scalability.
It is engineered from first principles - building up from the data to support billions of users

that way even if content goes dark it can later resurface and be deduplicated by linking it to previous instances (as long as Merkle proofs are present).


In theory everything can be built with hash-based addressing as everything could be uniquely identified. But is that the most optimal way?

A specialized blockchain is required. Finance is mostly about specific accounts & energy preservation - no double-spends (example: UTXOs care only about other UTXOs). Media is about data storage, retrievability, aggregation, indexing, discoverability, addressing, interlinking & archiving on a massive scale - it shouldn't be built on financial infrastructure.


Headjack is storage agnostic - it can be changed and yet still retrievable
storage is ephemeral - addressing is forever
Headjack is future proof
Built with UX in mind - for high throughput/performance and low latency



https://blog.ceramic.network/key-revocation-in-self-certifying-protocols/
https://web.archive.org/web/20220428114634/https://blog.ceramic.network/key-revocation-in-self-certifying-protocols/
https://archive.ph/Tr57S


We could develop AI algorithms to try and spot patterns of corruption in polititians - lets flip the surveilance the other way around
The collective no lying by public officials panopticon - funding public goods in public in the metaverse

> "Cryptography is a tool for turning lots of different problems into key management problems." [Dr. Lea Kissner, Head of Privacy Eng and CISO at Twitter](https://subconscious.substack.com/p/redecentralization)



But all other attempts fall short in one regard or another - Headjack can address every need in our global digital infrastructure and can handle the scale.

> "In a society with faltering institutions, rotted from within and mistrusted from without, the chance to finally replace our banks and internet giants (not to even delve into politics) with a new set of characters is too tempting to resist." - [source](https://www.thepullrequest.com/p/everything-is-an-ad-network)

> "However, to rely on purely idealism as a motivator of adoption is naive. We need a user experience that is much better than today and we need to invent tools that users will absolutely never attain in the Web 2 realm." - ["Social Web 3" by Zee Prime Capital](https://zeeprime.capital/social-web-3)



> "If someone has the fight in them, I think a great step would be to start documenting the power structure. Build a GitHub repo of all the laws. Discover who wrote which part of each bill. Track the financial relationships and flow of money. Build a Wikipedia to document our oligarchs. Reverse engineer their schedules. Trace their lineage. Document the behaviors in real time, do not let the regime continue to hide."
https://geohot.github.io/blog/jekyll/update/2021/12/18/the-fourth-estate.html

<!-- > "He who has a why to live for can bear almost any how." - [Friedrich Nietzsche](https://www.goodreads.com/quotes/137-he-who-has-a-why-to-live-for-can-bear) -->

[IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System), [Filecoin](https://en.wikipedia.org/wiki/Filecoin), [Sia](https://sia.tech/) & [Arweave](https://arwiki.wiki/) are the drivers, Headjack is the filesystem, and the collection of applications & services built on top will be the global OS.
What about browser in the driver/filesystem/OS analogy?

> "Even a billion dollars of capital cannot compete with a project having a soul." - [@VitalikButerin](https://vitalik.ca/general/2020/12/28/endnotes.html)

> "Our mission is to organize the world's information and make it universally accessible and useful." - [Google](https://about.google/)

<!-- # Network structure

https://www.rand.org/pubs/research_memoranda/RM3420.html
3 ways to look at headjack:
- identity is logically centralized
- trusted hubs are decentralized
- data is distributed and addressable
Scale-free networks emerge **1)** because [they are efficient](https://subconscious.substack.com/i/59924410/scale-free-networks-emerge-because-they-are-efficient), **2)** because of [selection pressure](https://subconscious.substack.com/i/59924410/scale-free-networks-emerge-because-of-selection-pressure), and **3)** due to [preferential attachment](https://subconscious.substack.com/i/59924410/scale-free-networks-emerge-due-to-preferential-attachment)

> "If you decentralize, the system will recentralize, but one layer up. Something new will be enabled by decentralization. That sounds like [evolution](https://subconscious.substack.com/i/52021619/modularity-is-how-the-system-itself-evolves) through [layering](https://subconscious.substack.com/p/layered-protocols), like [upward-spiraling complexity](https://subconscious.substack.com/p/open-ended-tools-for-infinite-games#:~:text=upward%2Dspirals%20of%20evolutionary%20complexity). That sounds like progress to me." - [source](https://subconscious.substack.com/p/decentralization-enables-permissionless#:~:text=If%20you%20decentralize%2C%20the%20system%20will%20recentralize%2C%20but%20one%20layer%20up.)

-->
