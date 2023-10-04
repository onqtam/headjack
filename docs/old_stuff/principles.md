<!--
FIX will/can/should and present tense discrepancies
-->

# Design - guiding principles

These are the guiding principles when aiming for mass adoption of Headjack:

<!-- toc -->

# Customer obsession & the best possible UX

It is highly improbable that the masses (and even most crypto natives) would tolerate services that are much worse (slow, limited & cumbersome) and [most of the competing attempts for decentralizing media](competition.md) are nowhere close. There are a few aspects to retaining the comforts and UX of Web2 that we've become so accustomed to:

<img src="/img/meme_make_them_learn.png" align="right" style="margin-left: 8px; width: 35%"/>

1. Nobody wants to deal with keys, wallets & self-custody because of all the headaches & complexities that come along with that. Creation & media are different from exchange & finance and it's OK to trust by default as long as there's [a fallback](#decentralization-neutrality--sovereignty). We should be aiming for **better trust** instead of trustlessness at the cost of UX. Users shouldn't have to manage keypairs on multiple devices & explicitly sign every interaction - by default they'll be logging into identity managers ([IDMs](IDM.md)) using email & passwords or [SSO](https://en.wikipedia.org/wiki/Single_sign-on) (`"login with Google"`) and would then be using these IDMs as [SSO](https://en.wikipedia.org/wiki/Single_sign-on) to authorize applications to post on their behalf without requiring keys & signatures - by delegating trust. This way the majority of Web2 identity & authentication plumbing can be reused with Headjack underneath as just another backend. `"Sign-in with Ethereum"` doesn't scale - we should aim for familiarity.

    > "With consumer products, simple and “wrong” beats complicated and “right.”" - [@naval](https://twitter.com/naval/status/1542651322532384768)

    > "The future of mass-market crypto experiences lies within apps that provide familiar, custodial experiences with the ability to graduate into non-custodial experiences." - [a16z](https://future.a16z.com/missing-link-web2-web3-custody-wallets/)

    > "If your social media app requires people to use public keys, then you probably don’t understand what “social” means." - [Matthew Green](https://twitter.com/matthew_d_green/status/1620832280955719681)

    <!-- > "If the goal is to onboard first-time crypto users, the experience must be custodial — at least to start." - [a16z](https://future.a16z.com/missing-link-web2-web3-custody-wallets/) -->

    <!-- > "Wallets, seed phrases, and gas for transactions are all inherently very unfriendly to the user, and until greater levels of abstraction exist, adoption will face headwinds. We must assume that the average user will not deal with the complexity we see today." - [Zee Prime capital](https://zeeprime.capital/web-3-middleware) -->

    <!-- > "If Web3 social is for the crypto community only - it will likely fail. It’s not enough to provide ideological motives. The key here is to introduce new forms of monetization which overlaps with the aforementioned “Web3 commerce” narrative. These new tools must be intuitive and easy to use." - [@mattigags](https://wrongalot.substack.com/p/the-next-big-crypto-narrative) -->

2. Users shouldn't have to think about and pay for the storage of their data & blockchain interactions by default - costs & complexity should be abstracted away & shifted to services in the background. Self-hosting is the opposite of [customer obsession](https://twitter.com/arvanaghi/status/1537519858233008128) - let's aim for simplicity.

    > "People don’t want to run their own servers, and never will." - [Moxie](https://moxie.org/2022/01/07/web3-first-impressions.html)

    > "So when we tell people that “if they want privacy” for their data they should just upload it to their local computer: tell them your local Computer Science professor did that, and the result is that he lost half the photos of his son’s birth." - [Matthew Green](https://twitter.com/matthew_d_green/status/1624462558118789123)

3. Content addressing should be with human-friendly URIs with names & numbers instead of being full of hashes - typical for Web3. We're used to adequate URLs where the domain of the platform/website & even the user name are present when identifying content - hashes make URIs much longer & harder to remember. Contrast that to [Headjack's addressing](addressing.md).

4. The applications built on top of the network must match the responsiveness of Web2 and exceed its functionality. `"Latency is not an option anymore"` - Amazon [found](https://www.gigaspaces.com/blog/amazon-found-every-100ms-of-latency-cost-them-1-in-sales) that every 100ms of latency cost them 1% in sales. 16 years ago Google [found](http://glinden.blogspot.com/2006/11/marissa-mayer-at-web-20.html) an extra 500ms in search page generation time dropped traffic by 20% - our irritable nature hasn't changed. Web2 isn't going anywhere - [`"market dynamics and the fundamental forces of centralization"`](https://moxie.org/2022/01/07/web3-first-impressions.html) dictate that the best services will be running on huge server racks in data centers with sophisticated caches & batch processing infrastructure due to data gravity.

    <img src="/img/data_gravity.png"/>

<!-- source: https://www.tigosolutions.com/feedstory/1030 -->

<!-- <img src="/img/meme_web2_web3_hands.jpg" align="right" style="margin-left: 8px; width: 35%"/> -->

# Web-scale, blockspace & the UNIX philosophy

People grossly underestimate the size of the web and the required infrastructure. Here are some decade old [twitter](https://www.internetlivestats.com/twitter-statistics/), [google](https://www.internetlivestats.com/google-search-statistics/) and [other](https://www.internetlivestats.com/) statistics and a few articles about what it takes to run Twitter: [1](http://highscalability.com/blog/2009/10/13/why-are-facebook-digg-and-twitter-so-hard-to-scale.html), [2](http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html), [3](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2016/the-infrastructure-behind-twitter-efficiency-and-optimization), [4](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2017/the-infrastructure-behind-twitter-scale), [5](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2021/processing-billions-of-events-in-real-time-at-twitter-). What was going on within a single minute of 2021 is [<ins>truly mind-boggling</ins>](https://www.domo.com/learn/infographic/data-never-sleeps-9):

<!-- (this picture is very incomplete) -->

<img src="/img/web_scale_techspot.webp"/>

<!--
https://www.techspot.com/news/91513-visualizing-minute-internet-2021.html
https://www.domo.com/data-never-sleeps
https://www.domo.com/blog/data-never-sleeps-hits-double-digits/
https://web-assets.domo.com/miyagi/images/product/product-feature-22-data-never-sleeps-10.png -->

<!-- <img src="https://static.techspot.com/images2/news/bigimage/2021/09/2021-09-30-image-32-j.webp"/> -->

Headjack follows the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) - it focuses only on [identity](identity.md) (identifiers represented as numbers & name ownership) & linking data/actions to it without trying to do anything orthogonal (data storage, KYC, profiles, privacy, finance, etc.) that can be layered on top. It doesn't impose constraints on what could be built around it - [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns). All kinds of systems with their own incentives, cryptoeconomics & guarantees can be implemented on top of this identity layer & [addressing](addressing.md). The on-chain vs off-chain tradeoff and what goes into the blockspace is as follows:

<!-- > "Expect the output of every program to become the input to another, as yet unknown, program." - [Unix Philosophy, Bell System Technical Journal, Jul-Aug 1978](https://archive.org/details/bstj57-6-1899) -->

<!-- > "By basing design on increasing levels of abstraction, layering greatly reduces complexity… Since each layer only uses the services of layers below, a layered system can be implemented and tested incrementally." - [Internet Architecture and Innovation](https://www.goodreads.com/book/show/8586192-internet-architecture-and-innovation) -->

- Consensus should be reached on the absolute bare minimum - only [identity](identity.md) (integers), the history of keypairs & authorizations, name ownership & anchors to off-chain activity need [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) and must be on-chain with guaranteed data availability.

- All other activity & data is stored off-chain ([IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) & other protocols) because of the sheer volume - it's ephemeral and its relevance fades with time. Most of it won't be stored forever but any piece can be backed up through archives & [IDMs](IDM.md). Events get cryptographically anchored with [Merkle roots](https://en.wikipedia.org/wiki/Merkle_tree) to the chain so that permissions, inclusion & sequence are provable.

>"Developers care about risk." - [Haseeb](https://haseebq.com/why-decentralization-isnt-as-important-as-you-think/)

It must be [**obvious & provable**](numbers.md) that the network has a **credible path to handling billions of users** if entrepreneurs are expected to jump on the opportunity. The easiest mental model will win over developers and users - [singletons](https://en.wikipedia.org/wiki/Singleton_pattern) & opinionated frameworks with a concrete direction are much simpler than a fractured landscape of standards, chains & bridges.

<!-- Most crypto projects are toys compared to what Web2 has been doing in the past couple of decades -->

> "Consistency is incredibly important for creating a compelling user experience." - [Moxie](https://signal.org/blog/the-ecosystem-is-moving/)

# Decentralization, neutrality & sovereignty

> "The Internet has succeeded in no small part because of its purposeful avoidance of any single controlling entity." - [source](https://www.ietf.org/archive/id/draft-nottingham-avoiding-internet-centralization-05.html)

- **Sovereignty**: Users should be able to own their identity & connections with a keypair **even if by default** their activity is managed by an [IDM](IDM.md) - resembling a custodial service.

- [**Credible neutrality**](https://nakamoto.com/credible-neutrality/) - Anyone can permissionlessly have a pseudonymous identity, buy a name, operate an [IDM](IDM.md), serve media through an application and publish & broadcast through Headjack using their identity. [Moderation & censorship](moderation.md) happen at the application & infrastructure level - freedom of speech is guaranteed, but not freedom of reach as that is up to the applications & services that serve media. Individuals will always be able to contact one another for private communication.

- Anyone can self-host & run software locally, browse the ecosystem, and fetch content & events from entities they've subscribed to (although quite bandwidth-intensive), but their experience will be extremely limited in that they won't be able to run any sort of query/filtration/feed algorithm at scale nor aggregate the activity of billions of people in real-time.

> "You can build something centralized on something decentralized but you can’t build something decentralized on top of something centralized. Decentralization is always the base layer." - [@RyanSAdams](https://twitter.com/RyanSAdams/status/1553776203621965826)

> "All systems consolidate as they age and grow. But a decentralized system that has consolidated is very different from one that started out centralized. A consolidated decentralized system can fall back to decentralization in crisis. Resilient." - [Gordon Brander](https://twitter.com/gordonbrander/status/1697969661554393461)

> "Unless we have an open, neutral internet we can rely on without worrying about what's happening at the back door, we can't have open government, good democracy, connected communities and diversity of culture. It's not naive to think we can have that, but it is naive to think we can just sit back and get it." - [A Magna Carta for the web
](https://www.ted.com/talks/tim_berners_lee_a_magna_carta_for_the_web) by Tim Berners-Lee
