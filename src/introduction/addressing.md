# Addressing: host/app vs data/name centric


["Cool URIs don't change"](https://www.w3.org/Provider/Style/URI)

THE LEDGER OF RECORD

- DNS
    DNS was the original “decentralization”.
    RSS was an attempt for the next iteration
    How do you store your friend list?
    But rss is too technical
    Dns got overloaded too many times


Today's web revolves around hosts - we query DNS to get the IP of servers which we talk to directly to retrieve data that they store. Once they are gone - the data is gone too. 90%+ of the links on the web are dead 


[Link rot](https://en.wikipedia.org/wiki/Link_rot) is a major problem and we are building our digital history on shifting sands without a solid foundation. The [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive) is just a bandaid

But there's also ["content drift"](https://www.cjr.org/analysis/linkrot-content-drift-new-york-times.php)


["More than 98% of the information on the web is lost within 20 years"](https://a16z.com/2020/07/13/a16z-podcast-preserving-digital-history-how-to-close-the-webs-memory-hole/)



https://a16z.com/2020/07/13/a16z-podcast-preserving-digital-history-how-to-close-the-webs-memory-hole/

[Memory hole](https://en.wikipedia.org/wiki/Memory_hole)





- host/app-centric vs data/name centric
    We are dominated by platforms & applications when in reality data is the most important thing - we need to be able to address it.
    host/app-centric addressing needs to go away.

    The web should move away from the host (ip/domain) and application-specific model towards data-centric

    https://en.wikipedia.org/wiki/Data-centric_computing
    https://en.wikipedia.org/wiki/Named_data_networking
    NDN lacks a global name registry

    - deduplication

# Blob structure & addressing

A major component of Headjack is how off-chain content is addressed. Interfaces accumulate activity from users which they cryptographically anchor in batches with a Merkle root which doesn't have to be on every block - those with little activity may submit only once per minute or even less often - the frequency is determined by publishing platforms based on the volume of activity and the on-chain costs for publishing bytes.

When enough activity has been collected, an interface constructs a blob and sorts all the events generated since the last anchored batch by grouping the activity by users and sorting them in some deterministic way (users based on index/name and user interactions based on the sequence).

Interfaces maintain the logical order of events for the future batch in maps in order to provide intra-blob addressing even before it is fully constructed - as an example if a user posts an article and immediately after that comments on their post - the comment should be able to refer to the post which is not yet committed on-chain. Interfaces will also display activity by others that is not yet anchored and the interactions can still use the proper addressing when referring to the yet-to-be-anchored messages (the next nonce to use will be known). Any type of interaction is addressable and sequenced in the blobs - including reactions (likes, etc).

When the blob is finalized a Merkle root is constructed that touches every event and the [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) (hash) for the blob is generated. The only 2 things that are submitted on-chain are thus the Merkle root and the IPFS CID. Blobs have headers which contain the intra-blob index (offset table) for lookup of content of specific accounts.

Interfaces are yet another on-chain account and they'll be able to associate a REST/RPC endpoint or any other means for direct contact by the rest of the interfaces so that they may ask for the yet unanchored messages and display them while they are still in the "mempool". They can also advertise the multiaddress of their IPFS nodes so that each successive blob of generated content that gets published can be downloaded by others instantly by manually connecting with IPFS’s [“swarm connect” functionality](https://medium.com/pinata/speeding-up-ipfs-pinning-through-swarm-connections-b509b1471986) - avoiding the use of the DHT for each new blob CID which may take tens of minutes. They can provide addresses to multiple IPFS nodes as a cluster for redundancy & horizontal scaling and use [Pinset orchestration for IPFS](https://ipfscluster.io/) - designed for Automated data availability and redundancy.

# [URNs](https://en.wikipedia.org/wiki/Uniform_Resource_Name) - permanence, names & translation

Each account has an associated auto-increment counter (nonce) for every time they submit an anchor for off-chain content. So if an interface has submitted 4 times already, then the next submission will be with `nonce == 5`. The blockchain keeps a mapping for each previous nonce value to the block number when it changed so that `<interface_id>/<nonce>` can be translated to which block has the Merkle root anchor & IPFS hash for the blob that corresponds to that nonce for that account.

Once a blob is fetched through the [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) (hash) we can address specific events by utilizing the offset index in the blob header so a URN such as `<interface_id>/<nonce>/<user_id>/<content_id>` can point to a specific post, comment or even reaction. The content ID for a specific user is usually a small single digit number and is necessary only if there have been more than 1 interactions by that user through that interface for the given nonce.

The blockchain can be queried if the interface was allowed to post content on behalf of the user through on-chain authorization (probably initiated by an [IDM](../implementation/ecosystem/IDM.md)) when that specific block was published in order to determine if the activity is authentic - the state keeps information for each account such as since what block number a given interface was authorized to post on behalf of a user (and until when - all ranges). Users may avoid using IDMs and explicitly sign their interactions in which case their signatures will be within the data blobs and the only check required will be for the keypair used for the specific block number.

---

Users and interfaces don't need a name and can operate as an integer index just fine, but the preferred case will be with handles. Names can change ownership but the blockchain will be able to translate `<interface_name>/<nonce>/<user_name>/<content_id>` with strings into the canonical integer form discussed previously by substituting the interface & user names with account IDs.

Every name has an associated auto-increment nonce as well for every time they submit an anchor for off-chain content (just like account IDs) and the blockchain records maps of `<name>/<nonce>` to `<id>/<nonce>` which can then be used for another lookup to get the block that contains the Merkle root & [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) (hash) for the anchored blob.

But we need to be able to translate not just the interface name but also the user name which may have changed ownership at any point - for that the blockchain keeps track of the account ID ownership of every name historically as ranges (from block X to block Y name N was owned by account A) so when we determine the block number for a given data blob we'd be able to check the account IDs that correspond to all usernames within that blob at that time.

And thus we're be able to have URNs such as `twitter.com/55212/johnny/3` to identify any event by any actor - all we'd need to do is a few lookups and then we'll be able to use Merkle proofs for any piece of content to prove authenticity. Most URNs will even omit the 4th part because probably there won't be more than 1 action by a user for a given batch by an interface. Most Web3 platforms [suffer from unreadable URLs](https://twitter.com/hasufl/status/1537388439259291649) but we've done a lot better - note the brevity and lack of hashes & hexadecimal symbols (`0xf56a0...`) - in fact, this is as good as it gets.

Or is it?! What about headlines of articles - can we have them included as well - something like `twitter.com/55212/johnny/3/how-I-went-from-vegan-to-keto-and-back-again`? Absolutely! The string is not at all necessary to resolve the piece of content (just like in StackOverflow where the database key for a question is just a number (example: [question 4](https://stackoverflow.com/questions/4)) but the page router always changes the URL when loading the page to include the title too). [Message types](../implementation/ecosystem/messages.md) for posts with titles will have a dedicated field for them which will get included in the content hash and conforming interfaces will refuse to show a wrong title in a URN as it would be a trivial check.

Names are discussed in greater detail in [their dedicated page](../implementation/handles.md) (constraints, subdomains, auctions, distribution, hoarding, leasing, etc.).

TODO: interface accounts should have associated ways of loading their interfaces - talk about that. Also other interfaces & platforms can display the data and provide a link to the original interface if their on-chain account provides the means for that

TODO: when viewing an old stable URI that has been referenced by "update events" responsible interfaces should show the newest version and indicate that there has been a change

TODO: multiple edit events in parallel to the same original message? a fork? :|

# Benefits of data/name-centric networking

TODO: Multiple points to retrieve content - redundancy

platform attribution - advertising 
Interface names that were used to publish content can serve as advertising (interface attribution) for the platform that was chosen by a user when content is viewed through other interfaces because the original URNs will be shown and users will be able to click to view each piece of content through the originating interface if they choose to (if they've never heard of it before & are curious or if their current interface doesn't fully support a given message type).

==> discoverability of new interfaces!

# Names




- names/handles
    - decentralized DNS
    - giving/leasing the names properly & orderly is a hard problem


- archivability, shifting sands
    - data vs entire webpage content
    - push vs pull
    
    Include a case study with balaji and his post with archived links for permanence - all the data could even be bundled with crypto proofs
    case study: Balaji uses the interet archive for stable links to some of the links
    
    
    Balaji is future-proofing his writings by using archived URLs by default when referring to articles even though they are still around!
    [Example](https://balajis.com/synthesis/): look what `"Prussian"` in that text is [pointing to](https://archive.ph/O2D45).

- indexing
    The block explorers for Headjack would be the next Google.
    block explorers are the future of browsing
    https://twitter.com/balajis/status/1406400770581303297
- addressing
    - stable URLs
    STABILITY !!!
    - extensible

TODO: talk about PUSH vs PULL & how that relates to RSS - on the main page.

The network effect is not related to data fetching and the implementation of that but of stable data addressing and user connections.

not just self-certifying data addressable by hash, but also by a pretty URL!






Headjack - free the world's information by making it portable & addressable


Data needs to be removed from the grip of host/app-centric monopolies

interlinking data and allowing different views to be used will reduce the effect of echo chambers


https://en.wikipedia.org/wiki/Tamper-evident_technology








reinventing the semantic web 
https://en.wikipedia.org/wiki/RDFa

data-centric architectures are a paradigm shift




Stable URLs, deduplicating content & anchoring everything to a single backbone greatly improves the indexability of the web.

the addition of a global singleton of access control management and key registry solves a lot of problems in NDN around security



Headjack is the index for web-scale [content centric networking](https://en.wikipedia.org/wiki/Content_centric_networking).








A global index of all content throughout time in an Information-centric network - a form of named data networking layered on top of the current host-centric model (client-server connections through IP & DNS)

Differences from NDN: builds on the current internet infrastructure, doesn't have the same packet types and routing concepts - utilizes technologies that are currently available.





https://en.wikipedia.org/wiki/Future_Internet



linking data is easier under a common global namespace
https://en.wikipedia.org/wiki/Linked_data

linking data based on URIs in a host-centric internet architecture is inherently flawed - needs to be in a named data paradigm

https://en.wikipedia.org/wiki/Hyperdata




The core of ADX is self-authenticating data. In law, a “self-authenticating” document requires no extrinsic evidence of authenticity. In computer science, an “authenticated data structure” can have its operations independently verified. When resources in a network can attest to their own authenticity, then that data is inherently live – that is, canonical and transactable – no matter where it is located. This is a departure from the connection-centric model of the Web, where information is host-certified and therefore becomes dead when it is no longer hosted by its original service. Self-authenticating data moves authority to the user and therefore preserves the liveness of data across every hosting service.
https://github.com/bluesky-social/adx/blob/main/architecture.md#did-methods

