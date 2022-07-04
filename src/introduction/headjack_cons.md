# Shortcomings of Headjack

- State growth - Headjack will suffer from this more than most other blockchains as it keeps a lot of the history in its materialized state as ranges for historic querying with provability - not just the "current view". However, most of this will be compact integers (block ranges for authorization, nonce mappings, etc.) and growth will not be extremely high. Others like [Bluesky](others_list.md#bluesky) who also want to be able to prove authenticity of very old content have a transparency log which would be big as well.

- Private social graphs & DMs require the use of [IDMs](../implementation/ecosystem/IDM.md) and that starts to resemble [Farcaster](others_list.md#farcaster)'s managed hosts and [Bluesky](others_list.md#bluesky)'s Personal Data Servers - a centralization point with some trust assumptions and potential for data breaches. However, this is the best tradeoff that would allow for true mass adoption and is still a massive improvement to the status quo.

- updates & deletes to content may not be applied in interfaces, but this is a problem with almost any decentralized protocol
    - not sure if there could be an analogy of a purge request: https://github.com/bluesky-social/adx/blob/main/architecture.md#purge-requests-hard-removal


- public interest graph (both a pro and a con)



- Too [ambitious](ambition.md) `¯\_(ツ)_/¯`

- failure scenario around IDMs

https://vitalik.ca/general/2022/06/12/nonfin.html
But perhaps this is needlessly expensive: issuance is common, revocation is rare, and we don't want to require Example College to issue transactions and pay fees for every issuance if they don't have to. So instead we can go with a hybrid solution: make initial degree an off-chain signed message, and do revocations on-chain. This is the approach that OpenCerts uses.
https://www.opencerts.io/

"140 Reasons Why Square Will Fail" - And then rejected each reason and explained why.
https://twitter.com/chrishlad/status/1518237282729295873

- no way to enforce purge requests for data, nor consistency for what interfaces show
    - most others suffer from these as well

Disadvantage - the proof is not within the data pointed to by a URI by default. But it can be shipped around with it!

It could be very heavy to generate all the merkle proofs


TODO: disadvantage - huge reliance on full Headjack nodes that contain the full state

