# Your digital footprint

<!-- toc -->

██████████████████████████████████████████████████████████████████
# Anatomy of your digital footprint
██████████████████████████████████████████████████████████████████

In order to reconstruct we must first deconstruct. What types of actions & events result in a trail of more data? What are the building blocks?

- **Posts & documents** (sharing/retweeting, credentials & attestations are a type of post too)
- **Comments** - on posts/documents and other comments
- **Reactions** - to posts/documents/comments
- **Profile** - information such as bio, profile picture, link to website
- **Settings & preferences** (+ browser extensions)
    - **Cosmetic** (UI) - colors, layout, hiding the "recommended videos" panel in YouTube with the "DF Tube - Distraction Free for YouTube" browser extension
    - **Functional** - filters, blocked accounts, choice of recommendation algorithm, etc.
- **History** of what's been viewed/visited - 2 types:
    - **Browser** history (can be synced across devices with cloud accounts)
    - **App-specific** history (YouTube has a watched videos list but Twitter has no such thing)
        - playback progress is a special type of app-specific history - YouTube & Spotify store & show it for any item (but not which parts of the timeline have been viewed (like a barcode) - and thus moving the playback cursor changes your "progress")
- **Bookmarks**: browser & app-specific (Twitter) - wildly inferior to specialized note-taking apps

This is a rough scetch and we've omitted things such as edits, DMs, etc.

██████████████████████████████████████████████████████████████████
# The 2D visibility matrix
██████████████████████████████████████████████████████████████████

<!-- The other spectrum is visibility - from **private** (personal) to **shared in a group** and to **public**. -->

Let's consider the visibility spectrum - from **private** (personal)on one end to **public** on the other end and **shared in some group** in between. This is what is possible today:


<div>
<style type="text/css" scoped>
    .competition_comparison td {
        padding: 0;
        margin: 0;
        width: 12%;
        color: black;
        font-size: 12px;
        text-align: center;
        background-color:white;
    }
    .competition_comparison td a:link {
        color: #0000EE;
        text-decoration: underline;
    }
    .competition_comparison td a:visited {
        color: #551A8B;
        text-decoration: underline;
    }
</style>
<table class="competition_comparison" style="width:120%;">
<tr>
    <td style="width:16%"></td>
    <td><b>Headjack</b></td>
    <td><b><a href="competition.md#farcaster">Farcaster</a></b></td>
    <!-- https://www.farcaster.xyz/ -->
    <td><b><a href="https://www.dsnp.org/">DSNP</a> & <a href="https://www.frequency.xyz/">Frequency</a></b></td>
    <td><b><a href="https://en.wikipedia.org/wiki/Bluesky_(protocol)">Bluesky</a> & <a href="https://atproto.com/">AT Protocol</a></b></td>
    <td><b><a href="https://developer.tbd.website/projects/web5/">TBD web5</a><br/><a href="https://docs.google.com/presentation/d/1SaHGyY9TjPg4a0VNLCsfchoVG1yU3ffTDsPRcU99H1E">slides</a> & <a href="https://twitter.com/namcios/status/1535302090360250368">tweet</a></b></td>
    <td><b><a href="https://ceramic.network/">Ceramic</a> & <a href="https://cyberconnect.me/">CyberConnect</a></b></td>
    <td><b><a href="https://lens.xyz/">Lens<br/>Protocol</a></b></td>
</tr>
<tr>
    <td style="background-color:grey" colspan="8" height=25px><b>blockchain-related properties</b></td>
</tr>
<tr>
    <td><b>Scalability & potential scope</b></td> 
    <td style="background-color:green">can handle billions of users (<a href="numbers.md">proof</a>) & underpin the entire web</td>
    <td style="background-color:lime">perhaps up to ~10 million - could move to its own rollup</td>
    <td style="background-color:yellow">perhaps up to a few million  graph changes are on-chain</td>
    <td style="background-color:green">centralized consortium of servers</td>
    <td style="background-color:yellow">perhaps up to<br>a few million - lots of reliance on IPFS, DHTs, hashes & keys</td>
    <td style="background-color:yellow">perhaps up to<br>a few million - lots of reliance on IPFS, DHTs, hashes & keys</td>
    <td style="background-color:red">actions are on-chain as NFTs (follow, post's hash) - even a dedicated EVM chain will be futile</td>
</tr>
<tr>
    <td><b>Users paying for TX fees & linking identity to financial accounts by default</b></td>
    <td style="background-color:green">all blockchain costs are paid for by services by default</td>
    <td style="background-color:yellow">Ethereum L1 costs initially planned for subsidy by services</td>
    <td style="background-color:green">all blockchain costs are paid for by services by default</td>
    <td style="background-color:green">centralized consortium of servers - no TXs</td>
    <td style="background-color:lime">the anchors (on-chain Merkle roots) get batched with others</td>
    <td style="background-color:yellow">only the stream anchors to Ethereum L1 have to be paid for occasionally</td>
    <td style="background-color:red">yes</td>
</tr>

|  | Posts & Comments | Reactions | Profile | Settings & preferences | History | Bookmarks |
|-|-|-|-|-|-|-|
| **public** | yes | possible today | ad |
| **shared** | yes | possible today | ad |
| **private** | no | not possible today | ad |

What if we could choose the visibility of any of the types of actions listed above?

We could set different default visibility levels for different types of actions, have the ability to override the visibility of any individual item and even have an identity-wide visibility toggle between public & private (similar to when you open an incognito browser window and (hopefully) not have any of your history recorded & correlated with your identity).

But why? Who could make use of this? Perhaps public individuals & streamers who are digging into something and want to make their digital trail for the session more easily accessible, analyzable & followable.

This might not always be a good idea (users could mess up and make something private public by accident), but it should be possible and we have already learned to use incognito windows as a pattern so such a shift is not be impossible.


For example fully private comment is basically a note to yourself.

I should be able to signal that if I wish




There are a couple of things to observe:

- We're limited to only what product managers in the internet companies have decided is worthwhile for them to implement
    - We're restricted to only what makes sense for them & the lowest common denominator
- In a parallel universe there wouldn't be any restrictions on the types of actions we might take - like sharing, reacting to, or commenting on a reaction of someone else.

- Currently all these are segregated between disparate platforms with separate accounts

Many of the actions you consider private (history) are being used by 

Consider the following:
- What if we could mix & match any of the above?
- What if we had "playback progress" even for text posts - by being able to toggle/layer a colorized heatmap of time spent on the different paragraphs? And what if this worked across apps and was managed by our IDM? We could easily come up with a standard interface for apps to talk to IDMs about that.

For the fully private actions there is a 3rd axis - local or in the cloud, but we won't look into that here.

██████████████████████████████████████████████████████████████████
<!-- # Multidimensionality & subscriptions -->
# Connections & multidimensional subscriptions
██████████████████████████████████████████████████████████████████

<img src="images/multidimensionality_cropped.png">

configuration attributes to accounts

Separate type of connection for friendlyness
connection != subscription



history of seen tweets - like history of watched videos on youtube

we have many facets to our personalities - we could share a lot more
we are social creatures

complete control of what is public and what is not - what digital trail you leave, and the ability to subscribe to anything for events

not multidimensional subscriptions but fractal/granular

this would be the ultimate subscription network - where you could subscribe to any type of data feed - as long as there's demand & a business model for it

what if you could define additional filtering criteria for sources - like anything that doesn't contain the word "X"

YouTube channels have RSS feeds. If you subscribed to one with an RSS reader you might have noticed that that #shorts are given to you just like normal videos. We should be able to filter that out. Take for example [@UnchainedPodcast](https://www.youtube.com/@UnchainedPodcast) - this is their [rss feed](https://www.youtube.com/feeds/videos.xml?channel_id=UCWiiMnsnw5Isc2PP1to9nNw) and it has everything in there - and we have no easy way to filter it.

how to think about the digital world
- public/private
- anonymous/
what can we build on top of this?

add tiny designs/screenshots for the different ideas - like a multi-level tree for subscriptions and how you could be partially subscribed to someone

multidimensionality - think about what "friendship" is

inoreader for example allows you with a paid feature to construct rules for subcriptions such as "mark as read anything that contains the string #shorts" - we can have this, but generalized and for anything

multi dimensionalism of accounts section
What if we could signal our values and then be held accountable according to them? Like "being considerate instead of tribal" or "considering both sides of an argument"
https://consilienceproject.org/the-endgames-of-bad-faith-communication/#accordion-1:~:text=Some%20Signs%20of%20Good%20Faith%20Communication%3A


list explicitly all the different aspects of an online presence - goodreads, medium, quora, stack exchange, reddit, twitter, etc.

your profile page - a linktree-like thing
every change, every edit, every commit - all could be linked to your identity if you wished it
ON WHY WE NEED SOMETHING LIKE linktree:
Twitter product request: a custom tab on my profile page i can pin my top 25 tweets — perhaps label it “best of @jason”
https://twitter.com/Jason/status/1636464901911904257



view profile relevant to the current app VS view full profile with all activity

copy & follow the viewing preferences of others

When you show your Attention (what algorithms, apps & settings you're using, & even your history) you get attention for it - in regards to the signaling

Currently only the platforms get to analyze your behavior - you should be able to choose to let anyone analyze it for the commons

██████████████████████████████████████████████████████████████████
# Expressivity
██████████████████████████████████████████████████████████████████

A data network in which your input matters in an uncountable number of ways
Expressivity!
I want YOU to help build the metabrain
To be a good little neuron

> "Citizen journalism is vital to the future of civilization" - [@elonmusk](https://twitter.com/elonmusk/status/1615461396313178115)

Realizing humanity’s potential for expression at scale

Making the individual count

Many social networks have polls about preferences & beliefs - we've filled so much questionnaires but none of them have been truly meaningful
██████████████████████████████████████████████████████████████████
# IDMs: one cloud to rule them all
██████████████████████████████████████████████████████████████████

What if IDMs filled that role? What if IDMs could integrate with browsers such that bookmarks were saved in your IDM cloud?

what if your IDM kept a list of everything you've seen so it can be displayed in the UI?

> "One of the more out-there things I'd really like to see with local AI is feed-filtering. You have a personal AI that learns your preferences and is loyal to you. Then it parses the HTML on pages with feeds (YouTube, TikTok, Twitter, etc) and it throws out any clutter."
https://twitter.com/DavidVorick/status/1618277136938274817

different filters & thresholds for cold DMs - it should be easier for people from your communities to contact you. Such preferences should be possible.

TODO: add this in the attention & alarms & notifications section of the book - we should be able to take control - anyone should be able to build new frontends where we can set limits
What If You Quit Social Media For 30 Days?
https://www.youtube.com/watch?v=_u5p6hwS5SM

the level of sophistication in email filtering (in gmail for example) should be matched by any social media. But the incentives of social media is to engage you - not help you be less engaged or more meaningfully engaged

imagine being able to not see the same things multiple times when you open your feed multiple times and scroll a bit - having a "seen" list with URIs which you can later browse like the history in youtube - something like this should exist

ability to set priorities for notifications and build a "home dashboard" that takes those into account

your "desktop" for the apps & public data of the world

fine-grained control
When viewing a post - have the ability to choose wether to respect the OP’s blocks and not see comments from blocked users or not

██████████████████████████████████████████████████████████████████
# Bookmarks & playlists
██████████████████████████████████████████████████████████████████

Universal bookmarks - they can have a single repository (your IDM) and work for any type of document from any application. They will be persistent and you could even cache the actual contents that a URI points to along with proofs - in case no one hosts it in the future.

Your personal knowledge base could be built with something like [Logseq](https://logseq.com/) with URI references to external documents that can be locally cached. Looking up the discussion/commentary for a resource with a URI would be just 1 click away.

Playlists are lists of bookmarks and could work even with heterogeneous audio/video providers which anchor the tracks and provide URIs for them. Spotify could be just an application that uses your IDM for account storage and is paying to other media hosting providers for the streaming.

██████████████████████████████████████████████████████████████████
# Notifications & subscriptions
██████████████████████████████████████████████████████████████████

Twitter decided that it needs to boost engagement and forced "recent tweet" notifications on us [without the ability to turn them off](https://www.reddit.com/r/Twitter/comments/qwvhhb/how_do_you_disable_recent_tweets_from_x/) - that needs to stop - explicit preferences should be honored.

> "Notifications are just alarm clocks that someone else is setting for you." - [@naval](https://twitter.com/NavalismHQ/status/1556179585347112961)

When identity is decoupled from the presentation layer we could have IDMs that align with our needs - we could fine-tune how and when we want to be notified. The incentive for an IDM is not to suck all of our attention (as opposed to applications that usually serve ads) - there are other ways to monetize. We'd be able to set a threshold or filter on anything. Subscriptions can be granular & multidimensional for any type of event stream - like `"show me everything from X unless from application A or message type T"`. Some IDMs could even offer the feature to show notifications only in specific time ranges of the day - for those addicted to dopamine hits.

TODO: follow anything

What if you wanted to see when someone follows something as an event/notification - each time they follow someone? There's no way to configure the current platforms for that

We should be able to follow playlists in social media - and be able to turn on notifications for them


██████████████████████████████████████████████████████████████████
# Centralized & fragmented identity/preferences
██████████████████████████████████████████████████████████████████

Convenience & simplicity sought by users has lead to extreme levels of centralization of identity in just a few players with network effects & [single sign-on](https://en.wikipedia.org/wiki/Single_sign-on) functionality.

> "as of 2018 the consolidation of power and control over the social web by a few large corporations seems unparalleled" - [Decentralizing the Social Web](https://hal.inria.fr/hal-01966561/document)

But despite the concentration of SSO services a lot of identity-related activity is fragmented between platforms due to the lack of standards & interoperability: settings/preferences, [direct messages](https://twitter.com/jonwu_/status/1524886818725847040), bookmarks, playlists, progress bars, etc.

> "Identity on the internet today is fragmented across many centralized services, each with its own set of user data. Signing up for a new service requires making a brand new identity and re-entering all of your information. This is not only tedious but also means that a user’s identity is going to be inconsistent between services because they are not always going to update key information on every single service every time that something changes." - [source](https://blog.sia.tech/skyid-how-to-make-decentralized-identity-using-skynet-2b282682f5b3)

[Linktree](https://en.wikipedia.org/wiki/Linktree) is just a bandaid for today’s fragmentation of identity ([valued at 1.3B$](https://techcrunch.com/2022/03/16/linktree-link-in-bio-series-c-valuation/)) - it is a symptom.


TODO: move this to another page

Contrast that to a world with interoperable & exportable identity/data:

> “each time we go from one social network to another we do not need to restate who we are, what our interests are, or who we know” - [Decentralizing the Social Web](https://hal.inria.fr/hal-01966561/document)
