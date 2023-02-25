<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>

# Messages

The terms message/event/action/data/document/content are used interchangeably in this book and refer to any type of event/content a user might have generated - post/comment/reaction/etc.

<!-- TODO: take stuff form the other messages.md doc

signal/noise ratio - message types & why we shouldn't wait for AI classification

- fallback/default presentation/rendering - how to display content if an application doesn't support a new activity type

tag type: disprove/correct - to combat misinformation & help crowdsource truth?

Why Headjack won't fall victim to stagnation and being stuck in time with this open standard and sort-of federation
https://signal.org/blog/the-ecosystem-is-moving/
- because messages will have default renderability
- because you'll always be able to click on items that your application cannot display properly and go to the application that produced them and see them properly

message type/format: price predictions with percentage possibilities, so that later reputations can be plotted based on the message type

tag type idea: prediction, and later with oracles credibility & track records could be automated



Announcement type

Pluggable visualization of different message types - configurable with styling


on editing messages:
https://twitter.com/VitalikButerin/status/1575890520403869696




https://en.wikipedia.org/wiki/Resource_Description_Framework
https://en.wikipedia.org/wiki/RDFa



https://spec.dsnp.org/DSNP/Announcements.html

- protobuf (protocol buffers) for message types?
- flatbuffers?
    https://en.wikipedia.org/wiki/FlatBuffers
- apache thrift? https://thrift.apache.org/
https://github.com/farcasterxyz/hub/issues/430
https://twitter.com/varunsrin/status/1617294606651260930



https://www.blockchaincommons.com/introduction/Envelope-Intro/


https://www.blockchaincommons.com/introduction/Why-CBOR/
https://docs.rs/dcbor/latest/dcbor/
https://www.google.com/search?q=CBOR&oq=CBOR&aqs=chrome..69i57j46i199i465i512j0i512l3j0i10i512j0i512l4.132j0j7&sourceid=chrome&ie=UTF-8


Farcaster Messages
https://hackmd.io/@farcasterxyz/ry2ff0lEj


Activity Streams formats?
https://spec.dsnp.org/ActivityContent/Overview.html



revisions of messages (edit/delete)
https://github.com/regular/ssb-revisions

New polling/info contribution ways
polling message type

TODO: look at Data models in ceramic!

“pit X vs Y”

shortcuts/links/references?

tombstone message
https://spec.dsnp.org/DSNP/Identity.html#retroactive-revocation-of-delegation

subreddits would be implemented by a special message type with a tag for the subreddit that people are posting into

updates to old post...
    - how would old unique URLs to the original posts get updated?
multiple edit events in parallel to the same original message? a fork? :|



update to post - as a diff, with different kinds of diff algos?

dislike button/protocol/spec? ⇒ reactions

https://en.wikipedia.org/wiki/Ontology_(information_science)
https://en.wikipedia.org/wiki/Web_Ontology_Language
https://en.wikipedia.org/wiki/Concept_map
https://en.wikipedia.org/wiki/Semantic_network

https://en.wikipedia.org/wiki/Resource_Description_Framework

https://en.wikipedia.org/wiki/Microformat

https://en.wikipedia.org/wiki/Media_type

Post/rt/tag/mention/comment/quote/reply

concern: message standards...

https://schema.org/

https://en.wikipedia.org/wiki/Data_model

new types of messages get an on-chain ID so subscriptions are integer-based


messages contain their URIs and also a local timestamp - although that could be spoofed. It is however useful for ordering things in certain cases

also contain the current block height in addition to a unix timestamp

- not yet anchored content from one application can refer to other not yet anchored content from another application and then the anchors could be in such an order that an event references another event in a future block (because apps can share activity before it being anchored).
    - could this problem be ignored?




the <application_id>/<application_nonce> is embedded in a message that's being signed through an application/IDM such that it cannot suffer from a replay attack

- if a reply message has the URI to the original in non canonical form it would be harder for infrastructure to match those - it would have to translate the string URI to a number URI


Message type about binding something to a financial blockchain and making it illegal for the original creator to make a delete message - all exchange of ownership happens on the financial chain


- look into serialization formats & SSZ: https://twitter.com/varunsrin/status/1580710315175530496


message type: amplification - a type of proposal for others to follow someone as well
https://hackmd.io/IP-8snyMQfOGxV3LUjlJbA


https://ctzn.network/schemas
https://github.com/bluelinklabs/ctzn/tree/master/schemas



https://en.wikipedia.org/wiki/JSON-LD

constraints for messages - cannot be edited/deleted from another application? or it can?

https://atproto.com/guides/lexicon



open graph?
https://ogp.me/




-->
