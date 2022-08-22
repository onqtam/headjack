# Headjack vs the competition

This chapter focuses only on the disadvantages of some of the more high-profile competing solutions in the space when compared to Headjack and doesn't list any of their positives as it would be too long (so not exhaustive by any means) but many of them have served as an inspiration for Headjack in one way or another. Corrections for any inaccuracies are welcome!

# What others get wrong

A list of problems with the contenders in the decentralized identity/media space:

- No credible path to [web-scale](web_scale.md) - some will hit a wall even at 1 million users. Most are vague around their scalability & data structures and don't put it [front and center](numbers.md) - obfuscating the most important bit. Instead of focusing on NFTs & developer APIs, start with the data and work up from that. Fake it till you make it is not a viable strategy with the wrong foundation.

- Complexity & lack of clarity - distributed systems engineers should easily figure out how they work & what the limitations are. Why build on something that others are probably having a hard time understanding as well and may not be around in the future?
    - > "Developers care about risk." - [Haseeb](https://haseebq.com/why-decentralization-isnt-as-important-as-you-think/)

- Too financialized & trying to do too much - profiles & posts as NFTs, microtransactions, marketplaces, fan coins, tipping, content creator incentives.

    - > "However, a downside I’ve observed in social networks where content is monetized is that user behavior becomes transparently driven by monetary incentives in ways that feel less genuine. This applies to influencer culture on Instagram as well, but cryptocurrency social networks bake it in from the start." - [Jay Gerber](https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970)

- Users shouldn't need to use a token, use a wallet, or self-host to benefit from decentralized identity & an open social graph. Most people will always use custodial services.

    - > "People don’t want to run their own servers, and never will." - [Moxie](https://moxie.org/2022/01/07/web3-first-impressions.html)

- Linking online identity to public financial accounts on Ethereum/Solana/etc will have unintended consequences - a bad default.

- Federated ones lack [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) which leads to fragmentation and [no discoverability](https://github.com/mastodon/mastodon/issues/9529).

- Some are solving just identity & the graph - without easy & persistent [content addressing](addressing.md).

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

<!-- What you don't want is for these identifiers to be fractured between many platforms with different standards & formats. -->

# What Headjack gets right

- A specialized blockchain is required. Finance is mostly about specific accounts & energy preservation - no double-spends (example: UTXOs care only about other UTXOs). Media is about data storage, retrievability, aggregation, indexing, discoverability, addressing, interlinking & archiving on a massive scale - it shouldn't be built on financial infrastructure.

- [Napkin math for web-scale](numbers.md) is clear and front and center.

- Best [UX](https://en.wikipedia.org/wiki/User_experience)/[DX](https://en.wikipedia.org/wiki/User_experience#Developer_experience) because of the [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) and the use of identity managers ([IDMs](IDM.md)) for on-chain authorization of interfaces. A global [singleton](https://en.wikipedia.org/wiki/Singleton_pattern) solves a lot of problems.
    - Users don't need keys & signatures and also don't care about the costs either.
    - Encapsulates the complexity in [UX](https://en.wikipedia.org/wiki/User_experience) & [DX](https://en.wikipedia.org/wiki/User_experience#Developer_experience) - the simplest mental model will win.
    - Full historical record of authorizations & ability to prove anything throughout time.

- [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): focuses only on identity & linking data to it without trying to do everything. It doesn't impose constraints on what could be built around it - [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).

- Integers are the most well-known, compact, and easy to work with data type - faster/easier indexing & querying versus content addressing, hashes, keypairs & signatures.

- [Content addressing](addressing.md) with human-readable & persistent URIs with provable authenticity.

<!-- <div style="text-align: center;">
    <img src="images/meme_one_does_not_simply.jpg">
</div> -->

<!-- one does not simply solve media
without logically centralizing identity, names, connections & anchoring through batching and custodial services
https://imgflip.com/memegenerator/One-Does-Not-Simply -->

