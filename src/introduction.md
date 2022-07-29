# Headjack - the base layer of cyberspace

Headjack is an [open state database](https://twitter.com/balajis/status/1123092897664880640) designed for [web-scale](introduction/web_scale.md) media (in the billions of users) that addresses the most fundamental pieces of the puzzle: identity, connections, names and [content addressing](introduction/addressing.md) with human-readable & persistent [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) paths (instead of hashes) all packaged in a credibly neutral & self-sustaining blockchain. It is [aiming](motivation/ambition.md) to disaggregate the giants and end network effect monopolies & data silos by aligning incentives and acting as the backend network that users won't even need to know about by striking the right set of tradeoffs. It is engineered from first principles - building up from the data to support billions of users and a [customer obsession](https://twitter.com/arvanaghi/status/1537519858233008128) for the best UX - there will be no mass adoption without retaining the comforts and UX of Web2 that we've become so accustomed to.

<!-- 
TODO:


- "An act of creation is fundamentally different from an act of transfer."

sovereign identity & data-centric addressing are the bedrock of the future web


In Headjack identity is simply a number.

Identity means different things depending on the context but at the end of the day at the root of it there is an identifier - any type of use case specialization can be built around that - KYC is orthogonal to having identity & being able to associate content to it for online publishing at web-scale - there are no limits to the amount of content that can be created & addressed - both in terms of quantity and size.

Headjack focuses on the essence - everything else can be built around it.

It also specifies protocols & standards for connections, DMs, message types, etc. - basically all the building blocks necessary for a fully fledged ecosystem. Any existing web2 service can be recreated on top of it, but the doors are open for the next step of innovation (possibilities).

"the ability to link content to users without limits"

TODO: link to the pillars

This book lays out a blueprint and yet the core technology is minimal and unopinionated

What you don't want is for these identifiers to be fractured between many platforms with different standards & formats. The simplest unified singleton model wins.

a blueprint for the future web


The core value proposition is the ability to link infinite amounts of data to identity and sequence that throughout time.


`"The internet creates 1 giant aggregator for everything"` - [@naval](https://youtu.be/3qHkcs3kG44?t=3527)

    KISS

    UNIX philosophy -->



Headjack is an information network. It solves identity & universal sign-on. It is an addressability layer that is agnostic to the means of delivery. It is an index and a historian - the [ledger of record](https://twitter.com/balajis/status/1459140902144729088).

The following sub-chapters convey the idea (**what**) and a high-level view of how it works:
1. [On-chain vs off-chain](introduction/on_off_chain.md)
2. [Guiding principles](introduction/principles.md)
3. [Identity & authorization](introduction/identity.md)
4. [Messages](introduction/messages.md)
5. [Account preferences & graph](introduction/account_preferences.md)
6. [Content addressing](introduction/addressing.md)
    1. [Today's web: host-centric](introduction/host_centric.md)
    2. [The data-centric ledger of record](introduction/data_centric.md)
    3. [Blob structure & addressing](introduction/blob_structure.md)
    4. [Persistent & provable URIs](introduction/uris.md)
    5. [Names & paths](introduction/names_and_paths.md)
7. [Web-scale & UX](introduction/web_scale.md)
8. [Numbers](introduction/numbers.md)
9. [Competition](introduction/competition.md)
    1. [What others get wrong](introduction/others_cons.md)
    2. [What Headjack gets right](introduction/headjack_pros.md)
    3. [Competing projects (list)](introduction/others_list.md)
    4. [Shortcomings of Headjack](introduction/headjack_cons.md)

But the vision would be incomplete without the subsequent [**why**](motivation/philosophy.md) and more detailed [**how**](blockchain.md).

<div style="text-align: center;">
    <img src="images/logo.png">
</div>

Inspired by the [data port at the back of the head](https://matrix.fandom.com/wiki/Headjack) of synthetically-grown humans in the Matrix.

<!-- https://www.youtube.com/watch?v=DoUQhYDz-Ys -->
