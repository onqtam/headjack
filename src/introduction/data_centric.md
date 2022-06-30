# The data-centric ledger of record

[Data-centric computing](https://en.wikipedia.org/wiki/Data-centric_computing) is an emerging concept that has relevance in information architecture and data center design - data is stored independently of the applications, which can be upgraded without costly and complicated data migration. This is a radical shift in information systems that will be needed to address organizational needs for storing, retrieving, moving and processing exponentially growing data sets. It increases agility by prioritizing data transfer and data computation. Applications become short-lived, constantly added, updated, or removed as algorithms come and go.

> "Data is the center of the universe; applications are ephemeral." - [The Data-Centric Manifesto](http://datacentricmanifesto.org/)

---

[Content-addressable storage](https://en.wikipedia.org/wiki/Content-addressable_storage) (CAS) is a way to store information so it can be retrieved based on its content (not its location/name) and is a key piece of the puzzle. Identifiers are based on content and any change to a data element will necessarily change its content address. The most famous example of CAS is [IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System) but it suffers from non-human-friendly addresses (hashes) and performance issues & extreme latency (tens of minutes) if content is not widely cached/pinned because of the global [DHT](https://en.wikipedia.org/wiki/Distributed_hash_table).

Self-authenticating data moves authority from hosts to the user. The three components that enable it are [cryptographic identifiers](https://en.wikipedia.org/wiki/Public-key_cryptography), [CAS](https://en.wikipedia.org/wiki/Content-addressable_storage), and an emerging area of research called [verifiable computation](https://en.wikipedia.org/wiki/Verifiable_computing) which is yet to be applied in any meaningful scale.

---

[Information-centric networking](https://en.wikipedia.org/wiki/Information-centric_networking) (ICN) is an approach to evolve the Internet infrastructure away from a host-centric paradigm, based on perpetual connectivity and the [end-to-end principle](https://en.wikipedia.org/wiki/End-to-end_principle), to a network architecture in which the focal point is identified information (or content or data). Data becomes independent from location, application, storage, and means of transportation, enabling in-network caching and replication. The expected benefits are improved efficiency, better scalability with respect to information/bandwidth demand and better robustness in challenging communication scenarios. In information-centric networking the cache is a network level solution, and it has rapidly changing cache states, higher request arrival rates and smaller cache sizes.

---

[Named Data Networking](https://en.wikipedia.org/wiki/Named_data_networking) (NDN) is a [Future Internet](https://en.wikipedia.org/wiki/Future_Internet) architecture which builds on top of the previous ideas and in which data is requested by name and routed by the network. However, it requires a reimplementation of foundational routing infrastructure by making it stateful and hierarchically structured names require a root name authority to link them to keypairs - outside of its scope.

# Enter Headjack

Headjack is a weird amalgamation inspired by everything above - it provides human-readable & persistent [URIs](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) for self-authenticating data along with the means for its retrieval. It acts as the web-scale global index used to check the authenticity of documents (requires consulting with the chain), ownership of names, key management & sequence of events throughout time. It is a layer on top of the current host-centric internet technologies and doesn't require core infrastructure changes. [Logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) through the addition of a global [singleton](https://en.wikipedia.org/wiki/Singleton_pattern) solves a lot of problems.















THE LEDGER OF RECORD

analogous to the mental plane of the [Akashic records](https://en.wikipedia.org/wiki/Akashic_records)

THE GLOBAL GIT

The ledger of record is the opposite of a [Sand Mandala](https://en.wikipedia.org/wiki/Sand_mandala).











DNS was the original “decentralization” (although not in the crypto sense)


- DNS
    DNS was the original “decentralization”.
    RSS was an attempt for the next iteration
    How do you store your friend list?
    But rss is too technical
    Dns got overloaded too many times


If only there was an informational gravity well with a strong network effect that would suck all data to be cryptographically anchored to it, coupled with identity, names, authorization management, connections & sequencing.


- deduplication




the [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) (the OG "Web3")



reinventing the semantic web
https://en.wikipedia.org/wiki/RDFa

Persistent URLs, deduplicating content & anchoring everything to a single backbone greatly improves the indexability of the web.

linking data is easier under a common global namespace
https://en.wikipedia.org/wiki/Linked_data

facilitate the creation of [hyperdata](https://en.wikipedia.org/wiki/Hyperdata)

Headjack may offer the ability to give permanent IDs on-chain similar to accounts for concepts & abstract entities in order to facilitate 

An integral part to this vision are the [message types](../implementation/ecosystem/messages.md).
