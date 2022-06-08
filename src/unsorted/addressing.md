
interface/nonce/user/index/content_hash



content = "aaa"
URL = twitter.com/223/tommy/4

hash_content = hash(content) ==> 0xaf12ad7126
hash_URL = hash(URL) ==> 0x1627af2

hash_final = hash(hash_content + hash_URL) ==> 0x6617af0af122
URL_final = URL + hash_final ==> twitter.com/223/tommy/4/0x6617af0af122




content URLs can be hashed and IPFS-ed with that hash - making anything backup-able with the same address. LOL

handle redirects? twitter.com => twitter, so that all content URLs use twitter and the .com one is just used for convenience? or wtf?


ability to specify char-range (selection) of the text in a post & provide merkle proof for it? or no need for proof but just link to it with an URL?


problem: if your content gets bundled up in an IPFS blob from an interface and there's child porn from someone else in it...



Integer addressing along with CIDs allows for easy third-party archiving
IDMs could also act as hosts/archivers of user activity from interface blobs
could users point to an archival host that contains all their activity? why not?

shortcuts/links/references?

user nonces per interface :( - or maybe no need? or needed only for signed messages?

is it necessary to keep track of the history of signatures for each account? for content they have explicitly signed? what if they change their keypair later on?


aggregator interfaces which still allow for nested URL-ing like <aggregator>/<aggregator_nonce>/<interface>/<interface_nonce>/<user>/<CID>...

instead of URLs for domains/subdirecotry/postId we can use integers for blocks, interfaces & interface nonce's

alternative DNS-like system:
    @interface_handle/<nonce>/<CID>
    similar to /ipfs/<CID>
    /hive/interface_handle/interface_nonce/user_handle/<CID - int (ordering in interface data blob) or hash>/optional_post_title_string
    
    the user handle could have changed owners - but that's ok - the blockchain keeps track of the history and the handle can be substituted/redirected with the user index or their new handle. Actually the user part can be completely optional because of the CID

USER-READABLE addresses!

!!! NO MORE DEAD LINKS BECAUSE OF RENAMING OF DOMAIN NAME OR USERNAME - LOL !!!

the mapping of names to indexes & keeping history with when ownership changed allows for this.


Unexpirable URLS > unstoppable domains


Any specific post will be locatable through pretty urls if at least 1 ipfs node stores the interface data blob for the specific nonce

Posts with a title also have a hash of their canonical url (only ids) and the optional string title so that it doesnt work with a changed title like with SO questions

Compatible with the current dns system in terms of urls - well not with subdomains... or is it?

This content anchoring system with sequencing and pretty urls will eventually replace dns

Multiple & redundant ways to address & index content

when replying to someone else's comment - reference it with a short url consisting of just a few numbers

bookmarks & personal notes/comments can be permanent

hash CIDs can be improved - adding time & author as part of the ID/path


TODO: think about how the everything-by-default blob mode of publishing could be augmented with entity-focused publishing & how managed hosting could be implemented
    - also what happens with posts that reference other people's posts - would those have to be archived/hosted too?


Offset table in the content blobs - for items referring to each other with local ids before being published & anchored?


user-centric content hosting - how to retrieve everything from X and how would URLs work?
- user ID managers can respond to queries for content from their users
- interfaces that publish content can offer interfaces for requests & not have to store the original IPFS blob


