
<!--
https://en.wikipedia.org/wiki/Non-repudiation

-->

# Trust & the ledger of record

In the current web documents are [host-certified](problems_with_the_web.md#the-host-centric-web) and we refer to data by location instead of contents. Here we'll expand on problems with the status quo and list the benefits of building a [web of trust](https://en.wikipedia.org/wiki/Web_of_trust) at web-scale through [data-centric](host_vs_data_centric.md) addressing & [self-authenticating](https://en.wikipedia.org/wiki/Self-authenticating_document) documents tied to identity.

<!-- toc -->

# The ledger of record

We'll be able to computationally verify the authenticity of any document & tie it to an identity as long as we also have the proofs for it - giving birth to the [ledger of record](https://twitter.com/balajis/status/1459140902144729088) where argument from cryptography begins superseding argument from authority.

Anyone might have saved a specific document (& updates to it) locally along with the necessary proofs for authenticity even if most infrastructure no longer stores/serves it. There is a `1 of N` guarantee which allows documents that someone wants buried to be passed around with proofs and resurface in the public at a later point - improving accountability.

<!-- 
TODO:
In such an environment controversial and false claims are much easier to prove.
If even intranets and corps move to this addressing then whistpeblowing will be much more authentic. This is the mechanism for the biggest crimes to bubble up

The ability to do specific verifiable attribution to where a harm is coming from can increase our capacity to serve justice
Forced transparency !!!

https://en.wikipedia.org/wiki/Akashic_records

We could establish global [common knowledge](https://en.wikipedia.org/wiki/Common_knowledge_(logic)) through authenticity, reputation, and the ledger of record.

Another important aspect in improving coordination is to build applications that will help in forming common knowledge:

"The great privilege of the elites of the future will be to erase the computer information about them and assume their private identity again." - Marshall McLuhan

> "Common knowledge is often important for coordination. For example, a group of people might want to speak out about an issue, but only feel comfortable doing so if there’s enough of them speaking out at the same time that they have safety in numbers." [Vitalik](https://vitalik.ca/general/2022/06/12/nonfin.html)



> "We are choked with news and starved of history." - [Will Durant](https://www.goodreads.com/quotes/8716601-we-are-choked-with-news-and-starved-of-history)


> "Perhaps better history needs better databases." - [@balajis](https://twitter.com/balajis/status/1434110543564996612)
-->

---

Using screenshots of tweets in case the originals get deleted does not constitute evidence. The lack of authenticity is being routinely exploited - ["Shedding light on fraudulent takedown notices"](https://today.law.harvard.edu/shedding-light-on-fraudulent-takedown-notices/).

> "For example, thanks to the site’s record-keeping both of deletions and of the source and text of demands for removals, the law professor Eugene Volokh was able to identify a number of removal requests made with fraudulent documentation—nearly 200 out of 700 “court orders” submitted to Google that he reviewed turned out to have been apparently Photoshopped from whole cloth. The Texas attorney general has since sued a company for routinely submitting these falsified court orders to Google for the purpose of forcing content removals." - [source](https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/)

# The history of document updates

Today's web puts authenticity & certification of documents in the [hands of hosts](problems_with_the_web.md#the-host-centric-web) which can [do whatever they want](https://news.ycombinator.com/item?id=27690525) and rarely provide the option to see previous versions if edits have been made. The [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive) is hardly a mainstream tool which doesn't provide any cryptographic authenticity guarantees and can be compromised.

> "It is really tempting to cover for mistakes by pretending they never happened. Our technology now makes that alarmingly simple" - [source](https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/)

> "Society can’t understand itself if it can’t be honest with itself, and it can’t be honest with itself if it can only live in the present moment. It’s long overdue to affirm and enact the policies and technologies that will let us see where we’ve been, including and especially where we’ve erred, so we might have a coherent sense of where we are and where we want to go." - [source](https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/)

In Headjack updates to URIs are broadcasted but the previous versions remain - applications ought to display the latest state but should allow browsing the entire history of changes - like using Git.

# Deduplicating documents & traceability

An open paradigm with content addressing where data is shared between services would enable us to de-duplicate re-uploads as long as they are the same documents in terms of bytes because of the open nature of data - based on their hash. We'll be able to see when something first appeared & the discussion will be much less fractured between platforms and posts - leading to greater depth.

We'll be able to more easily [address parts of documents](names_and_paths.md#addressing-within-content) and share ranges of entire videos without having to re-upload them as separate clips which breaks the contextual link. If this becomes as easy as (or even easier than) it currently is to crop & re-upload, then it will become the norm - we'll all prefer not losing the context. In this paradigm [deepfakes](https://en.wikipedia.org/wiki/Deepfake) will be easier to spot & fight - tracing the source of content authentically to identity is important & desirable.

TODO: regarding deepfakes - only official statements could be traced - unofficial leaks will still be unprovable

# Verifiable credentials

Entities can sign messages that attest facts about other accounts - the creation of such [verifiable credentials](https://en.wikipedia.org/wiki/Verifiable_credentials) doesn't have to happen on-chain - they can be issued off-chain with a message that's only anchored on-chain and has a URI. [`"issuance is common, revocation is rare"`](https://vitalik.ca/general/2022/06/12/nonfin.html#modifying-and-revoking-attestations) - later revocations & updates can be handled in one of 2 ways:
- On-chain revocation/updates: if the attestations are uniquely numbered with a counter from the issuer using a [nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce), then the Headjack state can be extended to support a special `revocation list` field in which the chain can record revocations at specific blocks - then the validity of said attestations will be checkable with a single query to the blockchain state. For updates there would be a second list and in order to check the validity for an attestation after an update has been recorded for its nonce, users would need to fetch the off-chain anchored message corresponding to the update at the block at which it was flagged. The blockchain may charge periodic fees for state rent for these lists.
- Fully off-chain: in which case there will be some liveness assumptions around the issuer for checking if an attestation has been revoked/updated.

<!-- TODO: POAP
https://www.google.com/search?q=poap&oq=poap&aqs=chrome..69i57j0i512l9.912j0j7&sourceid=chrome&ie=UTF-8 -->

# Reputation systems

We don't need oracles, tokens, automatic on-chain settlement & markets through smart contracts to build reputation systems for predictions & promises - all we need is to immutably sequence predictive messages that are authentically linked to identity and plot the results - the open nature of the data would disincentivize platforms to display it incorrectly which is enough - we trust block explorers after all.

Take the [Tipranks](https://www.tipranks.com/) platform as an example - we can generalize it for anyone in the world - not just for certified financial advisors. The reality is that millions of people are effectively guilty of shilling, despite some preficing it with the infamous [`"this is not financial advice"`](https://twitter.com/DegenSpartan/status/1552968186605490176). We can self-regulate the crypto & financial industries bottom-up in a decentralized way - steps:
1. come up with the base set of extensible prediction message types
2. build the tools that plot predictions versus a price feed
3. demand that influencers use the specific types of messages for predictions
4. refuse to listen to accounts that don't use that format and build the habit to check track records before listening to someone - this can (and will) become a social norm
5. let the [chips fall where they may](https://twitter.com/TSLAgang/status/1433896307702353921)

Message types can be in an extensible inheritance hierarchy and have "fallback" translation mechanisms defined in their on-chain schema for platforms that don't support specific leaf types. As an example: on-chain schema `42` can have the following template for serialization: `"{asset} has an {probability} chance of being {above_or_below} {price} by {date}"`, and thus a basic application that encounters `{message_type: "42", asset: "$BTC", date: "2025.02.12", above_or_below: "above", price: "100000$", probability: "80%"}` could render `"$BTC has an 80% chance of being above 100000$ by 2025.02.12"`. Or there could be a message type with spline curves. This way the system can evolve even if applications move at different pace and there's no consensus on the evolution of messages - it will naturally happen. Rigidness and/or lack of consensus for such standards has been the bane for many open systems.

The argument that specialized message types are unnecessary because AI will eventually be able to classify things properly is mute - lets get something that is unambiguous and working now - structure is good. The use case for reputation goes beyond finance.

<!-- Perhaps the reputation system can be abused - by making 100 accounts and building different prediction timelines throughout time and then using only the winners - this page should be treated just as a starting point and isn't trying to provide all the answers. -->

> "Finally, self-authenticating data provides more mechanisms that can be used to establish trust. Self-authenticated data can retain metadata, like who published something and whether it was changed. Reputation and trust-graphs can be constructed on top of users, content, and services. The transparency provided by [verifiable computation](https://en.wikipedia.org/wiki/Verifiable_computing) provides a new tool for establishing trust by showing precisely how the results were produced. We believe verifiable computation will present huge opportunities for sharing indexes and social algorithms without sacrificing trust, but the cryptographic primitives in this field are still being refined and will require active research before they work their way into any products." - [bluesky](https://blueskyweb.xyz/blog/3-6-2022-a-self-authenticating-social-protocol)










