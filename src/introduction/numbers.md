<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# Throughput numbers (scaling)

Everyone claims to be scalable, but here we'll prove that Headjack can handle billions of accounts and anchor unlimited amounts of terabytes per second of off-chain content (making it addressable & tied to identity) with simple napkin math.

# Headjack bandwidth

The initial version will target capacity of 100 kb/s. This is not a problem for [validium ZK rollups](https://twitter.com/eshita/status/1546911451125649408) as there are already DA solutions that offer [10 MB/s or even much more](https://twitter.com/apolynya/status/1517137629334056960) so in the future this can easily go way beyond 100 kb/s.

# How big is a Headjack transaction

<!-- Pubkeys are extracted from signatures and the blockchain maps them to account indexes. -->

Interfaces post anchors to off-chain content with an IPFS CID hash and a merkle root.

IDMs also anchor off-chain content (mainly user preferences & updates to social graph), but they also post authorizations to other accounts (interfaces) on behalf of users as integer pairs.

So the fields for a transaction are:
- version: `4 bytes`
- signature: [`65 bytes`](https://ethvigil.com/docs/eth_sign_example_code/#recovering-the-message-signer-in-the-smart-contract)
- blob IPFS address: [`32 bytes`](https://proto.school/anatomy-of-a-cid/01)
- blob merkle root: [`32 bytes`](https://www.mycryptopedia.com/merkle-tree-merkle-root-explained/)
- nonce: `4 bytes` auto-increment integer associated with the account - so that anchored off-chain blobs never get reordered (which would mess up internal addressing based on that nonce)
- value: `4 bytes` amount of native token paid to miners for transaction inclusion

So far that is `141 bytes` which almost every transaction by an interface or IDM contains.

IDMs also submit a list of authorizations (or revocations) as 4 byte integer pairs. For example, 1000 accounts authorizing 15 different interfaces to post on their behalf would be 1000 integer pairs. Assuming 8 byte integers (up to 2^64) that would be 8 * 2 * 1000 = 16k bytes.

# Best case scenario

The best case scenario is "business as usual" and does not include:
- keypair changes
- account creation
- name registration & ownership changes
- accounts interacting directly with the chain instead of through interfaces & IDMs

Assuming:
- 1 MB block size & 10 second block time
- 100 interfaces posting in every block
- 20 IDMs authorizing as much users as possible - filling the remaining block space

So we get:
- 120 actors (100 interfaces + 20 IDMs) that post in every block the `141` bytes minimum for their transactions, which is `16920` bytes
- the remaining `1031656` bytes (1048576 - 16920) can be filled with authorizations and since 1 authorization is `16` bytes (8 * 2) that would be 64478 authorizations/revocations every 10 seconds or 6447 authorizations per second


6447

86400


==> 143 bytes
- connection between 2 indexes: 8 bytes
- 10k follow/unfollow events = 10000 * 8 = 80000 bytes
==> total: 80000 + 147 = 80133

Some average numbers for Ethereum to put things into perspective:
- block size: 1 MB
- block time: 10 seconds
- bandwidth per second: 100 kb/s
- bandwidth per hour: 360 mb/s

- transactions per second: [~14 TPS](https://blockchair.com/ethereum/charts/transactions-per-second)

- transactions per day: 1209600
- transactions per person per day for 1 billion people: 0.0012096

- transactions per block: ~180
- single transaction size: 300-700 bytes


| *new*        | `-O0`   | `-O3`   |
|--------------|---------|---------|
| baseline     | 1,567s  | 3,614s  |
| with asserts | 12,263s | 59,061s |

- about 16x more than Ethereum

Some average numbers for Ethereum to put things into perspective:
- block size: [~80 kb](https://etherscan.io/chart/blocksize)
- block time: [~13 seconds](https://ycharts.com/indicators/ethereum_average_block_time)
- bandwidth per second: ~6.15 kb/s
- bandwidth per hour: ~22 mb/s
- transactions per block: ~180
- single transaction size: 300-700 bytes
- transactions per second: [~14 TPS](https://blockchair.com/ethereum/charts/transactions-per-second)
- transactions per day: 1209600
- transactions per person per day for 1 billion people: 0.0012096



# Realistic scenario

- interfaces may choose not to post in every block but perhaps less often in order to manage costs



- transactions by standalone accounts not using an IDM
- key changes take more space
- name ownership changes

# Off-chain content

There are no limits to how much content can be anchored to the chain.

# State growth


==== BEST CASE SCENARIO:

















# Reference numbers

# State growth

# Future development

- optimizations such as batching integer indexes with values below INT_MAX (4 billion) together for compression
- other optimizations not listed here

- more DA ==> we can put more on-chain
- sharding
    - not being a financial chain eases a lot of things
    - sharding is trivial - me following you does not credit your account with anything...
        - or maybe it does because of the "who follows me" array...
    - trivial sharding - there's no problem such as fracturing liquidity or preventing composability because entities live on different shards - they just point to each other and the bulk of the action takes place off-chain anyway


a tiny core on which we have consensus can be used to cryptographically anchor & link unlimited amounts of data - the entire web - a few terabytes (tiny is relative - compared to the data) of materialized blockchain state including the absolute bare minimum of historic.

The processing of the state machine is minimal - orders of magnitude less complexity & compute compared to generalized smart contract platforms

There isn't a more minimal design that can link unbounded amounts of data to billions of identities that can change keys & names and yet still provide the guarantees & mental model simplicity of Headjack.


