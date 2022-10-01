<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# Mental models for Headjack


<!-- 


- how to think about Headjack - analogies, kafka, etc.


- Kafka comparison - whats a stream, what are the guarantees and differences
    - maybe take the event streams part of the "possibilities with open data" page and separate it?
    - 
    - do a table as a comparison
    - 


if everything is just hashes indexing will suffer.


Whatever you think about [Urbit](https://urbit.org/) - even it could be migrated from Ethereum to Headjack for its identity. TODO: is this true? 32 bit integers for ids?


- the hierarchical addressing of content is a natural fit for kafka topics
    - application IDs as topics and offsets as nonces
        - lol - no, there are limits to how many topics there are - better use Cassandra
    - topics per user?
    - still very easy to pipe everything through it as compared to data with hashes
    - this is for infrastructure page!




[open state database](https://twitter.com/balajis/status/1123092897664880640)



RSS was [too technical](https://twitter.com/mgsiegler/status/311992206716203008) and it failed - [`"people jumped ship as soon as something better came along"`](https://twobithistory.org/2018/12/18/rss.html).
This is the user friendly revival of RSS



Think of Headjack as an [information bus](https://www.cs.cornell.edu/courses/cs614/2003sp/papers/OPS93.pdf) on top of which any type of distributed system can be architected thanks to the minimal semantics, self-describing messages, dynamically definable message types & permissionlessness. The service objects that deal with identity & authorization are on-chain and have guaranteed storage & retrievability whereas all data objects are just cryptographically anchored and stored off-chain ([IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System)) for which durability & retrievability is on a [best-effort](https://en.wikipedia.org/wiki/Best-effort_delivery) basis without guarantees. It can [scale](numbers.md) practically as much as necessary. Another way to look at it is as a global [publish-subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) messaging network similar to [Kafka](https://kafka.apache.org/intro) where accounts are treated as topics to which anyone can subscribe to - a notification highway. It is the manifestation of Jack's [vision for decentralizing Twitter](https://twitter.com/jack/status/1204766078468911106) which should have never become a company as [Jack admits](https://twitter.com/jack/status/1562861302242226178).



http://www.paulgraham.com/twitter.html
https://twitter.com/jack/status/1518772756069773313





- Integers are the most well-known, compact, and easy to work with data type - faster/easier indexing & querying versus content addressing, hashes, keypairs & signatures.



-->
