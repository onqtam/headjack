# Access control managers

These are [accounts](accounts.md) that can grant the ability to interfaces to post on behalf of accounts that are under the control of the ACM in question.


2 types of delegation: follow events and posting


TODO: problem: what happens if an ACM with control of millions of accounts stops behaving properly?
- users without keypairs are screwed
- users with keypairs will be sending on-chain messages but those will be huge and will clog the network
    - possible solution: batch them off-chain into 1000 batches, construct BLS aggregate sigs, sign a msg & transmit that along with a bitmap for which keys participated in the batching to a block.
    Users will need to coordinate off-chain & decide from which block to revoke the access, which other ACM should be approved, etc. This can be used in other scenarios too.
    https://ethresear.ch/t/2105
    https://ethresear.ch/t/pragmatic-signature-aggregation-with-bls/2105
    https://ethresear.ch/t/5427
    OR use some ZK magic





https://fission.codes/blog/auth-without-backend/
https://ucan.xyz/
https://jwt.io/

