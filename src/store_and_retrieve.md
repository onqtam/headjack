# Storage & retrievability of data

# How to retrieve blobs & content for a URI

There are multiple ways to retrieve blobs & content for specific URIs from the past:
- The original [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) might still be retrievable from the original application account that posted it or any other that has pinned the data.
- The user account might be using an archival service for all their activity and they can point to that archival service on-chain in their account for others to retrieve their messages.
- Other well-known players without a direct on-chain connection to the application/user in a URI could be asked if they have the content:
    - Infrastructure companies that do the heavy lifting for applications and store everything.
    - The analog of the [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive) in this ecosystem also stores everything.
- IPFS can be forked & reused with the following change: instead of delivering content based on the [CID](https://docs.ipfs.tech/concepts/content-addressing/) hash it can deliver the data + the necessary merkle proofs based on the hash of Headjack URIs (they are unique) - any individual off-chain message that's been anchored would be retrievable as long as someone is hosting it in the new p2p network (which will need bootstrapping - could be part of Headjack nodes). However, this won't be very performant due to the granular nature of individual messages with a URI and the use of a global [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table).

<!--
# On proof permanence

One thing to consider is if a user revokes the authorization of an application to post on their behalf retroactively - not just going forward but also invalidating all anchored content & follow/unfollow events for the last couple of days through that application. This would mean that cached Merkle proofs for such invalidated content will no longer be valid and the latest state of the blockchain will refuse to produce new such proofs, but the cached proofs could mislead someone. Retroactive revocation can happen only up to `X` days to limit the scope of changes to cached proofs & what infrastructure would need to handle but still give enough time for anyone to react in case an application has posted fraudulent activity on their behalf - a **mostly theoretical concern**. Proofs for blocks older than `X` days are therefore considered permanent.
-->




<img src="images/content_references.png">

# Optimal content delivery

The blobs may be in a hierarchy such that the on-chain IPFS hash points only to the "root" blob that contains the header and the actual indexed data could be in child IPFS blobs (whose [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) is contained in the root blob or header) so entities listening for events by specific accounts on Headjack may download only these headers and determine which "leaf" blobs they need to fetch for the data they are interested in (if any). Note that even private [intranet](https://en.wikipedia.org/wiki/Intranet) data may be anchored but not retrievable by the public if the blob IPFS CID is never published or pinned/hosted - unified addressing for public & private.

<img src="images/root_child_blob_separation.png">

Applications are yet another on-chain account and they'll be able to associate a REST/RPC endpoint or any other means for direct contact by the rest of the applications so that they may ask for the yet unanchored messages and display them while they are still in the "mempool". They can also advertise the multiaddress of their IPFS nodes so that each successive blob of generated content that gets published can be downloaded by others instantly by manually connecting with IPFS’s [“swarm connect” functionality](https://medium.com/pinata/speeding-up-ipfs-pinning-through-swarm-connections-b509b1471986) - avoiding the use of the [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table) for each new blob CID which may take tens of minutes. They can provide addresses to multiple IPFS nodes as a cluster for horizontal scaling and use [Pinset orchestration](https://ipfscluster.io/) - designed for Automated data availability and redundancy.

Applications may choose not to use IPFS at all - what they must do is anchor their blobs with a Merkle root and provide some on-chain advertised means to retrieve the data (example: REST/RPC endpoints in their account). We expect that IPFS will be the lowest common denominator and will always be used no matter what other solutions are also available.

