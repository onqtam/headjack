<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# Identity managers (IDM)

<!--
# DMs

https://twitter.com/session_app
https://twitter.com/THORmaximalist/status/1590702991798984704

- DMs without keys - how?
    maybe rely on the identity providers - ACMs?
    https://twitter.com/elonmusk/status/1519469891455234048
    https://www.reddit.com/r/signal/comments/9k42k3/integrate_messaging_into_other_apps/
    https://www.youtube.com/watch?v=DXv1boalsDI
    https://www.youtube.com/watch?v=L2kuipP3lxk



- messaging protocol - XMTP & signal
https://en.wikipedia.org/wiki/Forward_secrecy
https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange
https://en.wikipedia.org/wiki/Double_Ratchet_Algorithm
https://chat.blockscan.com/start
https://twitter.com/etherscan/status/1577667362744020992

Whatsapp System design or software architecture
https://www.youtube.com/watch?v=L7LtmfFYjc4

Farcaster: Secure Messaging Requirements
https://www.youtube.com/watch?v=NDmKOnGherE
Farcaster: E2E Encryption
https://www.youtube.com/watch?v=eMGtBmN7qKE
Farcaster: Forward Secrecy
https://www.youtube.com/watch?v=xaejrsT4KDk


having everything from a user in a tree with a root hash - easier replication
https://github.com/bluesky-social/adx/blob/main/docs/architecture.md#personal-data-repositories


routing endpoints for accounts - advertised by their IDMs

giving different types of permissions to IDMs - for example the ability to change your name without a sig from you

2 types of edit commands: non-branching and branching
what if IDMs allow us to have pointers like HEAD in git?

friendship should be: you have a DM channel open - without a filter

apps can ask IDMs for state diffs for their users
what if idms had a protocol for being asked for "what's new since block X" - and them being able to give a merkle tree diff showing the changed elements and a list of the new elements (as URIs)

IDMs could be responsible for producing "streams" of the user activity - by simply referencing all activity from other applications (applications either need to notify the IDMs or IDMs need to monitor everything - for private data they probably need to be explicitly notified?)


"backups & exportability" section



FOR EXTRA LEVEL OF PRIVACY WHEN DM-ING OTHERS:
- Designated Verifier Proofs
    https://twitter.com/shreyjaineth/status/1637503285446803463
    https://ethresear.ch/t/designated-verifier-signatures/15100
    Protecting Private Communication Channels with Designated Verifier Proofs
    https://github.com/enricobottazzi/designated-verifier-proof
    



an IDM may also use a social recovery wallet instead of email as login - or just a normal wallet/keypair authorization

the more you rely on IDMs for features and data storage, the less sovereign you are.

security:
https://simplelogin.io/
https://twitter.com/SimpleLogin
https://haveibeenpwned.com/

an IDM should merge with your browsers

https://developer.apple.com/passkeys/

Today, advertisers blast and drip communications to users in hope of capturing attention at the right time. Tomorrow, advertisers can place a price on the cost of a message and pass along an embedded financial incentive for users to read it. We can imagine dynamic inboxes in the future where value can be attached to messages, and mail/messaging apps can automatically push value-laden messages to the top of the inbox. Inboxes themselves can monetize out of these rules, and give users flexibility to select filters or configurations that work while allowing advertisers to target high-value users.
https://multicoin.capital/2023/01/11/the-web3-growth-stack/



If an IDM does not let users bind keypairs then they should be boycotted

IDMs never get access to your private key


email and DMs should be the same thing

on DMs
http://www.backalleycoder.com/wp-content/uploads/2015/10/goat-to-cow-come-in-cow.jpg


query IDMs directly for content by person X - polling mechanics like RSS


https://solidproject.org/


DMs
https://github.com/farcasterxyz/protocol/issues/5


Permissions for different actions could be separated - for example requiring signatures for content while not requiring for updating follow connections.


access control

https://www.portis.io/
https://twitter.com/toruslabs
    https://tor.us/
https://twitter.com/Web3Auth



IDM - pay to cold-DM someone and be seen


- Blocking - through the IDM?
- how to keep progress bars for played audio/video? IDM?
- notifications - what is seen - managed between applications - IDM?



SOLVING THIS PROBLEM DeSo have thought about:
https://twitter.com/nadertheory/status/1480628981942525953
https://twitter.com/nadertheory/status/1480649481792024578


sessions as a concept? expiration of delegation?
https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4361.md
https://eips.ethereum.org/EIPS/eip-4361








These are [accounts](accounts.md) that can grant the ability to applications to post on behalf of accounts that are under the control of the ACM in question.



Identity managers can still be compromised and wreck havok, but this is an improvement to the status quo
TODO: problem: what happens if an ACM with control of millions of accounts stops behaving properly?
- users without keypairs are screwed
- users with keypairs will be sending on-chain messages but those will be huge and will clog the network
    - possible solution: batch them off-chain into 1000 batches, construct BLS aggregate sigs, sign a msg & transmit that along with a bitmap for which keys participated in the batching to a block.
    Users will need to coordinate off-chain & decide from which block to revoke the access, which other ACM should be approved, etc. This can be used in other scenarios too.
    https://ethresear.ch/t/2105
    https://ethresear.ch/t/pragmatic-signature-aggregation-with-bls/2105
    https://ethresear.ch/t/5427
    https://our.status.im/fastest-bls-signature-implementation/
    https://ethresear.ch/t/adding-cross-transaction-bls-signature-aggregation-to-ethereum/7844
    https://github.com/eth-infinitism/account-abstraction/pull/92
    https://medium.com/privacy-scaling-explorations/bls-wallet-bundling-up-data-fb5424d3bdd3
    OR use some ZK magic





https://fission.codes/blog/auth-without-backend/
https://ucan.xyz/
https://jwt.io/
 -->
