# Throughput numbers (scaling)

Everyone claims to be scalable, but here we'll prove that Headjack can handle billions of accounts and anchor unlimited amounts of terabytes per second of off-chain content (making it addressable & tied to identity) with simple napkin math.

# How big is a Headjack transaction

<!-- Pubkeys are extracted from signatures and the blockchain maps them to account indexes. -->

Interfaces post anchors to off-chain content with an IPFS CID hash and a merkle root. IDMs also anchor off-chain content (mainly user preferences & updates to social graph), but they also post authorizations to other accounts (interfaces) to post on behalf of users as integer pairs.

So the fields for a transaction by an interface/IDM (which will be the majority) are:
- version: `4 bytes`
- signature: [`65 bytes`](https://ethvigil.com/docs/eth_sign_example_code/#recovering-the-message-signer-in-the-smart-contract)
- blob IPFS address: [`32 bytes`](https://proto.school/anatomy-of-a-cid/01)
- blob merkle root: [`32 bytes`](https://www.mycryptopedia.com/merkle-tree-merkle-root-explained/)
- nonce: `4 bytes` auto-increment integer associated with the account - to prevent reordering of anchored off-chain blobs (which would mess up internal addressing based on that nonce)
- value: `4 bytes` amount of native token paid to validators for transaction inclusion

So far that is `141 bytes` which almost every transaction by an interface or IDM contains. IDMs also submit a list of authorizations (or revocations) as 4 byte integer pairs. For example, 1000 accounts authorizing 15 different interfaces to post on their behalf would be 1000 integer pairs. Assuming 8 byte integers (up to 2^64) that would be 8 * 2 * 1000 = 16k bytes.

# Naive scenario

The initial version will target block bandwidth of up to 100 kb/s. This is not a problem for [validium ZK rollups](https://twitter.com/eshita/status/1546911451125649408) as there are already DA solutions that offer [10 mb/s or even much more](https://twitter.com/apolynya/status/1517137629334056960).

Assuming:
- 1 MB block size & 10 second block time (100 kb/s of block bandwidth)
- 1000 interfaces posting in every block
- 100 IDMs authorizing as much users as possible - filling the remaining block space
- no on-chain actions such as keypair & name changes, account creation & direct interaction with the chain by end users

We get:
- 1100 actors (1000 interfaces + 100 IDMs) that post in every block the `141` bytes minimum for their transactions, which is `155100` bytes
- the remaining `893476` bytes (1048576 (1MB) - 155100) can be filled with authorizations and since an authorization is `16` bytes (8 * 2) that would be 55842 authorizations/revocations every 10 seconds or 5584 authorizations/revocations per second
- for 1 billion accounts that would be 0.557 authorizations/revocations per person per day which is actually quite good - people on average do way less [single sign-ons](https://en.wikipedia.org/wiki/Single_sign-on) per day

|completely different goals - comparing the 2 protocols just to put things into perspective                                                                       | Headjack                            | Ethereum                                                                      |
|-----------------------------------------------------------------------|-------------------------------------|-------------------------------------------------------------------------------|
| block size                                                            | 1 MB                                | [ ~80 kb ]( https://etherscan.io/chart/blocksize )                            |
| block time                                                            | 10 seconds                          | [ ~13 seconds ]( https://ycharts.com/indicators/ethereum_average_block_time ) |
| blockchain bandwidth per second                                                  | 100 kb/s (x16 more than Ethereum)   | ~6.15 kb/s                                                                    |
| blockchain bandwidth per day                                                     | 8640 mb/d                           | ~528 mb/d                                                                     |
| transactions/authorizations per second                                | 5584 APS                               | [ ~14 TPS ]( https://blockchair.com/ethereum/charts/transactions-per-second ) |
| transactions/authorizations per day                                   | 482,457,600 APS                          | 1,209,600                                                                       |
| transactions/authorizations per person per day for 1 billion accounts | 0.482 (x400 more than Ethereum) | 0.0012096                                                                     |

<!-- Ethereum
- transactions per block: ~180
- single transaction size: 300-700 bytes -->

# Realistic scenario

The naive scenario does not include on-chain actions for specific accounts such as:
- keypair changes (new pubkey (32 bytes) + signature (65 bytes) if there is an older key)
- account creation (if done by an IDM then this is just a few bytes - no pubkey)
- name registration & ownership changes (no plans how this market would work yet)
- updating account fields such as a URI pointing towards an off-chain account directory (which could point to archived posts) or pointing to another account index for such services
- signed transactions by individual accounts that want to directly interact with the chain
    - authorizing an IDM, rotating keys, or even publishing off-chain content as an interface

However, the realistic scenario will not be far from the naive because:
- Only a % of all accounts will have keypairs and will make just a few signed actions per year - leaving the majority of block throughput for authorizations through IDMs.
- Large % of accounts will rarely even be authorizing new interfaces - many people don't sign in to new services through [SSO](https://en.wikipedia.org/wiki/Single_sign-on) every single day.
- Many interfaces that don't generate a lot of off-chain activity will publish less often than on every block in order to minimize on-chain block space costs.
- The chain throughput can be further optimized & scaled by multiple orders of magnitude.

# Optimizations & scaling

- Throughput of 100 kb/s is just the start & can easily go to 1-10 mb/s as a ZK rollup.
- The chain can be trivially sharded - there aren't problems such as fracturing liquidity or preventing composability because accounts don't care about each other - all they contain is authorization block numbers & keypair history.
- A fee market can develop that tunes the cost of different actions so that actors don't just pay for on-chain bytes - the ways the system is used can be guided through incentives.
- Integer indexes that are below INT_MAX (4 billion) can be compressed/batched together.
- Other optimizations not listed here - this is just the starting point.

# State growth

The processing of the state machine is minimal - orders of magnitude less complexity & compute compared to generalized smart contract platforms

The state growth will be slower than the blockchain growth because:

- an on-chain authorization is a pair of integers while only 1 integer goes into the state


a tiny core on which we have consensus can be used to cryptographically anchor & link unlimited amounts of data - the entire web - a few terabytes (tiny is relative - compared to the data) of materialized blockchain state including the absolute bare minimum of historic.

- state doesn't need to store the merkle roots & IPFS hashes - merkle proofs can contain block numbers & block hashes


# Off-chain content

There are no limits to how much off-chain content can be anchored to the chain - it is simply merkelized..

Headjack focuses on the bare minimum on which consensus is required in order to allow for billions of accounts to publish unbounded amounts of off-chain content authentically tied to identity & sequenced on a shared global timeline.


and yet still provide the guarantees & mental model simplicity of Headjack.


There isn't a more minimal design that can link unbounded amounts of data to billions of identities that can change keys & names and yet still provide the guarantees & mental model simplicity of Headjack.

