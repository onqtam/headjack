<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# Mental models for Headjack


# shared virtual memory

# the building block for any distributed system
- best indexability of data due to the use of just 4 integers to identify any piece of data - with up to 128 bits of entropy


# The global pub-sub

# the metaverse



<!-- 

Ethereum is NOT the world computer - it's the world's settlement layer. The world computer will be built on the unified and global identity & address space of Headjack.



It enables the construction of global [causally consistent](https://en.wikipedia.org/wiki/Causal_consistency) distributed systems
TODO: is this true? what about the problem of an anchored message referencing an unanchored message? - maybe only true for the authorizations but not messages that refer to each other


Headjack is [distributed shared memory](https://en.wikipedia.org/wiki/Distributed_shared_memory) which is a form of memory architecture where physically separated memories can be addressed as a single shared address space

It is the ultimate [virtual memory](https://en.wikipedia.org/wiki/Virtual_memory) with enough space for anything (4 integers ==> 128 bits, also maybe more if there is fractal addressing?)
- a unified view of anything addressable


we can construct a Single address space operating system
https://en.wikipedia.org/wiki/Single_address_space_operating_system
where 



For Headjack the role of a [MMU](https://en.wikipedia.org/wiki/Memory_management_unit) is handled by the blockchain state ???

can build an infinite-core world computer atop a global shared addressing space


TODO: think about
https://en.wikipedia.org/wiki/Consistency_model
https://en.wikipedia.org/wiki/Memory_coherence
https://en.wikipedia.org/wiki/Cache_coherence
https://en.wikipedia.org/wiki/Causal_consistency



it disrupts layers 3, 4 & 5 of the osi model and turns the web into a computer



> "The internet is the computer but it's missing identity and [acls](https://en.wikipedia.org/wiki/Access-control_list)." - [koalaman](https://news.ycombinator.com/item?id=25734612).


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



















<!--
Metaverse stuff to go in the mental models page

The metaverse is connected and there is no connectivity without common addressing and shared identity


It is the enabler of layering of tech in the metaverse - the one true ID

The collective no lying by public officials panopticon - funding public goods in public in the metaverse

Whatever we build would effectively be the matrix. The matrix is the metaverse - put this qith the metaverse stuff in the last page

the ledger of record with common global identity is the metaverse - the matrix


-->

# The metaverse

What is the Metaverse? Some good quotes about it:

> "The metaverse isn’t a 3D world owned by some corporation. It’s a permissionless market-network which respects and interconnects all user-owned and cryptographically-secured digital identities, reputations, wallets, communities, spaces, and objects.<!-- It’s bootstrapping right now. -->" - [@naval](https://twitter.com/naval/status/1434586449068756993)

> "We think of the metaverse as the entirety of all composable and interoperable resources, identities, applications, platforms, services, and protocols that exist in cyberspace." - [source](https://blog.ceramic.network/into-the-dataverse/)

> "The “metaverse” as I like to envision it, is a globally shared and permanent digital reality not owned by any single entity that any company, platform, or person can plug into, regardless of where they are or what device they’re using." - [source](https://mirror.xyz/0xE4f646F0Be4fF5ce185540F5366295f91d75b65D/-xpmr7ceHmi5Hqsl7zRtig9ph_dtCvWjZOoWOVN0bcg)

<!-- > "Metaverse doesn’t mean 3D, it means decentralized." - [@naval](https://twitter.com/naval/status/1516477829134704641) -->

The metaverse is about entities that interact with information under a common global namespace and surf the web through competing applications & views that present & filter commonly addressable data in any way imaginable. **But how does Headjack fit in it?**

We believe the way forward is through a layered stack of technologies & open protocols and that underneath everything sit identity & content addressing as primitives. All experiences & events can & will be interlinked, tied to identity & made easily referencable. Anything can be built & made composable & interoperable on top of these building blocks as long as they don't impose any constraints - no more walled gardens and fractured experiences. Furthermore, the Metaverse is mostly about agency in creation - transaction, exchange & finance are not at the forefront and will be handled by other layers & protocols like public generalized smart contract chains & NFTs.

> "The metaverse has nothing to do with “view” modalities — the tools you use to see the metaverse. That’s a convenient meme for those who have control over manufacturing hardware." - [source](https://future.com/7-essential-ingredients-of-a-metaverse/)

This section couldn't possibly do justice to all the aspects of what it would take to build the Metaverse - please refer to these 2 resources about it from a16z - perhaps the best ones around:
- [7 Essential Ingredients of a Metaverse](https://future.com/7-essential-ingredients-of-a-metaverse/)
- [Unlocking the Metaverse: New Opportunities in Games Infrastructure](https://future.com/metaverse-infrastructure-technology-games/)






> "Cyberspace does not lie within your borders. Do not think that you can build it, as though it were a public construction project. You cannot. It is an act of nature and it grows itself through our collective actions." - ["A Declaration of the Independence of Cyberspace" by John Perry Barlow ](https://www.eff.org/cyberspace-independence)


<!-- 





`worldofwarcraft.com/12412/johnny/234/schema/56/boss_headshot`


instance/nonce/collections from an identity - perhaps 100% off-chain issuance with on-chain integer-only updates to facilitate off-chain "namespaces" & libraries of objects

How would marketplaces for off-chain items from a collection work?

Look at improbable for metaverse and M2 - Herman Narula

the visual metaverse could be built on top of headjack and nvidia's omniverse
omniverse usd (universal scene description)



> "When thinking about the metaverse, however, the engine takes on a more important role. To break down the walls that separate one game or experience from another, it is likely that games will be wrapped and hosted within the engine, instead of the other way around. In this expanded view, engines become platforms, and communication between these engines will largely define what I think of as the shared metaverse." - [source](https://future.com/metaverse-infrastructure-technology-games/)



== OTHER:


> "Games will be able to check your wallet and change your experience depending on what you’ve acquired in other games. Games built by third-party indie devs could be built around the objects of other games, in a literal way extending the game's universe." - [source](https://mirror.xyz/0xE4f646F0Be4fF5ce185540F5366295f91d75b65D/-xpmr7ceHmi5Hqsl7zRtig9ph_dtCvWjZOoWOVN0bcg)

https://decrypt.co/105791/new-interoperability-alliance-launches-dao-to-develop-metaverse-standards

-->
