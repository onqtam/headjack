




Namecoin failed. Handshake isn't getting nearly enough adoption.




- Push vs Pull: Some are architected around pulling data explicitly and don't have an easy way to just subscribe without continuously polling for new events.

`"consistency is incredibly important for creating a compelling user experience"` - [Moxie](https://signal.org/blog/the-ecosystem-is-moving/)


TODO: interface or application as the term? or view?
https://miro.medium.com/max/1400/0*6w3lPf5orl0ME-XL
https://polynya.medium.com/the-web3-stack-how-web3-will-offer-superior-ux-than-web2-6b8c82709163

Browsers: different views on content?

TODO: browser in the driver/filesystem/OS analogy?

TODO: too many links? too many memes?

TODO: too much buzzwords in introduction?

TODO: perhaps not URNs but URIs or URLs?

- think of url/handle/nonce mappings



TODO: do the math on how big the state would be with 1k interfaces and 1 million blocks, nonces & whatnot
    state growth is a concern even if it's simple integers


TODO: disadvantage - huge reliance on full Headjack nodes that contain the full state


- What if the interface web2 website is no longer around?
- Tag creation (which get an ID on-chain) so that anyone can reference it & organize around it. Following tags?
- Topics such as $RUNE & hashtags - how do they get parsed?
- Discord, signal protocol
- TODO: Q: is multi-dimentionality required if people use different interfaces for different types of content?
- if enough things move to the ID managers... what if the public connections go there too? moving closer & closer to farcaster's design... what if the blockchain isn't necessary? :|
- TODO: URLs and how they are actually displayed - which interface...
- maybe the history of each interface nonce mapping to block numbers & the history of changes of user delegations should be part of the state and state-rooted
- TODO: this is for public discourse - not private networks like facebook/snap.
- Too many acms and what if someone logs with an interface - how to merge?


- users will want everything from creators, but interfaces won't be able to lock in their users so they might dislike the system? misaligned incentives?

- think about content hosting (especially files & images)

- https://indieweb.org/Webmention


capabilities-based delegation


- cosmos/tendermint? but how to shard? roll your own?! :(

- eth trie data structure - look if it would be of help
    also B-tree
    also MVCC multi version concurrency control

TODO: protected tweets - LOL - followers are also private unless permitted?

- how to count impressions/views of videos?
- interface attacks on delegated accounts (posting activity on their behalf)
- handles & how they are given away
- token value accrual & bonding/tokenomics
- snapshots of the state
- telegram and such mass group chats & channels
- how would this fit with user data pods?
- self hosting?

“Inherit subscriptions” - follow a list as if you follow all from it

light clients - in addition to merkle proofs for inclusion of content they would need merkle proofs for the state of which interfaces a user has authorized to post on their behalf in a given block

18+ content?

TODO: figure out additional ways for CDN for content & keeping it up & alive besides just user & interface archiving

- private connections, posts & user data
    - see 4.2.2 Privacy (basically encrypted connections/actions and secrets shared/delegated to interfaces to operate on behalf of actor)
    even encrypted direct messaging could be implemented on top of this
    5.4.3 & 5.4.4
    https://unfinished.com/wp-content/uploads/dsnp_whitepaper.pdf
    - TODO: store off-chain?
    centralized connection graph is not incompatible with data pods as thought by in Solid, or Ceramic, etc.
        - can be stored & managed by ID managers
    - GDPR...
    https://matrix.org/~matthew/Response_to_-_Notes_on_privacy_and_data_collection_of_Matrix.pdf
    https://gitlab.com/libremonde-org/papers/research/privacy-matrix.org
    https://developer.litprotocol.com/docs/WhatIsLit/whatIsLitProtocol

- TODO: go through this exercise: https://twitter.com/chrishlad/status/1518237282729295873

- look into aggregate/multi/threshold signatures, ZK tech & other certificates:
    https://github.com/jarradh/zk-compact-certificates

- Recursive merkleization of checkpointed L1 blocks/stateRoots so that anything can be referenced even with just the tip of the chain

- ECDSA vs eddsa
https://support.mycrypto.com/how-to/getting-started/how-to-sign-and-verify-messages-on-ethereum/
https://medium.com/mycrypto/the-magic-of-digital-signatures-on-ethereum-98fe184dc9c7
https://ethvigil.com/docs/eth_sign_example_code/



https://doc.libsodium.org/
http://ed25519.cr.yp.to/
https://keybase.io/
https://docs.joinmastodon.org/spec/webfinger/
https://docs.joinmastodon.org/spec/activitypub/



Skynet interop with IPFS:
https://twitter.com/DavidVorick/status/1412080832286584844
https://docs.skynetlabs.com/developer-guides/moving-from-ipfs-to-skynet
https://skynet.guide/tech/sia-layer-one.html
https://skynet.guide/tech/skynet-layer-two.html


reading on IPFS, Filecoin & Sia/Skynet
https://www.reddit.com/r/siacoin/comments/lg9qr0/what_is_skynet_why_should_i_build_on_it_and_how/gmr7u5v/
https://www.reddit.com/r/ipfs/comments/jf073z/filecoin_isnt_an_incentivization_network_for_ipfs/



TODO: read & think about permissions, sub-app/domain authorization, private data, "Data Access Controllers", "data domain"
https://blog.sia.tech/mysky-your-home-on-the-global-operating-system-of-the-future-5a288f89825c


Reducing merkle proof sizes with Verkle Tries
"It’s a constant size proof regardless of the width."
https://members.delphidigital.io/reports/the-hitchhikers-guide-to-ethereum
Guide to the Ethereum Roadmap | Jon Charbonneau of Delphi Digital
https://www.youtube.com/watch?v=xuLyZaty9iI
vector commitments (Merkle proofs)
https://blog.ethereum.org/2021/12/02/verkle-tree-structure/
https://www.youtube.com/watch?v=RGJOQHzg3UQ


could a user self-publish withoug going thorugh an interface?


https://blog.ceramic.network/capability-based-data-security-on-ceramic/
https://en.wikipedia.org/wiki/Object-capability_model


https://en.wikipedia.org/wiki/RDFa


look into DID methods
https://github.com/bluesky-social/adx/blob/main/architecture.md#did-methods

https://identity.foundation/




by addressing data and using different views to browse it we minimize the effect of phishing. but what about custom JS websites?
    messages that are viewable only through a specific view?
        "warning, you're about to view a custom website"
    easy to identify links to "outside of the addressing"

TODO: address private media & graphs
    private data may also be anchored & referencable for intra-organizational purposes - just not included in an IPFS blob publicly advertized on Headjack



can this displace SSL in addition to DNS?


this tbh...
https://news.ycombinator.com/item?id=25735773


https://en.wikipedia.org/wiki/Hash_array_mapped_trie


