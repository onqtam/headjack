


Contrast this to what the [other attempts](competition.md).


## What other attempts are missing

A list of problems with the contenders in the decentralized identity/media space:

- No credible path to [web-scale](../introduction/web_scale.md) - many will hit a wall even at 1 million. Most are vague around their scalability & data structure and don't put it [front and center](../implementation/scaling.md) as they should - obfuscating the most important bit. Instead of specifying NFT standards for accounts & developer APIs, start with the data and work up from that.

- Some are overengineered & complicated - even distributed systems professionals have a hard time figuring out how they work & what their limits are. Why build on something that soon may not be around and others are having a hard time in understanding it just like you?

- Too financialized & trying to do too much - profiles & posts as NFTs, marketplaces, fan coins, tipping, content creator incentives.
    > "However, a downside I’ve observed in social networks where content is monetized is that user behavior becomes transparently driven by monetary incentives in ways that feel less genuine. This applies to influencer culture on Instagram as well, but cryptocurrency social networks bake it in from the start." - [Jay Gerber](https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970)

- Users shouldn't need to use a token, use a wallet, or self-host to benefit from decentralized identity & an open interest graph. Most people will always use custodial services.
    > "People don’t want to run their own servers, and never will." - [Moxie](https://moxie.org/2022/01/07/web3-first-impressions.html)

- Linking online identity to financial accounts on Ethereum/Solana/etc will have unintended consequences - a bad default.

- Some lack an incentive layer to store the identity/graph data which adds a lot of complexity for anyone who wishes to build around them - too much flexibility & lack of direction.
    > "consistency is incredibly important for creating a compelling user experience" - [Moxie](https://signal.org/blog/the-ecosystem-is-moving/)

- Some lack [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) and lead to fragmentation and [no discoverability](https://github.com/mastodon/mastodon/issues/9529) - what's the network effect flywheel?

- Most are solving just identity & the graph - without easy & stable content addressability.

- Some use chains such as Ethereum for [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) & store vector commitments (Merkle roots) for events around key management (rotations, authorizations, sessions & revocations) but the problem of the data availability of the committed actions remains unsolved.







A lot of the current winners/contenders in the web3 space are the ones that rushed ahead with incomplete technology to grab as much market share as possible.





This is not to say that headjack doesn't have its fair share of tradeoffs




























## What Headjack gets right

- Napkin math is clear
- Best set of compromises for UX/DX because of delegation
    - No need for keys & ability to revoke access
    - Compactness of data
- UNIX philosophy: does just 1 thing - social graph (& anchoring)
- KISS: needs to be simple & obvious that it can scale ⇒ worth building on top of
    - & not opinionated and trying to do everything
- Everything else follows from data availability & access to the social graph

Headjack is very upfront with its data scalability & structure because that is the crux of it.

- Integers are the most well known and easy to work with data type
faster/easier indexing & queries than content addressing, hashes, keypairs & signatures

Compatible with any DID - just a graph & Idx/keys/DIDs associations
No problem linking/using multiple keys (also different signature algos)
Just publish the pubkey & sign a message with the private keys


separation of concerns
separation of concerns - UNIX philosphy - solve 1 vertical well
https://en.wikipedia.org/wiki/Separation_of_concerns

Headjack does not assume that the economy built around it would be paid in its own native token - any type of micro payment or business model can be done using any other tech - the native token is strictly for paying for block space. - separation of concerns
It makes no assumptions nor impose constraints for what would be built around it and how to make it self-sustaining


main advantages for headjack
- uniform addressability, deduplicating content, much more referencability
- push vs pull for updates
- separating views from infrastructure - infra can be distributed



Finance is about specific accounts & energy preservation - no double spends. UTXOs need to reference only a few other UTXOs - a linear chain. Media is about aggregation, data storage, retrievability & referencability on a massive scale - it shouldn't be built on top of financial infrastructure.




## Specifics:

Some of the more high-profile projects in the decentralized identity/media space will be briefly discussed here - these overviews are by no means exhaustive and focus mostly on the negatives from the perspective of Headjack. Corrections for any inaccuracies are welcome!

### [lens.xyz](https://lens.xyz/)

Всичко се пази он-чейн и не се използва специализиран блокчейн - обречено е да не може да скалира. Дори и да проима някакъв адопшън - какво се очаква да направят когато се ударят лимитите на Полигон? Да си направят собствен смарт контракт чейн? Или да разкарат дори Solidity-то и да си направят специализиран чейн без смарт контракти - нещо като DeSo? DeSo също е обречено за уеб скейл:
https://www.techspot.com/news/91513-visualizing-minute-internet-2021.html

Никой сериозен не би се хванал да строи около Ленс защото е просто играчка и хората от Aave нямат опит с уеб2 компании като Туитър/Реддит с реален мащаб. Нямат страница където да говорят за скалиране, ботълнекс, примери за бройки и роуд мап - а това е най-важното за такъв тип проект - или го крият, или не са го мислили въобще.

Но ще е добре да им прочета документацията и по-конкретно authentication и дали изизкват keypairs от потребителите или се ползва някакъв техен сървър и няма да трябва да подписваш всеки един лайк и коментар.




### [Bluesky](https://blueskyweb.org/)

TODO: re-read and take parts from this:
https://github.com/bluesky-social/adx/blob/main/architecture.md
- email as username - what about spam because email is public?
    https://webfinger.net/
    or not really an email, although looks like it
- relies on DNS for the part after the @ - centralization point
- DID Consortium - centralization
    instead of a consortium & a transparency log this should be a self-supporting blockchain network.
- DID may change - stability is not 100% guaranteed - may break links between users in the graph
- more complicated than my solution in terms of standards, addressing, processes, DID management, etc.
- push vs pull for content?
- users can lose their social graph and/or be kicked off entirely

- tweet with the ecosystem overview: https://twitter.com/bluesky/status/1352302821140549632


### [CyberConnect](https://cyberconnect.me/)

ceramic network

https://docs.cyberconnect.me/docs/tech_overview
problems: relying on their ceramic pinning service for data persistence, requires explicit key signatures, focus on financial accounts & linking them
https://discord.com/channels/901233976138682388/901234959623286825/959420114472669235
My question in their discord: Hello! Your documentation says Long-term data retention is guaranteed through Ceramic’s blockchain anchoring and our custom data pinning service. and I was wondering what would the long-term incentive for the pinning service be, and if the DAO token you'll be launching soon will be tied to the economic incentive for nodes to store the ever-expanding graph?
Also how big do you see the graph getting? My napkin math for Twitter's 400M users and 700 average connections shows that if using simple 4 byte integers as IDs (no pubkeys/signatures/DIDs) would require 1.1TB of data for the most compact version of the graph (each ID would have an array of IDs that it follows) being able to answer queries like who does X follow and for queries like who follows X the data would need to be 2x bigger (another set of arrays). In reality it would be much more because of other metadata, keys, signatures, bigger integers (to support more than 4 billion indexes), database overhead, etc. Thoughts? 

Ceramic has been a source of inspiration but it lacks 




they are handling the persistence of the social graph through pinning IPFS data on nodes of their own and that's swept under the rug - they don't provide any crypto economic incentive for the data availability and it will grow into the tens of terabytes for web scale (especially because they don't have a compact integer-based representation and everything is based on big individually signed actions). I don't see a way to handle that besides having their own chain and am not sure what I'd do if I was them.

https://docs.cyberconnect.me/protocol/technical-framework/#storage
"Long-term data retention is guaranteed through Ceramic's blockchain anchoring and our custom data pinning service."

they don't have the concept of delegating the rights to interfaces/services to update connections & post content on behalf of users - forcing everyone to always use keypairs so no ability to sign in with something like OAuth & use email/pass & have recoverability

they tie the identity to financial eth addresses (eth/sol/etc.) by default and that's a bad default for privacy

cyberconnect lacks the ability to anchor content & have it easily addressable & provable - sequencing events globally is underrated.






### [Farcaster](https://www.farcaster.xyz/)






### [Project Liberty](https://www.projectliberty.io/)

- it is at the right abstraction layer but there is not enough emphasis on compactness & use of indexes

Similar to "project liberty" founded in 2020 (paper - Decentralized Social Networking Protocol)
- Not enough emphasis on compactness & use of indexes
- Using smart contracts for identities - opinionated & slow
- Not the right team - 100m$ dumped by a billionaire, very little activity



TODO: zion


SSB, ActivityPub, Matrix - inferior, too segregated or opinionated/limited





### [DeSo](https://www.deso.org/)

It has [flatlined](https://www.openprosper.com/stats/deso-dashboard).

DeSo - It is doing too much
Cannot scale to billions despite planned sharding
It financializes everything - fan coins and whatnot
Requires users to pay for every interaction


### [Minds.com](https://www.minds.com/)
problems: token-oriented, opinionated, ethereum-based, clusterfuck of financial incentives around the $MINDS token









https://violet.co/
Violet Protocol
https://twitter.com/violetprotocol/status/1426183676686176264



TWITTER ECOSYSTEM REVIEW
https://matrix.org/_matrix/media/r0/download/twitter.modular.im/981b258141aa0b197804127cd2f7d298757bad20
https://medium.com/decentralized-web/decentralized-social-networks-e5a7a2603f53
https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970



== == == == == == == == == == == == == == == == == == == == == == == == == == == == 
== FARCASTER:
== == == == == == == == == == == == == == == == == == == == == == == == == == == == 

biggest difference with farcaster is the push vs pull model and the use of delegated interfaces that batch user content


The network effect is not related to data fetching and the implementation of that but of stable data addressing and user connections. Farcaster is implementing the wrong thing


You might need a specialized blockchain in order to compete.

My ultimate goal is to build on top of an open social graph and create new interfaces for displaying, sharing & interacting with data. I can provide a full list of everything I'd want from the web.

Design for 1B ppl from day 1

- Why Ethereum?
    - what would the setup look like for 1B ppl? Is building your own chain an option at some point?
    - because of the ability to sell the handle as an nft? Markets can be done on a specialized chain too


- syncing the activity of specific accounts (those who you follow) vs all accounts by default
    - your idea makes that easy
    - my idea makes it hard (have to scan everything published - easily 10-20+ MB/s
    - but syncing everything by default makes it easier in this scenario:
        - X follows Y
        - Y posts a comment to a post from Z
        - X gets the comment from Y but now also needs to fetch the post from Z ==> more lookups
            - actually you don't have a cast schema for replies to other ppl's posts yet

- What is your network effect and where is the lock-in? The contract? Cant that be copied?

- just the name registry is not enough for a standalone chain
    - with the 2 ideas merged there is merit for a standalone chain
        https://i.imgflip.com/6bc8w7.jpg
    - there will be a lot more block space demand if all connections & the "Host Directory" are moved on chain
    

- managed hosts could hold you hostage even if you have your keys
    - backups help, but too much hassle
    - even if you start using a different host, you'd have lost your follower list



- For access control management you need guaranteed data availability & sequencing
    - my design makes that very easy

In my design no special-purpose nodes are required - IPFS & ceramic streams can be leveraged

FARCASTER TODO: I don't get the peer2peer part of it & the nodes & stuff






- the "Handling Transfers" part can be avoided with a global sequencer
    https://farcasterxyz.notion.site/v2-Design-1e3c5c77311744179ca0d570341feb62
    TODO: rethink this & re-read it



- your "v2 Design" talks about p2p delivery of messages but why is that necessary if there's a link to the "Host Directory" and it can be polled?
    - are messages expected to propagate to all nodes?
    - can this handle 50MB/s of traffic?
    - why not use IPFS/Ceramic streams & a global sequencer like my idea?



- your design better guarantees the data availability of the content from a user


Hello Varun,

I had a call with Avichal from Electric Capital yesterday because I was pitching him an idea how to decentralize the social graph but at scale, and he mentioned that I should look at Farcaster. There's overlap and 

I'm 100% on board with the idea of putting content off-chain

equity - token? normal company?

You mention Solidity & Ethereum addresses - will the registry live there?

Not US timezone - I'm from Europe. But I could move to an American time zone

Why Solidity... Why general-purpose smart contracts


- unique indexes vs handles

- integers for users/interfaces/blocks/nonces are important for referencability & indexability


- with on-chain delegation & sequencing (the concept of time) users may not need pubkeys for the messages they have signed because those messages will reference interface nonces & blocks so spoofing will still not be possible


- host-centric blobs (user-specific) vs interleaved with the oactivity of other users, posted through interfaces


- multiple hosts at the same time?

- will you have a token and how would it accrue value? what is this 1% equity you offer for new hires?
- AFAIU hosts only deal with storing data, but many different & competing interfaces could be built that utilize the hosts for data storage?

- delegation could be implemented in your system as well.
    delegation is key!

- I think the Host Directory should go on chain too!

- sequencing & anchoring is important !!!

- what is the long-term vision of the project - it's own chain?

- isn't this design very poll-heavy? What if there are 1 billion users and each of them generates 2-3 follow events per day?

- the plan seems to be that you'd subsidize gas fees on ethereum in the begining

- is a "follow" event part of a "cast" as a signed blob?

- how would you guard against spam/sybil attack & people capturing the best handles?


- the "sufficient decentralization" post & the docs don't make this point, but I think multiple interfaces could be using the same (managed) host.
    don't write this - because this is in the docs:
    "A host should not be confused with an application which is a higher-order construct that may include a host, client and other services."


- on-chain registry's performance when checking for duplicate names?
    not a problem IMHO

- smart contracts user for things like "a feature where you can restrict replies to a message to users who own a specific asset"

- any way to make it possible for users to not need keypairs and just use plain old email login? Something like OAuth with the ability to later bind a keypair to a user identity if need be? Delegation & access control management?

- what I can do
    - presenting, meme lording, writing text


- shouldn't it be called farcast & the users a farcaster?
    - dont send this.

- signing every message & action is a PITA - would prohibit true mass adoption



- merklization & anchoring removes the need for the hash chain of casts and sequencing


- AFAIU any number of different interfaces/frontends could be implemented that could work with your host? So a host is providing access to your data & actions that you have signed, and any number of interfaces (twitter, youtube, medium, reddit) could be using your host to store the data once you generate it?


- have you thought about the push vs pull design and if it's possible to combine the 2 to provide the best performance & usability for devs?


- I don't like this poll-heavy design - instead I think all content should be merklized & andvertized on a chain and interfaces should simply process all data by default




- light clients that can be ran locally by users would benefit from a poll architecture as opposed to mine :|
    - why not merge both and provide both ways of getting data?


- My architecture isn't poll-based and has it's own chain that stores the follow graph along with 

- farcaster is also compatible with hosts managing your keys

- if a managed host responsible for millions of accounts goes away, how much time would it take for everyone to update the URLs to their hosts through the Ethereum contract?

- the rewriting of the history of a user is near impossible in my design - no need for clients to keep track of old hashes to posts

- the p2p system for nodes to sync data... won't scale with fine-grained messages signed by unique keys in a truly web-scale

- my solution doesn't suffer from conflicts & the eventual consistency problems of farcaster
    https://farcasterxyz.notion.site/v2-Design-1e3c5c77311744179ca0d570341feb62
    Unsolved Issues - Changing History
    https://farcasterxyz.notion.site/Node-Deep-Dive-1777791522ba481a94b9db7b9b27226a



