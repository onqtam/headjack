# Persistent & provable [URIs](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)

Each account has an associated auto-increment counter (nonce) for every time they submit an anchor for off-chain content. So if an application has submitted 2 times already, then the next submission will be with `nonce == 3`. The blockchain keeps a mapping in its state for each previous nonce value to the block number when it changed so that `<application_id>/<nonce>` can be translated to which block has the Merkle root anchor & [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) for the blob that corresponds to that nonce for that account.

<!-- The 2 can be extracted from the block. -->

<img src="images/blob_URI.png">

Once a blob is fetched through the [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) (hash) we can address specific events by utilizing the offset index in the blob header so a URI such as `<application_id>/<nonce>/<user_id>/<content_id>` can point to a specific post, comment or even reaction (activity is grouped by users). The content ID for a specific user is usually a small single-digit number and is necessary only if there has been more than 1 interaction by that user through that application for the given nonce (maybe rare).

The blockchain can be queried if the application was allowed to post content on behalf of the user through on-chain authorization (probably done through an [IDM](IDM.md)) when that specific block was published in order to determine if the activity is authentic - the state keeps information for each account such as since what block number a given application was authorized to post on behalf of a user (and until when - all ranges). Users may avoid using IDMs and explicitly sign their actions in which case their data will be accompanied by signatures within the data blobs and the only check required will be for the user keypair used for the specific block number. To recap - to prove the authenticity of any event with a URI:
- First check if the data is actually part of an anchored blob with a [Merkle proof](https://medium.com/crypto-0-nite/merkle-proofs-explained-6dd429623dc5) to a block.
- Then check if the user actually submitted the event:
    - Either if at that point the application was authorized to post on behalf of the user which would require a Merkle proof for a part of the blockchain state (authorization ranges).
    - Or by checking for an explicit signature & the public key of that account at that time which would also require a Merkle proof for a part of the blockchain state (account key history).

---

Most of the cryptography checks will be happening instantly as blobs are published & ingested by application infrastructure & stored in more optimal database formats for content to be later directly served. Users will always be able to request an on-chain proof for any event and the Merkle proofs will probably be regenerated on the fly to avoid storing them. 
Note that there can be many different & valid proofs for the same URI from different blockchain states at different block heights.

This is what makes URIs persistent - as long as someone hosts the content it will always be identifiable with the original URI from when it was posted using Merkle proofs & the blockchain (either a specific URI + a Merkle proof or the entire blob should be stored). The [following chapter](names_and_paths.md) shows how names in the URI paths are persistent too (even if user/application names change ownership at some point).

Users should be able to check the URI of content even if created through a different application and ideally the origin should be displayed by default - acting as [attribution for other applications](business_models.md).

Edits & updates to content come as [messages](messages.md) with new unique URIs that reference the older message URIs and it is up to applications to properly handle this - either by showing that there have been changes and a newer version or automatically redirect to the latest. "Forks" are possible but they represent application failure to detect that an old version is being edited.
