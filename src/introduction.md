# Headjack - the base layer of cyberspace

<!-- Headjack is an [open state database](https://twitter.com/balajis/status/1123092897664880640) designed for [web-scale](web_scale.md) media (in the billions of users) that addresses the most fundamental pieces of the puzzle: identity, connections, names and [content addressing](addressing.md) with human-readable & persistent [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) paths (instead of hashes) all packaged in a credibly neutral & self-sustaining blockchain.

It is [aiming](ambition.md) to disaggregate the giants and end network effect monopolies & data silos by aligning incentives and acting as the backend network that users won't even need to know about by striking the right set of tradeoffs. It is engineered from first principles - building up from the data to support billions of users and a [customer obsession](https://twitter.com/arvanaghi/status/1537519858233008128) for the best UX - there will be no mass adoption without retaining the comforts and UX of Web2 that we've become so accustomed to. -->

Headjack is a blockchain that links sovereign identities to content throughout time. Key points:

- Creation is fundamentally different from transfers and exchange of value - the design space around trust & data availability for media and identity is different from finance.

- Following the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) - in Headjack identity is simply an identifier (unique number) and anything orthogonal (KYC, profiles, privacy) can be layered on top of it. <!-- through data associations -->

- It solves single sign-on and allows for user experience similar to Web2 through [hierarchical authorization management](identity.md) - keypairs are not required by default and even those with keys bound to their accounts may choose to not explicitly sign every interaction.

- Consensus is reached on the absolute bare minimum - the history of authorizations, names, keys & off-chain content anchors (merkle roots) - the simplest mental model for developers.

- Headjack can support **billions** of accounts and link **unlimited** amounts of off-chain activity to them. The [entire web](web_scale.md) can be rebuilt on top of it - a claim that is [easily provable](numbers.md).

- [Content addressing](addressing.md) is with persistent & human-readable URIs (instead of hashes) - the link between identity and data is cryptographically provable even if keys & names have changed.

- It doesn't deal with off-chain data storage and retrievability - those are separate problems and Headjack simply lets entities point to ways for others to retrieve addressable content.

- The move from the current [host-centric](host_centric.md) web towards [data-centric](data_centric.md) addressing represents a paradigm shift around data ownership & access - an architectural reset of the internet.

# Book structure

- **Introduction (what)** - How the protocol technically works, how it compares with other projects, and how things like DMs, social graphs, preferences, etc. could be implemented - the building blocks necessary to recreate anything from Web2 and beyond.

- **Motivation (why)** - What's broken with the web and a blueprint of what could be possible - services, business models, infrastructure, algorithms, moderation, markets, metaverse, etc.

- **Execition (how)** - A detailed specification of the implementation and other standards.

# Introduction (what)

<!-- The following sub-chapters convey the idea (**what**) and a high-level view of how it works: -->
1. [On-chain vs off-chain](on_off_chain.md)
2. [Guiding principles](principles.md)
3. [Identity & authorization](identity.md)
4. [Messages](messages.md)
5. [Account preferences & graphs](account_preferences.md)
6. [Content addressing](addressing.md)
    1. [Today's web: host-centric](host_centric.md)
    2. [Data-centric addressing](data_centric.md)
    3. [Blob structure & addressing](blob_structure.md)
    4. [Persistent & provable URIs](uris.md)
    5. [Names & paths](names_and_paths.md)
7. [Web-scale & UX](web_scale.md)
8. [Numbers](numbers.md)
9. [Competition](competition.md)
    1. [What others get wrong](others_cons.md)
    2. [What Headjack gets right](headjack_pros.md)
    3. [Competing projects (list)](others_list.md)
    4. [Shortcomings of Headjack](headjack_cons.md)

<!-- But the vision would be incomplete without the subsequent [**why**](philosophy.md) and more detailed [**how**](execution.md). -->

<div style="text-align: center;">
    <img src="images/logo.png">
</div>

Inspired by the [data port at the back of the head](https://matrix.fandom.com/wiki/Headjack) of synthetically-grown humans in the Matrix.

<!-- https://www.youtube.com/watch?v=DoUQhYDz-Ys -->
