<!--
it disrupts layers 3, 4 & 5 of the osi model and turns the web into a computer
-->

# What REALLY is Headjack

Let's explore a few mental models, analogies & points of view when thinking about Headjack:

<!-- toc -->

# Twitter's original sin: protocol vs company

Twitter's potential has fascinated some of the brightest people in the world ever since its inception:

> "It's a new messaging protocol, where you don't specify the recipients. New protocols are rare. Or more precisely, new protocols that take off are. There are only a handful of commonly used ones: TCP/IP (the Internet), SMTP (email), HTTP (the web), and so on. So any new protocol is a big deal. But Twitter is a protocol owned by a private company. That's even rarer." - [Paul Graham](http://www.paulgraham.com/twitter.html)

But the original sin has been that it's [owned by a company](https://twitter.com/jack/status/1518772754782187520) which Jack Dorsey states as [his biggest regret](https://twitter.com/jack/status/1562861302242226178) - no wonder that he's been trying to turn it into a protocol - first with [project Bluesky](https://twitter.com/jack/status/1204766078468911106) (now [AT Protocol](https://atproto.com/)) and more recently with [TBD Web5](https://twitter.com/jack/status/1535314738078486533) (both covered in the [comparison chapter](competition.md)).

> "From a historical perspective, Twitter will serve as one of several inspirational ancestors for What Comes Next in the domain of collective sense making platforms." - [Jim Rutt](https://twitter.com/jim_rutt/status/1645787927610261504)

> "Big platforms tend to only evolve so far until something else with a bigger evolutionary jump supersedes it.  Twitter is rather thin in affordances." - [Jim Rutt](https://twitter.com/jim_rutt/status/1645787927610261504)

> "Personally I’d be surprised if Twitter will actually be the base for the self organizing collective intelligence that we need." - [Jim Rutt](https://twitter.com/jim_rutt/status/1645787927610261504)

> "Evolution only builds on open formats and protocols. That's how technology layers." - [source](http://scripting.com/2014/10/10/youngTechnologistsLoveLockin.html)

# The global event bus / pub-sub

<!-- The global digital / unified / singular firehose -->

One way to look at Headjack is as a global [publish-subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) messaging network where accounts, message types, tags, application sources & [anything within documents](data_legos.md#event-streams) can be treated as topics to subscribe to - a multidimensional notification highway. It's the ultimate user-friendly successor of the [too technical](https://twitter.com/mgsiegler/status/311992206716203008) RSS - [`"people jumped ship as soon as something better came along"`](https://twobithistory.org/2018/12/18/rss.html).

When compared to [Kafka](https://kafka.apache.org/intro): it provides only logical addressing (allowing for the storage layer to evolve & migrate data seamlessly) and delegates the data availability (storage & retrievability) of the actual documents/events to the entities in the ecosystem (users/IDMs/applications/archives) on a [best-effort](https://en.wikipedia.org/wiki/Best-effort_delivery) basis without guarantees (but with [multiple ways for retrieving data for a URI](store_and_retrieve.md#how-to-retrieve-data-for-a-random-uri)).

Twitter's firehose allowed you to ingest all events on the platform in real time for a [steep price](https://qr.ae/pvly2N) and was eventually [shut down](https://www.forbes.com/sites/benkepes/2015/04/11/how-to-kill-your-ecosystem-twitter-pulls-an-evil-move-with-its-firehose/?sh=4cd97d0f61d3). Headjack is the global, generalized & permissionless version of it.

<div style={{textAlign: "center"}}>
    <img src="/img/meme_man_drinking_from_firehose.png"/>
</div>

# The address space of the World Computer

Headjack's address space can be thought of as [virtual memory](https://en.wikipedia.org/wiki/Virtual_memory) and is enough for practically infinite number of events with the concatenation of 4 integers (64bit/32bit/64bit/32bit - see [addressing](addressing.md)) + the ability for [intra-document (fractal) addressing](knowledge_management.md#intra-document-addressing) - much better for indexing than hashes. We can build an infinite-core world computer atop this [distributed shared memory](https://en.wikipedia.org/wiki/Distributed_shared_memory).

<!-- It enables the construction of global [causally consistent](https://en.wikipedia.org/wiki/Causal_consistency) distributed systems in regards to authorization. -->

Think of it as an [information bus](https://dl.acm.org/doi/pdf/10.1145/173668.168624) on top of which any type of distributed system can be architected thanks to the minimal semantics, self-describing [messages](messages.md), dynamically definable message types & permissionlessness. The service objects that deal with identity & authorization are on-chain with guaranteed data availability whereas all other data objects are off-chain, anchored & sequenced.

> "The internet is the computer but it's missing identity and [acls](https://en.wikipedia.org/wiki/Access-control_list)." - [koalaman](https://news.ycombinator.com/item?id=25734612).

Ethereum is **NOT** the world computer - it's the world's settlement layer. The world computer will be built on identity coupled with authorization & a unified address space.

<!-- maybe, maybe not relevant:
https://en.wikipedia.org/wiki/K-sorted_sequence -->

<!-- TODO: think about
https://en.wikipedia.org/wiki/Consistency_model
https://en.wikipedia.org/wiki/Memory_coherence
https://en.wikipedia.org/wiki/Cache_coherence
https://en.wikipedia.org/wiki/Causal_consistency -->

# The second narrow waist of the Internet
<!--
Hourglass model, Distinguished layer, Spanning layer, Universal layer
-->

> "The narrow waist is the most important idea in software architecture, because it describes the biggest and longest-lived systems." - [source](https://www.oilshell.org/blog/2022/03/backlog-arch.html)

Everything in software deals with abstractions but very few are done right:

<!-- The problem with abstraction layers is combinatorial explosion. -->

> "Abstractions leak all the time; there is an explicit cost in terms of hooking things up, and implicit costs in terms of edge cases, dependency management/upgrade/maintenance costs and decision fatigue. Individually, each abstraction might bring enough value to overcome its costs. However the combinatorics of M x N x O x P abstractions in each layer is an externality weighing down the entire ecosystem." - [source](https://www.swyx.io/narrow-waists)

A narrow waist protocol is a constraint that unconstrains everything on top of it when communicating with everything on the bottom - allowing for the 2 layers to evolve independently of one another. It should be radically simple, minimalistic, stable & unopinionated about what goes on below or on top of it. The [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol) is perhaps the best example:

<img src="/img/internet_protocol_stack_hour_glass.jpg"/>

<!-- source:
https://twitter.com/alive_eth/status/1228348431443214338
-->

> "A “narrow waist” intentionally keeps one or more of the middle layers small. This allows for:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;• **the marketplace effect**: lower and upper layers can specialize and optimize to that narrow waist, and thus they don’t have to worry about the existence of other layers on the other side<br/>
&nbsp;&nbsp;&nbsp;&nbsp;• **focus**: the concentration of resources on optimizing the specific technology at the waist to make it the best it can be, since there is little other choice" - [source](https://www.swyx.io/narrow-waists)

This fundamental concept is the reason [UNIX](https://en.wikipedia.org/wiki/Unix) is now the dominant operating system architecture.

> "Unix uses multiple narrow waists to achieve dynamic and extensible polymorphism." - [source](https://www.oilshell.org/blog/2022/03/backlog-arch.html)

The [`"Unix and Google"`](https://www.youtube.com/watch?v=3Ea3pkTCYx4) video beautifully explains the concept of `Coding the Perimeter` vs. `Coding the Area` where the work for the **perimeter** is `O(M + N)` but for the **area** it is `O(M × N)`.

> "`O(M × N)` code explosion — A system may need bespoke code to fill in every cell of a grid, like M algorithms and N data structures, or M languages and N operating systems." - [source](https://www.oilshell.org/cross-ref.html?tag=m-by-n-explosion#m-by-n-explosion)

> "Simplicity is the ultimate sophistication." - [Leonardo da Vinci](https://www.goodreads.com/quotes/9010638-simplicity-is-the-ultimate-sophistication-when-once-you-have-tasted)

---

Today social media applications have to reimplement the same functionality & [vertically integrate](TODO.md#vertical-integration-vs-marketscompetition) which is `O(M × N)`. With Headjack there'll be a market for every layer of the stack & solutions can be reused - `O(M + N)`. The core enabler for this is the linking of data to [sovereign identity](https://twitter.com/balajis/status/1162401646258749441) which leads to portability & interoperability between applications & the end of the host-centric model. Think of it as an [open state database](https://twitter.com/balajis/status/1123092897664880640) where only the most important bits are decentralized & guaranteed to be around. An ecosystem on a shared identity layer with uniform content addressing will outperform closed ecosystems not only because of the permissionless innovation not possible before, but also because of the reduced effort and code reuse - every problem needs to be solved only once.

> "Compositionality is the principle that a system should be designed by composing together smaller subsystems, and reasoning about the system should be done recursively on its structure." - [Jules Hedges, On Compositionality](https://julesh.com/2017/04/22/on-compositionality/)

Web3 is often associated with user ownership of networks/services/data, governance, NFTs & micropayments, and while all of them will play a part in it, ***identity is the foundation***.

> "This narrow waist is not something that God gives you. It's something that you make. It's hard engineering." - [Van Jacobsen](https://www.oilshell.org/blog/2022/03/backlog-arch.html), Internet pioneer


TODO:
Bazaar protocol - from “the cathedral and the bazaar” essay
or at least have a chapter about it! with this pic
https://www.google.com/search?q=the+cathedral+and+the+bazaar+cover&sxsrf=AJOqlzWfP43XK_d9AFgHzQBrtHz9qSX9UA:1675770760517&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiZ8J7HrIP9AhWigP0HHVlTBUgQ_AUoAXoECDEQAw&biw=2051&bih=1186&dpr=0.9
https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar

13. Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away. (Attributed to Antoine de Saint-Exupéry)
https://en.wikipedia.org/wiki/The_Cathedral_and_the_Bazaar#:~:text=Perfection%20(in%20design)%20is%20achieved%20not%20when%20there%20is%20nothing%20more%20to%20add%2C%20but%20rather%20when%20there%20is%20nothing%20more%20to%20take%20away.%20(Attributed%20to%20Antoine%20de%20Saint%2DExup%C3%A9ry)


# The supermassive digital gravity well

Headjack is a confluence of multiple interrelated things (identity, names, authorization & addressing). Their synergy leads to the highest utility for names: they're [embedded in content URIs](names_and_paths.md). This results in a winner-take-all network effect with unprecedented gravity that would suck all data to be cryptographically anchored to it. It has the potential to truly decentralize [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) - something which [Namecoin](https://en.wikipedia.org/wiki/Namecoin) and [Handshake](https://handshake.org/) would have had a much harder time doing on their own.

<!-- At the core of the [ecosystem effect](https://blog.niraj.io/the-ecosystem-effect) is identity (example: Dropbox vs. Google Drive). -->

> "The internet creates 1 giant aggregator for everything" - [@naval](https://youtu.be/3qHkcs3kG44?t=3527)

Headjack [definitively](https://boxkitemachine.net/posts/zero-to-one-peter-thiel-definite-vs-indefinite-thinking/) aims to be the backbone of the entire web - acting as the coordination substrate of [cyberspace](https://www.eff.org/cyberspace-independence). It will disaggregate traditional platforms such as Twitter, Reddit, YouTube & Instagram through unbundling, reconstruction & interoperability on top of Headjack's building blocks by mixing and matching various presentation layers, architectures, business models, content moderation policies, etc. [`"The whole is greater than the sum of its parts." - Aristotle`](https://www.goodreads.com/quotes/20103-the-whole-is-greater-than-the-sum-of-its-parts).

<img src="/img/flywheel.png"/>

<!--
- more composability & code reuse
- lower barrier to entry
- more features & innovation
- more demand from users
- more revenue (ads & other business models)
- better infrastructure for services
-->

> "Few tech giants of the past have ever been unseated from their dominance via competition alone: Microsoft never lost the desktop, Google never lost search, Twitter has never lost the public square, Amazon will never lose e-commerce, and Apple will never lose mobile devices. The only way to get out from under those weary giants is creating a new playing field and absolutely dominating it before they figure out what’s going on." - [source](https://www.thepullrequest.com/p/everything-is-an-ad-network)

# The Matrix is the Metaverse

***And Headjack is [the interface](https://matrix.fandom.com/wiki/Headjack).***

> "The “metaverse” as I like to envision it, is a globally shared and permanent digital reality not owned by any single entity that any company, platform, or person can plug into, regardless of where they are or what device they’re using." - [source](https://joshua.mirror.xyz/-xpmr7ceHmi5Hqsl7zRtig9ph_dtCvWjZOoWOVN0bcg)

<img src="/img/headjack-t-shirt_450_600.jpg" align="right" style={{marginLeft: "8px", width: "35%"}}/>

In the Metaverse entities will connect & interact with information under a common global namespace & surf the web through competing applications & views that present & filter commonly addressable data in any way imaginable. It will be built on top of a layered stack of technologies & open protocols and <u>**underneath everything sit Headjack's primitives: identity, authorization & content addressing**</u>. All events can & will be interlinked, tied to identity & made easily referencable. Anything can be built & made composable & interoperable on top of these building blocks as long as they don't impose any constraints - no more walled gardens. Furthermore, the Metaverse is mostly about agency in creation - transaction, exchange & finance are not at the forefront and will be handled by other layers & protocols like generalized smart contract chains & NFTs.

> "The metaverse isn’t a 3D world owned by some corporation. It’s a permissionless market-network which respects and interconnects all user-owned and cryptographically-secured digital identities, reputations, wallets, communities, spaces, and objects.<!-- It’s bootstrapping right now. -->" - [@naval](https://twitter.com/naval/status/1434586449068756993)

> "We think of the metaverse as the entirety of all composable and interoperable resources, identities, applications, platforms, services, and protocols that exist in cyberspace." - [source](https://blog.ceramic.network/into-the-dataverse/)

<!-- > "Metaverse doesn’t mean 3D, it means decentralized." - [@naval](https://twitter.com/naval/status/1516477829134704641) -->

> "The metaverse has nothing to do with “view” modalities — the tools you use to see the metaverse. That’s a convenient meme for those who have control over manufacturing hardware." - [source](https://future.com/7-essential-ingredients-of-a-metaverse/)

Refer to these 2 great resources on what else would be necessary for the Metaverse:
- [7 Essential Ingredients of a Metaverse - a16z](https://future.com/7-essential-ingredients-of-a-metaverse/)
- [Unlocking the Metaverse: New Opportunities in Games Infrastructure - a16z](https://future.com/metaverse-infrastructure-technology-games/)

> "Cyberspace does not lie within your borders. Do not think that you can build it, as though it were a public construction project. You cannot. It is an act of nature and it grows itself through our collective actions." - ["A Declaration of the Independence of Cyberspace" by John Perry Barlow ](https://www.eff.org/cyberspace-independence)

<!-- 
Look at improbable for metaverse and M2 - Herman Narula

the visual metaverse could be built on top of headjack and nvidia's omniverse
omniverse usd (universal scene description)

> "When thinking about the metaverse, however, the engine takes on a more important role. To break down the walls that separate one game or experience from another, it is likely that games will be wrapped and hosted within the engine, instead of the other way around. In this expanded view, engines become platforms, and communication between these engines will largely define what I think of as the shared metaverse." - [source](https://future.com/metaverse-infrastructure-technology-games/)

> "Games will be able to check your wallet and change your experience depending on what you’ve acquired in other games. Games built by third-party indie devs could be built around the objects of other games, in a literal way extending the game's universe." - [source](https://joshua.mirror.xyz/-xpmr7ceHmi5Hqsl7zRtig9ph_dtCvWjZOoWOVN0bcg)
-->

# Media & the Internet

Evolution is 99.9% memetic at this point & accelerating exponentially. If finance is the [market for promises](https://anthonyleezhang.substack.com/p/the-market-for-promises), then media is the battleground of ideas and is just as fundamental.

> "The medium is the message" - [Marshall McLuhan](https://en.wikipedia.org/wiki/The_medium_is_the_message) proposes that a communication medium itself, not the messages it carries, should be the primary focus of study.

> "If code scripts machines, media scripts human beings." - [@balajis](https://twitter.com/tferriss/status/1582060370482429953)

At the root of our greatest challenges are [coordination failures](https://slatestarcodex.com/2014/07/30/meditations-on-moloch/). We are like an ant colony suffering from multiple personality disorder - trapped in multipolar traps, segregated into fabricated factions, oblivious to game theory/markets/economics/history & human nature, plagued by short-sightedness & nihilism, playing status games, and running exponential processes in a finite world. Furthermore:

> "The internet has massively increased the complexity of our information environment, but hasn’t yet produced the tools to make sense of it. Old forms of social sensemaking—institutions, universities, democracy, tradition—all seem to be DDOS’d by the new information environment. They can’t keep up!" - [source](https://subconscious.substack.com/p/thinking-together)

> "We fractally fragment understandings, then algorithmically amplify the confusion to maximize engagement." - [source](https://subconscious.substack.com/p/thinking-together)

Cooperating flexibly in large numbers has led us to an evolutionary advantage - first through stories and then [markets, clocks](https://www.ribbonfarm.com/2019/02/28/markets-are-eating-the-world/
) & [bits](https://a16z.com/2011/08/20/why-software-is-eating-the-world/). Mechanisms that make those more efficient benefit the species. The current shape of the Internet is just a local maximum due to gradient descent and we can change it.

> "The Internet is the largest engineering project the earth has ever seen - and we're just getting started" - [Barrett Lyon](https://en.wikipedia.org/wiki/Barrett_Lyon), founder of [OPTE Project](https://www.opte.org/)

<div style={{position: "relative", width: "100%", height: "0", paddingBottom: "56.25%"}}>
<iframe style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}} src="https://www.youtube-nocookie.com/embed/DdaElt6oP6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Civilization was born in the fog of war and [Satoshi](https://en.wikipedia.org/wiki/Satoshi_Nakamoto) upgraded our capacity for trust & cooperation.

> "I think just like the internet built information, super highways, I think blockchain is building the cooperation super, super highways." - [Sreeram Kannan](https://twitter.com/sreeramkannan), [source](https://www.listennotes.com/podcasts/zero-knowledge/episode-217-information-pZEIhHAVQwe/)

Blockchains can play a major role in upgrading our systems of trust, reputation & coordination and it all depends on the arrangement of our technological building blocks. The things which unify us the most are: **1)** geography, **2)** language, **3)** ethnicity & culture, **4)** trade & currency, and **5)** <u>**media, narrative & history**</u> - Headjack is focused on unifying & improving the last of those.

> "When a society hits the information scaling threshold, it stalls out. It can’t function until it invents new ways of making sense that can cope with the complexity of the information environment." - [source](https://subconscious.substack.com/p/thinking-together)

<!-- > "The complexity of a sensemaking system must match the complexity of the environment." - [source](https://subconscious.substack.com/p/thinking-together) -->

# The path to AGI (the G is [Global](https://twitter.com/Sara_Imari/status/1400922067919376384))

<!-- Information flow theory in our systems - it all comes down to information being at the right place at the right time to make the maximum impact -->

> "Engelbart’s dream was to use computers to connect individuals in a network that would allow them to share and update information in “real time.”" - [Douglas Engelbart](https://www.britannica.com/biography/Douglas-Engelbart), Internet pioneer

> "When wireless is perfectly applied the whole earth will be converted into a huge brain, which in fact it is, all things being particles of a real and rhythmic whole. We shall be able to communicate with one another instantly, irrespective of distance." - [Nikola Tesla](https://www.geekwire.com/2015/nikola-tesla-predicted-smartphones-in-1926-like-a-boss/)

Biology is layers of "dumb" systems that cooperate and mediate between each other. Humans are just a collection of cells - including the "central" nervous system - and they play along and cooperate which leads to the emergence of consciousness and intelligence. There’s no fundamental reason for humans to not be able to assemble into a unified global [collective intelligence](https://en.wikipedia.org/wiki/Collective_intelligence) - a [hive mind](https://en.wikipedia.org/wiki/Global_brain).

> "Every follow is a synapse in a global metabrain" - [Danielle Fong](https://twitter.com/DanielleFong/status/1559185769016729606)

> "I think Twitter is the closest thing we have to a global consciousness." - [@jack](https://twitter.com/jack/status/560861182622724096)

> "Because it consists of billions of bidirectional interactions per day, Twitter can be thought of as a collective, cybernetic super-intelligence" - [@elonmusk](https://twitter.com/elonmusk/status/1588081971221053440)

The [seminal AI paper](https://arxiv.org/abs/1706.03762) on [transformers](https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)) from 2017 is called `"Attention Is All You Need"`. The way we engineer the application of our attention globally will determine the course of humanity.

> "First we build the tools, then they build us." - [Marshall McLuhan](https://www.goodreads.com/quotes/484955-first-we-build-the-tools-then-they-build-us)

# Goals of Headjack

<!-- Goal: minimise friction for devs and users & enable permissionless innovation 
No more gatekeepers
a new era for communication, cooperation & compute
- making [Public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure) mainstream

- bring property rights to identity and data

-->

- [distribute power](https://twitter.com/balajis/status/1554228316181127169) and let people have a [choice](knowledge_management.md#forking-media--communities) - identity should be controlled by no one
- rebuild & scale up trust through [authenticity](cryptohistory.md) and build the [ledger of record](https://twitter.com/balajis/status/1459140902144729088)
- revive the [semantic web](knowledge_management.md#the-semantic-web-aka-the-original-web3), [deduplicate content & enable traceability](cryptohistory.md#deduplicating-documents--traceability)
- improve transparency - ["Sunlight is the best disinfectant"](https://en.wiktionary.org/wiki/sunlight_is_the_best_disinfectant)
    - [virality, feeds & algorithms](problems_with_the_web.md#black-boxes--algorithmic-bias) needs to be politically & content-neutral
- break the [vertical integration](TODO.md#vertical-integration-vs-specialization--competition) through interoperability & markets - allow for specialization
    - lower the barrier to entry for innovation - the design space is limitless
    - enable alternative business models - the monopolistic ad economy is a paperclip maximizer with huge cultural repercussions
- [enable](knowledge_management.md#query--plot-anything) super users to separate signal from noise through open data & better tooling
- empower storytellers by [improving books and publications](knowledge_management.md#the-future-of-publishing-knowledge--learning)
- make infrastructure more resilient through [redundancy](TODO.md#redundancy-scaling--topological-flexibility) and p2p content-addressing
- slay [Moloch](https://slatestarcodex.com/2014/07/30/meditations-on-moloch/) - the god of coordination failures & multipolar traps
- launching anything on a different network should be architecturally indefensible

<!-- argument from cryptography > argument from authority -->

# Mission

<!-- Giving data names forever -->

<h1 style={{textAlign: "center"}}>
<u><i>End the host-centric model by linking data to identity at scale & unbundle the media stack.</i></u>
</h1>

<img src="/img/one_chain_to_link_them_all_1000x800.jpeg"/>

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


> "If you’re not acting on your beliefs, then they probably aren’t real." - [Edward Snowden](https://www.azquotes.com/quote/916625)

> "What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you?" - [Aaron Swartz](https://www.azquotes.com/quote/1202481)

<img src="/img/meme_get_in_loser_building_the_hivemind.jpg"/>

Headjack is the [15th and final](https://xkcd.com/927/) standard for decentralized identity.
