# Data-centric addressing

[Data-centric computing](https://en.wikipedia.org/wiki/Data-centric_computing) is an emerging concept that has relevance in information architecture and data center design - data is stored independently of the applications, which can be upgraded without costly and complicated data migration. This is a radical shift in information systems that will be needed to address organizational needs for storing, retrieving, moving, and processing exponentially growing data sets. It increases agility by prioritizing data transfer and data computation. Applications become short-lived, constantly added, updated, or removed as algorithms come and go.

> "Data is the center of the universe; applications are ephemeral." - [The Data-Centric Manifesto](http://datacentricmanifesto.org/)

---

[Content-addressable storage](https://en.wikipedia.org/wiki/Content-addressable_storage) (CAS) is a way to store information so it can be retrieved based on its content (not its location/name) and is a key piece of the puzzle. Identifiers are based on content and any change to a data element will necessarily change its content address. The most famous example of CAS is [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) but it suffers from non-human-friendly addresses (hashes) and performance issues & extreme latency (tens of minutes) if the content is not widely cached/pinned because of the global [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table).

[Self-authenticating data](https://en.wikipedia.org/wiki/Self-authenticating_document) moves authority from hosts to users. The three components that enable it are [cryptographic identifiers](https://en.wikipedia.org/wiki/Public-key_cryptography), [CAS](https://en.wikipedia.org/wiki/Content-addressable_storage), and an emerging area of research called [verifiable computation](https://en.wikipedia.org/wiki/Verifiable_computing) which is yet to be applied in any meaningful scale.

---

[Information-centric networking](https://en.wikipedia.org/wiki/Information-centric_networking) (ICN) is an approach to evolving the Internet infrastructure away from a host-centric paradigm, based on perpetual connectivity and the [end-to-end principle](https://en.wikipedia.org/wiki/End-to-end_principle), to a network architecture in which the focal point is identified information (or content or data). Data becomes independent from location, application, storage, and means of transportation, enabling in-network caching and replication. The expected benefits are improved efficiency, better scalability with respect to information/bandwidth demand, and better robustness in challenging communication scenarios. In information-centric networking, the cache is a network-level solution, and it has rapidly changing cache states, higher request arrival rates, and smaller cache sizes.

---

[Named Data Networking](https://en.wikipedia.org/wiki/Named_data_networking) (NDN) is a [Future Internet](https://en.wikipedia.org/wiki/Future_Internet) architecture that builds on top of the previous ideas (& an incarnation of ICN) and in which data is requested by name and routed by the network. However, there are many unsolved challenges with it like the need to reimplement foundational routing infrastructure to make it stateful and hierarchically structured names which require a root name authority to link them to keypairs - outside of its scope. Here's [a great lecture](https://www.youtube.com/watch?v=oCZMoY3q2uM) on the topic.

# Enter Headjack

Headjack is a weird amalgamation inspired by everything above - it provides human-readable & persistent [URIs](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) for self-authenticating data (with [Merkle proofs](https://medium.com/crypto-0-nite/merkle-proofs-explained-6dd429623dc5) & the blockchain) along with the means for its retrieval without forcing a specific way ([IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) is just one option). It acts as the web-scale global index used to check the authenticity of documents (requires consulting with the chain), ownership of names, key management & sequence of events throughout time. It is an addressability layer on top of the current host-centric internet technologies.
