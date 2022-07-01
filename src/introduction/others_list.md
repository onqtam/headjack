# Concrete projects (list)

### [Bluesky](https://en.wikipedia.org/wiki/Bluesky_(protocol))

Their architecture: [link](https://github.com/bluesky-social/adx/blob/main/architecture.md)

- Email as username ==> resolve to a [DID](https://www.w3.org/TR/did-core/) with [WebFinger](https://webfinger.net/)
    - Relies on DNS for the part after `@` - centralization point.

- Consortium of nodes & a *"transparency log"* manage the DID registry.
    - Centralization point (not just [logical](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) for key management) - users can be kicked off.
    - This should have been a credibly neutral & self-sustaining blockchain.

- Content addressing with hashes by default (versus Headjack's [human-readable & persistent URIs](../introduction/addressing.md)).

- Requires the use of keypairs which is worse UX compared to Headjack and would hinder mass adoption - although they do talk about [custodial solutions](https://github.com/bluesky-social/adx/blob/main/architecture.md#root-private-key-management).

<!-- - When users post content they update their Personal Data Repositories managed by their Personal Data Servers (PDS) which play somewhat similar roles to [Farcaster](#farcaster)'s managed hosts and Headjack's [IDMs](../implementation/ecosystem/IDM.md). -->
<!-- - Since such events aren't publicized anywhere, whoever is interested will have to be proactively polling for updates and sending requests. -->
<!-- - Users can lose their interest graph if the PDS they are using loses their data. -->
<!-- - The Personal Data Repositories would be a lot less compact than Headjack because accounts and links between them are not simple integers and every piece of data and relationship comes along with a signature. -->

Overall a solid effort and could work - some similarities to [Farcaster](#farcaster) but the DID registry is centralized by a consortium and the usernames are email-like (DNS - centralization point) instead of handled by the DID registry.

### [Farcaster](https://www.farcaster.xyz/)

Their WIP architecture: [link](https://farcasterxyz.notion.site/farcasterxyz/Farcaster-v2-43b105e4699847518b1d89996c20d564). The account registry is on a blockchain and everything else is off-chain.

- Registry on Ethereum L1 - for new accounts, name/host changes & key management.
    - No plans on moving to an L2 or their own chain. Also state rent could eventually be introduced to Ethereum which would lead to further costs & complexity.

- Keypairs required - harder mass adoption.

- Cast timestamps are self-reported and can be manipulated - no true cryptographic total ordering - which leads to a lot of complexity in the node software. Not sure what happens to old casts that were signed with obsolete keypairs and how the history of keys is handled.

- The p2p network's ability to truly scale by passing around granular casts is very questionable - they are already discussing possible flooding and node implementations might have to shadow ban and flag accounts based on behavior. The scalable way would be to directly poll accounts & their hosts for new events.

- [Cast URIs](https://farcasterxyz.notion.site/URI-s-f2191d741a9143f98d648fa449ad588f) will look something like `farcaster://alice/cast:0xf00b4r/42` which is less readable than what Headjack will be offering with [its addressing](../introduction/addressing.md).

Overall good intuition about the concept of sufficient decentralization (putting only what is absolutely necessary on a blockchain) but the p2p node implementation takes on too much responsibility & complexity and is lacking in other areas.

### [lens.xyz](https://lens.xyz/)

- Deployed on Polygon - even it is not nearly scalable enough for even a few million usersof a social media. Also it is not sufficiently decentralized yet.

- Even if they eventually move to their own chain it will have to be EVM-compatible because of their current smart contracts and functionality around profiles & posts - a lot less optimal.

- Keypairs & wallets required. `TODO: revisit this + their kind of authentication`

- They store even the content on-chain instead of just the accounts. This cannot scale globally for all use cases.

### [TBD](https://www.tbd.website/)

Jack Dorsey's [new](https://twitter.com/namcios/status/1535302090360250368) ["web5"](https://i.imgflip.com/6k9g89.jpg) project - [slides](https://docs.google.com/presentation/d/1SaHGyY9TjPg4a0VNLCsfchoVG1yU3ffTDsPRcU99H1E).

- Only anchors DID events to Bitcoin with vector commitments (Merkle roots) using [ION](https://github.com/decentralized-identity/ion) & the [Sidetree](https://medium.com/decentralized-identity/the-sidetree-scalable-dpki-for-decentralized-identity-1a9105dfbb58) protocol.
    - 10 minute block times with probabilistic finality. Factor in the loading times for the anchored content around key management that's on IPFS - not great at all if you want to log-in/authorize a service or revoke access quickly.

- The ION DID network is [not incentivized](https://github.com/decentralized-identity/ion/blob/master/docs/Q-and-A.md#q-what-are-the-availability-guarantees-of-ion) (just like IPFS) and the anchored content around key management, rotations & revocations depends on the current cluster of ION nodes. They state not having a consensus mechanism as a plus which is debatable - logical centralization, uptime, adequate finality & DA guarantees matter a lot when dealing with identity. `"Show me the incentive and I will show you the outcome."` - [Charlie Munger](https://quotefancy.com/quote/1561882/Charlie-Munger-Show-me-the-incentive-and-I-will-show-you-the-outcome)

- Doesn't have a human-readable global name registry - lacks in discoverability.

- Doesn't have readable content addressing.

- Focus is on users storing their own data (self-hosting), running software locally & handling keypairs.

- Developing their own Decentralized Web Nodes (DWN) software that would be relaying messages p2p - can't handle [web-scale](../introduction/web_scale.md) on such a granular level and aggregation is not even in the picture.

### [CyberConnect](https://cyberconnect.me/)

https://docs.cyberconnect.me/protocol/technical-framework/

problems: relying on their ceramic pinning service for data persistence, requires explicit key signatures, focus on financial accounts & linking them



https://discord.com/channels/901233976138682388/901234959623286825/959420114472669235
My question in their discord: Hello! Your documentation says Long-term data retention is guaranteed through Ceramic’s blockchain anchoring and our custom data pinning service. and I was wondering what would the long-term incentive for the pinning service be, and if the DAO token you'll be launching soon will be tied to the economic incentive for nodes to store the ever-expanding graph?





Also how big do you see the graph getting? My napkin math for Twitter's 400M users and 700 average connections shows that if using simple 4 byte integers as IDs (no pubkeys/signatures/DIDs) would require 1.1TB of data for the most compact version of the graph (each ID would have an array of IDs that it follows) being able to answer queries like who does X follow and for queries like who follows X the data would need to be 2x bigger (another set of arrays). In reality it would be much more because of other metadata, keys, signatures, bigger integers (to support more than 4 billion indexes), database overhead, etc. Thoughts? 




they are handling


The persistence of the social graph is handled by pinning IPFS data on nodes of their own and that's swept under the rug - they don't provide any crypto economic incentive for the data availability and it will grow into the tens of terabytes for web scale (especially because they don't have a compact integer-based representation and everything is based on big individually signed actions). I don't see a way to handle that besides having their own chain and am not sure what I'd do if I was them.

https://docs.cyberconnect.me/protocol/technical-framework/#storage
"Long-term data retention is guaranteed through Ceramic's blockchain anchoring and our custom data pinning service."

they don't have the concept of delegating the rights to interfaces/services to update connections & post content on behalf of users - forcing everyone to always use keypairs so no ability to sign in with something like OAuth & use email/pass & have recoverability

they tie the identity to financial eth addresses (eth/sol/etc.) by default and that's a bad default for privacy

- It lacks the ability to anchor content & have it easily addressable & provable - sequencing events globally is underrated.




https://twitter.com/BaptisteGreve/status/1537061840659922944

ugly addresses

https://cerscan.com/testnet-clay/stream/kjzl6cwe1jw1474gby1buhqw8xbnvfmfphpvrs0n01n6jls9kvdx7hu41w0sp1m


too many streams, batching 




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