---
description: What is Headjack
---

# What is Headjack

<!-- <object width=100% data="images/Untitled-2022-06-08-1154.svg"></object> -->

<!-- <div width=100% style={{backgroundColor: "green", overflow: "auto"}}> -->
<!-- add # before include for the preprocessor to work -->
<!-- {{include images/Untitled-2022-06-08-1154.svg}} -->
<!-- </div> -->
<!-- have to manually remove the size of the svg tag from the file after each export -->
<!-- also should replace href="https:// with href=" after each export -->
<!-- https://github.com/rust-lang/mdBook/issues/773 -->

Headjack is a blockchain that links sovereign identities to content at [web-scale](principles.md#web-scale-blockspace--the-unix-philosophy). Key points:

- Creation is fundamentally different from transfers and exchange of value - the design space around trust & data availability for media and identity is different from finance.

<!-- 
It is not about less or more trust but about better trust.

Headjack is about better trust - not trustlessness

creational - not transactional

# Motto: <s>TRUSTLESS</s> ***BETTER TRUST***

Headjack does sequencing of events.

Breaking apart identity and media allows for better incentives

it does not deal with storage and neither with routing - any kind of routing can be implemented on top of it with the advantage of addressing content in bulk or by source (publisher or creator)

 -->

- Following the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) - in Headjack identity is simply an identifier (unique number) and anything orthogonal (KYC, profiles, privacy, finance) can be layered on top of it.

- It solves single sign-on and allows for user experience similar to Web2 through [hierarchical authorization management](identity.md) - keypairs are not required by default and even those with keys bound to their accounts may choose to not explicitly sign every interaction.

- Consensus is reached on the absolute bare minimum - the history of authorizations, names, keys & off-chain content anchors (merkle roots) - the simplest mental model for developers.

- Headjack can support **billions** of accounts and link **unlimited** amounts of off-chain activity to them. The [entire web](principles.md#web-scale-blockspace--the-unix-philosophy) can be rebuilt on top of it - a claim that is [easily provable](numbers.md).

- [Content addressing](addressing.md) is with persistent & human-readable URIs (instead of hashes) - the link between identity and data is cryptographically provable even if keys & names have changed.

- It doesn't deal with off-chain data storage and retrievability - those are separate problems and Headjack simply lets entities point to ways for others to retrieve addressable content.

<!-- - The move from the current [host-centric](host_centric.md#the-host-centric-web--its-decay) web towards [data-centric](host_vs_data_centric.md) addressing represents a paradigm shift around data ownership & access - an architectural reset of the internet. -->

---

The talk [`"Decentralized identity & content addressing at web-scale"`](https://www.youtube.com/watch?v=pEl2vLTStWE) at code::dive 2022 is a good high-level overview of the protocol and covers the most important technical aspects:

<a href="https://www.youtube.com/watch?v=pEl2vLTStWE"><img src="/img/youtube_first_talk_thumbnail.png"/></a>

The talk [`"Internet 2.0: The Global Brain"`](https://www.youtube.com/watch?v=DKhuw820Zhc) at code::dive 2023 is a good high-level overview of what the Internet could look like if everything was rebuilt on top of the protocol:

<a href="https://www.youtube.com/watch?v=DKhuw820Zhc"><img src="/img/youtube_first_talk_thumbnail.png"/></a>

# Book structure

- **What is Headjack** - How the protocol technically works and how things like applications, services, DMs, social graphs, preferences, etc. could be implemented - the building blocks necessary to recreate anything from Web2 and beyond.

<!-- how it compares with other projects -->

- **Why Headjack** - What's broken with the web and a blueprint for what is possible - services, business models, infrastructure, algorithms, markets, metaverse, etc.

- **Implementation of Headjack** - A detailed specification of the implementation.

# What is Headjack

import DocCardList from '@theme/DocCardList';

<DocCardList />

Named after the [data port at the back of the head](https://matrix.fandom.com/wiki/Headjack) of synthetically-grown humans in the Matrix.

<!-- https://www.youtube.com/watch?v=DoUQhYDz-Ys -->

<div style={{textAlign: "center"}}>
    <img src="/img/logo.png"/>
</div>
