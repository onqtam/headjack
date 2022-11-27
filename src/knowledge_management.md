<!--
with open data anyone will be able to build any kind of dashboard - moving us closer to a data-driven society in an open way
-->

# Knowledge management

Tying data to identity and making it freely available & outside of silos through content-centric addressing enables a lot of composability, functionality & innovation.

> "However, to rely on purely idealism as a motivator of adoption is naive. We need a user experience that is much better than today and we need to invent tools that users will absolutely never attain in the Web 2 realm." - ["Social Web 3" by Zee Prime Capital](https://zeeprime.capital/social-web-3)

<!-- toc -->

# Bookmarks & playlists

Universal bookmarks - they can have a single repository (your IDM) and work for any type of document from any application. They will be persistent and you could even cache the actual contents that a URI points to along with proofs - in case no one hosts it in the future.

Your personal knowledge base could be built with something like [Logseq](https://logseq.com/) with URI references to external documents that can be locally cached. Looking up the discussion/commentary for a resource with a URI would be just 1 click away.

Playlists are lists of bookmarks and could work even with heterogeneous audio/video providers which anchor the tracks and provide URIs for them. Spotify could be just an application that uses your IDM for account storage and is paying to other media hosting providers for the streaming.

# Intra-document addressing

In Medium you can tweet a selection (sentence/word/paragraph) but when going back to the article from the tweet you don't get shown the original selection. With some archival services you can point to a text selection - for example [this link has `"Prussian Model"`](https://archive.ph/O2D45#selection-635.4-635.18) selected from the title when you open the page (`#selection-635.4-635.18`) and you can change the selection which also changes the URL, but that's possible only because there's a specific hash in the URL (`O2D45`) and the document is guaranteed not to change in the archive - however that's not the case with Medium where the authenticity of documents is host-certified and they can change in time.

With Headjack URIs point to a specific version of a document and as explained in the [addressing chapter](names_and_paths.md#addressing-within-content) we could point to parts of documents in the URIs. If a document has been changed, updates will have their own new URIs and when an application is showing an old URI with intra-document addressing it could:
- either show a label that there's a newer version of the document and the user can switch
- or directly show the new version if it's possible to transfer the selection without conflicts

Headjack's intra-document addressing is universal - it works for audio & video too and the application from the [startup case study](startup_case_study.md) could display this clip with this quote in a much better way:
> "The internet creates 1 giant aggregator for everything" - [@naval](https://youtube.com/clip/UgkxphJhihcVY-U-PLFEvDl1m7Rb-iq4CGgo)

This can be pushed further - any composition/remix/meme of media could contain the references to the original text/pictures/audio/video so the sources of something can be traced and credited - imagine something like a movie maker that composes from other clips and all metadata is retained.

TODO:

https://subconscious.substack.com/i/49124972/text-fragments-select-excerpts-by-search
https://wicg.github.io/scroll-to-text-fragment/
https://support.google.com/chrome/answer/10256233?hl=en&co=GENIE.Platform%3DDesktop=
https://en.wikipedia.org/wiki/Vannevar_Bush#:~:text=wholly%20new%20forms%20of%20encyclopedias%20will%20appear%2C%20ready%20made%20with%20a%20mesh%20of%20associative%20trails%20running%20through%20them%2C%20ready%20to%20be%20dropped%20into%20the%20memex%20and%20there%20amplified


# The [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) (a.k.a. the original "Web3")

https://twitter.com/Golden
https://golden.com/blog/golden-raises-40m-series-b/

The biggest hurdle for its adoption has been the [host-centric](host_centric.md#the-host-centric-web--its-decay) paradigm and the hoarding of data in silos with no incentive for exporting & interoperability - Headjack changes that through [data-centric addressing](host_vs_data_centric.md) & broadcasting by default. While there will always be companies that enrich & tag data privately with their own ontologies and vocabularies to construct knowledge graphs for themselves, with open data by default and persistent URIs that always point to the same documents anyone will be able to broadcast similarly annotated versions of content with new URIs and relate them to the originals in a stable way for reuse by others. We can give birth to the public [Giant Global Graph](https://en.wikipedia.org/wiki/Giant_Global_Graph) outside of large centralized systems such as Google and Facebook. Machine learning for processing unstructured data has its place but it can only go so far - structuring through the use of different [message types](messages.md) and further annotations will make everything a lot more machine-readable.

<img src="images/data_information_knowledge.jpg">

<!-- <img src="images/data_information_knowledge.png"> -->

<!-- source:
https://www.theifactory.com/news/gaining-wisdom-from-data/
https://www.theifactory.com/wp-content/uploads/2019/01/Data-Wisdom.jpg
-->

# Query & plot anything

There are no limits to the types of queries we should be able to make - some simple examples:

- `"Plot a timeline for all references to an event and filter based on some criteria."`
- `"Show me responses/references from high-trust individuals to the top 5 controversial statements of person X and sort them somehow."`
- `"When has person X talked about the gut microbiome and have they recommended/mentioned a product or company?"`
- `"Has anyone I follow or is connected up to N degrees of separation with me shared/mentioned X in the last Y days?"`

Companies with complex indexes & private knowledge graphs could charge for running queries.

<!-- How do we query “how many films do robert deniro and and al pacino have together”?  -->

# Forking media & communities

Most applications will have some kind of moderation & filtration but at any point in time anyone will be able to create a competitor with a different set of rules and/or functionality. Migration can be seamless and the activity of accounts could (and in most cases will) be displayed in both at the same time - but the preferred application will be signaled through the URIs of public actions.

Content coming from competitors could be completely banned but that would be shortsighted - data coming from somewhere else should be displayed as long as it is properly structured and actions from banned accounts can simply be shown as deleted in reply threads. Migration can be gradual with little fracturing of communities & the conversation.

# The future of publishing, knowledge & learning

Books as a medium imply transmissionism as the learning model - `"people absorb knowledge by reading sentences"` - which is wildly incorrect and inefficient. Let's ask this question:

> "How might we design mediums which do the job of a non-fiction book—but which actually work reliably?" - [Andy Matuschak - “Why books don’t work”](https://andymatuschak.org/books/)

Here's a good start:

- Outlines as hierarchical expandable trees (like a [GitBook](https://worldaftercapital.gitbook.io/worldaftercapital/)) and fractal reading (each chapter summarized in 1 paragraph, expandable on several levels if you want to dig deeper)
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

<!--

read these: tools & techniques for knowledge management:
https://zettelkasten.de/posts/overview/
https://numinous.productions/ttft/
https://maggieappleton.com/garden-history



The anonymous can get AI-generated animated avatars & build presence in our minds like never before.

journalism is changing as more and more facts are accessible to anyone online in a sea of information - the future belongs to the narrators & curators -  those that dig through public data and expose corruption

-->