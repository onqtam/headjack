# What other attempts are missing

A list of problems with the contenders in the decentralized identity/media space:

- No credible path to [web-scale](../introduction/web_scale.md) - some will hit a wall even at 1 million users. Most are vague around their scalability & data structure and don't put it [front and center](../implementation/scaling.md) - obfuscating the most important bit. Instead of focusing on NFTs & developer APIs, start with the data and work up from that. Fake it till you make it is not a viable strategy with the wrong foundation.

- Too financialized & trying to do too much - profiles & posts as NFTs, marketplaces, fan coins, tipping, content creator incentives.

    ` "However, a downside I’ve observed in social networks where content is monetized is that user behavior becomes transparently driven by monetary incentives in ways that feel less genuine. This applies to influencer culture on Instagram as well, but cryptocurrency social networks bake it in from the start."` - [Jay Gerber](https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970)

- Users shouldn't need to use a token, use a wallet, or self-host to benefit from decentralized identity & an open interest graph. Most people will always use custodial services.

    `"People don’t want to run their own servers, and never will."` - [Moxie](https://moxie.org/2022/01/07/web3-first-impressions.html)

- Linking online identity to financial accounts on Ethereum/Solana/etc will have unintended consequences - a bad default.

- Federated ones lack [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) which leads to fragmentation and [no discoverability](https://github.com/mastodon/mastodon/issues/9529).

- Some are solving just identity & the graph - without easy & stable [content addressability](../introduction/addressing.md).

- Some use chains such as Ethereum for [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) & store vector commitments (Merkle roots) for events around [key management](https://blog.ceramic.network/key-revocation-in-self-certifying-protocols/) (rotations, authorizations, sessions & revocations) but the problem of the data availability for whatever is committed remains unsolved and different solutions around it would lead to complexity and trust.

- Some lack an incentive layer and/or are focused on specific types of social media.

- Complexity & lack of clarity - distributed systems engineers shouldn't have a hard time figuring out how they work & what the limitations are. Why build on something that others are probably having a hard time understanding as well and soon may not be around?

# What Headjack gets right

- A specialized blockchain is required. Finance is mostly about specific accounts & energy preservation - no double spends (example: UTXOs care only about other UTXOs). Media is about data storage, retrievability, aggregation, indexing, discoverability, interlinking & archiving on a massive scale - it can't be built on financial infrastructure.

- [Napkin math for web-scale](../implementation/scaling.md) is clear and front and center.

- Best set of compromises for UX/DX because of the [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) and the use of identity managers ([IDMs](../ecosystem/IDM.md)) for on-chain authorization of interfaces - less need for keys & signatures!

- [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): focus only on identity & the interest graph and don't try to do everything. It doesn't impose constraints on what could be built around it - [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).

- Integers are the most well known and easy to work with data type - compact, faster/easier indexing & querying versus content addressing, hashes, pubkeys & signatures.

- [Content addressability](../introduction/addressing.md) with stable URLs.

# Disadvantages of Headjack

TODO:

- public interest graph (both a pro and a con)
- private social graphs require the use of IDMs and that starts to resemble Farcaster's managed hosts and Bluesky's Personal Data Servers.
- updates & deletes to content may not be applied in interfaces, but this is a problem with almost any decentralized protocol

# Concrete projects:

Some of the more high-profile projects in the decentralized identity/media space will be briefly discussed here - these overviews are by no means exhaustive and focus mostly on the negatives from the perspective of Headjack. Corrections for any inaccuracies are welcome!

### [lens.xyz](https://lens.xyz/)

- Deployed on Polygon - even it is not nearly scalable enough for even a few million usersof a social media. Also it is not sufficiently decentralized yet.

- Even if they eventually move to their own chain it will have to be EVM-compatible because of their current smart contracts and functionality around profiles & posts - a lot less optimal.

- Keypairs & wallets required. `TODO: revisit this + their kind of authentication`

- They store even the content on-chain instead of just the accounts. This cannot scale globally for all use cases.

### [Bluesky](https://en.wikipedia.org/wiki/Bluesky_(protocol))

Their architecture: [link](https://github.com/bluesky-social/adx/blob/main/architecture.md)

- Email as username ==> resolve to a [DID](https://www.w3.org/TR/did-core/) with [WebFinger](https://webfinger.net/)
    - Relies on DNS for the part after `@` - centralization point.
- Consortium of nodes & a *"transparency log"* manage the DID registry.
    - Centralization point (not just [logical](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) for key rotations) - users can be kicked off.
    - This should have been a credibly neutral & self-sustaining blockchain.

- Content addressing with hashes by default (versus Headjack's [human-readable URNs](../introduction/addressing.md)).

- Requires the use of keypairs - harder mass adoption - worse UX compared to Headjack.
    
    `TODO: is this true?`
    https://github.com/bluesky-social/adx/blob/main/architecture.md#root-private-key-management

- When users post content they update their Personal Data Repositories managed by their Personal Data Servers (PDS).
    - Since such events aren't publicized anywhere, whoever is interested will have to be proactively polling for updates and sending requests.
        - `TODO: think if Headjack's alternative is better at all or with different tradeoffs`
    - Users can lose their social graph if the PDS they are using loses their data.
    - The Personal Data Repositories would be a lot less compact than Headjack because accounts and links between them are not simple integers and every piece of data and relationship comes along with a signature.

- DID may change - stability is not 100% guaranteed - may break links between users in the graph
    TODO: search "chang" in the doc & think

- More complicated than Headjack in terms of standards, addressing, processes, DID management, etc.

Overall a solid effort and could work - very similar to [Farcaster](#farcaster) but the DID registry is centralized by a consortium and the usernames are email-like (DNS - centralization point) instead of handled by the DID registry.

TODO:
https://github.com/bluesky-social/adx/blob/main/architecture.md#deletions

### [CyberConnect](https://cyberconnect.me/)

ceramic network

https://docs.cyberconnect.me/docs/tech_overview
problems: relying on their ceramic pinning service for data persistence, requires explicit key signatures, focus on financial accounts & linking them
https://discord.com/channels/901233976138682388/901234959623286825/959420114472669235
My question in their discord: Hello! Your documentation says Long-term data retention is guaranteed through Ceramic’s blockchain anchoring and our custom data pinning service. and I was wondering what would the long-term incentive for the pinning service be, and if the DAO token you'll be launching soon will be tied to the economic incentive for nodes to store the ever-expanding graph?
Also how big do you see the graph getting? My napkin math for Twitter's 400M users and 700 average connections shows that if using simple 4 byte integers as IDs (no pubkeys/signatures/DIDs) would require 1.1TB of data for the most compact version of the graph (each ID would have an array of IDs that it follows) being able to answer queries like who does X follow and for queries like who follows X the data would need to be 2x bigger (another set of arrays). In reality it would be much more because of other metadata, keys, signatures, bigger integers (to support more than 4 billion indexes), database overhead, etc. Thoughts? 




they are handling the persistence of the social graph through pinning IPFS data on nodes of their own and that's swept under the rug - they don't provide any crypto economic incentive for the data availability and it will grow into the tens of terabytes for web scale (especially because they don't have a compact integer-based representation and everything is based on big individually signed actions). I don't see a way to handle that besides having their own chain and am not sure what I'd do if I was them.

https://docs.cyberconnect.me/protocol/technical-framework/#storage
"Long-term data retention is guaranteed through Ceramic's blockchain anchoring and our custom data pinning service."

they don't have the concept of delegating the rights to interfaces/services to update connections & post content on behalf of users - forcing everyone to always use keypairs so no ability to sign in with something like OAuth & use email/pass & have recoverability

they tie the identity to financial eth addresses (eth/sol/etc.) by default and that's a bad default for privacy

cyberconnect lacks the ability to anchor content & have it easily addressable & provable - sequencing events globally is underrated.






### [Farcaster](https://www.farcaster.xyz/)

Perhaps the most interesting approach from all others.

push vs pull model and the use of delegated interfaces that batch user content


### [Project Liberty](https://www.projectliberty.io/)

- it is at the right abstraction layer but there is not enough emphasis on compactness & use of indexes

Similar to "project liberty" founded in 2020 (paper - Decentralized Social Networking Protocol)
- Not enough emphasis on compactness & use of indexes
- Using smart contracts for identities - opinionated & slow
- Not the right team - 100m$ dumped by a billionaire, very little activity

### [DeSo](https://www.deso.org/)

It requires wallets & users pay for every interaction. It puts everything on-chain and their plans to scale are with bigger blocks & sharding (see ["Phase 4: Sharding"](https://docs.deso.org/about-deso-chain/readme)) which is simply not practical for the [true scale of the public web](https://www.techspot.com/news/91513-visualizing-minute-internet-2021.html). It financializes as much as possible (creator coins, etc.). Their initial growth was fueled by huge sums of VC money but by now it has [flatlined](https://www.openprosper.com/stats/deso-dashboard). It did reach [1.66$ billion market cap](https://www.coingecko.com/en/coins/deso) on the 2nd of October 2021 shortly after being listed.

### Others

For details about ActivityPub, Matrix, Diaspora, Mastodon, Secure Scuttlebutt, Solid & others please refer to the excellent [ecosystem review](https://twitter.com/bluesky/status/1352302821140549632) by the Bluesky project. Other good resources include:
- [Decentralized Social Networks](https://medium.com/decentralized-web/decentralized-social-networks-e5a7a2603f53) - Jay Gerber
- [Blockchain Social Networks](https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970) - Jay Gerber
- There are [many other projects](https://mirror.xyz/shreyjain.eth/TyBzMOegl3rMNxpAFoJ36MjE0pGfdLcrVCBgy-x3qS8) in this space.






My ultimate goal is to build on top of an open social graph and create new interfaces for displaying, sharing & interacting with data. I can provide a full list of everything I'd want from the web.

- Why Ethereum?
    - what would the setup look like for 1B ppl? Is building your own chain an option at some point?
    - because of the ability to sell the handle as an nft? Markets can be done on a specialized chain too

- syncing the activity of specific accounts (those who you follow) vs all accounts by default
    - your idea makes that easy
    - my idea makes it hard (have to scan everything published - easily 10-20+ MB/s
    - but syncing everything by default makes it easier in this scenario:
        - X follows Y
        - Y posts a comment to a post from Z
        - X gets the comment from Y but now also needs to fetch the post from Z ==> more lookups
            - actually you don't have a cast schema for replies to other ppl's posts yet

- What is your network effect and where is the lock-in? The contract? Cant that be copied?

- just the name registry is not enough for a standalone chain
    - with the 2 ideas merged there is merit for a standalone chain
        https://i.imgflip.com/6bc8w7.jpg
    - there will be a lot more block space demand if all connections & the "Host Directory" are moved on chain
    

- managed hosts could hold you hostage even if you have your keys
    - backups help, but too much hassle
    - even if you start using a different host, you'd have lost your follower list



- For access control management you need guaranteed data availability & sequencing - logical centralization
    - my design makes that very easy

In my design no special-purpose nodes are required - IPFS & ceramic streams can be leveraged





- the "Handling Transfers" part can be avoided with a global sequencer
    https://farcasterxyz.notion.site/v2-Design-1e3c5c77311744179ca0d570341feb62
    TODO: rethink this & re-read it



- your "v2 Design" talks about p2p delivery of messages but why is that necessary if there's a link to the "Host Directory" and it can be polled?
    - are messages expected to propagate to all nodes?
    - can this handle 50MB/s of traffic?
    - why not use IPFS/Ceramic streams & a global sequencer like my idea?

- with on-chain delegation & sequencing (the concept of time) users may not need pubkeys for the messages they have signed because those messages will reference interface nonces & blocks so spoofing will still not be possible


- host-centric blobs (user-specific) vs interleaved with the oactivity of other users, posted through interfaces


- multiple hosts at the same time?

- delegation could be implemented in your system as well.
    delegation is key!

- I think the Host Directory should go on chain too!

- isn't this design very poll-heavy? What if there are 1 billion users and each of them generates 2-3 follow events per day?

- the plan seems to be that you'd subsidize gas fees on ethereum in the begining

- is a "follow" event part of a "cast" as a signed blob?

- how would you guard against spam/sybil attack & people capturing the best handles?


- the "sufficient decentralization" post & the docs don't make this point, but I think multiple interfaces could be using the same (managed) host.
    don't write this - because this is in the docs:
    "A host should not be confused with an application which is a higher-order construct that may include a host, client and other services."


- on-chain registry's performance when checking for duplicate names?
    specialized chains will dominate

- questions around identity and handles and how they are linked and what if one changes...

- any way to make it possible for users to not need keypairs and just use plain old email login? Something like OAuth with the ability to later bind a keypair to a user identity if need be? Delegation & access control management?

- signing every message & action is a PITA - would prohibit true mass adoption



- merklization & anchoring removes the need for the hash chain of casts and sequencing


- AFAIU any number of different interfaces/frontends could be implemented that could work with your host? So a host is providing access to your data & actions that you have signed, and any number of interfaces (twitter, youtube, medium, reddit) could be using your host to store the data once you generate it?



- I don't like this poll-heavy design - instead I think all content should be merklized & andvertized on a chain and interfaces should simply process all data by default




- light clients that can be ran locally by users would benefit from a poll architecture as opposed to mine :|
    - why not merge both and provide both ways of getting data?


- if a managed host responsible for millions of accounts goes away, how much time would it take for everyone to update the URLs to their hosts through the Ethereum contract?

- the rewriting of the history of a user is near impossible in my design - no need for clients to keep track of old hashes to posts

- the p2p system for nodes to sync data... won't scale with fine-grained messages signed by unique keys in a truly web-scale

- my solution doesn't suffer from conflicts & the eventual consistency problems of farcaster
    https://farcasterxyz.notion.site/v2-Design-1e3c5c77311744179ca0d570341feb62
    Unsolved Issues - Changing History
    https://farcasterxyz.notion.site/Node-Deep-Dive-1777791522ba481a94b9db7b9b27226a



