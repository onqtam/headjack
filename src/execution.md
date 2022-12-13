<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# Execution (how)

How the blockchain & ecosystem are actually implemented (full specification).

<!--
TODO: document with a "why not a rollup" section - or in the FAQ
https://twitter.com/KirilovVik/status/1531184971896999936
https://polynya.medium.com/the-sustainability-checklist-d620549425dc


Aside from the scalability properties rollups can possess, they also solve both fundamental problems. Rollups don’t need their own validators, only a set of sequencers to produce blocks. The base layer provides the secure validator set. Rollups that share a settlement layer can build trust-minimized bridges between them because their state transitions can be easily verified through the settlement layer.
https://www.alexbeckett.xyz/composability-in-a-rollup-ecosystem/

TODO: read these on rollups

https://celestia.org/learn/

https://www.alexbeckett.xyz/secure-light-nodes-and-the-scalability-trilemma/
https://www.alexbeckett.xyz/the-economics-for-rollup-fees/
https://www.alexbeckett.xyz/the-path-toward-scaling-rollups/
https://www.alexbeckett.xyz/the-benefits-of-optimistic-rollups-compared-to-zk-rollups/
https://www.alexbeckett.xyz/a-snapshot-of-the-current-rollup-ecosystem/
https://www.alexbeckett.xyz/decentralized-sequencers-where-do-we-go-next/

https://www.alexbeckett.xyz/stateless-rollups/

https://twitter.com/musalbas/status/1545060322842533890

https://twitter.com/apruden08/status/1542189323906326528
https://www.youtube.com/watch?v=oc8M1-pNuXk
https://twitter.com/bkiepuszewski/status/1540793333295075329

https://l2beat.com/?view=risk

https://medium.com/starkware/volition-and-the-emerging-data-availability-spectrum-87e8bfa09bb
https://medium.com/starkware/data-availability-e5564c416424

https://twitter.com/epolynya/status/1533833479896453120

https://eth.wiki/sharding/Sharding-FAQs


The theoretical ideal stack to build on would be
https://twitter.com/lukedelphi/status/1539192716915007490


https://twitter.com/ZeMariaMacedo/status/1543601695048998918


Why not a rollup? There is nothing to steal - there will not be 100x times TVL more than the mcap of the protocol

The more I think about it, the less need I see to try to attach my chain to Ethereum - it will not benefit from financial liquidity & interoperability since its focus is quite different and it will most likely require it's own token for PoS consensus

A big reason to want to attach to Ethereum is securely bridged financial liquidity so my use case will benefit a lot less from trying to integrate with Eth because of it's non-financial use case

No composability is broken if not linked to ethereum & is sharded - as is the case with financial blockchains

I think that because this is not a very financial use case that the incentive to link it strongly with Ethereum is smaller.

finance cares mostly about the present whereas an index is there to provide information about the past - different data availability & retrievability needs
the historical part is much more important - each block & the hashes that are contained in there - or they should enter the state...




- ZK rollup?
- eth2 danksharding?
- mina snapp?
- unbounded state growth.



- look into aggregate/multi/threshold signatures, ZK tech & other certificates:
    https://github.com/jarradh/zk-compact-certificates



- ECDSA vs eddsa
https://support.mycrypto.com/how-to/getting-started/how-to-sign-and-verify-messages-on-ethereum/
https://medium.com/mycrypto/the-magic-of-digital-signatures-on-ethereum-98fe184dc9c7
https://ethvigil.com/docs/eth_sign_example_code/
https://crypto.stackexchange.com/questions/60383/what-is-the-difference-between-ecdsa-and-eddsa


https://vomtom.at/ethereum-private-and-public-keys/
https://betterprogramming.pub/understanding-ethereum-cryptography-3ef7429eddce
https://ethereum.stackexchange.com/questions/3542/how-are-ethereum-addresses-generated

Ethereum uses a specific signature scheme called ECDSA on a specific elliptic curve called Secp256k1.
the address is the last 20 bytes of the Keccak-256 hash of the public key.

This ensures that most apps do not end up hosting ECDSA key pairs which create security and regulatory challenges if funds are sent to them on Ethereum.
https://github.com/farcasterxyz/protocol/tree/varunsrin/revise-v2-dec-4#32-authentication


https://doc.libsodium.org/
http://ed25519.cr.yp.to/
https://keybase.io/
https://docs.joinmastodon.org/spec/webfinger/
https://docs.joinmastodon.org/spec/activitypub/


why libp2p sucks
https://twitter.com/tomaka17/status/1547529377277173761
https://github.com/matrix-org/pinecone

Skynet interop with IPFS:
https://twitter.com/DavidVorick/status/1412080832286584844
https://docs.skynetlabs.com/developer-guides/moving-from-ipfs-to-skynet
https://skynet.guide/tech/sia-layer-one.html
https://skynet.guide/tech/skynet-layer-two.html


reading on IPFS, Filecoin & Sia/Skynet
https://www.reddit.com/r/siacoin/comments/lg9qr0/what_is_skynet_why_should_i_build_on_it_and_how/gmr7u5v/
https://www.reddit.com/r/ipfs/comments/jf073z/filecoin_isnt_an_incentivization_network_for_ipfs/



how big are bloom filters
https://en.wikipedia.org/wiki/Bloom_filter
https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/
https://github.com/RoaringBitmap/CRoaring
https://github.com/RoaringBitmap/RoaringBitmap#faq
https://en.wikipedia.org/wiki/Bitmap_index




-->
