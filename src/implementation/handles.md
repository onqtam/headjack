
A global mapping of `handle` (`string`) to X helps resolve queries. X contains:
- 

- maybe they should not be properties of accounts but a separate map structure that just maps handles to IDs and on which block were they acquired? What would be traded - handles on IDs?

if a handle changes hands that shouldn't affect the ID & all the connections (no need to shuffle that much database numbers around)

- `handle` (`string`) - the name of the account
    - currently no idea how to 
    - TODO: https://en.wikipedia.org/wiki/Zooko%27s_triangle
- `handle_change`





handles can be sold without affecting the interest graph - handles are not accounts.
entire accounts can be also sold with the transition to a new keypair

gradually lowering the cost for new handles, such that it costs 10k$ initially for a handle, and going lower slowly.


https://farcasterxyz.notion.site/Registry-Deep-Dive-4f4c74646bf24e8e905780719136f172

Names must be between 1 and 16 characters and can only be made of letters (a-z), numbers(0-9) and underscores (_).
^[a-zA-Z0-9-]{1,16}$
https://en.wikipedia.org/wiki/IDN_homograph_attack

**Register** 
Users acquire a name by making two transactions — the first is to commit a secret hash of the username, and the second is to reveal the secret and claim the username to the address. During the reveal phase it also:

commit-reveal scheme prevents frontrunning




TODO: maybe this should be together with addressing?

backwards-compatibility of the handles - can mimic typical DNS like "twitter.com"

TODO: strategy: reserve all handles that have 1-1 twitter & instagram versions

TODO: think about namespaces & hierarchies like in DNS & also ENS - is ENS a namespace?

!!!
https://farcasterxyz.notion.site/The-Identity-System-b5e320826b33460b845ccc9ada63e904


!!!
https://handshake.org/faq/
https://hsd-dev.org/
Another key differentiator is that Handshake is the first to pre-reserve names for existing trademark name holders.
TODO: DNS & TLS stuff...
Why is Handshake pre-reserving the top tens of thousands of domain names according to Alexa.com?
TODO: maybe also reserve the top 100k twitter handles?
TODO: Vickrey auction
    not that goot actually because humans aren't perfectly rational - "VCG mechanism"
    https://vitalik.ca/general/2021/09/26/limits.html#finance-is-the-absence-of-collusion-prevention
TODO: name renewals?
https://blog.sia.tech/handshake-retrospective-after-the-first-year-c197e49749c9
"The other major problem with Handshake auctions is that they are Vickrey auctions."
"Handshake would be a lot better if it had a bidding system that assumed users were unskilled and naive, and attempted to optimize the outcome for users assuming that they made bad or uninformed decisions."
"Proposed Improvements to the Domain Buying Process"

