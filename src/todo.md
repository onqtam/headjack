# To think about

- this !!!
    https://blog.ceramic.network/capability-based-data-security-on-ceramic/

- URI for a profile? what would it look like? just the integer index?

- https://en.wikipedia.org/wiki/URI_fragment

- Tag creation (which get an ID on-chain) so that anyone can reference it & organize around it. Following tags?
    Headjack may offer the ability to give permanent IDs on-chain similar to accounts for concepts & abstract entities in order to facilitate 
    TODO: how to address items from off-chain collections in the URI differently & better?
    CHANGE THE URI MODEL! allow for this! make it more general!
    sets/collections from an entity!

- figure out a plan to plug into existing SAML/OAuth infrastructure for authentication and authorization

- what if you create a private post for 20 specific followers - you could insert a unique watermark which gets signed along with the payload and then if any of them leak it it would be known who did it - no more piracy?

- new action type: grant ability to someone to "edit" & publish a new version of an item - but not to post on your behalf entirely - only if it's about a specific document or namespace/collection?

- URI to show content published from application A through another application? how to share links from a specific application?

- da pomislq: Kak tochno shte se proverqva authenticityto na private actions za accs bez keypair?

- capabilities-based delegation
- Think about scopes of authorization - multidimensionality

- PROBLEM: what if a name is just a number - how does that impact URIs? there can be collisions... must find a way to resolve such conflicts
    - should there be some schema in part of the URI - perhaps before the nonce? what if the URI contains the ID of the message type as well?
    !!! How about a mixed URI where the application has a name but the user is an integer? must distinguish in the URI schema!

- off-chain NFTs as verifiable credentials? ways to change ownership on-chain?

- What if the application web2 website is no longer around?

- Topics such as $RUNE & hashtags - how do they get parsed?

- https://indieweb.org/Webmention

- https://ipld.io/docs/schemas/
    https://proto.school/anatomy-of-a-cid/02/

- think about content hosting (especially files & images)

- protected tweets - LOL - followers are also private unless permitted?
paywalls? how?
How to create a view of the discussion with only paid subscribers?

- explore how to link private details to identity with ZK

- telegram and such mass group chats & channels

- figure out additional ways for CDN for content & keeping it up & alive besides just user & application archiving

- read & think about permissions, sub-app/domain authorization, private data, "Data Access Controllers", "data domain"
    https://blog.sia.tech/mysky-your-home-on-the-global-operating-system-of-the-future-5a288f89825c

    https://blog.ceramic.network/capability-based-data-security-on-ceramic/

    https://en.wikipedia.org/wiki/Object-capability_model

- think about if retroactive revocation is good or just complicates things. Other projects explicitly don't allow it - instead they use tombstones (specific messages) to signal that content was not authorized. What about changes to user's interest graph though?
https://spec.dsnp.org/DSNP/Identity.html#retroactive-revocation-of-delegation
    - Offchain Tombstones are worse than on-chain retroactive revocations because proofs for old block heights need to be invalidated - they shouldn't be possible from the latest block height

    on chain retroactive revocation is important (for up to a week) because otherwise with off-chain tombstones the chain will still be able to generate valid proofs for invalid content as the chain doesn't see anything off of it

    uncomment and show again the `# On proof permanence` part of uris.md

- What would browsers become?

- use different book generator
    https://github.com/gohugoio/hugo - shows sidebar on the right with the ToC of the page
    https://github.com/facebook/docusaurus
    like this one? https://github.com/dvitanov/lorevc
    gitbook? also shows the outline on the right for the headings in a page:
        https://docs.gitbook.com/organizations/member-management/roles#reviewer
    https://github.com/badboy/mdbook-toc/pull/26

- rework the changes in the themes to not have copy-pasted files in the theme/css directory with a few changes but instead to use this in book.toml: `additional-css=["the_file.css"]`
    changes in general.css: background-image: var(--bg-img);
    changes in variables.css: --bg-img: url("../images/background.jpg");

- use summary sections at the start of pages like here: https://www.lore.vc/phase-i-preparation

# Postponed

- merge accounts?

- Can Headjack be used interplanetary?

- URIs for on-chain authorization events?

- talk about the fact that anything can be self-hosted - IDMs & applications

- look into DID methods
    https://github.com/bluesky-social/adx/blob/main/architecture.md#did-methods

    https://identity.foundation/

- by addressing data and using different views to browse it we minimize the effect of phishing. but what about custom JS websites?
    messages that are viewable only through a specific view?
        "warning, you're about to view a custom website"
    easy to identify links to "outside of the addressing"

- can this displace SSL in addition to DNS?

- can CRDTs be used like in farcaster?
    https://github.com/farcasterxyz/protocol#4-replication

- how does The Graph fit into this?!

# Phrases that don't have a place yet

`"consistency is incredibly important for creating a compelling user experience"` - [Moxie](https://signal.org/blog/the-ecosystem-is-moving/)

> "Engelbart’s dream was to use computers to connect individuals in a network that would allow them to share and update information in “real time.”" - [Douglas Engelbart](https://www.britannica.com/biography/Douglas-Engelbart), Internet pioneer

It is engineered from first principles - building up from the data to support billions of users and a [customer obsession](https://twitter.com/arvanaghi/status/1537519858233008128) for the best UX - there will be no mass adoption without retaining the comforts and UX of Web2 that we've become so accustomed to.

You can build something centralized on something decentralized but you can’t build something decentralized on top of something centralized.
Decentralization is always the base layer.
https://twitter.com/RyanSAdams/status/1553776203621965826

The archivability of the web will be greatly improved - fighting back the [sand mandala](https://en.wikipedia.org/wiki/Sand_mandala) effect due to the current [host-centric](host_centric.md) web.

> "Throughout history, decentralization has been a remarkably effective evolutionary strategy. Just ask the Fungi Kingdom, which has continuously thrived for over 1.3 billion years. Uniquely adaptive masters of survival, fungi forgo a central “brain” in favor of a mycelium network: a branching, underground root system that distributes control throughout the organism. Mycelium networks efficiently allocate resources, respond to external stimuli, and remain functional even if one part of the organism is destroyed." - [source](https://guide.getzion.com/inspiration-for-zion)

- DNS
    DNS was the original “decentralization” (although not in the crypto sense)
    RSS was an attempt for the next iteration
    How do you store your friend list?
    But rss is too technical
    Dns got overloaded too many times

["Information wants to be free"](https://en.wikipedia.org/wiki/Information_wants_to_be_free)

block explorers are the future of browsing
https://twitter.com/balajis/status/1406400770581303297

Different systems with their own incentives & cryptoeconomics can be implemented on top of this addressing - adding guarantees for services while still under the same global namespace

lowest common denominator UX is fine but the power users should be able to go crazy - let them separate signal from noise on a global level

> "The web is like an ever-growing library with billions of books and no central filing system." - [how Google works (archived)](https://perma.cc/9HE2-VZF9), already [changed](https://www.google.com/search/howsearchworks/how-search-works/organizing-information/)

if something like TikTok & short clips are here to stay - at least let's interweave them with the rest of the data in the world and provide an offramp for people using it - show the links to things outside of them through interlinked content






> "If someone has the fight in them, I think a great step would be to start documenting the power structure. Build a GitHub repo of all the laws. Discover who wrote which part of each bill. Track the financial relationships and flow of money. Build a Wikipedia to document our oligarchs. Reverse engineer their schedules. Trace their lineage. Document the behaviors in real time, do not let the regime continue to hide."
https://geohot.github.io/blog/jekyll/update/2021/12/18/the-fourth-estate.html
