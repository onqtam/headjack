<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# How to think about Headjack


<!-- 


- how to think about Headjack - analogies, kafka, etc.


- Kafka comparison - whats a stream, what are the guarantees and differences
    - maybe take the event streams part of the "possibilities with open data" page and separate it?
    - 
    - do a table as a comparison
    - 



Think of Headjack as an [information bus](https://www.cs.cornell.edu/courses/cs614/2003sp/papers/OPS93.pdf) on top of which any type of distributed system can be architected thanks to the minimal semantics, self-describing messages, dynamically definable message types & permissionlessness. The service objects that deal with identity & authorization are on-chain and have guaranteed storage & retrievability whereas all data objects are just cryptographically anchored and stored off-chain ([IPFS](https://en.wikipedia.org/wiki/InterPlanetary_File_System)) for which durability & retrievability is on a [best-effort](https://en.wikipedia.org/wiki/Best-effort_delivery) basis without guarantees. It can [scale](numbers.md) practically as much as necessary. Another way to look at it is as a global [publish-subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) messaging network similar to [Kafka](https://kafka.apache.org/intro) where accounts are treated as topics to which anyone can subscribe to - a notification highway. It is the manifestation of Jack's [vision for decentralizing Twitter](https://twitter.com/jack/status/1204766078468911106) which should have never become a company as [Jack admits](https://twitter.com/jack/status/1562861302242226178).



http://www.paulgraham.com/twitter.html


-->
