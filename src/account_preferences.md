<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# Account preferences & graphs

<!--
how it gets managed by IDMs (so they will also touch IPFS?!)

public vs private

interest graph & how it works off-chain

TODO: change interest graph related things in other pages & pictures

- per account graph state? a materialized tree of the current state based on all prior events - both off-chain & on-chain?

- remove the focus on the interest graph - it will be off-chain!
    - also from all graphics!




1 of N requirement for keeping the interest graph intact & being able to recover it from somewhere


the graph could be moved on-chain if there are many MB/s of DB throughput (possibly sharding) but that would put a lot of strain on the 


myspace-like page  (or linktree-like) where you paint the picture of you - as a map or as whatever - but content shouldn't be owned by separate platforms


Connections can be multidimensional with explicit filtering & exclusion of content based on its type/tag or interface that it originates from - all of which will also be represented by integers.




In Headjack all connections in the [interest graph](https://en.wikipedia.org/wiki/Interest_graph) are asymmetric and also visible & on-chain as it is geared towards [public discourse](https://www.quora.com/Will-the-future-of-social-graph-relationships-be-asymmetric-following-e-g-Quora-Twitter-or-symmetric-friending-e-g-Facebook/answer/David-O-Sacks) but private ones for a social graph can also be achieved through encryption - handled & stored by [IDMs](IDM.md) with greater trust assumptions. However, being public by default (as is the case with Twitter) and focusing on that aspect first greatly improves discoverability and the chances to bootstrap the network effect - propagation & reach are sought after. Identities will have their own customized landing pages off-chain through an IDM.



- `follows` (`array[integer]`) - list of accounts that it follows
    - `followers` (`array[integer]`) - a list of accounts that follow it (redundant - can be reconstructed by scanning all accounts - for faster queries of the other sort)

- Twitter: 400M users (220 MAU), average connections: 700
- 1.1 TB for arrays of arrays with 4 byte integers (the graph)
    - 2.2 TB (x2) if storing connections both ways for faster lookups (who do I follow & who follows me)
    - 4.4 TB (x2) if using long long int (8 bytes) - infinite indexes
- Metadata (pubkey, handle, description) per index would be O(1)
    - Less than the bytes required for 700 connections on average
- Realistic state size: ~20TB - database overhead & merkle roots
- The entire Twitter graph can be populated in a month with 1 MB/s of blockchain bandwidth



-->
