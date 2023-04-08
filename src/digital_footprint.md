# Your digital footprint

<!-- toc -->

██████████████████████████████████████████████████████████████████
# Anatomy of your digital footprint
██████████████████████████████████████████████████████████████████

In order to reconstruct we must first deconstruct. What types of actions & events result in a trail of more data? What are the building blocks?

- **Posts & documents** (sharing/retweeting, credentials & attestations are a type of post too)
- **Comments** - on posts/documents and other comments
- **Reactions** - to posts/documents/comments
- **Profile** - information such as bio, profile picture, link to website & linktree
- **Social graph** (or interest graph) - your connections & subscriptions
- **Settings & preferences** (+ browser extensions)
    - **Cosmetic** (UI) - colors, layout, hiding the "recommended videos" panel in YouTube with the "DF Tube - Distraction Free for YouTube" browser extension
    - **Functional** - filters, blocked accounts, choice of recommendation algorithm, etc.
- **History** of what's been viewed/visited - 2 types:
    - **Browser** history (can be synced across devices with cloud accounts)
    - **App-specific** history (YouTube has a watched videos list but Twitter has no such thing)
        - playback progress is a special type of app-specific history - YouTube & Spotify store & show it for any item (but not which parts of the timeline have been viewed (like a barcode) - and thus moving the playback cursor changes your "progress")
- **Bookmarks**: browser & app-specific (Twitter) - wildly inferior to specialized note-taking apps

This is a rough scetch and we've omitted things such as edits, DMs, etc. Today we're left with only what product managers in Big Tech have decided is worthwhile for them to implement. For example we're unable to react or comment on the reaction of someone else. Does it always make sense to do so? No, but it should be possible. We're limited to the lowest common denominator of functionality.

<!-- > "What I do has to be a function of what I can do, not a function of what people ask me to do." - [Tim Berners-Lee](https://www.azquotes.com/quote/1202766) -->

██████████████████████████████████████████████████████████████████
# The 2D visibility/accessibility matrix
██████████████████████████████████████████████████████████████████

Let's consider the visibility spectrum - from **private** (personal) on one end to **public** on the other and **shared in some group** in between (anonymity will be explored elsewhere). Example: a fully private comment is basically a note to yourself. Here's what's possible with 3 Big Tech platforms:

<div>
<style type="text/css" scoped>
    .visibility_table {
        margin-top: 20px;
    }
    .visibility_table td {
        padding: 0;
        margin: 0;
        width: 12%;
        color: black;
        font-size: 12px;
        text-align: center;
        background-color:white;
    }
    .visibility_table td a:link {
        color: #0000EE;
        text-decoration: underline;
    }
    .visibility_table td a:visited {
        color: #551A8B;
        text-decoration: underline;
    }
</style>
<table class="visibility_table">
<tr>
    <td style="background-color:teal; width:16%"><b><u>Twitter</u></b></td>
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
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
</tr>
<tr>
    <td><b>Shared</b></td> 
    <td style="background-color:yellow">Only followers</td>
    <td style="background-color:yellow">Only followers</td>
    <td style="background-color:yellow">Only followers</td>
    <td style="background-color:yellow">Only followers</td>
    <td style="background-color:grey">Not sure</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
</tr>
<tr>
    <td><b>Private</b></td> 
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:yellow">Only as lists</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:red">No</td>
    <td style="background-color:green">Yes</td>
</tr>
</table>
<table class="visibility_table">
<tr>
    <td style="background-color:teal; width:16%"><b><u>YouTube</u></b></td>
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
    <td style="background-color:green">Yes</td>
    <td style="background-color:yellow">Can't browse</td>
    <td style="background-color:yellow">Aggregated</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
</tr>
<tr>
    <td><b>Shared</b></td> 
    <td style="background-color:yellow">Unlisted?</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
</tr>
<tr>
    <td><b>Private</b></td> 
    <td style="background-color:green">Yes</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
</tr>
</table>
<table class="visibility_table">
<tr>
    <td style="background-color:teal; width:16%"><b><u>Facebook</u></b></td>
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
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:yellow">Only friends</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
</tr>
<tr>
    <td><b>Shared</b></td> 
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:grey">Not sure</td>
    <td style="background-color:yellow">Only friends</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
</tr>
<tr>
    <td><b>Private</b></td> 
    <td style="background-color:grey">Not sure</td>
    <td style="background-color:grey">Not sure</td>
    <td style="background-color:red">No</td>
    <td style="background-color:grey">Not sure</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:green">Yes</td>
    <td style="background-color:red">No</td>
    <td style="background-color:red">No</td>
</tr>
</table>

What if we could choose the visibility of any action? We could set different defaults for any of them, have the ability to override it for any individual item and even have an account-wide visibility toggle between public & private - similar to when you open an incognito browser window and (hopefully) not have any of your history recorded & correlated with your identity. This might not always be a good idea (users might mess up and make something public by accident), but it should be possible and we have already learned using incognito windows as a pattern - such shifts are possible.

But why would we want this flexibility? A few examples:

- **History**: individuals & streamers who are digging into something might want to make their digital trail for a browsing session public & more easily accessible, analyzable & followable.
- **Settings & preferences**: we could "follow" those of others - adopting changes automatically.
- **Settings & preferences**: we could aggregate and analyze the shifts in public preferences throughout time - enabling better and more organic discoverability of tools and settings.
- Both **history** and **settings & preferences** can be shared not just publicly but also selectively with entities so that we can monetize our own data. Currently our behavioral patterns are closed & being data mined by companies which make decisions in their own best interest.

The freedom to share is a form of expression and agency - we should have granular control. A key piece of the puzzle is moving away from the host-centric web by linking data to identity so that it can be seamlessly exported and addressed in a uniform way.

<!-- For the fully private actions there is a 3rd axis - local or in the cloud, but we won't look into that here. -->

██████████████████████████████████████████████████████████████████
# Connections, follows & multidimensionality
██████████████████████████████████████████████████████████████████

Today's form of relationships in social media are too simplistic - you either follow someone or you don't. Apps like Instagram don't even have the distinction between a connection (friendship) and a follow - you can't have access to someone's private photos without also following them (at least Facebook has this distinction). This is by design - the less control you have over what activity ends up in your feed - the more engaging the app and the better for them. They're also leveraging social pressure by showing explicitly if someone is following you: `"How come you're not following me?"` - you can't have a private follow in Instagram and that's on purpose (at least you can in Facebook). YouTube subscriptions became a mere hint to the recommendation algorithm over time because the platform knows better where your attention should be spent - that's why creators have been nudging users to also `"hit the bell icon"` - a harder & more explicit form of subscription.

We are complex beings with different interests & aspects to our personalities - that's why there are many many apps to address different needs & verticals: Reddit, Twitter, YouTube, Facebook, TikTok, Instagram, LinkedIn, Goodreads, Medium, Quora, StackExchange, etc. We are multidimensional:

<!-- FIXME: edit picture to add text -->

<img src="images/multidimensionality_cropped.png">

But that comes at a cost: fragmented identity, duplication & lack of composability to name a few. What if everything was built on top of a single unified identity network shared and reused across apps with granular subscriptions (following) for what we want to be notified for and see from others in our feeds (+ the ability to control the visibility of our preferences)?

██████████████████████████████████████████████████████████████████
# Event streams, subscriptions & notifications
██████████████████████████████████████████████████████████████████

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

These information channels could be bundled together in different sets & event streams which can then be used in separate scrollable feeds & notification folders with different settings and meaning to us. We can explicitly compartmentalize our attention budget in different buckets. Is it straightforward to offer all this with good UX? We haven't actually tried, but there's always the option to offer limited functionality by default with everything advanced hidden behind a menu.

This isn't a new idea - the open nature of RSS has enabled readers (software clients) to offer users the ability to construct rules for subcriptions and manage them in folders. A little known fact is that YouTube channels have RSS feeds. If you subscribed to [@UnchainedPodcast](https://www.youtube.com/@UnchainedPodcast) (this is their [RSS feed](https://www.youtube.com/feeds/videos.xml?channel_id=UCWiiMnsnw5Isc2PP1to9nNw)) with an RSS reader you might have noticed that `#shorts` are given to you along with normal videos. [InoReader](https://inoreader.com/) allows you with a paid feature to construct custom rules such as `"`***`mark as read anything`***` that `***`contains`***` the string `***`#shorts`***`"`. We can have this, but completely generalized!

> "Notifications are just alarm clocks that someone else is setting for you." - [@naval](https://twitter.com/NavalismHQ/status/1556179585347112961)

Twitter decided at some point to boost engagement and forced `"recent tweet"` notifications down our throats [with no ability to turn them off](https://www.reddit.com/r/Twitter/comments/qwvhhb/how_do_you_disable_recent_tweets_from_x/). Instagram sometimes changes the notifications button indicating something new when in fact there's nothing - we're being conditioned like rats through regular pokes & dopamine hits. Such things should never be out of our explicit control.

When identity is decoupled from the presentation layer (applications) we could have IDMs that align with our needs - we could fine-tune how and when we want to be notified (for example only in specific time ranges of the day). IDMs can monetize us in ways other than advertising and their incentives won't be to suck all of our attention - as opposed to applications that usually serve ads.

<!-- Our minds filter out inconsequential sensations by default but we may tune them in with focus - we should have even greater levels of control in the digital realm. The stream of events for whatever we are interested in needs the most sophisticated filtering and configuration possible and anyone should be able to plug into the global event bus and develop new tools. -->

██████████████████████████████████████████████████████████████████
# Today: centralized & fragmented identity
██████████████████████████████████████████████████████████████████

> "He who controls identity controls the (social) world." - [Jordan Hall](https://deepcode.substack.com/p/sovereignty-as-a-service#:~:text=He%20who%20controls%20identity%20controls%20the%20(social)%20world.)

Convenience & network effects have lead to extreme levels of centralization of identity in just a few players with [single sign-on](https://en.wikipedia.org/wiki/Single_sign-on) (SSO) functionality.

> "As of 2018 the consolidation of power and control over the social web by a few large corporations seems unparalleled" - [Decentralizing the Social Web](https://hal.inria.fr/hal-01966561/document) by [Harry Halpin](https://twitter.com/harryhalpin)

But despite the concentration of SSO services a lot of identity-related data is fragmented between many more websites due to the lack of standards & interoperability: settings/preferences, [direct messages](https://twitter.com/jonwu_/status/1524886818725847040), bookmarks, playlists, history, progress bars, etc.

> "Identity on the internet today is fragmented across many centralized services, each with its own set of user data. Signing up for a new service requires making a brand new identity and re-entering all of your information. This is not only tedious but also means that a user’s identity is going to be inconsistent between services because they are not always going to update key information on every single service every time that something changes." - [source](https://blog.sia.tech/skyid-how-to-make-decentralized-identity-using-skynet-2b282682f5b3#:~:text=Identity%20on%20the,that%20something%20changes.)

Furthermore, the individual services are often extremely limiting - people have resorted to making Twitter threads with links to other of their threads and they pin that master thread to their profiles.

> "Twitter product request: a custom tab on my profile page i can pin my top 25 tweets — perhaps label it “best of [@jason](https://twitter.com/Jason)”" - [Jason Calacanis](https://twitter.com/Jason/status/1636464901911904257)

This has lead to the rise of [Linktree](https://en.wikipedia.org/wiki/Linktree) - a single page where you can display a number of links and conveniently point to it from all other websites ([valued at 1.3B$](https://techcrunch.com/2022/03/16/linktree-link-in-bio-series-c-valuation/)), but it's just a bandaid for today’s fragmentation of identity. Contrast that to a world on top of a single shared identity network with interoperable & exportable data:

> “Each time we go from one social network to another we do not need to restate who we are, what our interests are, or who we know” - [Decentralizing the Social Web](https://hal.inria.fr/hal-01966561/document) by [Harry Halpin](https://twitter.com/harryhalpin)

**Linktree is the symptom, Headjack is the cure.** We can actually go a lot further with our profiles:

we can have multiple different layouts:
- a general one like Linktree
- specialized ones for different domain-specific apps & usecases
    - apps can simply choose to display only the relevant parts from our profile in custom views
- a full log of all our activity of any kind across any service (similar to the `Replies` tab of an account in Twitter, but with everything (every change, every edit, every commit) + the ability to filter it)

██████████████████████████████████████████████████████████████████
# IDMs: one cloud to rule them all
██████████████████████████████████████████████████████████████████

What if IDMs filled that role? What if IDMs could integrate with browsers such that bookmarks were saved in your IDM cloud?

- What if we had "playback progress" even for text posts - by being able to toggle/layer a colorized heatmap of time spent on the different paragraphs? And what if this worked across apps and was managed by our IDM? We could easily come up with a standard interface for apps to talk to IDMs about that.

- Currently all these are segregated between disparate platforms with separate accounts


"All of your messages In one inbox"
https://texts.com/


what if your IDM kept a list of everything you've seen so it can be displayed in the UI?

> "One of the more out-there things I'd really like to see with local AI is feed-filtering. You have a personal AI that learns your preferences and is loyal to you. Then it parses the HTML on pages with feeds (YouTube, TikTok, Twitter, etc) and it throws out any clutter."
https://twitter.com/DavidVorick/status/1618277136938274817

different filters & thresholds for cold DMs - it should be easier for people from your communities to contact you. Such preferences should be possible.

TODO: add this in the attention & alarms & notifications section of the book - we should be able to take control - anyone should be able to build new frontends where we can set limits
What If You Quit Social Media For 30 Days?
https://www.youtube.com/watch?v=_u5p6hwS5SM

the level of sophistication in email filtering (in gmail for example) should be matched by any social media. But the incentives of social media is to engage you - not help you be less engaged or more meaningfully engaged

imagine being able to not see the same things multiple times when you open your feed multiple times and scroll a bit - having a "seen" list with URIs which you can later browse like the history in youtube - something like this should exist


When you show your Attention (what algorithms, apps & settings you're using, & even your history) you get attention for it - in regards to the signaling


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

What if we could signal our values and then be held accountable according to them? Like "being considerate instead of tribal" or "considering both sides of an argument"
https://consilienceproject.org/the-endgames-of-bad-faith-communication/#accordion-1:~:text=Some%20Signs%20of%20Good%20Faith%20Communication%3A


