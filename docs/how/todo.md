---
draft: true
---

# To think about

- read & think about permissions, sub-app/domain authorization, private data, "Data Access Controllers", "data domain"
    https://blog.ceramic.network/capability-based-data-security-on-ceramic/
    https://en.wikipedia.org/wiki/Capability-based_security
    https://en.wikipedia.org/wiki/Object-capability_model
    https://decentralized-id.com/web-standards/object-capabilities/
    https://blog.sia.tech/mysky-your-home-on-the-global-operating-system-of-the-future-5a288f89825c
    how about JWT objects? delegation chain with the same or lesser permissions? revocation?

    https://research.google/pubs/pub41892/

    google: authz
        https://www.cloudflare.com/learning/access-management/authn-vs-authz/
        https://cyral.com/glossary/authentication-authn-versus-authorization-authz/

    https://whitepaper.fission.codes/access-control/cap-authz

    https://tersesystems.github.io/ocaps/guide/introduction.html

    https://ocapjs.org/t/ocap-vs-acl-and-evolving-auth-standards/129

    google: acl vs ucan (ucan is actually OCAP)
        https://noti.st/expede/IHl7BE/slides
        https://noti.st/expede/IHl7BE/present

    google: revoke oauth token

    https://www.w3.org/wiki/WebAccessControl

    https://www.google.com/search?q=bearer+token

    https://farcasterxyz.notion.site/Merkle-v2-API-Documentation-c19a9494383a4ce0bd28db6d44d99ea8

    - zCaps
        https://w3c-ccg.github.io/zcap-spec/
        https://w3c-ccg.github.io/zcap-spec/#capabilities-vs-access-control-lists
        https://docs.walt.id/v/storage-kit/concepts/advanced-concepts/components/theory-authorization-capabilities
        https://github.com/w3c-ccg/zcap-spec/issues/6

    - UCAN
        https://www.youtube.com/watch?v=grec5KQeU2U
        https://www.youtube.com/watch?v=rQgecoUvmjU
        https://ucan.xyz/
        https://fission.codes/blog/auth-without-backend/
        https://blog.web3.storage/posts/intro-to-ucan

    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    - research: Capability-based security vs traditional UNIX permissions and Access Control Lists.
        https://en.wikipedia.org/wiki/Capability-based_security
        https://en.wikipedia.org/wiki/Principle_of_least_privilege
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1


    - use of ZKP to hide delegation chains
        https://blog.ceramic.network/accounts-evolution-of-3id/#:~:text=if%20we%20use%20a-,ZKP,-to%20hide%20certain

    - Think about scopes of authorization - multidimensionality

    - the auth flow & what permissions you give:
        https://twitter.com/dwr/status/1602021100426100736

    - figure out a plan to plug into existing SAML/OAuth/OpenID infrastructure for authentication and authorization
        https://en.wikipedia.org/wiki/Federated_identity#Technologies
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

    - what if the type of message is part of the URI - for easier filtering before fetching the content?

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

        what farcaster does: "fid is the canonical identifier for a user or organization on the Farcaster network. It is a numeric value like !8098 which is distinguished from other values with a preceding exclamation mark. Any reference to the user on the network must always be made with this identifier."

        look what substack does with the URIs (both point to the same article):
            https://subconscious.substack.com/p/layered-protocols
            https://subconscious.substack.com/i/53901934/the-internet-is-layered

    - URI to show content published from application A through another application? how to share links from a specific application?

    - URIs for on-chain authorization events?

    - handle redirects? twitter.com => twitter, so that all content URLs use twitter and the .com one is just used for convenience? or wtf?


== RESEARCH:

https://en.wikipedia.org/wiki/Digital_object_identifier
"A DOI aims to resolve to its target, the information object to which the DOI refers. This is achieved by binding the DOI to metadata about the object, such as a URL where the object is located. Thus, by being actionable and interoperable, a DOI differs from ISBNs or ISRCs which are identifiers only."
"The DOI for a document remains fixed over the lifetime of the document, whereas its location and other metadata may change. Referring to an online document by its DOI should provide a more stable link than directly using its URL. But if its URL changes, the publisher must update the metadata for the DOI to maintain the link to the URL. It is the publisher's responsibility to update the DOI database. If they fail to do so, the DOI resolves to a dead link, leaving the DOI useless."

- think about URIs with identities & hashes in them - no need to merkelize & anchor

- what if we shuffle the positions in the URIs: <app>/<user>/<app_nonce>/<user_nonce> - then when the "app" is 0 we could use the other 2 as document id & version of that id

- single use credential

- blind signature

- Jellyfish Merkle Tree
    https://developers.diem.com/papers/jellyfish-merkle-tree/2021-01-14.pdf
    https://twitter.com/sovereign_labs/status/1630994017801617408
    https://mirror.xyz/sovlabs.eth/pZl5kAtNIRQiKAjuFvDOQCmFIamGnf0oul3as_DhqGA#:~:text=For%20efficiency%20outside%20of%20the%20zkVM%2C%20we%E2%80%99ll%20use%20the%20Jellyfish%20Merkle%20Tree%20(JMT)%20originally%20developed%20by%20Diem

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
    https://www.secjuice.com/cross-origin-resource-sharing-what-is-it-cors/

- https://blog.google/technology/safety-security/one-step-closer-to-a-passwordless-future/

- https://fidoalliance.org/

- look into Verkle trees & KZG vector commitments - links to resources in the concerns.md page


- How to toggle content to be either public/private? Once it is out it is out :|

- build a transactional system on top of Headjack addressing? incentive layer for DA & build staking & whatnot on top of that? big bottleneck for SC chains: state access. What if a chain solves for addressing of content such that the state of an app can be sharded on many machines and yet remain addressable? BOUNDLESS addressability.

- Private off chain content - what about the ipfs blob header and the visibility of which users are in the blob?

- https://webmonetization.org/
- https://interledger.org/

- your local files & actions in the filesystem could be using this addressing - locally saved & aggregated into an anchor commitment but not made downloadable

- CanDID - using existing credentials to prove things about you with TLS, intel SGX & maybe ZK
    https://www.youtube.com/watch?v=Y-M6G5656PU
    https://eprint.iacr.org/2020/934.pdf
    https://www.candid.id/

- how to: Not be visible that im part of some subreddit but still be included in the public counter?

- use "scroll-to-text-fragment"/"copy link to highlight" chrome option for non-twitter external quotes in the URLs

- what if you create a private post for 20 specific followers - you could insert a unique watermark which gets signed along with the payload and then if any of them leak it it would be known who did it - no more piracy?

- new action type: grant ability to someone to "edit" & publish a new version of an item - but not to post on your behalf entirely - only if it's about a specific document or namespace/collection?

- da pomislq: Kak tochno shte se proverqva authenticity-to na private actions za accs bez keypair?

- off-chain NFTs as verifiable credentials? ways to change ownership on-chain?
    https://en.wikipedia.org/wiki/Provenance

- how to make things with a URI an NFT

- what hash function to use - 256-bit Blake2B hash?
    on choosing the strength of the hash function
        https://eprint.iacr.org/2019/1492.pdf
    Reasons to prefer BLAKE3 over SHA256:
    https://twitter.com/zooko/status/1652743779932045313

- Only ipfs hash to a header blob and no merkle root on chain?

- Think about Headjack through the lens of Palantir Foundry & granular data access & permissions

- What if the application web2 website is no longer around?

- how to handle live streaming? what should the URI point to? what's the message type?

- Topics such as $RUNE & hashtags - how do they get parsed?

- onion-like routing through public identities?

- snowflake IDs
    https://en.wikipedia.org/wiki/Snowflake_ID
    https://twitter.com/_RyanBenson/status/1213870768070610944
    https://news.ycombinator.com/item?id=19266823
    https://snowsta.mp/?l=en-us&z=2y&f=auvqv0f1pd-en2

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

- throwaway accounts? to not waste account IDs

- style external & internal to the book links differently?
    https://css-tricks.com/snippets/css/style-links-depending-on-destination/
    https://jsfiddle.net/97sdnwhq/
    a[href="http://google.com"]:link { color:purple; }

- use summary sections at the start of pages like here: https://www.lore.vc/phase-i-preparation

== final touches on the book:
- resolve TODOs
- resolve differences in tenses - can/will/is - present and future
- more bold in the text to highlight specific sentences & give them more weight


== DOCUSAURUS:
    - make as draft all non-finished pages
    - fix ToC for all pages (only one top level h1 # per page)
    - FIX ALL BROKEN INTERNAL LINKS !!!

    - set global background image
        --bg: hsl(210, 25%, 8%);
        --bg-img: url("../images/background.jpg");
        --bg: hsl(0, 0%, 100%);
        --bg-img: none;
        background-color: var(--bg);
        background-image: var(--bg-img);

    - automate deployment to github pages (currently building in the 'build' folder, then checking out 'gh-pages' as a branch and then swapping the contents of the 'docs' folder with the new contents from 'build')



# Postponed

- merge accounts created from different IDMs?

- think about "Feature Detection Is Better than Version Detection"
    https://github.com/oilshell/oil/wiki/Feature-Detection-Is-Better-than-Version-Detection

- fork a browser (chrome)
    idea to fork chrome to support this URI scheme natively

- Can Headjack be used interplanetary?

- talk about the fact that anything can be self-hosted - IDMs & applications

- "Encrypting every message with the same private key for a lifetime is not a good idea." - https://twitter.com/pippellia/status/1605970280580632578

- look into DID methods
    https://github.com/bluesky-social/adx/blob/main/docs/architecture.md#did-methods

    https://identity.foundation/

- by addressing data and using different views to browse it we minimize the effect of phishing. but what about custom JS websites?
    messages that are viewable only through a specific view?
        "warning, you're about to view a custom website"
    easy to identify links to "outside of the addressing"

- can CRDTs be used like in farcaster?
    https://github.com/farcasterxyz/protocol#4-replication
    CRDTs: The Hard Parts - Martin Kleppmann
        https://www.youtube.com/watch?v=x7drE24geUw

- how does The Graph fit into this?!

- proving non-membership in a set with sorted merkle trees
    https://crypto.stackexchange.com/a/83291/77499
    https://www.geeksforgeeks.org/blockchain-merkle-trees/
    potential problem: might be slow to re-generate the entire tree when inserting in the middle
    https://crypto.stackexchange.com/a/31915/77499
    https://crypto.stackexchange.com/questions/31914/proof-of-non-membership-on-a-merkle-tree
    > "Worst of all, you cannot easily update the tree without rebuilding it. To make an update you need to know the whole universe, not just the tip R as is the case for membership. Thus the construct is suitable for static dictionaries which are seldom updated, as well as short round membership protocols like joinmarket below."
    OR NOT USE SORTED MERKLE TREE?
        https://twitter.com/alinush407/status/1622666041200611328
        https://alinush.github.io/2023/02/05/Why-you-should-probably-never-sort-your-Merkle-trees-leaves.html

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
storage is ephemeral - (strikethrough diamonds) addressing is forever
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

<!-- > "Those who have a 'why' to live, can bear with almost any 'how'." - [Viktor E. Frankl](https://www.goodreads.com/quotes/315385-those-who-have-a-why-to-live-can-bear-with) -->

> "Even a billion dollars of capital cannot compete with a project having a soul." - [@VitalikButerin](https://vitalik.ca/general/2020/12/28/endnotes.html)

> "Our mission is to organize the world's information and make it universally accessible and useful." - [Google](https://about.google/)

> "Social media favors viral outbreaks over complex multicellular thought. Can the internet evolve multicellular memes? This seems like an important question for a civilization that is building on top of the internet." - [source](https://subconscious.substack.com/p/ideas-procreate-through-citation)


> "Complex ideas procreate through citation" - [source](https://subconscious.substack.com/i/69080819/complex-ideas-procreate-through-citation)

> "Citation lets us compose new ideas from old ideas (heredity), and maybe a bit of novel research (mutation). As the memepool grows, the number of possible combinations scales exponentially." - [source](https://subconscious.substack.com/p/ideas-procreate-through-citation#:~:text=assignment%20in%20syllabi.-,Citation,-lets%20us%20compose)

> "Posit: for a medium to be capable of evolving complex memes, it must have a mechanism for citation." - [source](https://subconscious.substack.com/p/ideas-procreate-through-citation)

> "Social media typically rewards engagement, not composition." - [source](https://subconscious.substack.com/p/ideas-procreate-through-citation)




<!-- # Network structure

https://www.rand.org/pubs/research_memoranda/RM3420.html
3 ways to look at headjack:
- identity is logically centralized
- trusted hubs are decentralized
- data is distributed and addressable

> "If you decentralize, the system will recentralize, but one layer up. Something new will be enabled by decentralization. That sounds like [evolution](https://subconscious.substack.com/i/52021619/modularity-is-how-the-system-itself-evolves) through [layering](https://subconscious.substack.com/p/layered-protocols), like [upward-spiraling complexity](https://subconscious.substack.com/p/open-ended-tools-for-infinite-games#:~:text=upward%2Dspirals%20of%20evolutionary%20complexity). That sounds like progress to me." - [source](https://subconscious.substack.com/p/decentralization-enables-permissionless#:~:text=If%20you%20decentralize%2C%20the%20system%20will%20recentralize%2C%20but%20one%20layer%20up.)

-->




████████████████████████████████████████████████ starkware & zk stuff:

ZK Whiteboard Sessions - Module One: What is a SNARK? by Dan Boneh
https://www.youtube.com/watch?v=h-94UhJLeck

VERY GOOD!!!
read onwards from "Type of ZKPs (STARKs and SNARKs) and How They Work"
https://zeeprime.capital/part-1-Can-We-Kill-Moloch-ZK-Basics-and-Virtual-Machines

very good talk?
ZKP Workshop 2022: Dan Boneh - Constructing Modern SNARKS
https://www.youtube.com/watch?v=6psLQv5Hf_I

https://www.notboring.co/p/zero-knowledge

https://appliedzkp.org/
https://semaphore.appliedzkp.org/

https://www.researchgate.net/publication/221355016_How_to_Explain_Zero-Knowledge_Protocols_to_Your_Children

https://github.com/noir-lang/noir

https://pseudotheos.mirror.xyz/Q9154CY9CFaPzy6AgSlek8-ZBA_kSF_93MTKk-opHRw

GREAT piece/overview about appchains
https://medium.com/1kxnetwork/application-specific-blockchains-9a36511c832


https://medium.com/@VitalikButerin/quadratic-arithmetic-programs-from-zero-to-hero-f6d558cea649

Vitaly Yakovlev - Starknet dApps: How we built DeFi 3.0 with Cairo
https://www.youtube.com/watch?v=v-TsuOxgOqM

https://twitter.com/sreeramkannan/status/1548377279058743304

https://twitter.com/sreeramkannan/status/1563615609925304320

https://blog.nil.foundation/2022/07/01/starknet-integration.html

https://twitter.com/sreeramkannan/status/1558986641116499968

https://twitter.com/bkiepuszewski/status/1559900576888004609


https://twitter.com/jon_charb/status/1555403452485861377
https://members.delphidigital.io/reports/the-complete-guide-to-rollups

https://twitter.com/jneu_net/status/1563199820742811649


https://twitter.com/a16z/status/1555949616406732800


https://a16zcrypto.com/measuring-snark-performance-frontends-backends-and-the-future/
https://www.youtube.com/watch?v=tg6lKPdR_e4
https://www.youtube.com/watch?v=cMAI7g3UcoI
https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf


OMGOMGOMG use the UTXO model for parallel processing
https://twitter.com/eshita/status/1546911467936440320




https://twitter.com/jon_charb/status/1555403452485861377
https://members.delphidigital.io/reports/the-complete-guide-to-rollups

https://vitalik.ca/general/2022/08/04/zkevm.html
^^ explainer on all the zk EVMs

TODO: ask Sreeram how 2 million dydx tx fit into 10 mb/s of DA:
https://twitter.com/apolynya/status/1517137629334056960



https://www.youtube.com/watch?v=VKo00zQT0-E
https://twitter.com/Scroll_ZKP/status/1554060160674701315
https://twitter.com/Scroll_Intern_/status/1554643436531499008

https://www.youtube.com/watch?v=4asIQyWwGko


https://medium.com/starkware/starknet-alpha-2-4aa116f0ecfc


https://twitter.com/bkiepuszewski/status/1540793333295075329
https://twitter.com/gluk64/status/1539953204900790272
https://twitter.com/gluk64/status/1539953208486936580
https://twitter.com/gluk64/status/1539953212148654080
https://twitter.com/gluk64
- start collecting notes about different solutions - like starkware having vendor lock-in!

https://blog.celestia.org/introducing-sovereign-rollups-to-developers/

- ask starkware about cairo, zkEVM, Solidity & the Eth state merkle patricia trie
    https://discord.com/channels/793094838509764618/793094838987128844/997172632321544194
    https://discord.com/channels/793094838509764618/793094838987128844/997349007808536616


- read about ZK
    https://blog.matter-labs.io/zksync-2-0-hello-ethereum-ca48588de179
    ask pseudotheos about the zkEVM
        https://twitter.com/messages/743025386720747520-1458046241644892163
    https://www.youtube.com/watch?v=DT8g3veR17k
    https://consensys.net/blog/blockchain-explained/zero-knowledge-proofs-starks-vs-snarks/
    https://docs.zksync.io/zkevm/#general
    https://mirror.xyz/toddz.eth/8HPDEpf7FbirLbXJFeEfI719hN0w-VKITSs1NUgyFFE
    https://www.alchemy.com/overviews/zkevm
    https://www.google.com/search?q=zkevm&oq=zkevm&aqs=chrome.0.69i59j0i512l4j69i61l3.859j0j7&sourceid=chrome&ie=UTF-8
- read the celestia links in blockchain.md
    https://www.youtube.com/watch?v=6uLlTLE7qrQ&list=PLM-Xjhvin-uWN9ov74srLZIuJsbRSc2ou
    https://www.youtube.com/watch?v=4L30t_6JBAg
    https://www.youtube.com/watch?v=TyJp4pqB6u4
    https://blog.matter-labs.io/evaluating-ethereum-l2-scaling-solutions-a-comparison-framework-b6b2f410f955
    https://blog.matter-labs.io/zkrollup-vs-validium-starkex-5614e38bc263
- the hard forking question
    - also understand what enshrining means
        https://twitter.com/apolynya/status/1507586019171835905
        https://twitter.com/apolynya/status/1511623759786307586
        https://forums.minaprotocol.com/t/enshrined-rollups-in-core-protocol/5676
        https://www.google.com/search?q=what+is+an+enshrined+rollup&oq=what+is+an+enshrined+rollup&aqs=chrome..69i57j33i160l4.4439j0j7&sourceid=chrome&ie=UTF-8
    https://www.reddit.com/r/ethereum/comments/vrx9xe/comment/if7auu7/


https://twitter.com/fuellabs_/status/1480674488077275136




████████████████████████████████████████████████ on the Ethereum state trie

BIG PROBLEM: eth state limits in terms of tps & slowing throughput?
Péter Szilágyi - Ethereum in numbers: Where TPS meets physics
https://www.youtube.com/watch?v=TdsaVoJiy3g

https://github.com/cosmos/cosmos-sdk/issues/6071

https://www.youtube.com/results?search_query=ethereum+state+trie+growth

https://ethereum.org/en/developers/tutorials/merkle-proofs-for-offline-data-integrity/

https://blog.ethereum.org/2015/11/15/merkling-in-ethereum/

https://ethereum-magicians.org/t/protocol-changes-to-bound-witness-size/3885

https://mirprotocol.org/blog/Reducing-state-size-on-Mir

https://www.google.com/search?q=cosmos+state+account+merkle+proof&sxsrf=ALiCzsYYRr3PldZfQdWeqKJqNDjV6ger5A%3A1657725685322&ei=9eLOYsyNE-yGxc8P4ciC0Ao&ved=0ahUKEwiM3O60lfb4AhVsQ_EDHWGkAKoQ4dUDCA4&uact=5&oq=cosmos+state+account+merkle+proof&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGAFKBAhGGABQ4wFYpAhg_QloAXAAeACAAcUBiAGmCZIBAzAuOJgBAKABAcABAQ&sclient=gws-wiz

https://medium.com/@eiki1212/ethereum-state-trie-architecture-explained-a30237009d4e


"Fifth, Ethereum storage layout carries a huge overhead. The Ethereum storage layout highly relies on Keccak and a huge MPT[4], both of them are not zk-friendly and have a huge proving overhead. For example, Keccak hash is 1000x larger than Poseidon hash in circuit. However, if you replace Keccak with another hash, it will cause some compatibility problems for the existing Ethereum infrastructure."
https://scroll.io/blog/zkEVM


Accounts are integers and the state tree should reflect that - doesnt need to be a trie based on crypto addresses

██████ ideas about page & book structure (& titles!)

move from @handle to full names in citations in the book

add tiny designs/screenshots for the different ideas - like a multi-level tree for subscriptions and how you could be partially subscribed to someone

a data-driven society

100 what-ifs as a section

"the role of LLMs in interfacing (with data)"

"self-regulation"

Amending google’s failure (to organize the worlds information)

TODO: try this service to read the text out loud?
https://beta.elevenlabs.io/

