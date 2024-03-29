---
draft: true
---

# Algorithms, feeds & aggregation

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

<!--

Multidimensional subscriptions & areas of interest can aid algorithms to serve more relevant content

-->


The most important aspect of today's media are the [recommendation systems](https://en.wikipedia.org/wiki/Recommender_system) that guide our attention and ultimately our thoughts, opinions & culture at scale. Most algorithms we use are [black boxes](problems_with_the_web.md#black-boxes--algorithmic-bias) - we don't know what they are nor how the ML models are parameterized & trained and if there's any (intentional) bias. And even if that was public information - there would be no way to check because we don't have access to the data either. Furthermore, nobody can build new competing indexes, models & recommendation engines and we're left with the lowest common denominator that optimizes mostly for engagement & time spent in the attention economy.



## Verifiable algorithms, indexes & models

we should be able to request all inputs that went into an aggregate and verify the calculation locally ourselves

Within Headjack, all public data is freely accessible and the [data network effect](https://mattturck.com/the-power-of-data-network-effects/) is shared by every actor in the ecosystem - anyone can train new ML models, compute views and analyze data in new ways. There will be demand for all kinds of indexes & models but because entry is permissionless a market will appear and the ones that process data the most efficiently will be rewarded. The results of such batch processing jobs could be public or private (available only to those who pay for access) and the product would be verifiable - either optimistically (trust by default but with the option to recreate them and check for equivalence at some cost) or through [verifiable computation](https://en.wikipedia.org/wiki/Verifiable_computing).

> "Rather, many, many different individuals and organizations would be able to tweak the system to their own levels of comfort and share them with others—and allow the competition to happen at the implementation layer, rather than at the underlying social network level." - [Protocols, Not Platforms: A Technological Approach to Free Speech](https://knightcolumbia.org/content/protocols-not-platforms-a-technological-approach-to-free-speech)

## Feeds & home pages

We have no control over what social media shows us - we're presented with their best attempt at engaging us and nothing more. Feeds are primitive/limited and have their own agenda. Once access to data has been democratized we could finally have a choice as new entrants will differentiate themselves in ways that weren't possible before. What if:
- you want [the first thing you see to be a dashboard](https://twitter.com/balajis/status/1442863553497554944) with graphs & charts about the things you care about instead of an endless feed to scroll?
- instead of a feed you were shown a map with events grouped by category/people/activity so you could choose selectively which zones to "zoom" into based on your interest?
- you're interested in all events from the past week - not just those from the last 24 hours?
- you want things sorted differently, or to tune out certain kinds of content?
- you want your video feed to show content that people you follow have engaged with?

## Signaling preferences

Events coming from an application are an advertisement for it because the URIs point to it as the source - users are effectively signaling what UI, filtration & content moderation they prefer.

<!-- TODO: 2 words: mimetic desire

Imagine publicly stating what you want to filter out of your life and then others observing which apps you choose. This is a way to signal personal preferences you'd like with everyone - we are mimetic creatures -->

But this can be pushed a lot further - using public [message types](messages.md) more specific preferences within one application (and compatible with others) could be signaled. The choice of recommendation algorithms, filtration criteria & moderation levels could be displayed in account profiles throughout all applications either as badges or in some other way. An application could accommodate a wide range of preferences by using different indexes & models which would be handled by infrastructure layers beneath them - reusable by all other applications that need them too.

This way of signaling fine-grained preferences could allow us to collectively migrate to better algorithms - by showing which interests & perspectives we've adopted ourselves. One value to signal would be to use algorithms & models that are transparent and not some [black box](problems_with_the_web.md#black-boxes--algorithmic-bias) - we could study how virality happens. What if some algorithm promotes [antisocial ultra viral content](https://twitter.com/balajis/status/1561032192947458048) close to the borderline of acceptability just for the sake of engagement? We could boycott it. And why not choose indexes & algorithms that up & down regulate specific accounts? Moderation could be done through a set of filters to which users opt in/out by toggling & layering - choosing what to amplify and what to tone down. Such preferences can also be private.

https://techcrunch.com/2018/11/15/facebook-borderline-content/

<!-- what if we could punish accounts that comment irrelevant things at famous people first just to get engagement? Have you seen the comments on any of Elon Musk's tweets? Engagement seeking irrelevant garbage -->

Currently social media skews our perception of the world because the vocal become viral - most people are quiet and rarely (if ever) post anything, but they do consume. We could let them signal their preferences and better gauge our values. **Preferences are a form of expression.**

## Aggregate sentiment - the big picture

TODO: add gif with an order book
how does the sentiment/order book relate to the overton window? The politically radical is on both ends and the current "market price" is the overton window
https://youtu.be/KN0f7vhDzvQ?t=1445

The aggregate sentiment on Twitter’s backend is analogous to a liquidity [order book](https://en.wikipedia.org/wiki/Order_book) with the [spread](https://en.wikipedia.org/wiki/Bid%E2%80%93ask_spread) being the [Overton window](https://en.wikipedia.org/wiki/Overton_window) - we could have a completely different understanding of society, history, and politics and have a societal mirror if not for the current information asymmetry that Big Tech has (point taken [from here](https://youtu.be/FV5SqIm5e90?t=883)). Furthermore, we cannot see the "border" between Twitter and Facebook in terms of users - even they (the companies) cannot because the data & backends are private (point taken [from here](https://youtu.be/FV5SqIm5e90?t=4631)).

TODO:
https://twitter.com/balajis/status/1581635513886253057
https://pbs.twimg.com/media/FfMYkpLVEAAOo_d?format=jpg&name=large

With open data, systems could show the overlap of communities and focus on what's shared and unites them - bridging the gap, making “the others” less foreign, and reducing polarization. We should be taking notes from Taiwan's civic hacktivism and their [Computational Democracy Project](https://compdemocracy.org/) & [G0v movement](https://en.wikipedia.org/wiki/G0v) - building better tools for social consensus & relaxing the culture war. Everything could be visualized through dashboards & graphs - including global [heat maps](https://en.wikipedia.org/wiki/Heat_map) of interests & activity based on topic/region/etc. Learning from history & making analogies could be [much more quantifiable and precise](https://twitter.com/balajis/status/1557247912874086400) if everything was in the ledger of record. We could [leverage AI](https://www.youtube.com/watch?v=WVEP0zAK-xQ&t=3952s) to surface human collective intelligence at scale in a transparent way.

> "The general trajectory of institutionalization associated with steadily increasing specialization, urbanization, and bureaucracy may mean that mass media will continue to rise in importance, playing the role of the juicy gossiper in our increasingly separated existence from one another." - [The Importance of Gossip Across Societies](https://publications.hse.ru/en/articles/135571129)

<!--

Bridging-Based Ranking - Author: Aviv Ovadya | May 17, 2022
How Platform Recommendation Systems Might Reduce Division and Strengthen Democracy
https://www.belfercenter.org/publication/bridging-based-ranking
twitter birdwatch uses it
https://www.wired.com/story/elon-musk-embraces-twitters-radical-crowdsourcing-experiment/


todo: read this
https://aviv.substack.com/p/platform-democracy-a-different-way-to-govern


SQL query for feed:
https://twitter.com/mbateman/status/1589011729618710528

https://ground.news/

https://www.improvethenews.org/

https://twitter.com/disclosetv/status/1557800191700393984

https://huggingface.co/blog/open_rail


privacy & algorithms:
- federated learning
- differential privacy
- secure multi-party computation
- homomorphic encryption - https://twitter.com/CompSciFact/status/1625264278059065347
TODO: WATCH THIS !!!
https://www.youtube.com/watch?v=10Qj0eYqbuo


Privacy-preserving Firefox telemetry with Prio
Prio - Private, Robust, and Scalable Computation of Aggregate Statistics
https://crypto.stanford.edu/prio/
https://rwc.iacr.org/2020/slides/Gibbs.pdf
https://hacks.mozilla.org/2018/10/testing-privacy-preserving-telemetry-with-prio/
https://blog.mozilla.org/security/2019/06/06/next-steps-in-privacy-preserving-telemetry-with-prio/
https://github.com/divviup/libprio-rs
Mozilla Security Research Summit 2019 - Privacy-preserving telemetry in Firefox
https://www.youtube.com/watch?v=w7AHAq-mU-M
Dr. Mariana Raykova (Google), INSAIT 2022 Conference: Exposure Notifications Private Analytics
https://www.youtube.com/watch?v=CqwhbD8gYqI


-->



