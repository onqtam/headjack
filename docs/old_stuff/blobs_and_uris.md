# Blobs & persistent URIs

This chapter will explain how all off-chain [messages](messages.md) (actions/events/content) get published:

# Blob construction - batching of user events

Applications accumulate off-chain activity from users which they cryptographically anchor in batches with a [Merkle root](https://en.wikipedia.org/wiki/Merkle_tree) on-chain and they determine how often to do so (it doesn't have to be on every block) - those with little activity may submit only once per minute or even less often - the frequency is determined by applications based on the volume of activity and the on-chain publishing costs.

When enough activity has been collected it is time for the application to finalize the batch: it is packed in a blob and all the events generated since the last anchored batch are sorted & grouped by accounts in some deterministic way (perhaps accounts based on index and actions based on the type/sequence) with some schema with the following steps:

1. The intra-blob index (offset table) for lookup of content of specific accounts is generated.
2. A [Merkle root](https://en.wikipedia.org/wiki/Merkle_tree) that touches every event is deterministically constructed following a schema.
3. The [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) (hash) for the blob is generated and it is pinned for others to download.

The only 2 things that are signed & submitted on-chain are thus the Merkle root and the IPFS CID for the next nonce (auto-increment counter) associated with the application account.

<img src="/img/blob_structure.png"/>

<!-- <object width=100% data="images/blob_structure.svg"></object> -->

# Stable intra-blob addressing before publishing

Applications maintain the logical order of events for the future batch in maps in order to provide intra-blob addressing even before it is fully constructed - as an example if a user posts an article and immediately after that comments on their own post - the comment should be able to refer to the post which is not yet committed on-chain. Applications will also display activity by other accounts that is not yet anchored and the interactions can still use the proper addressing when referring to the yet-to-be-anchored messages (the next nonce number is known in advance). Any type of interaction is addressable and sequenced in the blobs - including reactions (likes, etc).

# Persistent & provable [URIs](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)

Each account has an associated auto-increment counter (nonce) for every time they submit an anchor for off-chain content. So if an application has submitted 2 times already, then the next submission will be with `nonce == 3`. The blockchain keeps a mapping in its state for each previous nonce value to the block number when it changed so that `<application_id>/<nonce>` can be translated to which block has the Merkle root anchor & [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) for the blob that corresponds to that nonce for that account.

<!-- The 2 can be extracted from the block. -->

<img src="/img/blob_URI.png"/>

Once a blob is fetched through the [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) (hash) we can address specific events by using the offset index in the blob header so a URI like `<application_id>/<nonce>/<user_id>/<content_id>` can point to a specific post, comment or even reaction (activity is grouped by users). The content ID for a specific user is usually a small single-digit number and is necessary only if there has been more than 1 interaction by that user through that application for the given nonce (maybe rare). This is what events with URIs referring to each other looks like:

<img src="/img/content_references.png"/>

The blockchain can be queried if the application was allowed to post content on behalf of the user with an on-chain authorization (which probably happened through an [IDM](IDM.md)) when that specific block was published in order to determine if the activity is authentic - the state keeps information for each account such as since what block number a given application was authorized to post on behalf of a user (and until when - all ranges). Users may avoid using IDMs and explicitly sign their actions in which case their data will be accompanied by their signatures within the data blobs and the only check required will be for the user keypair used for the specific block number.

# Steps to prove the authenticity of a URI

To recap - to prove the authenticity of any event with a URI:
- First check if the data is actually part of an anchored blob with a [Merkle proof](https://medium.com/crypto-0-nite/merkle-proofs-explained-6dd429623dc5) to a block. This requires either just the piece of data + a Merkle proof for inclusion in the blob or the entire blob in order to reconstruct the Merkle tree & proof.
- Then check if the user actually submitted the event:
    - Either if at that point the application was authorized to post on behalf of the user which would require a Merkle proof for a part of the blockchain state (authorization ranges).
    - Or by checking for an explicit signature & the public key of that account at that time which would also require a Merkle proof for a part of the blockchain state (account key history).

URIs are persistent as long as someone hosts either the individual event + the Merkle proof or the entire blob (and can reconstruct the proof) and knows to which block it was anchored (from the `<application_id>/<nonce>` => `<block_number>` mapping). The [following chapter](names_and_paths.md) shows how names in URIs are persistent too (even if user/application names change ownership at some point).

# A few other notes

- There can be many different & valid proofs for the same URI from different block heights.
- Even private [intranet](https://en.wikipedia.org/wiki/Intranet) data may be anchored but not retrievable by the public if the blob IPFS CID is never published or pinned/hosted - unified addressing for public & private.
- Users should be able to see the URI of content even if created through another application and the origin should be displayed by default - acting as [attribution for other applications](business_models.md).
- Edits & updates to content come as [messages](messages.md) with new unique URIs that reference the older message URIs and it is up to applications to properly handle this - either by showing that there have been changes and a newer version or automatically redirect to the latest. "Forks" are possible but they represent application failure to detect that an old version is being edited.
- Accounts that anchor content on-chain cannot do so twice in the same block - for simplicity.

<!--

Blob construction is a trivially parallelizable problem

# On proof permanence

One thing to consider is if a user revokes the authorization of an application to post on their behalf retroactively - not just going forward but also invalidating all anchored content & follow/unfollow events for the last couple of days through that application. This would mean that cached Merkle proofs for such invalidated content will no longer be valid and the latest state of the blockchain will refuse to produce new such proofs, but the cached proofs could mislead someone. Retroactive revocation can happen only up to `X` days to limit the scope of changes to cached proofs & what infrastructure would need to handle but still give enough time for anyone to react in case an application has posted fraudulent activity on their behalf - a **mostly theoretical concern**. Proofs for blocks older than `X` days are therefore considered permanent.
-->