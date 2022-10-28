# Improved infrastructure

Tying data to identity and making it freely available & outside of silos through content-centric addressing enables a lot of composability, functionality & innovation.

<!-- toc -->

# Code as addressable data

Frontend code served by applications can be published and have its own URI. Updates to it would happen by broadcasting the next version along with a new URI and then pointing on-chain to it as the latest to use for viewing media. This way presentation layers could be cached locally and in a distributed way with proofs for authenticity - improving redundancy, latency, and throughput. Checking for a newer version would be a small query to the chain if there is a new URI - version control for frontends. This can work even for more dynamic applications that serve different versions depending on region/locale or which are A/B testing - the dynamic part could be served from a centralized host while smaller chunks of code could be referenced through URIs.

TODO: this wouldn't be necessary
https://twitter.com/armada_infra/status/1584942215217836032

# Better and more competitive [search engines](https://scribe.rip/p/what-every-software-engineer-should-know-about-search-27d1df99f80d)

- Building indexes would be greatly simplified as they will be plugged to the global message bus and update only on events (push) - instead of periodic batch crawling of the public web (pull). <!-- The history of changes will be granular, precise, complete, structured & authenticated. -->
- Message schemas will improve the indexing & information extraction from dynamic websites. The [semantic web](knowledge_management.md#the-semantic-web-aka-the-original-web3) will also greatly empower search engines & unlock [powerful queries](knowledge_management.md#query--plot-anything).
- The move to data-centric addressing and the desegregation of data will lead to a lot less duplicates and more rich & precise context around any event/message.
- Currently ephemeral experiences (search suggestions) leave no trace and it's extremely hard to prove bias (aks [Dr. Robert Epstein](https://en.wikipedia.org/wiki/Robert_Epstein#Contributions_to_Internet_Studies)) - competition & a lower barrier to entry are direly needed.
- Search engine sophistication would span the full spectrum - from data center scale to those that you can run locally at home, or the specialized - [The Future of Search Is Boutique](https://future.a16z.com/the-future-of-search-is-boutique).

# Optimal archiving (like the [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive))

- Actively polling all websites on earth periodically & to check for changes and save snapshots won't be necessary - instead it will just watch & save all incoming events and have a complete history without any redundant data & inefficiencies.
- By [decoupling content & presentation HTML](improved_infrastructure.md#code-as-addressable-data) only the essential could be saved. Applications can signal a change with a new message type in what they serve to browsers for presentation & rendering of content which the archival service could save throughout time as well to provide the historical views. Data duplication in snapshots can be driven to 0.
- Content that is no longer accessible through the original application that published it and is not archived by the user that posted it (but hasn't been explicitly deleted) would still be accessible by anyone with the same persistent URIs when querying an archival service.

# Redundancy, scaling & topological flexibility

[Data-centric addressing](host_vs_data_centric.md) with self-authenticating data allows for distributed & [resilient to DDoS attacks](https://decrypt.co/107293/taiwan-turns-to-ipfs-tech-to-thwart-cyberattacks-from-china) architectures that span the entire globe with horizontal scaling & [store-and-forward](https://en.wikipedia.org/wiki/Store_and_forward) caches. Computed views such as indexes, graphs & aggregate metrics (counts) can also be made addressable, distributed & cached with either optimistic authenticity (trust by default but with a way to recreate them and check for equivalence) or even have a proof with [verifiable computation](https://en.wikipedia.org/wiki/Verifiable_computing). Furthermore, there are [at least a few points to query](store_and_retrieve.md#how-to-retrieve-data-for-a-random-uri) for the data of a URI.
