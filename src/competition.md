


## What other attempts are missing/doing wrong

- too much financialization - profiles & actions as NFTs, general-purpose EVM use
- no credible path to scale
- solving just the graph and not content addressability
- fragmentation

- your handle does not need to be an NFT for it to be resellable

- None of the current attempts can provide a path to 100M or 1+B users.


you don't start from NFT standards for profiles - you start from the data and work up to 1B scale.


They try to do too much and are overengineered & complicated
Too much theory & idealism - solving imaginary problems
Even distributed systems professionals have a hard time figuring out how they work & how much they can scale
Or the limitations are obvious (non-specialized chains)
Why build on something that soon may not be around?
Users shouldn't need a token or a wallet to benefit from an open social graph
Linking financial addresses should not be on-by-default
Competing standards & lack of cohesion & direction
No economic incentive - no bootstrapping flywheel



Most crypto projects are vague around their scalability & data structure - hiding something?
"follow the data"
Clarity is king.
Headjack is very upfront with its data scalability & structure because that is the crux of it.




## Specifics:


Други проекти които съм прегледал:
- DeSo
    https://www.openprosper.com/stats/deso-dashboard
- CyberConnect on ceramic
- farcaster.xyz - може би най-интересният опит който чак сега излиза от мазето, стартиран от едни бивши Coinbase executives
- minds.com
- project liberty
- bluesky
- lens.dev


Similar to "project liberty" founded in 2020 (paper - Decentralized Social Networking Protocol)


TODO: zion


== bluesky:
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


https://www.farcaster.xyz/


- https://www.minds.com/
    problems: token-oriented, opinionated, ethereum-based, clusterfuck of financial incentives around the $MINDS token



- cyberconnect
https://docs.cyberconnect.me/docs/tech_overview
problems: relying on their ceramic pinning service for data persistence, requires explicit key signatures, focus on financial accounts & linking them
https://discord.com/channels/901233976138682388/901234959623286825/959420114472669235
My question in their discord: Hello! Your documentation says Long-term data retention is guaranteed through Ceramic’s blockchain anchoring and our custom data pinning service. and I was wondering what would the long-term incentive for the pinning service be, and if the DAO token you'll be launching soon will be tied to the economic incentive for nodes to store the ever-expanding graph?
Also how big do you see the graph getting? My napkin math for Twitter's 400M users and 700 average connections shows that if using simple 4 byte integers as IDs (no pubkeys/signatures/DIDs) would require 1.1TB of data for the most compact version of the graph (each ID would have an array of IDs that it follows) being able to answer queries like who does X follow and for queries like who follows X the data would need to be 2x bigger (another set of arrays). In reality it would be much more because of other metadata, keys, signatures, bigger integers (to support more than 4 billion indexes), database overhead, etc. Thoughts? 

Ceramic has been a source of inspiration but it lacks 



no more fragmentation & problems with discovery
https://github.com/mastodon/mastodon/issues/9529
"consistency is incredibly important for creating a compelling user experience"
ALSO on the fracturing of federated services/protocols and stalling of innovation
https://signal.org/blog/the-ecosystem-is-moving/
also on this topic
https://moxie.org/2022/01/07/web3-first-impressions.html




A lot of the current winners/contenders in the web3 space are the ones that rushed ahead with incomplete technology to grab as much market share as possible.




https://violet.co/
Violet Protocol
https://twitter.com/violetprotocol/status/1426183676686176264



TWITTER ECOSYSTEM REVIEW
https://matrix.org/_matrix/media/r0/download/twitter.modular.im/981b258141aa0b197804127cd2f7d298757bad20
https://medium.com/decentralized-web/decentralized-social-networks-e5a7a2603f53
"However, a downside I’ve observed in social networks where content is monetized is that user behavior becomes transparently driven by monetary incentives in ways that feel less genuine. This applies to influencer culture on Instagram as well, but cryptocurrency social networks bake it in from the start."
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



Is there any way I could ask your team some questions? Some group chat perhaps?

I'd love to pick your brains and also share my design - it's also minimalistic in terms of what goes on chain

I've done an analysis of your solution vs mine with pros/cons and how they could be merged.






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



