# Authenticity

In the current web documents are [host-certified](problems.md#the-host-centric-web) and we refer to data by location instead of contents - checkout the [host-centric](../introduction/host_centric.md) page. Here we'll further expand on problems with the status quo and 
list the benefits of building a [web of trust](https://en.wikipedia.org/wiki/Web_of_trust) at web-scale through [data-centric](../introduction/data_centric.md) addressing & [self-authenticating](https://en.wikipedia.org/wiki/Self-authenticating_document) documents in an open ecosystem with freely shared public data tied to identity.

## Deduplicating documents & traceability

An open paradigm with content addressing where data is shared between services would enable us to de-duplicate re-uploads as long as they are the same documents in terms of bytes because of the open nature of data - based on their hash. We'll be able to see when something first appeared & the discussion of content will be much less fractured between platforms and posts - leading to greater depth & nuance.

We'll be able to more easily [address parts of documents](../introduction/names_and_paths.md#addressing-within-content) and share ranges of entire videos without having to re-upload them as separate clips which breaks the contextual link. If this becomes as easy as it currently is to crop & re-upload (or even easier) then it will become the norm - we'll all prefer not losing the context. In this paradigm [deepfakes](https://en.wikipedia.org/wiki/Deepfake) will be easier to fight - tracing the source of content authentically to identity is important & desirable.

## Viewing the history of edits of documents

TODO:

ledger of record

we are building our digital history on [shifting sands](https://news.ycombinator.com/item?id=27690525) without a solid foundation.**

> "Society can’t understand itself if it can’t be honest with itself, and it can’t be honest with itself if it can only live in the present moment. It’s long overdue to affirm and enact the policies and technologies that will let us see where we’ve been, including and especially where we’ve erred, so we might have a coherent sense of where we are and where we want to go." - [source](https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/)

> "It is really tempting to cover for mistakes by pretending they never happened. Our technology now makes that alarmingly simple" - [source](https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/)

We need to make it simpler to prove authenticity & show the history of edits

As git

> "The public’s interest in seeing what’s changed—or at least being aware that a change has been made and why—is as legitimate as it is diffuse. And because it’s diffuse, few people are naturally in a position to speak on its behalf." - [source](https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/)

lets try to achieve consensus on ground truth with the ledger of record
https://en.wikipedia.org/wiki/Ground_truth


<!--
Wikipedia has changed the definition of recession.
https://twitter.com/unusual_whales/status/1552795537052618752
-->

the internet archive does not provide any cryptographic authenticity guarantees


no more tweets with a few screenshots of other tweets - these should be composable & carrying the actual data/references/proofs


## Falsification of data as a business model

The lack of document authentication can be exploited - ["Shedding light on fraudulent takedown notices"](https://perma.cc/5ZC2-P4JM)


https://perma.cc/5ZC2-P4JM
https://perma.cc/JA33-F7F9?type=image



> "For example, thanks to the site’s record-keeping both of deletions and of the source and text of demands for removals, the law professor Eugene Volokh was able to identify a number of removal requests made with fraudulent documentation—nearly 200 out of 700 “court orders” submitted to Google that he reviewed turned out to have been apparently Photoshopped from whole cloth. The Texas attorney general has since sued a company for routinely submitting these falsified court orders to Google for the purpose of forcing content removals." - [source](https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/)

## Reputation systems

We don't need oracles, tokens, automatic on-chain settlement & markets through smart contracts to build reputation systems for predictions - all we need is to immutably sequence predictive messages that are authentically linked to identity, process the data and provide our results - the open nature of the data would disincentivize platforms to display it incorrectly which is enough - we trust block explorers after all.

Take the [Tipranks](https://www.tipranks.com/) platform as an example - we can generalize it for anyone in the world - not just for certified financial advisors. The reality is that millions of people are effectively guilty of shilling, despite some preficing it with the infamous [`"this is not financial advice"`](https://twitter.com/DegenSpartan/status/1552968186605490176). We can self-regulate the crypto & financial industries bottom-up in a decentralized way - steps:
1. come up with the base set of extensible prediction message types
2. build the tools that plot predictions versus a price feed
3. demand that influencers use the specific types of messages for predictions
4. refuse to listen to accounts that don't use that format and build the habit to check track records before listening to someone - this can (and will) become a social norm
5. let the [chips fall where they may](https://twitter.com/TSLAgang/status/1433896307702353921)

Message types can be in an extensible inheritance hierarchy and have "fallback" translation mechanisms defined in their on-chain schema for platforms that don't support specific leaf types. As an example: on-chain schema `42` can have the following template for serialization: `"{asset} has an {probability} chance of being {up_or_down} {price} by {date}"`, and thus a basic interface that encounters `{message_type: "42", asset: "$BTC", date: "2025.02.12", up_or_down: "above", price: "100000$", probability: "80%"}` could render `"$BTC has an 80% chance of being above 100000$ by 2025.02.12"` to its users. Or there could be a message type with spline curves. This way the system can evolve even if interfaces move at different pace and there's no consensus on the evolution of messages - it will naturally happen. Rigidness and/or lack of consensus for such standards has been the bane for many open systems. This can go beyond just finance - we can crowdsource reputation for anything with a data feed.

The argument that specialized message types are unnecessary because AI will eventually be able to classify things properly is mute - lets get something that is unambiguous and working now - structure is good.

Perhaps the reputation system can be abused - by making 100 accounts and building different prediction timelines throughout time and then using only the winners - this page should be treated just as a starting point and isn't trying to provide all the answers.

> "Finally, self-authenticating data provides more mechanisms that can be used to establish trust. Self-authenticated data can retain metadata, like who published something and whether it was changed. Reputation and trust-graphs can be constructed on top of users, content, and services. The transparency provided by [verifiable computation](https://en.wikipedia.org/wiki/Verifiable_computing) provides a new tool for establishing trust by showing precisely how the results were produced. We believe verifiable computation will present huge opportunities for sharing indexes and social algorithms without sacrificing trust, but the cryptographic primitives in this field are still being refined and will require active research before they work their way into any products." - [bluesky](https://blueskyweb.xyz/blog/3-6-2022-a-self-authenticating-social-protocol)



TODO:
https://twitter.com/balajis/status/1360413999712538627








