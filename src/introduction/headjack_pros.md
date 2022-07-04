# What Headjack gets right

- A specialized blockchain is required. Finance is mostly about specific accounts & energy preservation - no double spends (example: UTXOs care only about other UTXOs). Media is about data storage, retrievability, aggregation, indexing, discoverability, addressing, interlinking & archiving on a massive scale - it shouldn't be built on financial infrastructure.

- [Napkin math for web-scale](../implementation/scaling.md) is clear and front and center.

- Best [UX](https://en.wikipedia.org/wiki/User_experience)/[DX](https://en.wikipedia.org/wiki/User_experience#Developer_experience) because of the [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) and the use of identity managers ([IDMs](../implementation/ecosystem/IDM.md)) for on-chain authorization of interfaces. A global [singleton](https://en.wikipedia.org/wiki/Singleton_pattern) solves a lot of problems.
    - Users don't need keys & signatures and also don't care about the costs either.
    - Encapsulates the complexity in [UX](https://en.wikipedia.org/wiki/User_experience) & [DX](https://en.wikipedia.org/wiki/User_experience#Developer_experience) - the simplest mental model will win.
    - Full historical record of authorizations & ability to prove anything throughout time.

- [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): focus only on identity & the interest graph and don't try to do everything. It doesn't impose constraints on what could be built around it - [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns).

- Integers are the most well known, compact, and easy to work with data type - faster/easier indexing & querying versus content addressing, hashes, keypairs & signatures.

- [Content addressing](../introduction/addressing.md) with human-readable & persistent URIs with provable authenticity.

<div style="text-align: center;">
    <img src="../images/meme_one_does_not_simply.jpg">
</div>

<!-- one does not simply solve media
without logically centralizing identity, names, connections & anchoring through batching and custodial services
https://imgflip.com/memegenerator/One-Does-Not-Simply -->
