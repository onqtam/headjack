# What others get wrong

A list of problems with the contenders in the decentralized identity/media space:

- No credible path to [web-scale](../introduction/web_scale.md) - some will hit a wall even at 1 million users. Most are vague around their scalability & data structures and don't put it [front and center](../introduction/numbers.md) - obfuscating the most important bit. Instead of focusing on NFTs & developer APIs, start with the data and work up from that. Fake it till you make it is not a viable strategy with the wrong foundation.

- Complexity & lack of clarity - distributed systems engineers should easily figure out how they work & what the limitations are. Why build on something that others are probably having a hard time understanding as well and may not be around in the future?
    - > "Developers care about risk." - [Haseeb](https://haseebq.com/why-decentralization-isnt-as-important-as-you-think/)

- Too financialized & trying to do too much - profiles & posts as NFTs, microtransactions, marketplaces, fan coins, tipping, content creator incentives.

    - > "However, a downside I’ve observed in social networks where content is monetized is that user behavior becomes transparently driven by monetary incentives in ways that feel less genuine. This applies to influencer culture on Instagram as well, but cryptocurrency social networks bake it in from the start." - [Jay Gerber](https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970)

- Users shouldn't need to use a token, use a wallet, or self-host to benefit from decentralized identity & an open interest graph. Most people will always use custodial services.

    - > "People don’t want to run their own servers, and never will." - [Moxie](https://moxie.org/2022/01/07/web3-first-impressions.html)

- Linking online identity to public financial accounts on Ethereum/Solana/etc will have unintended consequences - a bad default.

- Federated ones lack [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) which leads to fragmentation and [no discoverability](https://github.com/mastodon/mastodon/issues/9529).

- Some are solving just identity & the graph - without easy & persistent [content addressing](../introduction/addressing.md).

- Social media is about aggregated views at scale - not p2p and direct comms.

    - > "The emphasis of a social network is on "propagation" aka, propaganda." - [didibus](https://news.ycombinator.com/item?id=25735773)

- Some use chains such as Ethereum for [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) & store vector commitments (Merkle roots) for events around [key management](https://blog.ceramic.network/key-revocation-in-self-certifying-protocols/) (rotations, authorizations, sessions & revocations) but the data availability problem for whatever is committed is unsolved.
    - The complexity is not encapsulated - there are many open questions, edge cases & failure scenarios and it would inevitably lead to assumptions & trust.
    <!-- - Many focus just on the latest keypairs and don't sequence the signed actions throughout time  - much harder to prove that content generated with an older keypair was indeed legitimate at the time of creation and generated back in time instead of fraudulently constructed later on if the keypair is compromised. -->
    - Some anchor to Bitcoin but the time to finality matters a lot for UX - 10-minute block times with probabilistic finality is horrendous.

- Some lack an economic incentive layer.

    - > "Show me the incentive and I will show you the outcome." - [Charlie Munger](https://quotefancy.com/quote/1561882/Charlie-Munger-Show-me-the-incentive-and-I-will-show-you-the-outcome)


<!-- other projects lack a vision of what could be built and what it would look like
https://twitter.com/liron/status/1547225903176028160 -->

