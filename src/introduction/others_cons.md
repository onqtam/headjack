# What others get wrong

A list of problems with the contenders in the decentralized identity/media space:

- No credible path to [web-scale](../introduction/web_scale.md) - some will hit a wall even at 1 million users. Most are vague around their scalability & data structure and don't put it [front and center](../implementation/scaling.md) - obfuscating the most important bit. Instead of focusing on NFTs & developer APIs, start with the data and work up from that. Fake it till you make it is not a viable strategy with the wrong foundation.

- Too financialized & trying to do too much - profiles & posts as NFTs, marketplaces, fan coins, tipping, content creator incentives.

    ` "However, a downside I’ve observed in social networks where content is monetized is that user behavior becomes transparently driven by monetary incentives in ways that feel less genuine. This applies to influencer culture on Instagram as well, but cryptocurrency social networks bake it in from the start."` - [Jay Gerber](https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970)

- Users shouldn't need to use a token, use a wallet, or self-host to benefit from decentralized identity & an open interest graph. Most people will always use custodial services.

    `"People don’t want to run their own servers, and never will."` - [Moxie](https://moxie.org/2022/01/07/web3-first-impressions.html)

- Linking online identity to financial accounts on Ethereum/Solana/etc will have unintended consequences - a bad default.

- Federated ones lack [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) which leads to fragmentation and [no discoverability](https://github.com/mastodon/mastodon/issues/9529).

- Some are solving just identity & the graph - without easy & persistent [content addressing](../introduction/addressing.md).

- Some use chains such as Ethereum for [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) & store vector commitments (Merkle roots) for events around [key management](https://blog.ceramic.network/key-revocation-in-self-certifying-protocols/) (rotations, authorizations, sessions & revocations) but the problem of the data availability for whatever is committed remains unsolved and different solutions around it would lead to complexity and trust.

- Some lack an incentive layer and/or are focused on specific types of social media.

- Complexity & lack of clarity - distributed systems engineers shouldn't have a hard time figuring out how they work & what the limitations are. Why build on something that others are probably having a hard time understanding as well and soon may not be around? `"Developers care about risk."` - [Haseeb](https://haseebq.com/why-decentralization-isnt-as-important-as-you-think/)

TODO: time to finality matters for UX (for those anchoring to Bitcoin)

TODO: Just publishing vector commitments (Merkle roots) as many other off-chain key management solutions are doing adds a lot more complexity and questions around making the committed data available & retrievable - putting as much as possible on-chain is a much simpler model.







the complexity of the competitors is not encapsulated - instead anyone building around them would have to think about so much more
edge cases, failure scenarios
the simplest mental model would win

Require educating end-users on complex crypto/web3 concepts

Bearish on social recovery, multisigs and whatnot for billions of people - not scalable
bearish on wallet-based authentication

Historic record for the keys for every piece of content

TODO: mention authentication flows somewhere - as a term

> "With consumer products, simple and “wrong” beats complicated and “right.”" - [@naval](https://twitter.com/naval/status/1542651322532384768)