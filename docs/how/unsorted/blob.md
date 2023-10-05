<div style={{textAlign: "center"}}>
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png"/>
</div>


an IPFS CID hash nails 2 birds with 1 stone: both a default way to retrieve it + a way to check the integrity even if retrieved not through IPFS


- blob format?
https://spec.dsnp.org/DSNP/BatchPublications.html
https://github.com/apache/parquet-format
- Parquet is a column-oriented format - but the current design of blobs in Headjack doesn't need more than 1 column about the user ID & offsets.
- Maybe we should let any application/software ingest our simpler blob format into databases & build indexes?
- maybe we can still have an intra-blob "offset" table or better yet - "parquet chunk" addressing?
- is it useful to also provide a column of the message type (integer ID) for all messages in a blob?
https://github.com/mimblewimble/grin/blob/master/doc/mmr.md

