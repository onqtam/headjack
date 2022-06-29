# Content addressing

The move from host-centric to data-centric addressing is a complete paradigm shift and is perhaps the most important aspect of Headjack. It's been broken down into a few sub-chapters:

- [Today's web: host-centric](host_centric.md)
- [The data-centric ledger of record](data_centric.md)
- [Blob structure & addressing](blob_structure.md)
- [Permanent URIs](uris.md)
- [Names & paths](names_and_paths.md)
- [Benefits of this approach](benefits.md)




Self-authenticating data provides a scalability advantage by enabling store-and-forward caches. Aggregators in a self-authenticating network can host data on behalf of smaller providers without reducing trust in the data's authenticity. With [verifiable computation](https://en.wikipedia.org/wiki/Verifiable_computing), these aggregators will even be able to produce computed views – metrics, follow graphs, search indexes, and more – while still preserving the trustworthiness of the data. This topological flexibility is key for creating global views of activity from many different origins.
https://blueskyweb.xyz/blog/3-6-2022-a-self-authenticating-social-protocol






The core of ADX is self-authenticating data. In law, a “self-authenticating” document requires no extrinsic evidence of authenticity. In computer science, an “authenticated data structure” can have its operations independently verified. When resources in a network can attest to their own authenticity, then that data is inherently live – that is, canonical and transactable – no matter where it is located. This is a departure from the connection-centric model of the Web, where information is host-certified and therefore becomes dead when it is no longer hosted by its original service. Self-authenticating data moves authority to the user and therefore preserves the liveness of data across every hosting service.
https://github.com/bluesky-social/adx/blob/main/architecture.md#did-methods

