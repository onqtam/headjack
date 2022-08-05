<div style="text-align: center;">
    <img src="https://png.pngitem.com/pimgs/s/207-2073499_translate-platform-from-english-to-spanish-work-in.png">
</div>


# Scaling & throughput

- Twitter: 400M users (220 MAU), average connections: 700
- 1.1 TB for arrays of arrays with 4 byte integers (the graph)
    - 2.2 TB (x2) if storing connections both ways for faster lookups (who do I follow & who follows me)
    - 4.4 TB (x2) if using long long int (8 bytes) - infinite indexes
- Metadata (pubkey, handle, description) per index would be O(1)
    - Less than the bytes required for 700 connections on average
- Realistic state size: ~20TB - database overhead & merkle roots
- The entire Twitter graph can be populated in a week with 1 MB/s of blockchain bandwidth







If handles are permanent to shards then their allocation to shards can be managed in the beacon chain and it can be consulted when following urls to content - so that the shard idx doesnt have to be in the urls







Twitter: 400M users (220 MAU), average connections: 700
1.1 TB for arrays of arrays with 4 byte integers (the graph)
2.2 TB (x2) if storing connections both ways for faster lookups (who do I follow & who follows me)
4.4 TB (x2) if using long long int (8 bytes) - infinite indexes
Metadata (pubkey, handle, description) per index would be O(1)
Less than the bytes required for 700 connections on average
Realistic state size: ~20TB - database overhead & merkle roots
The entire Twitter graph can be populated in a month with 1 MB/s of blockchain bandwidth
