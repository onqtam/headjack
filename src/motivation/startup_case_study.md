# Startup case study

We should be able to comment & annotate audio & video at specific points in time on the timeline.

But not like SoundCloud does it (by rendering [tiny overlapping rectangles](https://soundcloud.com/liluzivert/for-fun-prod-by-beatsbyjeff) with profile pictures that you can just hover with the cursor to see the comment) nor like YouTube (where you can write a timestamp (`hh:mm:ss`) in a comment which becomes a clickable link that fast-forwards the player and then fighting it out with the other 20 000 comments in the single linear vertically scrollable section of a 3 hour long podcast and hoping to be noticed) - both are horribly insufficient and unusable. It is extremely hard to discuss specific parts of long-form media & for good localized signal to actually surface & be noticed.

Instead why not just show a histogram of where most of the comments are and provide a resizable window as an additional widget on the timeline (in addition to the progress cursor) which can filter comments & annotations based on the range and display the threads below Reddit-style with sorting & filtration options?

Here's a screenshot of precisely that (ignore the colors & bad design):

<img src="../images/startup_case_study.png">

The ultimate audio/video player can offer a lot more than just a comment histogram:
- 1-click repositioning & resizing of the filter window to timestamp ranges for different topics plotted as horizontal bars (already done)
- sharing links to specific ranges - as clips, but without losing the context
- different types of comments: annotations, questions, personal (hidden) notes
- search field for within the comments that are in the current filter window
- crowdsourced annotations (tagging resources/events/concepts/entities)
- plotting/toggling different types of histograms (not just comment density):
    - plotting different types of reactions
    - where other users spend most of their time
    - where the user has already played the episode
    - comments that have more than X upvotes or up/down ratio
    - where the most controversy or facts requiring a crowdsourced check are
    - highlighting comments that match the current search filter/query/regex

Here's an [older video](https://www.youtube.com/watch?v=xsJvFr9v7Nk) showcasing this UI (can't resize the window with the mouse yet).

# Challenges in the current web2 world

There are many challenges for this idea to work as a web2 company:

- For it to provide value it would need many users commenting on the same video or otherwise there will be no histogram and the whole interface will be pointless. It needs a network effect - discoverability is hard.

- What if YouTube cuts it off & disallows embedding videos via iframe?


- Would it need to try to become a YouTube competitor?

# How Headjack's paradigm fosters innovation

- ?
