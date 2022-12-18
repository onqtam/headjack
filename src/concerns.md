<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# Problems with headjack


It's not all roses for the project - here are all the important challenges:

Unintended consequences


<!-- toc -->

# Data problems

the cost for IDMs to store the data of their users might be quite high because of all the merkle proofs

- negative: proofs might be big - imagine how much would the proofs be for 1000 likes

- could it be that checking with proofs all the content might be too much processing? doubt it...

- what happens if an event that's not anchored yet becomes illegitimate by an IDM unauthorizing an application before the content is anchored? Confusing for people...

Users won't be able to authorize & login to services if the chain is down...
    but that's true if google went down too

responsibilities and assumptions - users should monitor if apps send their activity to their idm

# Complexity for users
# Different aggregates & confusion
- how to count impressions/views of videos?
- Disadvantage: different criteria for counting engagement would result in different views => confusing?

The dust will settle eventually & people will learn

also what happens if some new application is very spammy? should the infra just pay the costs for storage by default?

# Centralization risks

- users not binding keys to their accounts because its complicated & feels "unnecessary"

- IDMs could "lock in" users by not adhering to the standards for exporting data

Problem: premium features could lock ppl in to idms

- what if a specific application is very spammy and infrasturcture blacklists it, but some users use it and expect their creations & edits to be visible elsewhere?

Concern with centralization of infrastructure - but theres no way to improve it

If an IDM gets hacked along with their private key then all users without a keypair are lost.
    - IDMs should have a 2nd keypair that is used only to recover in such scenarios

could end up with only a few infra companies, but if need be new ones can enter
concern: censorship based on infra used - forcing apps to move to the "right" infra with the "right" filtering

Concern: what if apps depend too much on specific infra companies with economies of scale and have nowhere else to migrate

# name squatting

- how to handle the name registration and avoiding hoarding




# Privacy concerns

no right to be forgotten?

what if you by mistake like adult content through your main account and that event gets cached by others - unable to be deleted?

https://blog.mollywhite.net/is-acceptably-non-dystopian-self-sovereign-identity-even-possible

ClearviewAI, but on stereoids
The cat is out of the bag
https://twitter.com/driesdepoorter/status/1569285878089908231
https://metro.co.uk/2022/09/14/ai-art-project-reveals-truth-behind-influencers-instagram-photos-17371535/

Con: extremely easy to detect the personality type of anyone with high accuracy based on their activity - Cambridge Analytica on stereoids

with open data anyone could build a classifier and label certain people as gay - without their consent.

anyone analyzing data more easily at scale?
Panopticon as a service?
https://en.wikipedia.org/wiki/Panopticon

- big disadvantage: once data is out - it is out. Services should honor delete & purge requests but there's no way to force them. Any distributed system will be like this




















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








- State growth - Headjack keeps a lot of the history in its materialized state as ranges for historic querying & to generate proofs - not just the "current view" which itself constantly grows. However, most of this is compact integers (block ranges for authorization, nonce mappings, etc.) and growth will not be extremely high. [Bluesky](others_list.md#bluesky) similarly wants to be able to prove the authenticity of old content and has a transparency log but it will be much less compact.

- Social graphs & DMs are facilitated by [IDMs](IDM.md) which resemble [Farcaster](others_list.md#farcaster)'s managed hosts and [Bluesky](others_list.md#bluesky)'s Personal Data Servers - a centralization point with some trust assumptions and potential for data breaches. However, this is the best tradeoff that would allow for true mass adoption and is still a massive improvement to the status quo. A big failure scenario is if an IDM that manages millions of accounts goes rogue or shuts down:
    - Those that have not bound a keypair to their accounts will effectively be stuck.
    - The chain could get congested by those who have keypairs and suddenly all at once start submitting on-chain transactions directly to move to another IDM but that problem can be alleviated through [signature aggregation](https://ethresear.ch/t/an-off-chain-bls-aggregation-scheme-which-might-reduce-the-casper-finalization-to-1-min/5427) if the signed payload is the same like for example if a big chunk of them move from IDM `666` to IDM `42` specifically.
        - If they haven't exported their off-chain data managed by their previous IDM it could be lost - social graph, DMs, preferences, etc.
        - However, these problems (loss from a "trusted" service going down and network congestion on rare events) will be shared by any solution that has "trusted" services that are required to reach any meaningful scale. Some users could run their own version of an IDM for their private data but they'll have to pay for more bytes on-chain which is not something that everyone could be doing at once.

- Updates & deletes to content may not be applied/displayed properly in all applications - there will always be those that don't honor edits or [purge requests](https://github.com/bluesky-social/adx/blob/main/architecture.md#purge-requests-hard-removal). However, this is a problem with almost any decentralized protocol and most established applications will be honoring these types of messages or else people will simply move to different ones. In the end, this will not be an issue on any meaningful scale as social forces will solve it.

- Data pointed to by a URI is not by itself [self-authenticating](https://en.wikipedia.org/wiki/Self-authenticating_document) - it needs accompanying cryptographic Merkle proofs that only full blockchain nodes can generate. However, no solution provides fully self-authenticating content as keypairs might have changed - there will always be a need to consult with a [logically centralized](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) entity. Also archiving & bookmarking services (or fully self-contained articles/books with no external dependencies) that don't want to rely on repetitive requests to the blockchain in the future may request these proofs initially and store them along with the data.



- the unlimited amount & combinatorial explosion of customization & preferences might be too expensive for the infrastructure to support them

- changing something from public to private

- Could be very addictive - no way to hide like count


