# To think about

- PROBLEM: what if a name is just a number - how does that impact URIs? there can be collisions... must find a way to resolve such conflicts
    - should there be some schema in part of the URI - perhaps before the nonce? what if the URI contains the ID of the message type as well?

- off-chain NFTs as verifiable credentials? ways to change ownership on-chain?

- Tag creation (which get an ID on-chain) so that anyone can reference it & organize around it. Following tags?

- What if the interface web2 website is no longer around?

- Topics such as $RUNE & hashtags - how do they get parsed?

- capabilities-based delegation

- https://indieweb.org/Webmention

- https://ipld.io/docs/schemas/
    https://proto.school/anatomy-of-a-cid/02/

- think about content hosting (especially files & images)

- protected tweets - LOL - followers are also private unless permitted?

- telegram and such mass group chats & channels

- figure out additional ways for CDN for content & keeping it up & alive besides just user & interface archiving

- interface or application as the term? or view?
    https://miro.medium.com/max/1400/0*6w3lPf5orl0ME-XL
    https://polynya.medium.com/the-web3-stack-how-web3-will-offer-superior-ux-than-web2-6b8c82709163

- read & think about permissions, sub-app/domain authorization, private data, "Data Access Controllers", "data domain"
    https://blog.sia.tech/mysky-your-home-on-the-global-operating-system-of-the-future-5a288f89825c

    https://blog.ceramic.network/capability-based-data-security-on-ceramic/

    https://en.wikipedia.org/wiki/Object-capability_model

- think about if retroactive revocation is good or just complicates things. Other projects explicitly don't allow it - instead they use tombstones (specific messages) to signal that content was not authorized. What about changes to user's interest graph though?
https://spec.dsnp.org/DSNP/Identity.html#retroactive-revocation-of-delegation
    - Offchain Tombstones are worse than on-chain retroactive revocations because proofs for old block heights need to be invalidated - they shouldn't be possible from the latest block height

    on chain retroactive revocation is important (for up to a week) because otherwise with off-chain tombstones the chain will still be able to generate valid proofs for invalid content as the chain doesn't see anything off of it

    uncomment and show again the `# On proof permanence` part of uris.md

# Postponed

- merge accounts?

- talk about the fact that anything can be self-hosted - IDMs & interfaces

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



# Phrases that don't have a place yet

[open state database](https://twitter.com/balajis/status/1123092897664880640)

`"consistency is incredibly important for creating a compelling user experience"` - [Moxie](https://signal.org/blog/the-ecosystem-is-moving/)


It is engineered from first principles - building up from the data to support billions of users and a [customer obsession](https://twitter.com/arvanaghi/status/1537519858233008128) for the best UX - there will be no mass adoption without retaining the comforts and UX of Web2 that we've become so accustomed to.

You can build something centralized on something decentralized but you can’t build something decentralized on top of something centralized.
Decentralization is always the base layer.
https://twitter.com/RyanSAdams/status/1553776203621965826




