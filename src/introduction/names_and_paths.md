# Names & paths

Users and interfaces don't need a name and can operate as an integer index just fine, but the preferred case will be with handles. Names can change ownership but the blockchain will be able to translate `<interface_name>/<nonce>/<user_name>/<content_id>` with strings into the canonical integer form discussed [previously](uris.md) by substituting the interface & user names with account IDs.

Every name has an associated auto-increment nonce as well for every time they submit an anchor for off-chain content (just like account IDs) and the blockchain records maps of `<name>/<nonce>` to `<id>/<nonce>` which can then be used for another lookup to get the block that contains the Merkle root & [IPFS CID](https://docs.ipfs.io/concepts/content-addressing/) (hash) for the anchored blob.

But we need to be able to translate not just the interface name but also the user name which may have changed ownership at any point - for that the blockchain keeps track of the account ID ownership of every name historically as ranges (from block X to block Y name N was owned by account A) so when we determine the block number for a given data blob we'd be able to check the account IDs that correspond to all usernames within that blob at that time.

And thus we're be able to have URNs such as `twitter.com/55212/johnny/3` to identify any event by any actor - all we'd need to do is a few lookups and then we'll be able to use Merkle proofs for any piece of content to prove authenticity. Most URNs will even omit the 4th part because probably there won't be more than 1 action by a user for a given batch by an interface. Most Web3 platforms [suffer from unreadable URLs](https://twitter.com/hasufl/status/1537388439259291649) but we've done a lot better - note the brevity and lack of hashes & hexadecimal symbols (`0xf56a0...`) - in fact, this is as good as it gets.

Or is it?! What about headlines of articles - can we have them included as well - something like `twitter.com/55212/johnny/3/how-I-went-from-vegan-to-keto-and-back-again`? Absolutely! The string is not at all necessary to resolve the piece of content (just like in StackOverflow where the database key for a question is just a number (example: [question 4](https://stackoverflow.com/questions/4)) but the page router always changes the URL when loading the page to include the title too). [Message types](../implementation/ecosystem/messages.md) for posts with titles will have a dedicated field for them which will get included in the content hash and conforming interfaces will refuse to show a wrong title in a URN as it would be a trivial check.

Names are discussed in greater detail in [their dedicated page](../implementation/handles.md) (constraints, subdomains, auctions, distribution, hoarding, leasing, etc.).

TODO: interface accounts should have associated ways of loading their interfaces - talk about that. Also other interfaces & platforms can display the data and provide a link to the original interface if their on-chain account provides the means for that

TODO: when viewing an old stable URI that has been referenced by "update/edit events" responsible interfaces should show the newest version and indicate that there has been a change

- names/handles
    - decentralized DNS
