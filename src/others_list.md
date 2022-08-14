# Concrete projects (list)

### [Bluesky](https://en.wikipedia.org/wiki/Bluesky_(protocol))

Their architecture: [link](https://github.com/bluesky-social/adx/blob/main/architecture.md)

- Email as username ==> resolve to a [DID](https://www.w3.org/TR/did-core/) with [WebFinger](https://webfinger.net/)
    - Centralization point - relies on DNS for the part after `@`.

- **Consortium** of nodes & a transparency log manage the DID registry.
    - Centralization point (not just [logical](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274)) - users can be kicked off.
    - This should have been a credibly neutral & self-sustaining blockchain.

- Content addressing with hashes (versus Headjack's [human-readable & persistent URIs](addressing.md)).

- Requires the use of keypairs which is worse UX compared to Headjack and would hinder mass adoption - although they do talk about [custodial solutions](https://github.com/bluesky-social/adx/blob/main/architecture.md#root-private-key-management).

<!-- - When users post content they update their Personal Data Repositories managed by their Personal Data Servers (PDS) which play somewhat similar roles to [Farcaster](#farcaster)'s managed hosts and Headjack's [IDMs](IDM.md). -->
<!-- - Since such events aren't publicized anywhere, whoever is interested will have to be proactively polling for updates and sending requests. -->
<!-- - Users can lose their interest graph if the PDS they are using loses their data. -->
<!-- - The Personal Data Repositories would be a lot less compact than Headjack because accounts and links between them are not simple integers and every piece of data and relationship comes along with a signature. -->

Overall a solid effort and could work - some similarities to [Farcaster](#farcaster) but the DID registry is centralized by a consortium and the usernames are email-like (DNS - centralization point) instead of handled by the DID registry. Neither solution anchors content like Headjack does.

### [Farcaster](https://www.farcaster.xyz/)

<!--
https://farcasterxyz.notion.site/farcasterxyz/Farcaster-v2-43b105e4699847518b1d89996c20d564
-->

Their architecture: [link](https://github.com/farcasterxyz/protocol). The account registry is on a blockchain and everything else is off-chain.

- Registry on Ethereum L1 - for new accounts, name/host changes & key management.
    - No plans on moving to an L2 or their own chain. Also, state rent could eventually be introduced to Ethereum which would lead to further costs & complexity.

- Keypairs & wallets required - harder mass adoption. Authorizations still [require a signature from the root key](https://github.com/farcasterxyz/protocol#45-signer-authorizations).

- Revocations invalidate all prior activity from a delegate:

    > "Unfortunately, this means that all messages signed by that signer will be lost since we cannot tell which ones were signed by the attacker." - [source](https://github.com/farcasterxyz/protocol#71-signer-compromise)

    - [Root signer revocations](https://github.com/farcasterxyz/protocol#46-root-signer-revocations) are even more impactful.

<!-- - Cast timestamps are self-reported and can be manipulated - no true cryptographic total ordering - which leads to a lot of complexity in the node software. Not sure what happens to old casts that were signed with obsolete keypairs and how the history of keys is handled. -->

<!-- message ordering, timestamps & authenticity can be manipulated which requires more logic in the software to keep track of previous hashes
https://github.com/farcasterxyz/protocol#message-ordering -->

- The [p2p network](https://github.com/farcasterxyz/protocol#5-peering)'s ability to scale by passing around granular casts is questionable - they are already discussing possible flooding and nodes having to shadow ban and flag accounts based on behavior.

<!-- Directly polling accounts & their hosts for new events is more scalable but has tradeoffs compared to broadcasting messages & ingesting them into DBs & indexes (pull vs push). -->

- Focus is on [partial views of the network](https://github.com/farcasterxyz/protocol#47-sharding) as opposed to mass scale aggregation & indexing - although that could easily be implemented.

- [Cast URIs](https://github.com/farcasterxyz/protocol/pull/1/files) will look something like `farcaster://id:8789213729/cast:0xf00b4r` which is less readable than what Headjack will be offering with [its addressing](addressing.md).

Overall good intuition about the concept of [sufficient decentralization](https://www.varunsrinivasan.com/2022/01/11/sufficient-decentralization-for-social-networks) (putting only what is absolutely necessary on a blockchain) but the p2p node implementation takes on too much [responsibility, complexity & assumptions](https://github.com/farcasterxyz/protocol#7-security-considerations) (consensus, CRDTs, trees, ordering, flooding & replay attacks, etc.) and is lacking in other areas.

### [TBD](https://www.tbd.website/)

Jack Dorsey's new ["web5"](../images/meme_web5.jpg) project - [slides](https://docs.google.com/presentation/d/1SaHGyY9TjPg4a0VNLCsfchoVG1yU3ffTDsPRcU99H1E), [announcement](https://twitter.com/namcios/status/1535302090360250368).

- Only anchors DID events to Bitcoin with vector commitments (Merkle roots) using [ION](https://github.com/decentralized-identity/ion) & the [Sidetree](https://medium.com/decentralized-identity/the-sidetree-scalable-dpki-for-decentralized-identity-1a9105dfbb58) protocol.
    - 10-minute block times with probabilistic finality. Factor in the loading times for the anchored content around key management that's on IPFS - not great at all if you want to log in/authorize a service or revoke access quickly.

- The ION DID network is [not incentivized](https://github.com/decentralized-identity/ion/blob/master/docs/Q-and-A.md#q-what-are-the-availability-guarantees-of-ion) (just like IPFS) and the anchored content around key management, rotations & revocations depends on the current cluster of ION nodes. They state not having a consensus mechanism as a plus - which is debatable - logical centralization, uptime, adequate finality & DA guarantees matter a lot when dealing with identity.

- Doesn't have a human-readable global name registry - lacks discoverability.

- Doesn't have human-readable content addressing.

- Focus is on users self-hosting their own data, running software locally & handling keypairs.

- Developing their own Decentralized Web Nodes (DWN) software that would be relaying messages p2p - can't handle [web-scale](web_scale.md) on such a granular level and aggregation is not even in the picture.

### [Project Liberty](https://www.projectliberty.io/)

TODO: separate page for this?

<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

One of the few solutions with their [own chain](https://www.frequency.xyz/) in the space that makes sense. Their work (the [DSNP whitepaper](https://github.com/LibertyDSNP/papers/blob/main/whitepaper/dsnp_whitepaper.pdf)) has had the most influence over Headjack's design but the two have diverged in some key respects - the biggest of which are scalability and content addressability. This idea is too important to leave to a single player without competition.




- [100m$ of funding](https://philanthropynewsdigest.org/news/project-liberty-launched-with-100-million-from-frank-mccourt) (so far) from just 1 person - [Frank McCourt](https://www.youtube.com/watch?v=xgPZnOulBCE).

- Good research, good direction, but slow execution.


<!-- 
- Some good ideas in their [DSNP whitepaper](https://github.com/LibertyDSNP/papers/blob/main/whitepaper/dsnp_whitepaper.pdf) but not nearly enough emphasis on compactness. Too much on-chain & using smart contracts for identities - cannot truly scale. -->

- Keypairs required even for delegated entities (although that can be reworked)
    https://spec.dsnp.org/DSNP/Identity#delegation
    if delegation also happens through keys then they would also have to go into the blockchain state - making it much bigger. In Headjack an authorized interface is simply a few on-chain integers kept in the state (block ranges & account IDs) - no need to keep block ranges for delegated keys.
    https://forums.projectliberty.io/t/shorts-one-public-key-is-not-enough/215/3
    1 key per device? bloat. inefficient.
    "Thus, we can only trust one thing: The actor signing this data had access to the private key."
    all data is expected to be signed with a key - suboptimal.


- broadcast announcements refer to the content with a URL & HTTP - [host-centric](https://spec.dsnp.org/DSNP/Types/Reply.html#url), not in the blob, worse hosting guarantees
    - also profile related stuff - https://spec.dsnp.org/DSNP/Types/Profile.html#url
    - not really - IPFS possible too:
        https://forums.projectliberty.io/t/04-batching-source-dependent-messages-with-delegation/216#where-to-get-the-batch-file-5

- big reliance on hashes for announcement addressing


<!-- 
- They haven't managed to form a real community yet (although it is still early) and haven't moved as fast as others in the crypto industry for the past 2 years since their inception. -->



- No names within the project - just integer IDs for accounts. Content addressing URIs are based on hashes and there's no connection to the batch / service that published it which makes indexing harder - [example](https://spec.dsnp.org/DSNP/Identifiers.html#dsnp-content-uri). So addressing content is much worse compared to Headjack's [human-readable & persistent URIs](addressing.md).

- a difference: DMs as announcements (& public - leaking metadata) vs IDM-based (direct IDM-IDM comms) & not anchored to the chain & not announced to the world at all (TODO: revisit this)


- no hierarchical delegation - keypairs required, every delegation goes on-chain and requires a signature (bulky) - limited throughput.




### [CyberConnect](https://cyberconnect.me/)

Built on the [Ceramic protocol](https://github.com/ceramicnetwork/ceramic/blob/main/SPECIFICATION.md).

- Requires the use of keypairs & wallets.

- Every user has their own Ceramic data stream on top of IPFS - it is yet to be proven that the DHT & p2p layers can scale to hundreds of millions or billions of people.

- The persistence of the social graph is handled by pinning IPFS data on nodes operated by them without any cryptoeconomic incentive for the data availability - it will grow into the tens/hundreds of terabytes for web-scale (Twitter scale: 400M users with 700 connections on average) - especially because they don't have a compact integer-based representation and everything is based on big individually signed actions. The upcoming Ceramic blockchain does not seem to be geared towards storage incentivization and will not be the solution to that.

    > "Long-term data retention is guaranteed through Ceramic's blockchain anchoring and our custom data pinning service." - [their docs](https://docs.cyberconnect.me/protocol/technical-framework/#storage)

- Addressability of content is full of [hashes/pubkeys](https://cerscan.com/testnet-clay/stream/kjzl6cwe1jw1474gby1buhqw8xbnvfmfphpvrs0n01n6jls9kvdx7hu41w0sp1m) - not human-readable.

### [lens.xyz](https://lens.xyz/)

- Keypairs & wallets required.

- Even the content is stored on-chain instead of just the accounts. This cannot scale even to a few million users with any real usage despite being on Polygon. Even if they move to their own chain it will have to be EVM-compatible because of their smart contracts - suboptimal.

- Hashes & pubkeys in content addressing - no [human-readable & persistent URIs](addressing.md).

### [DeSo](https://www.deso.org/)

- It requires wallets & users to pay for every interaction.

- It puts everything on-chain and their plans to scale are with bigger blocks & sharding (see ["Phase 4: Sharding"](https://docs.deso.org/about-deso-chain/readme)) which is simply not practical for the [true scale of the public web](https://www.techspot.com/news/91513-visualizing-minute-internet-2021.html).

- It financializes as much as possible (creator coins, etc.).

- Their initial growth was fueled by huge sums of VC money but by now it has [flatlined](https://www.openprosper.com/stats/deso-dashboard). It did reach [1.66$ billion market cap](https://www.coingecko.com/en/coins/deso) on the 2nd of October 2021 shortly after being listed.

### Others

For details about ActivityPub, Matrix, Diaspora, Mastodon, Secure Scuttlebutt, Solid & others please refer to the excellent [ecosystem review](https://twitter.com/bluesky/status/1352302821140549632) by the Bluesky project. Other good resources include:
- [Decentralized Social Networks](https://medium.com/decentralized-web/decentralized-social-networks-e5a7a2603f53) - Jay Gerber
- [Blockchain Social Networks](https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970) - Jay Gerber
- There are [many other projects](https://mirror.xyz/shreyjain.eth/TyBzMOegl3rMNxpAFoJ36MjE0pGfdLcrVCBgy-x3qS8) in this space.
