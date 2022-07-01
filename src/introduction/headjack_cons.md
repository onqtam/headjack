# Shortcomings of Headjack

TODO:

- public interest graph (both a pro and a con)
- private social graphs require the use of IDMs and that starts to resemble Farcaster's managed hosts and Bluesky's Personal Data Servers.
    - centralization, potential data breaches
- updates & deletes to content may not be applied in interfaces, but this is a problem with almost any decentralized protocol
    - not sure if there could be an analogy of a purge request: https://github.com/bluesky-social/adx/blob/main/architecture.md#purge-requests-hard-removal


- Too [ambitious](ambition.md) `¯\_(ツ)_/¯`

https://vitalik.ca/general/2022/06/12/nonfin.html
But perhaps this is needlessly expensive: issuance is common, revocation is rare, and we don't want to require Example College to issue transactions and pay fees for every issuance if they don't have to. So instead we can go with a hybrid solution: make initial degree an off-chain signed message, and do revocations on-chain. This is the approach that OpenCerts uses.
https://www.opencerts.io/

"140 Reasons Why Square Will Fail" - And then rejected each reason and explained why.
https://twitter.com/chrishlad/status/1518237282729295873

- no way to enforce purge requests for data, nor consistency for what interfaces show
    - most others suffer from these as well
