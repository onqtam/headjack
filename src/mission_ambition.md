# Goals, mission & ambition

Evolution is 99.9% memetic at this point & accelerating exponentially. If finance is the [market for promises](https://anthonyleezhang.substack.com/p/the-market-for-promises), then media is the battleground of ideas and is just as fundamental.

> "technology increases the efficiency of manufacturing consent in the same way it increases the efficiency of manufacturing everything else" - [Meditations on Moloch](https://slatestarcodex.com/2014/07/30/meditations-on-moloch/)

At the root of our greatest challenges are [coordination failures](https://slatestarcodex.com/2014/07/30/meditations-on-moloch/). We are like an ant colony suffering from multiple personality disorder - trapped in multipolar traps, segregated into fabricated factions, oblivious to game theory/markets/economics/history, plagued by short-sightedness & nihilism, playing status games, and running exponential processes in a finite world.

The ability to cooperate flexibly in large numbers has led us to an evolutionary advantage - first through stories and then [markets, clocks](https://www.ribbonfarm.com/2019/02/28/markets-are-eating-the-world/
) & [bits](https://a16z.com/2011/08/20/why-software-is-eating-the-world/). Any mechanism that makes those more efficient will benefit the species. If the internet is the information super highway, blockchains are the cooperation super highways and can play a major role in upgrading our systems of trust. We're just neurons but we can bootstrap the global collective consciousness through trust & coordination - the hivemind.

> "Society, business & money are downstream of technology, which is itself downstream of science. Science applied is the engine of humanity." - [@naval](https://twitter.com/naval/status/790443306886926337)

# Goals

<!-- > "Our mission is to organize the world's information and make it universally accessible and useful." - [Google](https://about.google/) -->

<!-- Headjack's mission is to end network effect monopolies & data silos by making identity sovereign and data interoperable. -->

The host-centric status quo is just a local maximum. Headjack wants to:

- [distribute power](https://twitter.com/balajis/status/1554228316181127169) and let people have a [choice](possibilities.md#forking-media--communities) - identity should belong to no one
- rebuild & scale up trust through [authenticity](authenticity.md) and build the [ledger of record](https://twitter.com/balajis/status/1459140902144729088)
- revive the [semantic web](possibilities.md#the-semantic-web-aka-the-original-web3), [deduplicate content & enable traceability](authenticity.md#deduplicating-documents--traceability)
- improve transparency - ["Sunlight is the best disinfectant"](https://en.wiktionary.org/wiki/sunlight_is_the_best_disinfectant)
    - [virality, feeds & algorithms](problems_with_the_web.md#black-boxes--algorithmic-bias) needs to be politically & content-neutral
- break the [vertical integration](problems_with_the_web.md#vertical-integration-vs-specialization--competition) through interoperability & markets - allow for specialization
    - lower the barrier to entry for innovation - the design space is limitless
    - enable alternative business models - the monopolistic ad economy is a paperclip maximizer with huge cultural repercussions
- [enable](possibilities.md#query--plot-anything) super users to separate signal from noise through open data & better tooling
- empower storytellers by [improving books and publications](possibilities.md#the-future-of-publishing-knowledge--learning)
- make infrastructure more resilient through [redundancy](possibilities.md#redundancy-scaling--topological-flexibility) and p2p content-addressing
- slay [Moloch](https://slatestarcodex.com/2014/07/30/meditations-on-moloch/) - the god of coordination failures & multipolar traps

# Mission: <u><i>Free data from the host-centric model by linking it to sovereign identity at scale.</i></u>

<img src="images/one_chain_to_link_them_all_1000x800.jpeg">

<!--
One Chain to
Link them all
One Chain to
Sort them
One Chain to
Prove them all
and forever
Bind them

Headjack
-->


















# Ambition

Web3 is often associated with user ownership of networks/services/data, governance, NFTs & micropayments, and while all of them will play a part in it, the main aspect is the distribution of power around identity and [making it sovereign](https://twitter.com/balajis/status/1162401646258749441) - the metaverse is about connected entities that interact with information under a common global namespace and surf the web through competing applications & views that present & filter commonly addressable data in any way imaginable.

<!-- 

TODO: take this metaverse thing out of here and into the other page

It is an informational gravity well with a strong network effect that would suck all data to be cryptographically anchored to it

Headjack has an ecosystem effect - a product network effect, and identity is at the core of it. Case Study: Dropbox vs. Google Drive
https://blog.niraj.io/the-ecosystem-effect

-->

Think of Headjack as an [information bus](https://www.cs.cornell.edu/courses/cs614/2003sp/papers/OPS93.pdf) on top of which any type of distributed system can be architected thanks to the minimal semantics, self-describing messages, dynamically definable message types & permissionlessness. The service objects that deal with identity & authorization are on-chain and have guaranteed storage & retrievability whereas all data objects are just cryptographically anchored and stored off-chain ([IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System)) for which durability & retrievability is on a [best-effort](https://en.wikipedia.org/wiki/Best-effort_delivery) basis without guarantees. It can [scale](numbers.md) practically as much as necessary. Another way to look at it is as a global [publish-subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) messaging network similar to [Kafka](https://kafka.apache.org/intro) where accounts are treated as topics to which anyone can subscribe to - a notification highway. It is the manifestation of Jack's [vision for decentralizing Twitter](https://twitter.com/jack/status/1204766078468911106).

<!-- TODO: browser in the driver/filesystem/OS analogy? -->

[IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System), [Filecoin](https://en.wikipedia.org/wiki/Filecoin), [Sia](https://sia.tech/) & [Arweave](https://arwiki.wiki/) are the drivers, Headjack is the filesystem, and the collection of media & services built on top will be the global OS. Moving to a data-centric model where everything is addressable under a common global namespace would force applications to be [interoperable](https://balajis.com/yes-you-may-need-a-blockchain/).

> "Composability is to software as compounding interest is to finance" - [@cdixon](https://twitter.com/cdixon/status/1451703067213066244)

Headjack [definitively](https://boxkitemachine.net/posts/zero-to-one-peter-thiel-definite-vs-indefinite-thinking/) aims to be the backbone of the entire public web - the [ledger of record](https://twitter.com/balajis/status/1459140902144729088) where all content is cryptographically anchored and totally ordered. The confluence of human-readable & persistent addressing, indexing, identity, names, and the interest graph results in a winner-take-all network effect with unprecedented gravity that can organize the world's data - [`@naval: "The internet creates 1 giant aggregator for everything"`](https://youtu.be/3qHkcs3kG44?t=3527). It can succeed in completely decentralizing [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) and disaggregating traditional platforms such as Twitter, Reddit, YouTube & Instagram through unbundling, reconstruction & interoperability on top of Headjack's building blocks by mixing and matching various presentation layers, architectures, business models, content moderation policies, etc. [`"The whole is greater than the sum of its parts."`](https://www.goodreads.com/quotes/20103-the-whole-is-greater-than-the-sum-of-its-parts)

> "The web is like an ever-growing library with billions of books and no central filing system." - [how Google works (archived)](https://perma.cc/9HE2-VZF9), already [changed](https://www.google.com/search/howsearchworks/how-search-works/organizing-information/)

Headjack is the [15th and final](https://xkcd.com/927/) standard for decentralized identity and media - just because it's a lot of work doesn't mean we shouldn't be building on the right foundation. It is the supermassive digital gravity well and is going after the entire web as the coordination substrate of [cyberspace](https://www.eff.org/cyberspace-independence).

The outcome is binary - **`success`** or **`failure`** and is worth trying despite the odds for world domination - it's all up to the execution.
