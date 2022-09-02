# Storage & retrievability of data

Off-chain blobs with data will be fetched, processed and stored in more optimal database formats for content to be later directly served by application infrastructure immediately after they are published. Most of the cryptography checks will be happening instantly during this process. Users will always be able to request an on-chain proof for any event and the proofs will probably be regenerated on the fly to avoid storing them.

# Fetching only parts of data blobs

The blobs may be in a hierarchy such that the on-chain IPFS hash points only to the "root" blob that contains the header and the actual indexed data could be in child IPFS blobs (whose [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) is contained in the root blob or header) so entities listening for events by specific accounts on Headjack may download only these headers and determine which "leaf" blobs they need to fetch for the data they are interested in (if any).

<img src="images/root_child_blob_separation.png">

# How to retrieve a URI from the past

<!-- For blobs & content for specific URIs from the past -->
There are multiple options:

- The entire original blob with an [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) might still be retrievable from the original application account that posted it or anyone else that has pinned the data.
- The user account might be using an archival service for all their activity and they can point to that archival service on-chain in their account for others to retrieve their messages.
- Other well-known players without a direct on-chain connection to the application/user in a URI could be asked if they have the content:
    - Infrastructure companies that do the heavy lifting for applications and store everything.
    - The analog of the [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive) in this ecosystem that also stores everything.
- IPFS can be forked & reused with the following change: instead of delivering content based on the [CID](https://docs.ipfs.tech/concepts/content-addressing/) hash it can deliver the data + the necessary merkle proofs based on the hash of Headjack URIs (they are unique) - any individual off-chain message that's been anchored would be retrievable as long as someone is hosting it in the new p2p network (which will need bootstrapping - could be part of Headjack nodes). However, this won't be very performant due to the granular nature of individual messages with a URI and the use of a global [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table).

# Sharing data before publishing it in a blob

Applications are yet another on-chain account and they'll be able to associate a REST/RPC endpoint or any other means for direct contact by the rest of the applications so that they may ask for the yet unanchored messages and display them while they are still in the "mempool". They can also advertise the multiaddress of their IPFS nodes so that each successive blob of generated content that gets published can be downloaded by others instantly by manually connecting with IPFS’s [“swarm connect” functionality](https://medium.com/pinata/speeding-up-ipfs-pinning-through-swarm-connections-b509b1471986) - avoiding the use of the [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table) for each new blob CID which may take tens of minutes. They can provide addresses to multiple IPFS nodes as a cluster for horizontal scaling and use [Pinset orchestration](https://ipfscluster.io/) - designed for Automated data availability and redundancy.

Applications may choose not to use IPFS at all - what they must do is anchor their blobs with a Merkle root and provide some on-chain advertised means to retrieve the data (example: REST/RPC endpoints in their account). We expect that IPFS will be the lowest common denominator and will always be used no matter what other solutions are also available.



