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

When identity is decoupled from the presentation layer we could have IDMs that align with our needs - we could fine-tune how and when we want to be notified. The incentive for an IDM is not to suck all of our attention (as opposed to interfaces that usually serve ads) - there are other ways to monetize. We'd be able to set a threshold or filter on anything. Subscriptions can be granular & multi-dimensional for any type of event stream - like `"show me everything from X unless from interface I or message type T"`. Some IDMs could even offer the feature to show notifications only in specific time ranges of the day - for those addicted to dopamine hits.

# Bookmarks & playlists

Universal bookmarks - they can have a single repository (your IDM) and work for any type of document from any interface. They will be persistent and you could even cache the actual contents that a URI points to along with proofs - in case it is no longer hosted by anyone in the future.

Your personal knowledge base could be built with something like [Logseq](https://logseq.com/) with URI references to external documents that can be locally cached. Looking up the discussion/commentary for a resource with a URI would be just 1 click away.

Playlists are lists of bookmarks and could work even with heterogeneous audio/video providers which anchor the tracks and provide URIs for them. Spotify could be just an interface that uses your IDM for account storage and is paying to other media hosting providers for the streaming.

# Intra-document addressing

In Medium you can tweet a selection (sentence/word/paragraph) but when going back to the article from the tweet you don't get shown the original selection. With some archival services you can point to a text selection - for example [this link has `"Prussian Model"`](https://archive.ph/O2D45#selection-635.4-635.18) selected from the title when you open the page and you can change the selection which also changes the URL, but that's possible only because there's a specific hash in the URL and the document is guaranteed not to change in the archive - however that's not the case with Medium where the authenticity of documents is host-certified and they can change in time.

With Headjack URIs point to a specific version of a document and as explained in the [addressing chapter](names_and_paths.html#addressing-within-content) we could point to parts of documents in the URIs. If a document has been changed, updates will have their own new URIs and when an interface is showing an old URI with intra-document addressing it could:
- either show a label that there's a newer version of the document and the user can switch
- or directly show the new version if it's possible to transfer the selection without conflicts

Headjack's intra-document addressing is universal - it works for audio & video too and the interface from the [startup case study](startup_case_study.md) could display this clip with this quote in a much better way:
> "The internet creates 1 giant aggregator for everything" - [@naval](https://youtube.com/clip/UgkxphJhihcVY-U-PLFEvDl1m7Rb-iq4CGgo)

This can be pushed further - any composition/remix/meme of media could contain the references to the original text/pictures/audio/video so the sources of something can be traced and credited - imagine something like a movie maker that composes from other clips and all metadata is retained.

# Code as addressable data

Frontend code served by interfaces can be published and have its own URI. Updates to it would happen by broadcasting the next version along with a new URI and then pointing on-chain to it as the latest to use for viewing media. This way presentation layers could be cached locally and in a distributed way with proofs for authenticity - improving redundancy, latency, and throughput. Checking for a newer version would be a small query to the chain if there is a new URI - version control for frontends. This can work even for more dynamic applications that serve different versions depending on region/locale or which are A/B testing - the dynamic part could be served from a centralized host while smaller chunks of code could be referenced through URIs.

# The global [Git](https://en.wikipedia.org/wiki/Git)

We can intertwine Wikipedia, open source code, science & peer review globally and in public - tied to identity and with complete and unambiguous history of changes. Well... not only them - everything actually. We should be able to view changes of pages with a diff view - similarly to what [The Internet Archive provides](https://blog.archive.org/2019/10/18/the-wayback-machine-fighting-digital-extinction-in-new-ways/) - see [this link for an example](https://web.archive.org/web/diff/20170118202526/20170120040337/https://www.ice.gov/speeches).


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

The biggest hurdle for its adoption has been the [host-centric](host_centric.md) paradigm and the hoarding of data in silos with no incentive for exporting & interoperability - Headjack changes that. We can give birth to the public [Giant Global Graph](https://en.wikipedia.org/wiki/Giant_Global_Graph) outside of large centralized systems such as Google and Facebook. Machine learning for processing unstructured data can achieve a lot but using different [message types](messages.md) and further structuring will make it machine-readable and much easier for processing - unlocking a lot more value.

<!-- Accounts could create collections of identifiers with different schemas and compact URIs to represent entities for others to refer to - for example the analog of [IMDb](https://en.wikipedia.org/wiki/IMDb) could issue with URIs without a nonce such as `<account_index>/<schema>/<namespace>/<identifier>` -->





# Queries

- We'll be able to plot a timeline for all references to an event and filter based on activity & type of references

- imagine stumbling upon a video and saving it for later viewing. Later you decide to check where it got to you from - how do you query that? in a data-centric world you could run a query asking to see if anyone you follow has shared it

quote-retweet something - and then later when viewing the discussion around the original content to be able to view the discussion from quote-retweets 1 level deep as well, or even 2


<!-- 
# communities and moderation

- competing "subreddits" on the same topic with different moderators & content policies

- tagged posts with 1 main tag would simply appear both in a reddit-like ranking and subgroup grouping, and also in a twitter-like platform with default rendering (or optionally showing the tag).
 -->


# The future of publishing

> "The most powerful person in the world is the story teller. The storyteller sets the vision, values and agenda of an entire generation that is to come" - [Steve Jobs](http://jovanabanovic.com/2020/08/06/the-most-powerful-person-in-the-world-is-the-story-teller-the-storyteller-sets-the-vision-values-and-agenda-of-an-entire-generation-that-is-to-come-steve-jobs/)

focus on de-duplication & being able to explore any edge between concepts & URIs and the public discourse around URIs

TODO: exportable graph stories & interactive storytelling

the future of publishing - books, articles & interactive content graphs


- Imagine the possible visualizations on the graph data of the hivemind
    - imagine a 3d spacial graph of the interconnected knowledge you should learn, and how as you progress you color the edges to the ideas you're studiying on as a progress bar. continue from wherever you want after pausing, explore the datapoints & the interconnectedness. Imagine shipping a 5GB graph in such software for anyone to experience the ideas someone is trying to communicate to them
    - imagine creating explanatory videos for each edge (connections between things in life) - saying how the 2 things interplay, and why
    - imagine wearing a VR headset while constructing your stories as graphs constructed with anchored data


Imagine what Balaji could do if he had everything easily referencable through a logseq-like interface


on books:
https://twitter.com/FEhrsam/status/1304217384962592769


Linked data is essential for discoverability & ingestion of information - this gitbook is an example of that - contrast to what it would be if it was a linear whitepaper. The whole web can be interlinked like this.

every journalist should be able to use something like logseq and construct their stories with referencable facts - timestamped & crypto provable

Write about the story for a journalist using a tool like that and constructing interlinked stories... that needs a page on its own




PDFs are a horrendous format
PDFs ^ word filters should contain everything and have authentic links



TODO: articles can include the data for whatever they reference & even provide the merkle proofs for those - self-contained, complete & permanent publications

