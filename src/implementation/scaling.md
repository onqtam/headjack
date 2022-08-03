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






with 1MB/s that means: (600 times more than bitcoin)
1048576 / 80133 = 13 interfaces with equal amounts of traffic/activity

1MB/s of blockchain bandwidth means 13 interfaces can update 10k * 13 = 130k follow/unfollow events per second

that is 11 billion per day - with 1B users that means 10 follow/unfollow per person per day

86 GB/day of chain growth

Twitter has 400M users * 700 average connections per user = 280 billion edges
==> divide by 130k ==> 2153846.15 seconds for all edges ==> 600 hours ==> 25 days

twitter real user numbers:
https://imgur.com/a/19NV1YR

TODO: sharding?


needs the right abstraction if accounts are migrating from one shard to another - interfaces & IDMs shouldn't need to care

If handles are permanent to shards then their allocation to shards can be managed in the beacon chain and it can be consulted when following urls to content - so that the shard idx doesnt have to be in the urls







Twitter: 400M users (220 MAU), average connections: 700
1.1 TB for arrays of arrays with 4 byte integers (the graph)
2.2 TB (x2) if storing connections both ways for faster lookups (who do I follow & who follows me)
4.4 TB (x2) if using long long int (8 bytes) - infinite indexes
Metadata (pubkey, handle, description) per index would be O(1)
Less than the bytes required for 700 connections on average
Realistic state size: ~20TB - database overhead & merkle roots
The entire Twitter graph can be populated in a month with 1 MB/s of blockchain bandwidth
