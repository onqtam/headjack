---
description: How to think about your digital footprint
draft: true
---

# Your digital footprint

<iframe align="right" width="50%" src="https://www.youtube.com/embed/CyGWML6cI_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> "He who controls identity controls the (social) world." - [Sovereignty as a Service, by Jordan Hall](https://deepcode.substack.com/p/sovereignty-as-a-service#:~:text=He%20who%20controls%20identity%20controls%20the%20(social)%20world.)

# Today: centralized & fragmented identity

> "The more you enter, the more you become locked in. Your social-networking site becomes a central platform - a closed silo of content, and one that does not give you full control over your information in it. The more this kind of architecture gains widespread use, the more the Web becomes fragmented, and the less we enjoy a single, universal information space." - [Tim Berners-Lee](https://www.azquotes.com/quote/1269744)

Convenience & network effects have lead to extreme levels of centralization of identity in just a few players with [single sign-on](https://en.wikipedia.org/wiki/Single_sign-on) (SSO) functionality.

> "As of 2018 the consolidation of power and control over the social web by a few large corporations seems unparalleled" - [Decentralizing the Social Web](https://hal.inria.fr/hal-01966561/document) by [Harry Halpin](https://twitter.com/harryhalpin)

But despite the concentration of SSO services a lot of identity-related data is fragmented between many more websites due to the lack of standards, interoperability & incentives: content, profiles, settings/preferences, social graph, [direct messages](https://twitter.com/jonwu_/status/1524886818725847040), bookmarks, playlists, progress bars, etc.

> "Identity on the internet today is fragmented across many centralized services, each with its own set of user data. Signing up for a new service requires making a brand new identity and re-entering all of your information. This is not only tedious but also means that a user’s identity is going to be inconsistent between services because they are not always going to update key information on every single service every time that something changes." - [source](https://blog.sia.tech/skyid-how-to-make-decentralized-identity-using-skynet-2b282682f5b3#:~:text=Identity%20on%20the,that%20something%20changes.)

Furthermore, the individual services are often extremely limiting - people have resorted to making Twitter threads with links to other of their threads and they pin that master thread to their profiles.

> "Twitter product request: a custom tab on my profile page i can pin my top 25 tweets — perhaps label it “best of [@jason](https://twitter.com/Jason)”" - [Jason Calacanis](https://twitter.com/Jason/status/1636464901911904257)

All this has lead to the rise of apps like [Linktree](https://en.wikipedia.org/wiki/Linktree) (a single page where you can display a number of links and conveniently point to it from all other websites - [valued at 1.3B$ at one point?!](https://techcrunch.com/2022/03/16/linktree-link-in-bio-series-c-valuation/)), [Texts](https://twitter.com/TextsHQ) (which aims to be a single messenger client that aggregates all others) and many more social media aggregators (such as a single interface to streamline posting content on multiple platforms at once) but they will always be at the mercy of the terms of service & APIs of the platforms they're wrapping and are all just a bandaid for today’s fragmentation of identity - they are a symptom.

**Headjack fixes this.**

> "Asked a girl for her Instagram and she just told me to follow her on Venmo?" - [Nikita Bier
](https://twitter.com/nikitabier/status/1644782161617375233)

# Anatomy of your digital footprint

In order to reconstruct we must first deconstruct. What types of actions & events result in our trail of data? What are the building blocks? Here's a rough scetch of a few broad categories:

TODO: data exhaust
https://en.wikipedia.org/wiki/Data_exhaust

- **Authoring documents & events**
    - **Posts & documents** (sharing/retweeting are a type of post too)
    - **Comments** - on posts/documents and other comments
    - **Reactions** - to posts/documents/comments
    - **Other** - playlists, issuing credentials/attestations/certificates, RSVPs for events, etc.
- **Profile** - information such as bio, profile picture, link to website & linktree, etc.
- **Social graph** (or interest graph) - your connections & subscriptions
- **Settings & preferences** (+ browser extensions)
    - **Cosmetic** (UI) - colors, layout, hiding the "recommended videos" panel in YouTube with the `"DF Tube - Distraction Free for YouTube"` browser extension, etc.
    - **Functional** - filters, blocked accounts, topics of interest for the feed, etc.
- **History** of what's been viewed/visited - 2 types:
    - **Browser** history (can be synced across devices with cloud accounts)
    - **App-specific** history (YouTube has a watched videos list but Twitter has no such thing)
        - playback progress is a special type of app-specific history - YouTube & Spotify store & show it for any item (but not which parts of the timeline have been viewed (like a barcode) - and thus moving the playback cursor changes your "progress")
- **Bookmarks**: browser & app-specific (Twitter) - wildly inferior to specialized note-taking apps

Here we've omitted things such as edits, DMs, & others. Today we're left with only what product managers in Big Tech have decided is worthwhile for them to implement. For example we're unable to react or comment on the reaction of someone else. Does it always make sense to do so? No, but it should be possible. We're limited to the lowest common denominator of functionality and the APIs used by third party companies to extend the platforms come with very restrictive terms of service & limitations and can change at any point in time - killing entire ecosystems.

<!-- > "What I do has to be a function of what I can do, not a function of what people ask me to do." - [Tim Berners-Lee](https://www.azquotes.com/quote/1202766) -->

# The 2D visibility matrix of our actions

Let's consider the visibility spectrum of our actions - from **private** (personal) on one end to **public** on the other and **shared in some group** in between (forget about anonymity for now). Example: a private comment is basically a note to yourself. Here's what's possible with 3 Big Tech platforms:

<table class="visibility_table">
<tr>
    <td style={{backgroundColor: "teal", width: "16%"}}><b><u>Twitter</u></b></td>
    <td><b>Posts & documents</b></td>
    <td><b>Comments</b></td>
    <td><b>Reactions</b></td>
    <td><b>Profile</b></td>
    <td><b>Social graph</b></td>
    <td><b>Settings & preferences</b></td>
    <td><b>History</b></td>
    <td><b>Bookmarks</b></td>
</tr>
<tr>
    <td><b>Public</b></td> 
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
</tr>
<tr>
    <td><b>Shared</b></td> 
    <td style={{backgroundColor: "yellow"}}>Only followers</td>
    <td style={{backgroundColor: "yellow"}}>Only followers</td>
    <td style={{backgroundColor: "yellow"}}>Only followers</td>
    <td style={{backgroundColor: "yellow"}}>Only followers</td>
    <td style={{backgroundColor: "grey"}}>Not sure</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
</tr>
<tr>
    <td><b>Private</b></td> 
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "yellow"}}>Only as lists</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
</tr>
</table>
<table class="visibility_table">
<tr>
    <td style={{backgroundColor: "teal", width: "16%"}}><b><u>YouTube</u></b></td>
    <td><b>Posts & documents</b></td>
    <td><b>Comments</b></td>
    <td><b>Reactions</b></td>
    <td><b>Profile</b></td>
    <td><b>Social graph</b></td>
    <td><b>Settings & preferences</b></td>
    <td><b>History</b></td>
    <td><b>Bookmarks</b></td>
</tr>
<tr>
    <td><b>Public</b></td> 
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "yellow"}}>Can't browse</td>
    <td style={{backgroundColor: "yellow"}}>Aggregated</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
</tr>
<tr>
    <td><b>Shared</b></td> 
    <td style={{backgroundColor: "yellow"}}>Unlisted?</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
</tr>
<tr>
    <td><b>Private</b></td> 
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
</tr>
</table>
<table class="visibility_table">
<tr>
    <td style={{backgroundColor: "teal", width: "16%"}}><b><u>Facebook</u></b></td>
    <td><b>Posts & documents</b></td>
    <td><b>Comments</b></td>
    <td><b>Reactions</b></td>
    <td><b>Profile</b></td>
    <td><b>Social graph</b></td>
    <td><b>Settings & preferences</b></td>
    <td><b>History</b></td>
    <td><b>Bookmarks</b></td>
</tr>
<tr>
    <td><b>Public</b></td> 
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "yellow"}}>Only friends</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
</tr>
<tr>
    <td><b>Shared</b></td> 
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "yellow"}}>Only friends</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
</tr>
<tr>
    <td><b>Private</b></td> 
    <td style={{backgroundColor: "grey"}}>Not sure</td>
    <td style={{backgroundColor: "grey"}}>Not sure</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "grey"}}>Not sure</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "green"}}>Yes</td>
    <td style={{backgroundColor: "red"}}>No</td>
    <td style={{backgroundColor: "red"}}>No</td>
</tr>
</table>

What if we could choose the visibility of any action? We could set different defaults for any of them, have the ability to override it for any individual item and even have an account-wide visibility toggle between public & private - similar to when you open an incognito browser window and (hopefully) not have any of your history recorded & correlated with your identity. This might not always be a good idea (users might mess up and make something public by accident), but it should be possible and we have already learned using incognito windows as a pattern - such shifts are possible.

But why would we want this flexibility? A few examples:

- **History**: individuals & streamers who are digging into something might want to make their digital trail for a browsing session public & more easily accessible, analyzable & followable.
- **Settings & preferences**: we could "follow" those of others - adopting changes automatically. 
- **Settings & preferences**: we could aggregate and analyze the shifts in public preferences throughout time - enabling better and more organic discoverability of tools and settings.
- Both **history** and **settings & preferences** can be shared not just publicly but also selectively with entities so that we can monetize our own data. Currently our behavioral patterns are closed & being data mined by companies which make decisions in their own best interest.

The freedom to share is a form of expression and agency - we should have granular control. A key piece of the puzzle is moving away from the host-centric web by linking data to identity so that it can be seamlessly exported and addressed across services in a uniform way.

The following chapters will show why this is so important to be able to show & signal your settings & preferences.

<!-- For the fully private actions there is a 3rd axis - local or in the cloud, but we won't look into that here. -->

# Connections, follows & multidimensionality

Today's form of relationships in social media are too simplistic - you either follow someone or you don't. Apps like Instagram don't even have the distinction between a connection (friendship) and a follow - you can't have access to someone's private photos without also following them (at least Facebook has this distinction). This is by design - the less control you have over what activity ends up in your feed - the more engaging the app and the better for them. They're also leveraging social pressure by showing explicitly if someone is following you: `"How come you're not following me?"` - you can't have a private follow in Instagram and that's on purpose (at least you can in Facebook). YouTube subscriptions became a mere hint to the recommendation algorithm over time because the platform "knows better" what's good for you and how your attention should be spent - that's why creators always say to `"hit the bell icon"` - a harder & more explicit form of subscription.

We are complex beings with different interests & aspects to our personalities - that's why there are many many apps to address different needs & verticals: Reddit, Twitter, YouTube, Facebook, TikTok, Instagram, LinkedIn, Goodreads, Medium, Quora, StackExchange, etc. We are multidimensional:

<!-- FIXME: edit picture to add text -->

<img src="/img/multidimensionality_cropped.png"/>


Even Substack is transitioning to [something like Twitter](https://on.substack.com/p/introducing-notes) but it is built around email for accounts - we can do better.


> "Social networks do best when they tap into one of the seven deadly sins. Facebook is ego. Zynga is sloth. LinkedIn is greed." - [Reid Hoffman](https://www.azquotes.com/quote/134480), LinkedIn founder

WHAT ABOUT MEANING/PURPOSE/POWER?
!!! A single identity network is all 8 at the same time.

But that comes at a cost: fragmented & inconsistent identity, content duplication, & lack of composability to name a few. What if everything was built on top of a single unified identity network shared and reused across apps with granular subscriptions (following) for what we want to be notified for and see from others in our feeds (+ the ability to control the visibility of any action)?

# Event streams, subscriptions & notifications

In the the ultimate subscription network you'd be able to listen for and filter events based on:

- **Application source** - `"I want `***`everything`***` from `***`account A`***` coming from `***`app B`***`"`
- **Content/event type**
    - `"I want `***`all pictures`***` from `***`account A`***`"`
    - `"I want `***`all subscription events`***` from `***`account A`***`"`
- **Labels & tags** - `"I want `***`all financial advice`***` from `***`account A`***`"`
- **Severity & importance** - `"I want `***`every alert/warning/importance>5`***` from `***`account A`***`"`
- **Custom filters & rules** - `"I want `***`any mention/reference of X`***` from `***`account A`***`"`
- Subscriptions not tied to accounts
    - **document** - `"I want `***`all changes`***` to `***`playlist P`***`"`
    - **general** - `"I want `***`any mention of $ETH`***` from `***`anywhere`***`"`
- **Exclusion** - any filter from above can also be inverted and layered with an inclusive one
    - `"`***`exclude pictures`***`"` / `"`***`exclude app B`***`"` / `"`***`exclude edits to P`***`"`
    - This might prove to be the most used form of filters - subscribe to everything from some entity initially and then gradually exclude sources & events you aren't interested in - this way you'd get by default all new types of events that start to be generated.

In an open & interoperable data environment anything could become an event stream as long as someone is willing to pay for the processing costs (filtration, transformation, storage & bandwidth) - we could construct any kind of stream by transforming & joining others - similar to Kafka. If someone starts transcribing audio episodes with speech-to-text ([whisper](https://openai.com/blog/whisper/)?) and publishing the output by referencing the original item it would immediately become available to anyone and could automatically end up being parsed, indexed & pushed through data pipelines. **Composability**.

These information channels could be bundled together in different sets & event streams which can then be used in separate scrollable feeds & notification folders with different settings and meaning to us. We can explicitly compartmentalize our attention budget in different buckets. Perhaps it's not straightforward to offer all this with an easy & intuitive UX, but we haven't even tried! There's always the option to offer limited functionality by default with everything advanced hidden behind a menu.


TODO: how could us seeing what others are subscribing us for about change what we produce? a sophisticated form of audience capture?


This isn't a new idea - the open nature of RSS has enabled readers (software clients) to offer users the ability to construct rules for subcriptions and manage them in folders. A little known fact is that YouTube channels have RSS feeds. If you subscribed to [@UnchainedPodcast](https://www.youtube.com/@UnchainedPodcast) (this is their [RSS feed](https://www.youtube.com/feeds/videos.xml?channel_id=UCWiiMnsnw5Isc2PP1to9nNw)) with an RSS reader you might have noticed that `#shorts` are given to you along with normal videos. [InoReader](https://inoreader.com/) allows you with a paid feature to construct custom rules such as `"`***`mark as read anything`***` that `***`contains`***` the string `***`#shorts`***`"`. We can have this, but completely generalized!

> "Notifications are just alarm clocks that someone else is setting for you." - [@naval](https://twitter.com/naval/status/1012389905840816133)

Twitter decided at some point to boost engagement and forced `"recent tweet"` notifications down our throats [with no ability to turn them off](https://www.reddit.com/r/Twitter/comments/qwvhhb/how_do_you_disable_recent_tweets_from_x/). Instagram sometimes changes the notifications button indicating something new when in fact there's nothing - we're being conditioned like rats through regular pokes & dopamine hits. Such things should never be out of our explicit control.

When identity is decoupled from the presentation layer (applications) we could have IDMs that align with our needs - we could fine-tune how and when we want to be notified (for example only in specific time ranges of the day). IDMs can monetize us in ways other than advertising and their incentives won't be to suck all of our attention - as opposed to applications that usually serve ads.

<!-- Our minds filter out inconsequential sensations by default but we may tune them in with focus - we should have even greater levels of control in the digital realm. The stream of events for whatever we are interested in needs the most sophisticated filtering and configuration possible and anyone should be able to plug into the global event bus and develop new tools. -->

# IDMs: one cloud & profile to rule them all

Let's contrast [today's world of centralized & fragmented identity](#today-centralized--fragmented-identity) to a world with a single shared identity network with interoperable & exportable data:

> "Each time we go from one social network to another we do not need to restate who we are, what our interests are, or who we know" - [Decentralizing the Social Web](https://hal.inria.fr/hal-01966561/document) by [Harry Halpin](https://twitter.com/harryhalpin)

But that's just scratching the surface - how much further could we push things? Some examples:

- A **single place for all your messages** (DMs & email) - similar to [Texts](https://texts.com/) (`"All of your messages in one inbox"`) but not beholden to the terms of service & constraining APIs of platforms.
    - **Define filters & thresholds for cold DMs** - have separate inboxes based on properties: account older than 2 years? has credential X? up to 3 degrees of separation from you? amount paid to contact you? (setting a price for yourself), etc.
- **Universal bookmarks** - they'll work for any type of document/event from any app and you could even cache the actual content that a URI points to along with proofs - forever.
    - **Partial selections** - select a paragraph/sentence or range on a timeline (a clip) and save it - the URI for the underlying document is stable.
    - **Playlists** are lists of bookmarks and could work even with different audio/video apps which have given URIs to tracks. Spotify could be just an app that uses your IDM for account storage (managing your library & tracking your progress on podcasts) and is paying hosting providers for storage & bandwidth for streaming.
    - Your **personal knowledge base** could be built with something like [Logseq](https://logseq.com/) or [Roam](https://roamresearch.com/) on top of such universal bookmarks along with personal notes - your second brain. Looking up anything related to an identity or a document with a URI would be just 1 click away - seamlessly integrated in the UI.
    - **Browser integration** - using any IDM for cloud sync through a standard interface.
- **Profile presets** - different versions of what to display depending on the context:
    - **Full profile** - a MySpace/Linktree-like page with everything you'd like to show + a log of all your public activity of any kind across any app/service - similar to the `Replies` tab of an account in Twitter, but with everything (changes, edits, commits) and the ability to filter it.
    - **Context-dependent views** for domain-specific apps - those that deal mostly with images could display the relevant subset of your full profile: pictures & a log of events related only to images. Apps geared towards professional work & resumes could display your CV and a list of credentials & attestations. This can happen either by explicitly defining subsets of attributes as different presets or automatically by the apps through filtering based on type/tag. One could always view the full profile of someone.
- **History of viewed documents** - a list of URIs in your cloud for everything you've seen.
    - **Filter out seen content** - hide items that you've already looked at from feeds.
    - **Timeline intervals** for audio & video playback - saving ranges for any part of the timeline that you've played for longer than X seconds. Today YouTube & Spotify save merely the progress as a position which can easily be changed/lost by fast-forwarding the cursor.
    - **Display seen content differently** - with colors or show progress as percentage/time.
        - **Progress for text documents** - record time spent & sections rendered on screen and be able to toggle a heatmap overlay that colors the text accordingly.
- Define your **home page** - shortcuts, dashboards, folders & widgets with a customizable layout - anything you need. But more on that in the superapp section of this book.

All this would be easiest to build around a single unified identity network with data interoperability.


TODO: take ideas from twitter expanded bios:
https://twitter.com/oshea/status/1732174506716733482



<!--
# random crap

> "One of the more out-there things I'd really like to see with local AI is feed-filtering. You have a personal AI that learns your preferences and is loyal to you. Then it parses the HTML on pages with feeds (YouTube, TikTok, Twitter, etc) and it throws out any clutter."
https://twitter.com/DavidVorick/status/1618277136938274817

add this in the attention & alarms & notifications section of the book - we should be able to take control - anyone should be able to build new frontends where we can set limits
What If You Quit Social Media For 30 Days?
https://www.youtube.com/watch?v=_u5p6hwS5SM

When you show your Attention (what algorithms, apps & settings you're using, & even your history) you get attention for it - in regards to the signaling

the level of sophistication in email filtering (in gmail for example) should be matched by any social media. But the incentives of social media is to engage you - not help you be less engaged or more meaningfully engaged
-->
