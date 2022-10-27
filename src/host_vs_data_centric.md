<!--
TODO: look at:

tls-n
Look at ct
Openid connect
Tos evidence extensions
Google amp - signed caches
Chainlink authenticated data origination
-->

# Host vs data-centric

Let's take a look how the web works and what are the building blocks & ideas that enable Headjack:

<!-- toc -->

# Today's web: host-centric

Today's web revolves around hosts & [unicast](https://en.wikipedia.org/wiki/Unicast) communication - we query [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) to get the IP of servers and open direct connections with them to retrieve the data that they host. But domains, URI paths on servers & the actual files all change & go away which leads to [link rot](https://en.wikipedia.org/wiki/Link_rot) & content drift. Guidance such as ["Cool URIs don't change"](https://www.w3.org/Provider/Style/URI) is just that - guidance - and the [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive) is just a bandaid that can hardly keep up with the digital [memory hole](https://en.wikipedia.org/wiki/Memory_hole). In the host-certified paradigm URLs at best point to a location at which a document may have been available at some point in time - devoid of any cryptographic proofs regarding the contents, the creator, an alternative way to retrieve it or the time of publication. The implications are explored in the [host-centric section in the motivation](problems_with_the_web.html#the-host-centric-web).

> "It is generally recognized that the current approach of using IP address both as a locator and as an identifier was a poor design choice." - [David D. Clark](https://en.wikipedia.org/wiki/David_D._Clark), [Designing an Internet](https://www.goodreads.com/book/show/39644174-designing-an-internet)

# Data-centric computing

[Data-centric computing](https://en.wikipedia.org/wiki/Data-centric_computing) is an emerging concept that has relevance in information architecture and data center design - data is stored independently of the applications, which can be upgraded without costly and complicated data migration. This is a radical shift in information systems that will be needed to address organizational needs for storing, retrieving, moving, and processing exponentially growing data sets. It increases agility by prioritizing data transfer and data computation. Applications become short-lived, constantly added, updated, or removed as algorithms come and go.

> "Data is the center of the universe; applications are ephemeral." - [The Data-Centric Manifesto](http://datacentricmanifesto.org/)

# Content-addressable storage

[Content-addressable storage](https://en.wikipedia.org/wiki/Content-addressable_storage) (CAS) is a way to store information so it can be retrieved based on its content (not its location/name) and is a key piece of the puzzle. Identifiers are based on content and any change to a data element will necessarily change its content address. The most famous example of CAS is [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) but it suffers from non-human-friendly addresses (hashes), performance issues, and extreme latency (tens of minutes) because of the global [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table) if content is not widely cached/pinned.

[Self-authenticating data](https://en.wikipedia.org/wiki/Self-authenticating_document) moves authority from hosts to users. The three components that enable it are [cryptographic identifiers](https://en.wikipedia.org/wiki/Public-key_cryptography), [CAS](https://en.wikipedia.org/wiki/Content-addressable_storage), and an emerging area of research called [verifiable computation](https://en.wikipedia.org/wiki/Verifiable_computing) which is yet to be applied in any meaningful scale.

# Information-centric networking

[Information-centric networking](https://en.wikipedia.org/wiki/Information-centric_networking) (ICN) is an approach to evolving the Internet infrastructure away from a host-centric paradigm, based on perpetual connectivity and the [end-to-end principle](https://en.wikipedia.org/wiki/End-to-end_principle), to a network architecture in which the focal point is identified information (or content or data). Data becomes independent from location, application, storage, and means of transportation, enabling in-network caching and replication. The expected benefits are improved efficiency, better scalability with respect to information/bandwidth demand, and better robustness in challenging communication scenarios. In information-centric networking, the cache is a network-level solution, and it has rapidly changing cache states, higher request arrival rates, and smaller cache sizes.

# Named Data Networking

[Named Data Networking](https://en.wikipedia.org/wiki/Named_data_networking) (NDN) is a [Future Internet](https://en.wikipedia.org/wiki/Future_Internet) architecture that builds on top of the previous ideas (& an incarnation of ICN) and in which data is requested by name and routed by the network. However, there are many unsolved challenges with it like the need to reimplement foundational routing infrastructure to make it stateful and hierarchically structured names which require a root name authority to link them to keypairs - outside of its scope. Here's [a great lecture](https://www.youtube.com/watch?v=oCZMoY3q2uM) on the topic.

# Enter Headjack - the final iteration

Headjack is a weird amalgamation inspired by everything above - it provides human-readable & persistent [URIs](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) for self-authenticating data (with [Merkle proofs](https://medium.com/crypto-0-nite/merkle-proofs-explained-6dd429623dc5) & the blockchain) along with the means for its retrieval without forcing a specific way ([IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) is just one option). It acts as the web-scale global index used to check the authenticity of documents (requires consulting with the chain), ownership of names, key management & sequence of events throughout time. It is an addressability layer on top of the current host-centric internet technologies.
