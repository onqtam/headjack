<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# DMs

- DMs without keys - how?
    maybe rely on the identity providers - ACMs?
    https://twitter.com/elonmusk/status/1519469891455234048
    https://www.reddit.com/r/signal/comments/9k42k3/integrate_messaging_into_other_apps/
    https://www.youtube.com/watch?v=DXv1boalsDI
    https://www.youtube.com/watch?v=L2kuipP3lxk


Identity managers can still be compromised and wreack havok, but this is an improvement to the status quo

users should be able to point to their own personal ceramic stream instead of relying on interfaces
    they would need to post on-chain to timestamp their new activity for it to be sequenced & addressable with /user/nonce/...


an IDM may also use a social recovery wallet instead of email as login - or just a normal wallet/keypair authorization

the more you rely on IDMs for features and data storage, the less sovereign you are.


If an IDM does not let users bind keypairs then they will be boycotted

IDMs never get access to your private key


query IDMs directly for content by person X - polling mechanics like RSS


Permissions for different actions could be separated - for example requiring signatures for content while not requiring for updating follow connections.


access control

The future of mass-market crypto experiences lies within apps that provide familiar, custodial experiences with the ability to graduate into non-custodial experiences.
If the goal is to onboard first-time crypto users, the experience must be custodial — at least to start.
https://future.a16z.com/missing-link-web2-web3-custody-wallets/

https://www.portis.io/
https://twitter.com/toruslabs
    https://tor.us/
https://twitter.com/Web3Auth



IDM - pay to cold-DM someone and be seen


- Blocking - through the IDM?
- how to keep progress bars for played audio/video? IDM?
- notifications - what is seen - managed between interfaces - IDM?

edge case: what happens if a big interface suddenly becomes malicious? How can millions of ppl invalidate activity posted through it without clogging the network?
    - force interfaces to bond tokens (proportional to the # of delegators) so that if a fork is necessary, they get penalized.
    - some zero-knowledge way to aggregate signatures for millions that want to batch a transaction delegation event?


SOLVING THIS PROBLEM DeSo have thought about:
https://twitter.com/nadertheory/status/1480628981942525953
https://twitter.com/nadertheory/status/1480649481792024578


sessions as a concept? expiration of delegation?
https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4361.md
https://eips.ethereum.org/EIPS/eip-4361



Merging IDs from multiple IDMs if created without keys





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
    https://our.status.im/fastest-bls-signature-implementation/
    OR use some ZK magic





https://fission.codes/blog/auth-without-backend/
https://ucan.xyz/
https://jwt.io/

