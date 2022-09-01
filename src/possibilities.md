<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>


<!-- # The content-centric web -->

<!-- # What the data-centric web unlocks -->
<!-- # Possibilities in the data-centric web -->

# Possibilities with open data

Tying data to identity and making it freely available & outside of silos through content-centric addressing enables tons of composability, functionality & innovation.

# Unified data through different views

The public conversation shouldn't be fractured between platforms such as Twitter, YouTube & Reddit - instead it should be one but viewed through different lenses (based on moderation / indexing / visualization). The Twitter view of a discussion is basically the same as just the top level comments (without the children) in a Reddit thread. Segregated discussion in the open web serves nobody - there should be canonical IDs for events & information that we can all refer to. It doesn't make sense that comments can be arbitrarily disabled for some document on one platform (YouTube) but enabled on another one where a URL from the first is shared. All content could be interlinked, deduplicated, referencable, quotable, commentable & shareable.

<!-- Data hoarding and interoperability leads to tool & widget incompatibility. -->

# Event streams

<!-- Our minds filter out inconsequential sensations by default but we may tune them in with focus - we should have even greater levels of control in the digital realm. The stream of events for whatever we are interested in needs the most sophisticated filtering and configuration possible and anyone should be able to plug into the global event bus and develop new tools. -->

In an open data environment anything could become an event stream as long as someone is willing to pay for the processing costs (filtration, transformation, storage):
- edits to a specific document identified by a URI
- references/mentions of an account/entity/word/URI in public documents
- any other type of filtration criteria - thresholds, exclude lists, etc.
- complicated streams can be constructed by transforming/joining others - similar to Kafka

If someone implements speech-to-text and starts transcribing audio episodes and publishing the output it would immediately become available to anyone and would automatically end up being parsed, indexed & pushed through data pipelines. Composability. This is not possible with closed platforms - even if someone was willing to pay the processing costs.

# Notifications & subscriptions

Twitter decided that it needs to boost engagement and forced "recent tweet" notifications on us [without the ability to turn them off](https://www.reddit.com/r/Twitter/comments/qwvhhb/how_do_you_disable_recent_tweets_from_x/) - that needs to stop - explicit preferences should be honored.

> "Notifications are just alarm clocks that someone else is setting for you." - [@naval](https://twitter.com/NavalismHQ/status/1556179585347112961)

When identity is decoupled from the presentation layer we could have IDMs that align with our needs - we could fine-tune how and when we want to be notified. The incentive for an IDM is not to suck all of our attention (as opposed to applications that usually serve ads) - there are other ways to monetize. We'd be able to set a threshold or filter on anything. Subscriptions can be granular & multi-dimensional for any type of event stream - like `"show me everything from X unless from application A or message type T"`. Some IDMs could even offer the feature to show notifications only in specific time ranges of the day - for those addicted to dopamine hits.

# Bookmarks & playlists

Universal bookmarks - they can have a single repository (your IDM) and work for any type of document from any application. They will be persistent and you could even cache the actual contents that a URI points to along with proofs - in case it is no longer hosted by anyone in the future.

Your personal knowledge base could be built with something like [Logseq](https://logseq.com/) with URI references to external documents that can be locally cached. Looking up the discussion/commentary for a resource with a URI would be just 1 click away.

Playlists are lists of bookmarks and could work even with heterogeneous audio/video providers which anchor the tracks and provide URIs for them. Spotify could be just an application that uses your IDM for account storage and is paying to other media hosting providers for the streaming.

# Intra-document addressing

In Medium you can tweet a selection (sentence/word/paragraph) but when going back to the article from the tweet you don't get shown the original selection. With some archival services you can point to a text selection - for example [this link has `"Prussian Model"`](https://archive.ph/O2D45#selection-635.4-635.18) selected from the title when you open the page and you can change the selection which also changes the URL, but that's possible only because there's a specific hash in the URL and the document is guaranteed not to change in the archive - however that's not the case with Medium where the authenticity of documents is host-certified and they can change in time.

With Headjack URIs point to a specific version of a document and as explained in the [addressing chapter](names_and_paths.html#addressing-within-content) we could point to parts of documents in the URIs. If a document has been changed, updates will have their own new URIs and when an application is showing an old URI with intra-document addressing it could:
- either show a label that there's a newer version of the document and the user can switch
- or directly show the new version if it's possible to transfer the selection without conflicts

Headjack's intra-document addressing is universal - it works for audio & video too and the application from the [startup case study](startup_case_study.md) could display this clip with this quote in a much better way:
> "The internet creates 1 giant aggregator for everything" - [@naval](https://youtube.com/clip/UgkxphJhihcVY-U-PLFEvDl1m7Rb-iq4CGgo)

This can be pushed further - any composition/remix/meme of media could contain the references to the original text/pictures/audio/video so the sources of something can be traced and credited - imagine something like a movie maker that composes from other clips and all metadata is retained.

# Code as addressable data

Frontend code served by applications can be published and have its own URI. Updates to it would happen by broadcasting the next version along with a new URI and then pointing on-chain to it as the latest to use for viewing media. This way presentation layers could be cached locally and in a distributed way with proofs for authenticity - improving redundancy, latency, and throughput. Checking for a newer version would be a small query to the chain if there is a new URI - version control for frontends. This can work even for more dynamic applications that serve different versions depending on region/locale or which are A/B testing - the dynamic part could be served from a centralized host while smaller chunks of code could be referenced through URIs.

# The global [Git](https://en.wikipedia.org/wiki/Git)

We can intertwine Wikipedia, open source code, science & peer review globally and in public - tied to identity and with complete and unambiguous history of changes. Well... not only them - everything! We should be able to view changes of pages with a diff view - similarly to what [The Internet Archive provides](https://blog.archive.org/2019/10/18/the-wayback-machine-fighting-digital-extinction-in-new-ways/) - see [this as an example](https://web.archive.org/web/diff/20170118202526/20170120040337/https://www.ice.gov/speeches).


Any step of the process should be a referencable event that others can comment on.




a slider for filtering/jumping through time like in discourse
https://meta.discourse.org/t/change-right-gutter-to-vertical-timeline-topic-controls/44096/231


<!-- https://twitter.com/radicle
https://twitter.com/gitopiaDAO -->



# wikipedia

Wikipedia needs to be rebuilt on this - imagine a q&a section like twitter for every paraphrase and also a git slider to see the history for each paragraph. This index can also be moved interplanetary

wikipedia needs to be git-like. everything can be git-like. new action type: grant ability to someone to "edit" & publish a new version of an item

fork wikipedia?


- imagine wikipedia being rebuilt on top of this
    - dead links? thing of the past - can be cached locally & preserved with merkle proofs
    - imagine wikipedia being forked with a different set of moderators - like in git
    - imagine rebuilding wikipedia on top of this graph and being able to reference each paragraph/change


# science and peer review

- peer review can (and should) be reimplemented on top of infrastructure like this

12. Science. Same essay:
https://slatestarcodex.com/2014/07/30/meditations-on-moloch/


- the ledger of record - science
    peer review & citations can be encoded with tags/messages

    How does crypto realign science with reproducibility?
    https://twitter.com/manveerbasra_/status/1555405612506157056

    Composable science is reproducible science.
    https://twitter.com/balajis/status/1555458319070167040

    the digital part of scientific papers can be replicatable locally

    digital chain of custody for papers & science

    science should be like open source - replicated & verified many times like code is compiled & ran

    Laws should be referable and commentable. They should be written in public & made available in the same way as open source code is

    https://twitter.com/balajis/status/1557247912874086400
    https://twitter.com/bensprecher/status/1557351733382225920

    on-chain papers
    https://twitter.com/balajis/status/1556579944754384897




# The [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) (a.k.a. the original "Web3")

The biggest hurdle for its adoption has been the [host-centric](host_centric.md) paradigm and the hoarding of data in silos with no incentive for exporting & interoperability - Headjack changes that through [data-centric addressing](data_centric.md) & broadcasting by default. While there will always be companies that enrich & tag data privately with their own ontologies and vocabularies to construct knowledge graphs for themselves, with open data by default and persistent URIs that always point to the same documents anyone will be able to broadcast similarly annotated versions of content with new URIs and relate them to the originals in a stable way for reuse by others. We can give birth to the public [Giant Global Graph](https://en.wikipedia.org/wiki/Giant_Global_Graph) outside of large centralized systems such as Google and Facebook. Machine learning for processing unstructured data has its place but it can only go so far - structuring through the use of different [message types](messages.md) and further annotations will make everything a lot more machine-readable.

<!-- crowdsourced annotation -->

# Query anything

There are no limits to the types of queries we should be able to make - some simple examples:

- `"Plot a timeline for all references to an event and filter based on some criteria."`
- `"Show me responses/references from high-trust individuals to the top 5 controversial statements of person X and sort them somehow."`
- `"When has person X talked about the gut microbiome and have they recommended/mentioned a product or company?"`
- `"Has anyone I follow or is connected up to N degrees of separation with me shared/mentioned X in the last Y days?"`

Companies with complex indexes & private knowledge graphs could charge for running queries.

# Forking media & communities

Most applications will have some kind of moderation & filtration but at any point in time anyone will be able to create a competitor with a different set of rules and/or functionality. Migration can be seamless and the activity of accounts could (and in most cases will) be displayed in both at the same time - but the preferred application will be signaled through the URIs of public actions.

Content coming from competitors could be completely banned but that would be shortsighted - data coming from somewhere else should be displayed as long as it is properly structured and actions from banned accounts can simply be shown as deleted in reply threads. Migration can be gradual with little fracturing of communities & the conversation.

# The future of publishing, knowledge & learning

Books as a medium imply transmissionism as the learning model - `"people absorb knowledge by reading sentences"` - which is wildly incorrect and inefficient. Let's ask this question:

> "How might we design mediums which do the job of a non-fiction book—but which actually work reliably?" - [Andy Matuschak - “Why books don’t work”](https://andymatuschak.org/books/)

<!-- Non-interactive linear PDFs are incredibly limiting and a thing of the past. -->

Here's a good start:

- Outlines as hierarchical expandable trees (like in GitBook) and fractal reading (each chapter summarized in 1 paragraph, expandable on several levels if you want to dig deeper)
    <!-- > "Books should be structured as expandable trees. One paragraph summary of each chapter, expandable into summaries of component points/stories, expandable into the full text. Can read the whole book in 5 minutes or 5 hours." - [Fred Ehrsam](https://twitter.com/FEhrsam/status/1304217384962592769) -->
- Interactive [executable programs](https://en.wikipedia.org/wiki/Project_Jupyter) with exercises & examples embedded in documents.
- Note taking, flash cards, etc.

But that's just scratching the surface - deduplicated open data, persistent URIs linked to identity, [intra-document addressing](#intra-document-addressing), and the ability to cache resources with proofs enables a lot more:
- View the discussion and comment on anything referenced externally with a URI - or parts of the book itself as they could also have their own URIs - or even paragraphs!
- Use tools like [Logseq](https://logseq.com/), [Roam Research](https://roamresearch.com/) & [Obsidian](https://obsidian.md/) but on top of stable URIs & the [semantic web](#the-semantic-web-aka-the-original-web3) to build your own knowledge base as [bookmarks](#bookmarks--playlists) & a graph and share it if you want.
- Publications can be self-contained and permanent by including everything external for offline use with proofs for authenticity - that's how journalism should be done.
- Visualize your progress of going through an interconnected book as a color-coded map - an overview of what you've already looked at, how much time you've spent, and what's left.

<!-- We can leverage what we know about human cognition and drastically improve books and articles as a medium for knowledge transfer & retention - multi-level content (short vs detailed), different presentations (text, diagrams, graphs, knowledge maps), etc. -->

<!-- see [Francis Miller's work](https://www.francismiller.com/) - or don't - too much repetition and not that much insight -->



**Imagine constructing stories as interconnected documents, concepts & entities while wearing a VR headset by pulling from the semantic web & the open internet and publishing that as a self-contained & authentic package that anyone can save offline, explore & build upon.**

> "The most powerful person in the world is the story teller. The storyteller sets the vision, values and agenda of an entire generation that is to come" - [Steve Jobs](http://jovanabanovic.com/2020/08/06/the-most-powerful-person-in-the-world-is-the-story-teller-the-storyteller-sets-the-vision-values-and-agenda-of-an-entire-generation-that-is-to-come-steve-jobs/)

Let's empower them.
