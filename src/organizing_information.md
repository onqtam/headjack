# Organizing information

<!-- toc -->


██████████████████████████████████████████████████████████████████████████████
# provenance, deduplication & authenticity
██████████████████████████████████████████████████████████████████████████████

https://en.wikipedia.org/wiki/Data_lineage
> "To make sense of the information and arguments we read, we have to understand where that information comes from." - [Where Arguments Come From](https://consilienceproject.org/where-arguments-come-from/#:~:text=To%20make%20sense%20of%20the%20information%20and%20arguments%20we%20read%2C%20we%20have%20to%20understand%20where%20that%20information%20comes%20from.)

provenance graphs - imagine being able to check if any of the inputs of a story has been influenced by a specific source

> "So what do we do about this world we are living in where content can be created by machines and ascribed to us? I think we will need to sign everything to signify its validity." - [AVC](https://avc.mirror.xyz/JpTblGUpDMA7SMS6HYdoYgbQE9H_a_wYq330pit_aRU)

balaji on cryptography & how the state should use it - relevant to the web of trust idea
https://twitter.com/balajis/status/1596412557127954433

apps should be able to show you all references to a document - perhaps they might show specific UIs for those that are supported and all others should be in the "other" list without visualization

on-chain nouns with IDs so that no one person controls the set and DA is guaranteed? what if a quorum of validators/tokenholders is required for the approval of a noun set? what if only the keys of the nouns are on-chain, but for big values only the hash can be stored on-chain? but the key is still stable for joins?
Message types should be on-chain nouns

deepfake Lexman Artificial & Eric Weinstein
https://twitter.com/lexman_ai/status/1615861599197171713

we will share the digital space with AIs and a web of trust on top of PKI will be incredibly important

██████████████████████████████████████████████████████████████████████████████
# Structured data & improving the signal/noise ratio
██████████████████████████████████████████████████████████████████████████████

nature has removed every unnecessary bit when it comes to exchange of information - and so should we.

information theory very well could be as important as or even fundamental to matter & the laws of physics and they are tightly interwoven - we should keep that as a perspective - as to why we should strive to optimize it


unlike text, structured data is easily aggregatable for the purpose of visualization through graphs & charts which makes it easily comprehensible


spamgularity
https://twitter.com/DanielleFong/status/1622315719298883584

signal/noise ratio - language is unbelievably complex and it compacts so much implied and assumed meaning and expressions of truth

signal/noise reduction & structured data
less language ==> less need for translation & localization

new message types!
extensions to twitter shouldn't clutter the comments like this:
@threadreaderapp unroll
@memdotai mem it
@readwise save
@SaveToNotion
https://twitter.com/MaficoNFT/status/1591510117094428678

REACTION with a comment/note - still structured data, but with added expressiveness

Let's take 2 sides of a debate around vaccines - Brett Weinstein & Scott Adams. It is impossible for someone to quickly see where they've been on the debate throughout time without pouring hundreds of hours sifting through old tweets & watching endless podcasts & episodes. Their opinions should have been codified with structured data & logged in a time-series.

the hammer is language and unfortunately every problem is a nail

hashtags should be separated from the text

Moving the vast majority of online activity to structured data and reducing the text reduces the load for content moderation
Also there's less room for emotive/russel conjugation & other such emotionally manipulative language & pre/re-framing https://en.wikipedia.org/wiki/Emotive_conjugation

Mission: raise the signal/noise ratio

We need more than the current one size fits all model
Importance/severity threshold/levels?

we should be able to use AI to determine the level of plagiarism between online posts and reduce the noise

digital media is not supposed to be unstructured

Structured data should be incentivized - we’re drowning in text audio and video

we can use AI to generate podcast-like conversations that cover the digital interactions of structured data

currently we channel our energy in a useless way - the best we can do is get a hashtag trending. But with this system every type of interaction would count

using structured data circumvents the need to think about the right words - it reduces friction in expression - streamlined expression as a chapter?

Steve bannon is famous for saying to flood the zone with shit - lets drain the swamp

"Speech as proof of work is dead."
https://twitter.com/gordonbrander/status/1622999277411741698

what if we enable communication through structured data and formal methods on top of it? What if we enable anyone to build any kind of sophisticated tool for formal modeling of the world around us?

so much expressed opinions & views are left unanalyzed & unaggregated because they're in text - they have an ephemeral impact for a moment and then fade

by increasing the amount of structured data we'd lower the amount of text that has to be checked for the rules - such as incitement of violence. Many freeform posts can be replaced by structured data

reducing information entropy - the level of surprise
but aren't we actually reducing the ambiguity?
bringing order
reducing the symbol space

reducing the vocabulary of common knowledge

> "Because we retain more of our information now than at any previous point in human history, it takes much more effort to delete or remove unwanted information than to accumulate it. This is the ultimate entropy cost of generating additional information" - [Wikipedia page about James Gleick's book "The Information: A History, a Theory, a Flood"](https://en.wikipedia.org/wiki/The_Information:_A_History,_a_Theory,_a_Flood#:~:text=because%20we%20retain%20more%20of%20our%20information%20now%20than%20at%20any%20previous%20point%20in%20human%20history%2C%20it%20takes%20much%20more%20effort%20to%20delete%20or%20remove%20unwanted%20information%20than%20to%20accumulate%20it.%20This%20is%20the%20ultimate%20entropy%20cost%20of%20generating%20additional%20information)

██████████████████████████████████████████████████████████████████████████████
# Query for anything related to something
# Anything that's relevant
# Everything that's relevant
# Anything relevant to something
# Free-form associations: anything-to-anything
██████████████████████████████████████████████████████████████████████████████

`"Pull that up Jamie"` - we should be able to see all references & content related to any identity, event/document with a URI or entity/concept/noun as a collection of comments, reactions/votes, annotations, redirections and modifications which we could filter through our UI.

- **Example 1:** Some YouTube videos have comments disabled. Why? Could be many reasons: **1)** perhaps they don't want to have their content associated with low quality comments, **2)** maybe they don't like the scammers & bots and want to protect their audience, **3)** maybe they haven't fully thought this through, **4)** or maybe they are actively trying to hide something. But anything public can be discussed on other platforms (Reddit?) - all you've done is made it harder to find that discussion but it's still there - and is most likely fractured across different platforms. The valid reasons (**1** and **2**) can be negated with better tooling for content moderation - both for active participants (tagging, annotating, voting) & the passive ones (simply consuming & filtering through the UI).

- **Example 2:** What if we could provide alternative titles for content and crowdsource the ones which most accurately describe it - countering the clickbait? Users could choose to view the original titles or the crowdsourced versions if there's consensus for a specific title to be way better than the original. This is already happening in StackOverflow - titles of other people's posts can be edited by moderators (or anyone?) with the goal of improving accuracy. What constitutes "better" and which/how votes are counted can be configurable too. But wouldn't content creators object?! Sure, but what are they going to do? The rules of the Metaverse are that data can be composed in any way imaginable without restrictions. This is like taking the best comment about what a post/video should be titled and through something like a browser extension programatically using that instead of the original in the UI - you can't stop that. We could even calculate clickbait scores for content creators - I bet many would have more than 90% of their content re-titled according to some criteria. We could even feed such scores into recommendation algorithms - **disincentivizing clickbait**.

- **Example 3:** The perpetual AMA - why can't we see an ongoing discussion around celebrities & hyper agents (extremely influential individuals & entities)?


We need to hold them to higher standards & have more scrutiny.

Kim Kardashian promoting Ethereum Max? That should have an entry


reaction videos



Let's take the [`"Jillian Michaels: Don't believe the keto diet hype | Big Think"`](https://www.youtube.com/watch?v=LOPOcBVzm7s) video for example. How do we determine if what's in there true? All we have is a comment section and a sidebar with algorithmic recommendations. Turns out there are [a number of reactions](https://www.youtube.com/results?search_query=jillian+michaels+keto+reaction) but they're not shown next to the video in any way - how would we know about their existence if we didn't explicitly search for them? The goal is not to be exposed to multiple points of view & reach some conclusion/consensus - it's only engagement.

The data is not interlinked, but suppose it was - we could have a list of reactions displayed somewhere along with scores of disagreement/prominence and other factors and we could more easily discern which one to watch next. The way to expose the complete failure & corruption of the FDA and the misguided policies of the past couple of decades is through a bottom-up crowdsourced effort enabled by the internet and further enabled by linked data, identities & reputation.

Take this YouTube playlist [`"Journey into information theory | Computer Science | Khan Academy"`](https://www.youtube.com/playlist?list=PLSQl0a2vh4HC9lvrBhVt4UUkhzpp3N5_x) for example. The videos are out of order, but someone has made another playlist [`"Journey into information theory (in order)"`](https://www.youtube.com/playlist?list=PLq2EDMGUqkHHjHLhp88RY-e5mN7uGMP75) that is fixed. Why can't we see a crowdsourced redirection suggestion attached to the first one on which people can vote?




concern: negative reputation & "scarlet letters"

see everything that referenced X (identity/URI) and filter types of references (AMA/critiques/annotations/general discussion)


a long video citing a bunch of external documents - we should be able to react differently to each and every external citation and have a discussion about each of them

Sensemaking chapter - video replies without interlinking specific moments is just primitive
How do we debunk stuff?
Moonlanding faked?
Ancient technology in egypt? Give links as evidence

youtube's reaction to swarm downvoting is "remove the count".
Disempowerment.
This system allows you to filter the count any way you want - empowerment.




A unified identity layer, the ability to deduplicate content, to annotate semantically & the move to structured data greatly helps with being able to deduplicate content & entities and pull everything related to something.

██████████████████████████████████████████████████████████████████████████████
# Graph data as the source
██████████████████████████████████████████████████████████████████████████████

AI classification isn’t scalable enough and can be ambiguous

We’d be able to “view source” for the AI-generated summaries

We’d be able to query where else specific facts (semantic triples) are mentioned

A graph has many ways to be traversed so we could ask AIs to generate a few versions so that we can pick. Our we could draw a pathing for linguistic linearization

The generated linearized/serialized output could have an automatically generated mapping so that we can see which regions correspond to which parts of the graph with some highlighting and we could have both displayed side by side in a synchronized “playback”

People can have fine-grained control such as annotating specific nodes to be skipped from the serialization or to signal importance to them so that the AI adds more emphasis on them
Imagine integrating this in a movie-maker-like software with a timeline widget

We could compute the similarity of views if they were in such graph forms

We should be thinking in diagrams, graphs and state machines - mind mapping is superior for comprehension and retention of information compared to linearized text - we can augment/upgrade/automate our linguistics for the first time

the future of script writing is graph creation, where refactoring and shuffling things around is just a matter of moving around & reconnecting subgraphs

Linearization/serialization of ideas in language inevitably loses details, precision and connections

The source should always be a graph because our minds represent knowledge and ideas as graphs - even though we communicate through serialization.

The only way for serialization to language to not lose any details, connections & nuance in complex ideas is to be overly verbose and incomprehensible by humans.

the next version of tweets will be small graphs, accompanied by representations in a few media forms for different consumption options

language evolved hundreds of thousands of years ago - its about time we upgraded from it

the better we annotate content - the more discoverable it will be. People don't put #hashtags without a good reason - however they are extremely limited

we could (partially) pattern-match our thoughts

What if we could debug / fact-check the logic in our graph circuits - perhaps by checking specific assumptions around other external fact databases?

translating language to graphs of data is messy and hard - what if we first constructed our belief graphs & thesis explicitly and then used AI to generate us presenting our version of the story in the most coherent way possible? What if we shifted creation to explicit node-based software first before anything else?
what leads to what, what the probabilities are.
just like writing forces us to think, the next level is constructing such graphs in forcing us to think
But until now we haven't had the option to turn such graphs into other types of consumable media
imagine how we can edit a graph and re-render the final media output to reflect that
we could even generate media that summarizes the changes of the graph throughout time - "generate change report in X format"

all journalism suffers from
- gelman amnesia   https://theportal.wiki/wiki/The_Gell-Mann_Amnesia_Effect
- cherry picking - reality is a lot more complex
- framing / frame control & russell conjugation - what is vs how to feel about what is - this should be an anti signal
We should be less reliant on narratives and more on data


what if we could annotate what's being said in text/video with semantic triplets and then being able to check those facts/assumptions against another database or set of facts by our choosing?

██████████████████████████████████████████████████████████████████████████████
# second brain
██████████████████████████████████████████████████████████████████████████████

note taking

██████████████████████████████████████████████████████████████████████████████
# wikipedia
██████████████████████████████████████████████████████████████████████████████

competing wikipedia-like pages written by different people & being able to select between them? no more "trusted source" issues?

Wikipedia and different prisms
Slicing and dicing - chapter name

we can use something like ChatGTP to summarize the results of polls from different points of view and write the text for a topic and always keep it up to date. This is the decentralized wikipedia.

imagine being able to pick your "wikipedia editors" - people who curate information in the open web while building a track record - and then anyone would be able to filter information differently based on their own personal criteria - multiple times from different angles (perhaps also by adopting someone else's criteria?)


██████████████████████████████████████████████████████████████████████████████
# querying & palantir foundry
██████████████████████████████████████████████████████████████████████████████

BigQuery 2.0

Graph tool for constructing queries - data processing pipelines like in Foundry

everyone can have access to something like Palantir Foundry for the entirety of the open web

localized queries - "looking for blood donor"?

THIS also relates to provenance
data pipelines & lineage - anyone would be able to do such complex analysis on public data
https://en.wikipedia.org/wiki/Data_lineage
ontology
Foundry 2022 Operating System Demo
https://www.youtube.com/watch?v=uF-GSj-Exms
reproducibility

a spreadsheet-like view over graph data - what if you could define owners of each cell so that they can update their elements and have that in a shared spreadsheet? And why not fork the sheet?

the decision maker: build trees of predicates and based on truth for each of them you can determine the outcome. Be able to play with such a system

you stumble upon a statement by an account and you also see a few of their other statements and completely disagree with them. What if you could run a query over all of their statements such as "how much overlap does their worldview have with mine"?

What if everyone could have such a computed score for every other account?

imagine being able to view a multi-level depth tree with all citations and conversations and conversations around those conversations and being able to filter the "outcome" based on criteria - labels/annotations/reactions and who we trust for placing those labels/annotations/reactions

We should all want informational freedom when it comes to querying public information

██████████████████████████████████████████████████████████████████████████████
# Curators & labelers
██████████████████████████████████████████████████████████████████████████████

This is how we should think about humans in the giang global graph:
https://www.youtube.com/watch?v=V0XfleKJSXM
History of Ethereum 2013-2018 (Git Visualization)
gource - git visualization

"reshaping the influencer"

We can let humans rank resources for various topics

What if we could flag [Bad Faith Communication](https://consilienceproject.org/the-endgames-of-bad-faith-communication/#accordion-1:~:text=and%20education%20crises.-,Common%20Strategies%20of%20Bad%20Faith%20Communication,-Misleading%20with%20facts)?

we should all be labellers - in an open way such that anyone can harness our collective intelligence

What if the way an event or a piece of news to get to more eyes was not through recommendation algorithms but through explicit annotation of what's inside - such that people can have explicit interest in those? What if people would rank stories by importance and then subscribe to filters based on people they trust would rank stories properly? What if you could allocate an attention budget of say 30 minutes per day or 20 news items and get the top after sorting, with the option to get the next batch if you want more?

Four Ways of Understanding Facts
https://consilienceproject.org/how-to-mislead-the-facts/#:~:text=Four%20Ways%20of%20Understanding%20Facts

the liquid democracy stuff can be used here to "vote" on who is a good curator for different topics

what about flagging an HR person as spammy? that should have its own specialized message type

we can crowdsource X and gamify it into success - it's been done before with initiatives like foldit @home
reputation! badges!

badges:
https://twitter.com/TitterTakeover/status/1622323886611202051

what if we could tag/annotate content where human faces are using filters - or at least that we think its happening?
what if we could choose that the recommender AIs do not show us faces with artificial filters (annotated as such by others) - wouldn't that disincentivize the use of such filters?
Obviously this isn't thought through completely - it could turn out bad if the annotation isn't reliable - its just trying to illustrate a point.
we could use AI to detect this instead of human annotation & reactions
we can have a lot more choice in what is being promoted in media


██████████████████████████████████████████████████████████████████████████████
# organizing information - interlinking & deduplicating data
██████████████████████████████████████████████████████████████████████████████

== problems:
- 
== solutions:
- 
- 
- knowledge graphs & the semantic web

google have failed with their mission - they have not organized the world's information - they have merely ranked it - organization is much broader
Google failed - they didnt organize the worlds information - they merely ranked it

just like in open source problems need to be solved only once, the same way in a world of unified identity & deduplicated concepts interwoven with social media debates need to be had only once

stable identity keys allows for stable concept/collection/noun keys which allows for stable mapping and deduplication of concepts

We need to deduplicate & reduce the amount of unique joinable keys for nouns, concepts, events & products. In the case when the same noun is published multiple times by different entities - maps of equivalence could be published so that nouns are equated to mean the same thing. We should be able to toggle which equivalence maps to enable.

joinability

stability of identifiers is crucial for relational databases.
The relational model is built on the premise of stable identifiers.

key stability ==> information deduplication & integration

If you choose an obscure tag or even if its the same but from an unpopular collection you'd simply limit your visibility & discoverability - there's an implied incentive to use the most popular collections when tagging your content

We should be able to view the most pressing questions for public figures and CEOs
Integrating all these different use cases with social media and unified identity and notifications is how to make them viral
We should be able to surface questions to elites and leaders and make it glaringly obvious if they have responded to them or not
It is easy to ingore some obscure app but not when everything is built on top of the same identity & data network
Sporadic Reddit AMAs are absolutely ibadequate
every account should have an AMA associated with them
This is what connecting people looks like - facebook isnt even scratching t he surface

Disallowing comments on a youtube video is just dumb because you cannot disallow comments for it on reddit anyway - all you are doing is trying to hide commentary about what you are presenting

fine-grained control
When viewing a post - have the ability to choose wether to respect the OP’s blocks and not see comments from blocked users ot not 

https://twitter.com/SocietyLibrary
the internet is unstructured
linked knowledge database
libraries & debate maps
libraries - concepts can be linked to different multimedia expressions - resources that describe it
debate maps are the onthological structure of the debate - aimed at deliberation

what if wikipedia-like "pages" were sitting on top of debate maps, highlighting an editorialized take and perhaps generated/summarized by an LLM? And what if people could choose the editorialization?

knowledge graph

this needs to be intertwined with social media, identity & follow graphs

giant global graph
https://en.wikipedia.org/wiki/Giant_Global_Graph
a massively multiplayer interlinked knowledge database

machine-understandable knowledge representations
subject-predicate-object triplets in the semantic web
these are just like subject-verb-object of the human natural language - there's an equivalence

being able to vote/react multiple times on a URI - with different scopes. Suppose you want to upvote a resource in one context but downvote it in another context - contextual reactions - within a domain !!!
context could be application/tag/campaign

sensemaking is about creating maps

redundant knowledge & broken chains of provenance

interlinking enables discoverability - you'd want to reference something specific because then you could be discovered from the referenced thing with a "references" view

we should be able to annotate parts of movies that we are crituiquing and be able to see all public critiques when viewing the original media


DIKW pyramid
data, information, knowledge, and wisdom
https://en.wikipedia.org/wiki/DIKW_pyramid


uploading a clip that could have easily just referenced a part of the whole shouldn't be encouraged - perhaps you'd need to pay for uploading it?

██████████████████████████████████████████████████████████████████████████████
# stable documents
██████████████████████████████████████████████████████████████████████████████

IPFS CIDs also let you do Xanadu-style transclusion with standoff markup. Offsets don't break because the CIDs are immutable.
https://twitter.com/gordonbrander/status/1619370073722089472

highlighted parts of a page - with surrounding characters - for stable linking of documents even if there have been changes to them elsewhere in a new URI

Suppose 2 public intellectuals start debating something - others should be able to annotate that conversation with the right tags and topics and add structure to it

overlaying annotations for pieces that lack it


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













imagine modelling the case around TikTok as a graph/tree

