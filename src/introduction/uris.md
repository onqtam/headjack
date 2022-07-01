# Persistent & provable [URIs](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)

Each account has an associated auto-increment counter (nonce) for every time they submit an anchor for off-chain content. So if an interface has submitted 4 times already, then the next submission will be with `nonce == 5`. The blockchain keeps a mapping in its state for each previous nonce value to the block number when it changed so that `<interface_id>/<nonce>` can be translated to which block has the Merkle root anchor & [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) hash for the blob that corresponds to that nonce for that account.

Once a blob is fetched through the [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) (hash) we can address specific events by utilizing the offset index in the blob header so a URI such as `<interface_id>/<nonce>/<user_id>/<content_id>` can point to a specific post, comment or even reaction (activity is grouped by users). The content ID for a specific user is usually a small single digit number and is necessary only if there have been more than 1 interactions by that user through that interface for the given nonce (maybe rare).

The blockchain can be queried if the interface was allowed to post content on behalf of the user through on-chain authorization (probably initiated by an [IDM](../implementation/ecosystem/IDM.md)) when that specific block was published in order to determine if the activity is authentic - the state keeps information for each account such as since what block number a given interface was authorized to post on behalf of a user (and until when - all ranges). Users may avoid using IDMs and explicitly sign their actions in which case their data will be accompanied by signatures within the data blobs and the only check required will be for the user keypair used for the specific block number. To recap - to prove the authenticity of any event:
- First check if the data is actually part of an anchored blob with a [Merkle proof](https://medium.com/crypto-0-nite/merkle-proofs-explained-6dd429623dc5) to a block.
- Then check if the user actually submitted the event:
    - Either if at that point the interface was authorized to post on behalf of the user which would require a Merkle proof for a part of the blockchain state (authorization ranges).
    - Or by checking for an explicit signature & the public key of that account at that time which would also require a Merkle proof for a part of the blockchain state (account key history).

Most of the cryptography checks will be happening instantly as blobs are published & ingested by interface infrastructure & stored in more optimal database formats for content to be later directly served. Users will always be able to request an on-chain proof for any event and the Merkle proofs will probably be regenerated on the fly to avoid storing them.

So this is what makes URIs persistent - as long as someone hosts the content it will always be identifiable with the original URI from when it was posted using Merkle proofs & the blockchain. Read the [following chapter](names_and_paths.md) about how names in the URI paths are persistent too (even if names change ownership at some point).

---

TODO: interface accounts should have associated ways of loading their interfaces - talk about that. Also other interfaces & platforms can display the data and provide a link to the original interface if their on-chain account provides the means for that

TODO: when viewing an old persistent URI that has been referenced by "update/edit events" responsible interfaces should show the newest version and indicate that there has been a change

TODO: multiple points to retrieve content?