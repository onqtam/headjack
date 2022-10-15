<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# IDMs, preferences & graphs

<!--
how it gets managed by IDMs (so they will also touch IPFS?!)

public vs private
sections about public vs encrypted data?
also publicly announced vs non-announced but still unencrypted?



Apps should proactively talk to IDMs to let them know about user actions?

IDMs should provide a feed of all actions by a user - as a stream from which others can pick up from where they left off and continue forward - like a kafka topic

interest graph & how it works off-chain

TODO: change interest graph related things in other pages & pictures

- per account graph state? a materialized tree of the current state based on all prior events - both off-chain & on-chain?

- remove the focus on the interest graph - it will be off-chain!
    - also from all graphics!



ways to both use an IDM and still direct your personal perferences & private stuff to be handled by something of your choosing



1 of N requirement for keeping the interest graph intact & being able to recover it from somewhere


the graph could be moved on-chain if there are many MB/s of DB throughput (possibly sharding) but that would put a lot of strain on the 


myspace-like page  (or linktree-like) where you paint the picture of you - as a map or as whatever - but content shouldn't be owned by separate platforms


Connections can be multidimensional with explicit filtering & exclusion of content based on its type/tag or application that it originates from - all of which will also be represented by integers.




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



- private connections, posts & user data
    - see 4.2.2 Privacy (basically encrypted connections/actions and secrets shared/delegated to applications to operate on behalf of actor)
    even encrypted direct messaging could be implemented on top of this
    5.4.3 & 5.4.4
    https://unfinished.com/wp-content/uploads/dsnp_whitepaper.pdf
    - TODO: store off-chain?
    centralized connection graph is not incompatible with data pods as thought by in Solid, or Ceramic, etc.
        - can be stored & managed by ID managers
    - GDPR...
    https://matrix.org/~matthew/Response_to_-_Notes_on_privacy_and_data_collection_of_Matrix.pdf
    https://gitlab.com/libremonde-org/papers/research/privacy-matrix.org
    https://developer.litprotocol.com/docs/WhatIsLit/whatIsLitProtocol



muted keywords & preferences
https://twitter.com/AltcoinPsycho/status/1547203030185017344



- The importance of user data is on a spectrum with identity & connections being the most valuable - a clear example is [Substack](https://en.wikipedia.org/wiki/Substack) (basically [Medium](https://en.wikipedia.org/wiki/Medium_(website)) but you own the mailing list for your audience). The [interest graph](https://en.wikipedia.org/wiki/Interest_graph) is the subscription layer for information propagation - a forward-looking & ever-evolving data structure that gets reused over and over again each time content is created. It is the [essential crown jewel](https://twitter.com/balajis/status/1162539429484871681) that needs preservation - the global [pub-sub](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern). The data availability (DA - storage & retrievability) for identity & the interest graph needs to be guaranteed with cryptoeconomics on a permissionless ledger so anyone can build around it.


-->
