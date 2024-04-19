# Headjack vs the competition

This chapter focuses on the disadvantages of some of the more high-profile competing solutions in the space. Most of the issues are solved in Headjack due to its [guiding principles & design goals](principles.md). This page doesn't list any of their positives as it would be too long (so not exhaustive by any means) but many of them have served as an inspiration for Headjack in one way or another.

<!-- > "In order to cure, you must first understand." - [Random scientist, 28 Days Later (2002)](https://www.quotes.net/mquote/962715) -->

<!-- Corrections for any inaccuracies are welcome! -->

<!-- If Bluesky, Farcaster and DSNP had a baby with some special MKUltra spice it would be Headjack -->

# Comparison table

Some of this is a subjective estimation - many of the claims lack official sources.

<!-- <iframe src="competition_table.html" title="Comparison table"
style={{width: "100%", height: "1200px"}}
></iframe>

!!!
https://stackoverflow.com/questions/3934271/horizontal-scrollbar-on-top-and-bottom-of-table

https://stackoverflow.com/questions/16660559/difference-between-iframe-embed-and-object-elements

https://stackoverflow.com/a/31513163

<object data="competition_table.html" style={{width: "100%", height: "1200px"}}></object>

<iframe src="competition_table.html" onload='javascript:(function(o){o.style.height=(o.contentWindow.document.body.scrollHeight+30)+"px";}(this));' style={{height: "200px", width: "100%", border: "none", overflow: "hidden"}}></iframe> -->

<table class="competition_comparison" style={{width: "120%"}}>
<tr>
    <td style={{width: "16%"}}></td>
    <td><b>Headjack</b></td>
    <td><b><a href="competition.md#farcaster">Farcaster</a></b></td>
    <td><b><a href="https://www.dsnp.org/">DSNP</a> & <a href="https://www.frequency.xyz/">Frequency</a></b></td>
    <td><b><a href="https://en.wikipedia.org/wiki/Bluesky_(protocol)">Bluesky</a> & <a href="https://atproto.com/">AT Protocol</a></b></td>
    <td><b><a href="https://developer.tbd.website/projects/web5/">TBD web5</a><br/><a href="https://docs.google.com/presentation/d/1SaHGyY9TjPg4a0VNLCsfchoVG1yU3ffTDsPRcU99H1E">slides</a> & <a href="https://twitter.com/namcios/status/1535302090360250368">tweet</a></b></td>
    <td><b><a href="https://ceramic.network/">Ceramic</a> & <a href="https://cyberconnect.me/">CyberConnect</a></b></td>
    <td><b><a href="https://lens.xyz/">Lens<br/>Protocol</a></b></td>
</tr>
<tr>
    <td style={{backgroundColor: "grey"}} colspan="8" height="25px"><b>blockchain-related properties</b></td>
</tr>
<tr>
    <td><b>Scalability & potential scope</b></td>
    <td style={{backgroundColor: "green"}}><a href="numbers.md"><img src="/img/meme_carl_sagan_billions.jpeg"/></a></td>
    <td style={{backgroundColor: "lime"}}>perhaps up to ~10 million - could move to its own rollup</td>
    <td style={{backgroundColor: "yellow"}}>perhaps up to a few million  graph changes are on-chain</td>
    <td style={{backgroundColor: "green"}}>centralized consortium of servers</td>
    <td style={{backgroundColor: "yellow"}}>perhaps up to<br/>a few million - lots of reliance on IPFS, DHTs, hashes & keys</td>
    <td style={{backgroundColor: "yellow"}}>perhaps up to<br/>a few million - lots of reliance on IPFS, DHTs, hashes & keys</td>
    <td style={{backgroundColor: "red"}}>actions are on-chain as NFTs (follow, post's hash) - even a dedicated EVM chain will be futile</td>
</tr>
<tr>
    <td><b>Users paying for TX fees & linking identity to financial accounts by default</b></td>
    <td style={{backgroundColor: "green"}}>all blockchain costs are paid for by services by default</td>
    <td style={{backgroundColor: "yellow"}}>Ethereum L1 costs initially planned for subsidy by services</td>
    <td style={{backgroundColor: "green"}}>all blockchain costs are paid for by services by default</td>
    <td style={{backgroundColor: "green"}}>centralized consortium of servers - no TXs</td>
    <td style={{backgroundColor: "lime"}}>the anchors (on-chain Merkle roots) get batched with others</td>
    <td style={{backgroundColor: "yellow"}}>only the stream anchors to Ethereum L1 have to be paid for occasionally</td>
    <td style={{backgroundColor: "red"}}>yes</td>
</tr>
<tr>
    <td><b>Blockchain TX fee stability & predictability</b></td>
    <td style={{backgroundColor: "green"}}><a href="numbers.md">as scalable as necessary => no congestion</a></td>
    <td style={{backgroundColor: "red"}}>Ethereum L1 - may need to migrate to its own rollup in the future</td>
    <td style={{backgroundColor: "lime"}}><a href="https://forums.projectliberty.io/t/05-what-is-capacity-frequency-economics-part-1/248">their notion of capacity</a> is probably good enough</td>
    <td style={{backgroundColor: "green"}}>centralized consortium of servers - no TXs</td>
    <td style={{backgroundColor: "lime"}}>Bitcoin TX fees are low due to low economic activity</td>
    <td style={{backgroundColor: "red"}}>Ethereum L1 for stream anchors</td>
    <td style={{backgroundColor: "lime"}}>Polygon PoS</td>
</tr>
<tr>
    <td><b>Block time for anchoring key operations</b></td>
    <td style={{backgroundColor: "green"}}>Ethereum ZK validium with multiple blocks in one L1 slot</td>
    <td style={{backgroundColor: "lime"}}>Ethereum</td>
    <td style={{backgroundColor: "lime"}}>Polkadot</td>
    <td style={{backgroundColor: "green"}}>centralized consortium of servers</td>
    <td style={{backgroundColor: "red"}}>Bitcoin</td>
    <td style={{backgroundColor: "yellow"}}>Ethereum, but the anchors are occasional</td>
    <td style={{backgroundColor: "green"}}>Polygon PoS</td>
</tr>
<tr>
    <td><b>Time to finality for key operations</b></td>
    <td style={{backgroundColor: "yellow"}}>Ethereum</td>
    <td style={{backgroundColor: "yellow"}}>Ethereum</td>
    <td style={{backgroundColor: "lime"}}>Polkadot</td>
    <td style={{backgroundColor: "green"}}>centralized consortium of servers</td>
    <td style={{backgroundColor: "red"}}>Bitcoin</td>
    <td style={{backgroundColor: "yellow"}}>Ethereum</td>
    <td style={{backgroundColor: "lime"}}>Polygon PoS</td>
</tr>
<tr>
    <td><b>Contains a name registry for easy discoverability & can replace DNS</b></td>
    <td style={{backgroundColor: "green"}}>yes - & tightly integrated with addressability - URIs aren't broken <a href="names_and_paths.md">even if names change ownership</a></td>
    <td style={{backgroundColor: "green"}}>yes, also works with ENS</td>
    <td style={{backgroundColor: "red"}}>no, but might introduce it</td>
    <td style={{backgroundColor: "red"}}>no - uses <a href="https://atproto.com/guides/identity">email-like usernames</a> resolved with <a href="https://webfinger.net/">Webfinger</a> to a <a href="https://www.w3.org/TR/did-core/">DID</a> & relies on DNS (centralized)</td>
    <td style={{backgroundColor: "red"}}>no</td>
    <td style={{backgroundColor: "red"}}>no, maybe works with ENS</td>
    <td style={{backgroundColor: "red"}}>no, maybe works with ENS</td>
</tr>
<tr>
    <td><b>Decentralization for the most important parts (keys & registries)</b></td>
    <td style={{backgroundColor: "lime"}}>Ethereum ZK validium with external data availability (validium) - <a href="https://www.layrlabs.com/products">EigenDA</a>?</td>
    <td style={{backgroundColor: "green"}}>Ethereum</td>
    <td style={{backgroundColor: "lime"}}>Polkadot - not big enough set of validators</td>
    <td style={{backgroundColor: "red"}}>centralized consortium of servers</td>
    <td style={{backgroundColor: "yellow"}}>Bitcoin, but DID operations are only anchored</td>
    <td style={{backgroundColor: "yellow"}}>Ethereum, but only the stream anchors go there</td>
    <td style={{backgroundColor: "yellow"}}>Polygon PoS</td>
</tr>
<tr>
    <td><b>Incentive layer & data availability for the most important (keys & registries)</b></td>
    <td style={{backgroundColor: "green"}}>Ethereum ZK Validium</td>
    <td style={{backgroundColor: "green"}}>Ethereum</td>
    <td style={{backgroundColor: "green"}}>Polkadot</td>
    <td style={{backgroundColor: "green"}}>centralized consortium of servers</td>
    <td style={{backgroundColor: "red"}}>DID operations are stored in a network on IPFS <a href="https://github.com/decentralized-identity/ion/blob/master/docs/Q-and-A.md#q-what-are-the-availability-guarantees-of-ion">without incentives</a></td>
    <td style={{backgroundColor: "red"}}>the actual streams are in a network w/o incentives</td>
    <td style={{backgroundColor: "green"}}>Polygon PoS</td>
</tr>
<tr>
    <td style={{backgroundColor: "grey"}} colspan="8" height="25px"><b>Data availability, storage, retrievability & addressing</b></td>
</tr>
<tr>
    <td><b>Human-readable & persistent URIs for data without any hashes</b></td>
    <td style={{backgroundColor: "green"}}><a href="names_and_paths.md"><img src="/img/meme_yes_chad_green.png"/></a></td>
    <td style={{backgroundColor: "red"}}>URIs full of <a href="https://github.com/farcasterxyz/protocol/pull/1/files">hashes</a> (probably)</td>
    <td style={{backgroundColor: "red"}}>URIs full of <a href="https://spec.dsnp.org/DSNP/Identifiers.html?highlight=uri#dsnp-content-uri">hashes</a></td>
    <td style={{backgroundColor: "red"}}>URIs full of <a href="https://atproto.com/guides/data-repos#data-layout">hashes</a> - <a href="https://github.com/multiformats/cid">CIDs</a> for IPLD objects</td>
    <td style={{backgroundColor: "red"}}>URIs full of hashes (probably)</td>
    <td style={{backgroundColor: "red"}}>URIs full of <a href="https://cerscan.com/testnet-clay/stream/kjzl6cwe1jw1474gby1buhqw8xbnvfmfphpvrs0n01n6jls9kvdx7hu41w0sp1m">hashes</a></td>
    <td style={{backgroundColor: "red"}}>URIs full of <a href="https://lenster.xyz/posts/0x05-0x04f4">hashes</a></td>
</tr>
<tr>
    <td><b>Multiple ways to ask for a URI's document<br/>(in addition to caches/archives)</b></td>
    <td style={{backgroundColor: "green", textAlign: "left"}}><a href="store_and_retrieve.md#how-to-retrieve-data-for-a-random-uri">&nbsp;multiple ways:</a><br/>&nbsp;<b>1)</b> user's <a href="IDM.md">IDM</a><br/>&nbsp;<b>2)</b> <u><b>source app identifiable from the URI</b></u><br/>&nbsp;<b>3)</b> <u><b>IPFS blob from the block</b></u><br/>&nbsp;<b>4)</b> p2p network</td>
    <td style={{backgroundColor: "yellow", textAlign: "left"}}>&nbsp;<b>1)</b> user's Hub<br/>&nbsp;<b>2)</b> p2p network</td>
    <td style={{backgroundColor: "red"}}>URIs contain only <a href="https://spec.dsnp.org/DSNP/Identifiers.html?highlight=uri#dsnp-content-uri">user id & content hash</a> without user Hubs (yet) & p2p network</td>
    <td style={{backgroundColor: "yellow", textAlign: "left"}}>&nbsp;<b>1)</b> user's <a href="https://atproto.com/guides/data-repos">PDR</a><br/>&nbsp;<b>2)</b> maybe p2p network with the content <a href="https://atproto.com/guides/data-repos#data-layout">CID</a></td>
    <td style={{backgroundColor: "red", textAlign: "left"}}>&nbsp;probably<br/>&nbsp;<b>1)</b> user's <a href="https://github.com/TBD54566975/dwn-sdk-js">DWN</a><br/>&nbsp;<b>2)</b> p2p network</td>
    <td style={{backgroundColor: "red"}}>only p2p network as Ceramic streams are an abstraction over IPFS</td>
    <td style={{backgroundColor: "red"}}>unsure - maybe the on-chain NFT post</td>
</tr>
<tr>
    <td><b>Big reliance on a p2p network for delivering fine-grained messages</b></td>
    <td style={{backgroundColor: "green"}}>using a p2p network for specific URIs is the last resort</td>
    <td style={{backgroundColor: "red"}}>using a gossip-based pubsub protocol between peers & Hubs</td>
    <td style={{backgroundColor: "grey"}}>not sure: their URIs contain only <a href="https://spec.dsnp.org/DSNP/Identifiers.html?highlight=uri#dsnp-content-uri">user id & content hash</a> but they don't have an IDM/Hub/ PDR/DWN as a concept (yet)</td>
    <td style={{backgroundColor: "green"}}>no - talk directly to a user's <a href="https://atproto.com/guides/data-repos">PDR</a></td>
    <td style={{backgroundColor: "grey"}}>not sure: perhaps could directly talk to a user's DWN</td>
    <td style={{backgroundColor: "red"}}>yes - IPFS, Ceramic Network & global DHTs</td>
    <td style={{backgroundColor: "grey"}}></td>
</tr>
<tr>
    <td><b>Push (broadcast) vs pull (polling) for fetching new content</b></td>
    <td style={{backgroundColor: "green"}}>both - event batches are broadcasted & new/individual documents can be requested</td>
    <td style={{backgroundColor: "red"}}>pull only - requires polling a user's Hub for anything new</td>
    <td style={{backgroundColor: "green"}}>both - event batches are broadcasted & new/individual documents can be requested</td>
    <td style={{backgroundColor: "red"}}>pull only - requires polling a user's <a href="https://atproto.com/guides/data-repos">PDR</a> for anything new</td><td style={{backgroundColor: "red"}}>pull only - requires polling a user's <a href="https://github.com/TBD54566975/dwn-sdk-js">DWN</a> for anything new</td>
    <td style={{backgroundColor: "green"}}>both - events are broadcasted & new/individual documents can be requested</td>
    <td style={{backgroundColor: "grey"}}></td>
</tr>
<tr>
    <td><b>Self-authenticating documents</b></td>
    <td style={{backgroundColor: "green"}}>proofs are validated by the blockchain</td>
    <td style={{backgroundColor: "yellow"}}>need to talk to Ethereum <b>AND</b> the host-certified user directory which can disappear OR change</td>
    <td style={{backgroundColor: "yellow"}}>merkle roots <a href="https://github.com/LibertyDSNP/frequency/issues/105">not present</a></td>
    <td style={{backgroundColor: "green"}}>proofs are validated by the transparency log</td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
</tr>
<tr>
    <td style={{backgroundColor: "grey"}} colspan="8" height="25px"><b>Ease of use for developers & users</b></td>
</tr>
<tr>
    <td><b>Can leverage existing Web2 authenticating infrastructure</b></td>
    <td style={{backgroundColor: "green"}}>Can leverage all existing OAuth / SAML code</td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
</tr>
<tr>
    <td><b>Easy to work with mental model vs high cognitive load & complexity</b></td>
    <td style={{backgroundColor: "lime"}}>A bit more complexity compared to Web2</td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
</tr>
<tr>
    <td><b>Can use "custodial" hosted services while retaining ultimate control</b></td>
    <td style={{backgroundColor: "green"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
</tr>
<tr>
    <td><b>Ease of indexing & building responsive UI</b></td>
    <td style={{backgroundColor: "green"}}>can be as performant as Web2 and not constrained by block time</td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
    <td style={{backgroundColor: "grey"}}></td>
</tr>

<!-- <tr>
    <td>-</td>
    <td style={{backgroundColor: "green"}}>-</td>
    <td style={{backgroundColor: "grey"}}>-</td>
    <td style={{backgroundColor: "grey"}}>-</td>
    <td style={{backgroundColor: "grey"}}>-</td>
    <td style={{backgroundColor: "grey"}}>-</td>
    <td style={{backgroundColor: "grey"}}>-</td>
    <td style={{backgroundColor: "grey"}}>-</td>
</tr> -->


</table>

<a id="footnote-1-ref" href="#footnote-1">[1]</a>
<a id="footnote-2-ref" href="#footnote-2">[2]</a>

<div id="footnote-1">
   1. X. <a href="#footnote-1-ref">&#8617;</a> 
</div>
<div id="footnote-2">
   2. X. <a href="#footnote-2-ref">&#8617;</a>
</div>

<!--


avoiding signatures by default - only hashing - much faster
asymmetric cryptography is SLOW
https://medium.com/logos-network/benchmarking-hash-and-signature-algorithms-6079735ce05
https://crypto.stackexchange.com/questions/38043/hmac-vs-rsa-speed

bloat because of individual signatures - versus computable hashes that don't need to be stored

DA is very important for DID resolution - if there's no guaranteed DA - there's no guaranteed resolution.


authentic timestamps?

how easy it is to build aggregators for the entire public web?

are applications bottlenecked by the personal data repository of a user? yes in the case of farcaster & bluesky

Openness enables gradual evolvability

> "The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise." - [Edsger Dijkstra](https://www.azquotes.com/quote/700184)

> "The steady state of disks is full." - [Ken Thompson](https://www.azquotes.com/quote/1323716)


What Farcaster lacks is a timechain
https://tftc.io/martys-bent/issue-441/


> "Every two days now we create as much information as we did from the dawn of civilization up until 2003." - [Eric Schmidt, 2010](https://techcrunch.com/2010/08/04/schmidt-data/)

> "Data is a precious thing and will last longer than the systems themselves." - [Tim Berners-Lee](https://www.azquotes.com/quote/171730)

> "Everything is based on a simple rule: Quality is the best business plan, period." - [Steve Jobs](https://www.azquotes.com/quote/1060339)


> "Design is not just what it looks like and feels like. Design is how it works." - [Steve Jobs](https://www.goodreads.com/quotes/457177-design-is-not-just-what-it-looks-like-and-feels)


> "That’s been one of my mantras — focus and simplicity. Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it’s worth it in the end because once you get there, you can move mountains." - [Steve Jobs](https://www.goodreads.com/quotes/915331-that-s-been-one-of-my-mantras-focus-and-simplicity)


> "Simplicity is prerequisite for reliability." - [Edsger Dijkstra](https://www.azquotes.com/quote/78518)

> "Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. And to make matters worse: complexity sells better." - [Edsger Dijkstra](https://www.azquotes.com/quote/754978)


re-read this about farcaster:
https://twitter.com/varunsrin/status/1605250902935613440

TODO: read these about farcaster
https://hackmd.io/@farcasterxyz

Order of data determined by the URI as a line

Value capture potential as a line

discoverability

bluesky - dependence on DNS

Headjack is on the right side of napkin math


> "Out of clutter, find simplicity." - [Albert Einstein](https://www.goodreads.com/quotes/14212-out-of-clutter-find-simplicity)


row: type of account key or joinability or compactness of key: number or (hash of) public key - only farcaster green besides headjack

Competition - 1-of-N


Farcastter has coupled message types with the implementation of their hub


Storage agnostic or opinionated in table

protocol-first vs app-first

farcaster - "text-centric social network" - limiting
https://hackmd.io/@farcasterxyz/Hyyt7NFb2

https://news.ycombinator.com/item?id=33264860
about bluesky
4. I wonder what the team will do for authentication and authorization? Will they go the ACL route? (In which case, are they going to include Solid-style client identity, in the ACLs?) Will they go the capabilities route? (UCANs / zCaps). This is the genuine hard part.


**Size matters**
**Smaller is better**
regarding IDs & URIs



Having the app id and doing batch commitments simplifies routing and aids self-authenticity for documents

names are worthless if they aren't in URIs pointing to documents

the p2p layer is often the biggest & easiest attack surface for protocols - that's why headjack aims to have the hardest possible guarantees for the root of everything - identifiers, keys, names and off-chain ways for off-protocol contact

the problem with the IPFS/Filecoin address space (and any that is data-centric with hashes) is that it is flat - and thus the network suffers when scaled

todo: read
https://warpcast.notion.site/Warpcast-API-Docs-Signer-Requests-Public-e02ef71883374d2ca8d27239a8cc35d5
https://github.com/farcasterxyz/protocol#92-signers


The winner take all singleton is the easiest mentally

having everything from a user in a tree with a root hash - easier replication
https://atproto.com/guides/data-repos

-->

<div style={{textAlign: "center"}}>
    <img src="/img/meme_15_competing_standards.png"/>
</div>

<!-- Headjack is the [15th and final](https://xkcd.com/927/) standard for decentralized identity. -->


# What other projects get wrong

> "Good design is simple. You hear this from math to painting. In math it means that a shorter proof tends to be a better one. Where axioms are concerned, especially, less is more. It means much the same thing in programming. For architects and designers it means that beauty should depend on a few carefully chosen structural elements rather than a profusion of superficial ornament." - [Paul Graham](http://www.paulgraham.com/taste.html#:~:text=Good%20design%20is,of%20superficial%20ornament.)

<img src="/img/meme_they_dont_know_pubkeys.jpeg" align="right" style={{marginLeft: "8px", width: "50%"}}/>

<!-- https://twitter.com/ArvinK/status/1620833678816575488 -->

A list of problems with the contenders in the decentralized identity/media space:

- No credible path to [web-scale](principles.md#web-scale-blockspace--the-unix-philosophy) - some will hit a wall even at 1 million users. Most are vague around their scalability & data structures and don't put it [front and center](numbers.md) - obfuscating the most important bit. Instead of focusing on NFTs & developer APIs, start with the data and work up from that. <!-- > "It is the mark of a charlatan to explain a simple concept in a complex way." - [@naval](https://twitter.com/naval/status/752796426208325632) -->

<!-- Fake it till you make it is not a viable strategy with the wrong foundation. -->

- Complexity & lack of clarity - distributed systems engineers should easily figure out how they work & what the limitations are. Why build on something that others are probably having a hard time understanding as well and may not be around in the future?
    > "Developers care about risk." - [Haseeb](https://haseebq.com/why-decentralization-isnt-as-important-as-you-think/)

    > "For the simplicity on this side of complexity, I wouldn't give you a fig. But for the simplicity on the other side of complexity, for that I would give you anything I have." - [Oliver Wendell Holmes](https://www.goodreads.com/quotes/44564-for-the-simplicity-on-this-side-of-complexity-i-wouldn-t)

    > "...the only simplicity to be trusted is the simplicity to be found on the far side of complexity." - [Alfred North Whitehead](https://www.goodreads.com/quotes/74858-the-only-simplicity-to-be-trusted-is-the-simplicity-to)

- Too financialized & trying to do too much - profiles & posts as NFTs, microtransactions, marketplaces, fan coins, tipping, content creator incentives.
    > "However, a downside I’ve observed in social networks where content is monetized is that user behavior becomes transparently driven by monetary incentives in ways that feel less genuine. This applies to influencer culture on Instagram as well, but cryptocurrency social networks bake it in from the start." - [Jay Gerber](https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970)

    > "The question remains: is the future of social media truly intrinsically linked to NFTs or is it a red herring?" - [@mattigags](https://wrongalot.substack.com/p/the-next-big-crypto-narrative)

- Users shouldn't need to use a token, use a wallet, or self-host to benefit from decentralized identity & an open social graph. Most people will always use custodial services.
    > "People don’t want to run their own servers, and never will." - [Moxie](https://moxie.org/2022/01/07/web3-first-impressions.html)

- Linking online identity to public financial accounts on Ethereum/Solana/etc will have unintended consequences - a bad default.

- Federated ones lack [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) which leads to fragmentation and [no discoverability](https://github.com/mastodon/mastodon/issues/9529).

- Some are solving just identity & the graph - without easy & persistent [content addressing](addressing.md).

- Social media is about aggregated views at scale - not p2p and direct comms.
    > "The emphasis of a social network is on "propagation" aka, propaganda." - [didibus](https://news.ycombinator.com/item?id=25735773)

- Some use chains such as Ethereum for [logical centralization](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274) & store vector commitments (Merkle roots) for events around [key management](https://blog.ceramic.network/key-revocation-in-self-certifying-protocols/) (rotations, authorizations, sessions & revocations) but the data availability problem for whatever is committed is unsolved.
    - The complexity is not encapsulated - there are many open questions, edge cases & failure scenarios and it would inevitably lead to assumptions & trust.
    <!-- - Many focus just on the latest keypairs and don't sequence the signed actions throughout time  - much harder to prove that content generated with an older keypair was indeed legitimate at the time of creation and generated back in time instead of fraudulently constructed later on if the keypair is compromised. -->
    - Some anchor to Bitcoin but the time to finality matters a lot for UX - 10-minute block times with probabilistic finality is horrendous.

- Some lack an economic incentive layer.
    > "Show me the incentive and I will show you the outcome." - [Charlie Munger](https://quotefancy.com/quote/1561882/Charlie-Munger-Show-me-the-incentive-and-I-will-show-you-the-outcome)

<!-- What you don't want is for these identifiers to be fractured between many platforms with different standards & formats. -->

# [Farcaster](https://www.farcaster.xyz/)

<!--
https://farcasterxyz.notion.site/farcasterxyz/Farcaster-v2-43b105e4699847518b1d89996c20d564
-->

<!-- 

farcaster is a specific social networking protocol that is trying to also handle consistency & conflicts - like not allowing double liking of a post by a specific user, etc.

Their product-led protocol development strategy means they need to chase product-like targets when designing a foundational protocol. Following [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law), when a measure becomes a target, it ceases to be a good measure.

!!!!!

Farcaster can be entirely rebuilt on top of Headjack but not everything that Headjack enables can be built on top of Farcaster.

product-led protocol development
https://chapterone.substack.com/p/farcaster-the-new-crypto-gtm
https://twitter.com/TziokasV/status/1581688157204254720
https://chapterone.substack.com/i/77871905/product-led-protocol-development
No - product-led protocol development is rarely the best way forward if you get the foundations wrong - iterating out of a local maximum may prove impossible and kill the product. Once there is a yet-unsustainable product that requries money, there is also a timer that is ticking.

With Farcaster, content is directory-certified and cannot be fully self-authenticating because if the directory to which the on-chain account points to goes away - so does the credibility for any piece of data by that account - no way to cache proofs. Furthermore, directories can be tampered with and currently it's up to the p2p network to keep track if any malicious changes happen



farcaster - their model can work even without the p2p nodes - aggregators can be built that talk directly to host directories

farcaster can be built on top of Headjack but not everything that can be built on Headjack can on Farcaster

Farcaster is the best team in the space.


-->

Their architecture: [link](https://github.com/farcasterxyz/protocol). The account registry is on a blockchain and everything else is off-chain.

- Registry on Ethereum L1 - for new accounts, name/host changes & key management.
    - No plans on moving to an L2 or their own chain. Also, state rent could eventually be introduced to Ethereum which would lead to further costs & complexity.

- Keypairs & wallets required - harder mass adoption. Authorizations still [require a signature from the root key](https://github.com/farcasterxyz/protocol#45-signer-authorizations).

- Revocations invalidate all prior activity from a delegate:

    > "Unfortunately, this means that all messages signed by that signer will be lost since we cannot tell which ones were signed by the attacker." - [source](https://github.com/farcasterxyz/protocol#71-signer-compromise)

    - [Root signer revocations](https://github.com/farcasterxyz/protocol#46-root-signer-revocations) are even more impactful.

<!-- - Cast timestamps are self-reported and can be manipulated - no true cryptographic total ordering - which leads to a lot of complexity in the node software. Not sure what happens to old casts that were signed with obsolete keypairs and how the history of keys is handled. -->

<!-- message ordering, timestamps & authenticity can be manipulated which requires more logic in the software to keep track of previous hashes
https://github.com/farcasterxyz/protocol#message-ordering -->

- The [p2p network](https://github.com/farcasterxyz/protocol#5-peering)'s ability to scale by passing around granular casts is questionable - they are already discussing possible flooding and nodes having to shadow ban and flag accounts based on behavior.

<!-- TODO: problem with farcaster - you cannot save content from others forever with authentic proofs if the person removes completely their history of key changes & content signatures. Correct? -->

<!-- Directly polling accounts & their hosts for new events is more scalable but has tradeoffs compared to broadcasting messages & ingesting them into DBs & indexes (pull vs push). -->

- Focus is on [partial views of the network](https://github.com/farcasterxyz/protocol#47-sharding) as opposed to mass scale aggregation & indexing - although that could easily be implemented.

- [Cast URIs](https://github.com/farcasterxyz/protocol/pull/1/files) will look something like `farcaster://id:8789213729/cast:0xf00b4r` which is less readable than what Headjack will be offering with [its addressing](addressing.md).

Overall good intuition about the concept of [sufficient decentralization](https://www.varunsrinivasan.com/2022/01/11/sufficient-decentralization-for-social-networks) (putting only what is absolutely necessary on a blockchain) but the p2p node implementation takes on too much [responsibility, complexity & assumptions](https://github.com/farcasterxyz/protocol#7-security-considerations) (consensus, CRDTs, trees, ordering, flooding & replay attacks, etc.) and is lacking in other areas.

<!-- perhaps the best product team in the space and a good attempt to bootstrap a community -->

# [DSNP](https://www.dsnp.org/), [Frequency](https://www.frequency.xyz/) & [Project Liberty](https://www.projectliberty.io/)

Frequency (a Polkadot parachain) is the first implementation of DSNP (Decentralized Social Networking Protocol - [whitepaper](https://github.com/LibertyDSNP/papers/blob/main/whitepaper/dsnp_whitepaper.pdf)) as a standalone blockchain and has had the most influence over Headjack's design but the two have diverged in some key respects - the biggest of which are scalability, content addressability, UX & choosing Polkadot. Some of the problems with them:

- No names within the project - just integer IDs for accounts. Content addressing URIs are based on hashes without connection to the batch # / service that published it - example: `dsnp://78187493520/0x1234567890abcdef0123456789abcdef0123456789abcdef` ([source](https://spec.dsnp.org/DSNP/Identifiers.html#dsnp-content-uri)). Addressing content is much worse compared to Headjack's [human-readable & persistent URIs](addressing.md).

- Delegating applications to be able to post on behalf of users (analogous to authorization in Headjack) happens on-chain but requires a signature from the user (bulky - limiting throughput). New applications (& revocation) require the user to have access to their keys. Hierarchical delegation would allow for UX comparable to Web2 and would even allow for users without keypairs at all but DSNP doesn't have that - Headjack does. <!-- https://discord.com/channels/969001918460469250/969308056208961606/996417552962043924 -->

- [100m$ of funding](https://philanthropynewsdigest.org/news/project-liberty-launched-with-100-million-from-frank-mccourt) (so far) from just 1 person - [Frank McCourt](https://www.youtube.com/watch?v=xgPZnOulBCE) - no other capital & connections to reputable investors & influencers from either the crypto or tech space - generating hype & booting up the network effect might be very hard. They've been around since 2019.

<!-- 
# bluesky

deleting an old post requires re-merkleization of the tree

competition page: batching & compactness (FC does have some fancy hub sync)

farcaster is too opinionated

scaling issues abound
https://twitter.com/varunsrin/status/1775652290961301725
https://twitter.com/varunsrin/status/1778226350538760511
https://github.com/farcasterxyz/protocol/discussions/163

Key rotation in competition - for lens perhaps account abstraction would help

Farcaster: with or without CRDTs you should be processing everything anyway, and with a simple fork choice rule you wouldnt need crdts

identifier type in the table - integer or hash of public key - in competition table

Farcaster - when there isnt a grand vision outsiders implement twitter interface clones with some differences in coloring and layout. And thats it.



In int64 we trust - with an oreol
Joinability
You can stuff integers in bitmaps and check for intersections - hashes suck
Anything not built around integers is disqualified due to joinability & maskability

Twitter’s servers cost 1.5 billion per year - we need to engineer for web-scale
https://twitter.com/ashleevance/status/1605448764851752961
https://twitter.com/AutismCapital/status/1605448752881229824

Simplifying joining is killer f

Add joining in the pitch


Farcaster arent thinking bih enough - crdts are a crutch - an unnecessary constraint

Anything without built-in incentives is not suitable as a foundation

> "It's not enought for a proof to be correct - a proof should be beautiful." - [Gregory Chaitin](https://youtu.be/JlbbFjAtDEM?t=88)
It's not enough for a proposed architectural to sort-of be able to address the whole challenge - it must be radically simple and infinitely scalable


Guaranteed resolvability

Signing with a private ley requires it to always be loaded - for every new event
Contrast that to auth tokens - they are created once and reused many times - only the point of creation needs the highest security



with farcaster all the activity of a user is chained linearly & merklized and that means there's a bottleneck
https://www.youtube.com/watch?v=1TVI2uKgHtY
although that does solve problems that are present in headjack...


Farcaster blocktime - slow but very rarely needed

on Nostr
https://twitter.com/pippellia/status/1605970256807206912
https://twitter.com/sethforprivacy/status/1752428095972298826


!!!!!!!! READ THIS !!!!!!!!
bluesky architecture
Bluesky and the AT Protocol: Usable Decentralized Social Media
https://arxiv.org/pdf/2402.03239.pdf



If we could invite one other company in the world to build with us - it would be Farcaster



Farcaster is a humble proof of concept for the value of open protocols around identity - but it is limited in terms of scale and a few other properties 


In case an IDM or application is compromised (but not their keys - only the servers to some extent) it could invalidate all access tokens with a single compact range message - not individually

farcaster - limits on the number of signer keys, also what is the revocation process like?

designing from first principles - what needs to be decentralized? what's the common use case for 99.9% of cases? what are the guarantees we should provide - and nothing less?
headjack is an exercise in minimalism

> "Computer scientists, faced with the challenge of scaling, tend to fall back on a hierarchical scheme." - [source](https://twitter.com/gordonbrander/status/1127699384102080514)

> "We can solve any problem by introducing an extra level of indirection." - [The fundamental theorem of software engineering (FTSE) by Andrew Koenig](https://en.wikipedia.org/wiki/Fundamental_theorem_of_software_engineering)


in entity resolution (if records from different data sources represent the same entity) consistency & latency are key, and so is brevity/compactness


timestamped events?
    farcaster - no, user reported timestamp
    "Delta timestamps can be used by applications when generating feeds of information for their users. Such timestamps are untrustworthy since they are user reported and the network cannot verify them. The timestamp trust model is like that of a blog where most users tend to be well behaved since a monitoring service at the application level can be used to detect timestamp abuse."

App id/name in URIs for content generated through them

proofs for the authorization or key ownership at the point of publication are not necessary! they can be reconstructed !!!

infra need to store signatures & proofs?

upper limit for total data on the network/protocol






- competition - finish it !!!

    - Point when comparing with others: multiple ways to ask for data from an URI as opposed to just a hash
    - a URI is not connected to multiple entities and not just a hash - the application & user
    - Others con - addressability does not include application names - no such direct client attribution mechanism
    
    - just because you can interlink everything with hashes doesn't mean that you should



    - page about the key rotation & anchoring problem and where does the key rotation & revocation data live & latencies? - aka WHY SEQUENCE THIS


ANCHORING IS NOT ENOUGH! - you need to know which event invalidated the previous one without having to check if it was invalidated

ordering guarantees?

Pruned sets - how/which data is stored by hubs
The protocol is trying to do too much
Very opinionated - way beyond just decentralized identity
the hub implementation has a lot of tough choices to make in regards to rate limiting, spam & storage limits/guarantees
there is a consensus algorithm about 
https://hackmd.io/@farcasterxyz/BJj3zuVVj

farcaster makes the hubs a bottleneck for applications - instead of allowing different apps to provide their own storage

All this complexity of sets, CRDTs, pruning & size limitations stems from the inability to address content by users without it being created by the hub - a user's hub is a bottleneck for applications
What is a [CausalRemovesWinIfValid](https://hackmd.io/@farcasterxyz/BJj3zuVVj) set?

> "We expect users to resign their messages when migrating between clients" - [source](https://hackmd.io/@farcasterxyz/HJzK5VM4o)
wow...
"When a signer is removed, all messages signed by it present in other CRDT's must now be considered invalid and evicted from those CRDTs."
https://github.com/farcasterxyz/protocol/tree/varunsrin/revise-v2-dec-4#72-signers
however, even a custory address may change but it may re-authorize signers.
but if a signer was compromised you have to lose everything signed by it

A negative for headjack is that it's not trivial to obtain the latest version of a document for a URI - if it was deleted you'd probably need to ask the app or the IDM of the user if they have an update, but that update could have been submitted by another app



Without anchoring data with a Merkle proof and sequencing that in time, it is impossible for a document to be fully self-authenticating because it might have been signed with keys that have been compromised/revoked/rotated.

Encoding metadata in the uri avoids the need for requests


A single on-chain message that updates an rpc/rest endpoint can redirect trillions of URIs and exabytes of data instantly - no global DHT used for individual elements

When a key is rotated it doesn’t affect old content for it to be self-authenticating

Insight: names are most useful when in document URIs - not used to identify your personal finances publicly

just like we need IP over MAC addresses in order to have a hierarchy, for the same reason we need Headjack URIs on top of hashed data - the retrievability process is greatly improved

benefit: no need to store proofs for every single event as they can be derived

flexibility - addressing is forever - but the storage & architecture of any application can be changed - without breaking the addressing.

https://paragraph.xyz/@blog/farcaster-comments





Farcaster focuses on eventual consistency with CRDTs & Delta Graphs but the elephant in the room is different counts based on different filters which cannot be done with CRDTs easily.
ACTUALLY not sure if that's true :|
but perhaps CRDTs are just not as performant for trillions of likes
Our view is that using CRDTs is a constraint - like for example multi-dimensional follows with include/exclude filtering
https://github.com/farcasterxyz/protocol/tree/varunsrin/revise-v2-dec-4#3-delta-graph

limits on data? size & retention?
CRDTs are a limit for Farcaster.
https://github.com/farcasterxyz/protocol/tree/varunsrin/revise-v2-dec-4#33-bounding-graph-size
https://hackmd.io/fCa8_RCEQ4qBYZjfnas9Zg



partial view of the network allowed?
    not for farcaster

Why go theough the trouble of dealing with crdts and constrains if youll solve just one basic case and not everything thats possible?


They aim for Hubs to have a complete view of the network and are aiming for everything to fit in 64TB o_O

"we limit users to storing a finite number of deltas for each type and calculate the limits to keep the size of the graph under 64 TB."




farcaster is too constraining because of the use of CRDTs
The system cannot be extended by anyone because the Hubs need to agree to run the software that handles any new message type. The protocol is tied to the infra.


Farcaster: a lot of complexity, a lot of limitations and no clear path to being general purpose & web-scale




integer keys as opposed to hash-based keys - so that filtering is easy - by and/or-ing bitmaps
this goes in competition table!

hash-based intra-PDR addressing - could get very bloated

if a user's PDR goes away all cached documents are no longer linkable to their identity

- **Consortium** of nodes & a transparency log manage the DID registry.
    - Centralization point (not just [logical](https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274)) - users can be kicked off.
    - This should have been a credibly neutral & self-sustaining blockchain.

- Requires the use of keypairs which is worse UX compared to Headjack and would hinder mass adoption - although they do talk about [custodial solutions](https://github.com/bluesky-social/adx/blob/main/docs/#root-private-key-management).

- When users post content they update their Personal Data Repositories managed by their Personal Data Servers (PDS) which play somewhat similar roles to [Farcaster](#farcaster)'s managed hosts and Headjack's [IDMs](IDM.md).

- Users can lose their interest graph if the PDS they are using loses their data.

- The Personal Data Repositories would be a lot less compact than Headjack because accounts and links between them are not simple integers and every piece of data and relationship comes along with a signature.

Overall a solid effort and could work - some similarities to [Farcaster](#farcaster) but the DID registry is centralized by a consortium and the usernames are email-like (DNS - centralization point) instead of handled by the DID registry. Neither solution anchors content like Headjack does. -->

# [TBD](https://www.tbd.website/)

Jack Dorsey's new ["web5"](images/meme_web5.jpg) project - [slides](https://docs.google.com/presentation/d/1SaHGyY9TjPg4a0VNLCsfchoVG1yU3ffTDsPRcU99H1E), [announcement](https://twitter.com/namcios/status/1535302090360250368).

- Only anchors DID events to Bitcoin with vector commitments (Merkle roots) using [ION](https://github.com/decentralized-identity/ion) & the [Sidetree](https://medium.com/decentralized-identity/the-sidetree-scalable-dpki-for-decentralized-identity-1a9105dfbb58) protocol.
    - 10-minute block times with probabilistic finality. Factor in the loading times for the anchored content around key management that's on IPFS - not great at all if you want to log in/authorize a service or revoke access quickly.

<!-- - The ION DID network is [not incentivized](https://github.com/decentralized-identity/ion/blob/master/docs/Q-and-A.md#q-what-are-the-availability-guarantees-of-ion) (just like IPFS) and the anchored content around key management, rotations & revocations depends on the current cluster of ION nodes. They state not having a consensus mechanism as a plus - which is debatable - logical centralization, uptime, adequate finality & DA guarantees matter a lot when dealing with identity. -->

- Doesn't have a human-readable global name registry - lacks discoverability.

- Doesn't have human-readable content addressing.

- Focus is on users self-hosting their own data, running software locally & handling keypairs.

- Developing their own Decentralized Web Nodes (DWN) software that would be relaying messages p2p - can't handle [web-scale](principles.md#web-scale-blockspace--the-unix-philosophy) on such a granular level and aggregation is not even in the picture.

# [CyberConnect](https://cyberconnect.me/)

Built on the [Ceramic protocol](https://github.com/ceramicnetwork/ceramic/blob/main/SPECIFICATION.md) & [network](https://ceramic.network/).

TODO: working on incentives for pinning
https://twitter.com/joelthorst/status/1588863780301156352

- Requires the use of keypairs & wallets.

- Every user has their own Ceramic data stream on top of IPFS - it is yet to be proven that the DHT & p2p layers can scale to hundreds of millions or billions of people.

- The persistence of the social graph is handled by pinning IPFS data on nodes operated by them without any cryptoeconomic incentive for the data availability - it will grow into the tens/hundreds of terabytes for web-scale (Twitter scale: 400M users with 700 connections on average) - especially because they don't have a compact integer-based representation and everything is based on big individually signed actions. The upcoming Ceramic blockchain does not seem to be geared towards storage incentivization and will not be the solution to that.

    > "Long-term data retention on CyberConnect is guaranteed through Ceramic’s blockchain anchoring and a custom data pinning service." - [source](https://blog.ceramic.network/building-the-social-graph-infrastructure-for-web3-0/)

# [DeSo](https://www.deso.org/)

- It requires wallets & users to pay for every interaction.

- It puts everything on-chain and their plans to scale are with bigger blocks & sharding (see ["Phase 4: Sharding"](https://docs.deso.org/about-deso-chain/readme)) which is simply not practical for the [true scale of the public web](principles.md#web-scale-blockspace--the-unix-philosophy).

- It financializes as much as possible (creator coins, etc.).

- Their initial growth was fueled by huge sums of VC money but by now it has [flatlined](https://www.openprosper.com/stats/deso-dashboard). It did reach [1.66$ billion market cap](https://www.coingecko.com/en/coins/deso) on the 2nd of October 2021 shortly after being listed.

# Others

For details about ActivityPub, Matrix, Diaspora, Mastodon, Secure Scuttlebutt, Solid & others please refer to the excellent [ecosystem review](https://twitter.com/bluesky/status/1352302821140549632) by the Bluesky project. Other good resources include:
- [Decentralized Social Networks](https://medium.com/decentralized-web/decentralized-social-networks-e5a7a2603f53) - Jay Gerber
- [Blockchain Social Networks](https://medium.com/decentralized-web/blockchain-social-networks-c941fb337970) - Jay Gerber
- There are [many other projects](https://mirror.xyz/shreyjain.eth/TyBzMOegl3rMNxpAFoJ36MjE0pGfdLcrVCBgy-x3qS8) in this space.


<!--

"a truly censorship-resistant alternative to Twitter that has a chance of working"
not really...
https://github.com/nostr-protocol/nostr

on mastodon
https://twitter.com/martinkl/status/1588823207284539392
https://twitter.com/xsphi/status/1645512462865940481

The problem with Mastodon and similar programs
https://github.com/nostr-protocol/nostr#the-problem-with-mastodon-and-similar-programs
-->



<!-- <div style={{textAlign: "center"}}>
    <img src="/img/meme_one_does_not_simply.jpg"/>
</div> -->

<!-- one does not simply solve media
without logically centralizing identity, names, connections & anchoring through batching and custodial services
https://imgflip.com/memegenerator/One-Does-Not-Simply -->


<!-- <div style={{textAlign: "center"}}>
    <img src="/img/meme_expanding_brain.jpg"/>
</div> -->

<!-- trust centralized companies with your identity & data
use blockchains, self-host all your data, and sign every action
manage many keypair wallets and isolate risk
use a blockchain with hierarchical trust & don't require keypairs by default
https://imgflip.com/memegenerator/Expanding-Brain -->


<!-- <div style={{textAlign: "center"}}>
    <img src="/img/meme_drake_better_trust.jpg"/>
</div> -->

<!-- TRUSTLESS
manage keypairs & sign actions
BETTER TRUST
hierarchical trust & account management without keypairs by default
https://imgflip.com/memegenerator/Drake-Hotline-Bling -->

<!-- <div style={{textAlign: "center"}}>
    <img src="/img/meme_red_dress_better_trust.jpg"/>
</div> -->

<!-- better trust & familiar UX
normal people
using keypairs & signing actions trustlessly
https://imgflip.com/memegenerator/112528910/Guy-checks-out-red-dress-girl -->
