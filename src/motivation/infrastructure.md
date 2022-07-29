# Infrastructure improvements

## Redundancy

TODO: Multiple points to retrieve content - redundancy


## [Search engines](https://scribe.rip/p/what-every-software-engineer-should-know-about-search-27d1df99f80d)

- Building indexes would be greatly simplified as they will be plugged to the global message bus and update only on events (push) - instead of periodic batch crawling of the public web (pull). The history of changes will be much more granular, precise, complete, structured & authenticated.
- Message schemas will greatly aid in the indexability and information extraction from dynamic websites.
- The move to data-centric addressing and the desegregation of data will lead to a lot less duplicates and more rich & precise context around any event/message.
- Currently ephemeral experiences such as search suggestions leave no trace and it's extremely hard to prove bias as [Dr. Robert Epstein](https://en.wikipedia.org/wiki/Robert_Epstein#Contributions_to_Internet_Studies) would attest - competition & a lower barrier to entry are direly needed.
- The range of sophistication of search engines would span the full spectrum - from the data center scale to software that you can run locally at home and most will be specialized - [The Future of Search Is Boutique](https://future.a16z.com/the-future-of-search-is-boutique).

## The [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive)

- It will no longer need to actively poll all websites on earth periodically & check for changes and save snapshots - instead it will just watch & save all incoming events and have a complete history without any redundant data & inefficiencies.
- Actual content & presentation HTML can be decoupled and only the essential could be saved. There could be a new message type for interfaces to signal a change in what they serve to browsers for presentation & rendering of content which the Internet Archive could save throughout time as well to provide the historical views. Redundancy of snapshots can be driven to 0.
- Content that is no longer accessible through the original interface that published it and is not explicitly archived by the user that posted it would still be accessible by anyone with the same persistent URIs if archival services are queried - even though they won't be directly linked to the interface/user IDs.


- Web infrastructure:
    - dsdfg

    - platforms to deploy interface apps without thinking about the infrastructure
    - SaaS infrastructure companies that host plugin apps and deal with the heavy lifting of data processing
    - Your startup idea cant afford the infrastructure to process 100mb/s of ephemeral data? Pay a service a small fee for a subset of data you’re interested in for your PoC
    - Market for intermediate processed results & indexes so that not everyone needs to reinvent the wheel and build the same set of algorithms and infrastructure over and over again - creating a market for the information pipeline by division of labor & specialization. Any intermediate data structure could be checked for validity based on the inputs - albeit slow. Test but verify - opaque processing rules. No more algorithmic black boxes. Batch processing - web-scale services do that all the time and plenty of work is done on results that are minutes or even hours outdated

computed & verifiable views?
https://blueskyweb.xyz/blog/3-6-2022-a-self-authenticating-social-protocol
link to authenticity page
