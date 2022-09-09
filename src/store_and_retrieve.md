# Storage & retrievability of data

Off-chain blobs with data will be fetched, processed and stored immediately after they are published in more optimal database formats for content to be later directly served by application infrastructure. Most of the cryptography checks will be happening instantly during this process but the proofs don't need to be stored. Users will always be able to request proofs for any event at any time (& cache them locally) because they can be regenerated on the fly as necessary.

# Hierarchical data blobs & partial fetches

Blobs may be in a hierarchy such that the on-chain IPFS hash points only to the "root" blob that contains the header and the actual indexed data could be in child IPFS blobs (whose [IPFS CIDs](https://docs.ipfs.io/concepts/content-addressing/) are contained in the root blob or header) so entities listening for events by specific accounts on Headjack may download only these headers and determine which "leaf" blobs they need to fetch for the data they are interested in (if any). Sparse bitsets & [bloom filters](https://en.wikipedia.org/wiki/Bloom_filter) could be used to quickly scan for the presence of activity by specific accounts.

<img src="images/root_child_blob_separation.png">

# Direct IPFS connections & horizontal scaling

Applications can advertise the multiaddress of their IPFS nodes on-chain so that each blob of content that gets published can be downloaded by others instantly by manually connecting with IPFS’s [“swarm connect” functionality](https://medium.com/pinata/speeding-up-ipfs-pinning-through-swarm-connections-b509b1471986) - avoiding the use of the [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table) for each new blob CID which may take tens of minutes. They can provide addresses to multiple IPFS nodes as a cluster for horizontal scaling and use [Pinset orchestration](https://ipfscluster.io/) - designed for Automated data availability and redundancy.

Applications may choose not to use IPFS at all - what they must do is anchor their blobs with a Merkle root and provide some on-chain advertised means to retrieve the data (example: REST/RPC endpoints in their on-chain account). We expect that IPFS will be the lowest common denominator and will always be used no matter what other solutions are also available.

# Sharing data before anchoring it

Applications can talk to each other directly by using their on-chain advertised REST/RPC endpoints and may ask for the events & messages that are not yet published by the other applications. This way they could display "remote" events locally while they are still in the "mempool" and allow their own users to interact with those events from other applications. This is possible because URIs are stable even before publication - see [Stable intra-blob addressing before publishing](blob_structure.md#stable-intra-blob-addressing-before-publishing). High activity applications can interoperate and no longer be a slave to the block time. However:

- Applications should display events that are not yet anchored in the UI differently - especially if coming from another application.
- Events that refer to each other but are from different applications and have not yet been anchored on-chain could end up committed in the wrong order (if one of the applications skips a few blocks and commits at a later one) - such that an event from the past is referring to an event from the future. However, [messages](messages.md) will have a timestamp field and could also have the current block height at the time of creation which could be used for sorting data.

# How to retrieve data for a random URI

There are multiple options:

- The entire original blob with an [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) might still be retrievable from the original application account that posted it or anyone else that has pinned the data.
- The user account might be using an archival service for all their activity and they can point to that archival service on-chain in their account for others to retrieve their messages.
- Other well-known players without a direct on-chain connection to the application/user in a URI could be asked if they have the content:
    - Infrastructure companies that do the heavy lifting for applications and store everything.
    - The analog of the [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive) in this ecosystem that also stores everything.
- IPFS can be forked & reused with the following change: instead of delivering content based on the [CID](https://docs.ipfs.tech/concepts/content-addressing/) hash it can deliver the data + the necessary proofs based on Headjack URIs or their hash (they are unique) - any individual off-chain message that's been anchored would be retrievable as long as someone is hosting it in this p2p network (which needs bootstrapping - could be part of Headjack nodes). However, this won't be very performant due to the granular nature of individual messages with a URI and the use of a global [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table).
