# Content addressing

The move from host-centric to data-centric addressing is a complete paradigm shift by itself but Headjack intertwines that with names and on-chain authorization & sequencing of anchors resulting in the best possible [URIs](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) in terms of human-readability & persistence - perhaps the most important aspect of the project. This chapter is broken down into a few sub-chapters:

1. [Today's web: host-centric](host_centric.md)
2. [Data-centric addressing](data_centric.md)
3. [Blob structure & addressing](blob_structure.md)
4. [Persistent & provable URIs](uris.md)
5. [Names & paths](names_and_paths.md)

<!--
handle redirects? twitter.com => twitter, so that all content URLs use twitter and the .com one is just used for convenience? or wtf?

shortcuts/links/references?

user nonces per interface :( - or maybe no need? or needed only for signed messages?

Unexpirable URIs > unstoppable domains

what about URIs starting with block numbers? under a specific protocol schema?





content = "aaa"
URL = twitter.com/223/tommy/4

hash_content = hash(content) ==> 0xaf12ad7126
hash_URL = hash(URL) ==> 0x1627af2

hash_final = hash(hash_content + hash_URL) ==> 0x6617af0af122
URL_final = URL + hash_final ==> twitter.com/223/tommy/4/0x6617af0af122


-->
