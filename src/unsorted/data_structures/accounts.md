An account has the following properties:
- `ID` (`integer`) - unique on the blockchain, autoincrement, starting from 1
- `follows` (`array[integer]`) - list of accounts that it follows
    - `followers` (`array[integer]`) - a list of accounts that follow it (redundant - can be reconstructed by scanning all accounts - for faster queries of the other sort)
- `sig` - cryptographic address & signature
    - can be null ONLY if an `acm_id` is present
- `acm_id` (`integer`) - ACM ID - which [ACM](acm.md) can grant access to [interfaces](interfaces.md)
    - can be null ONLY if a `sig` is present

Other less important fields:

- `block_created` (`integer`) - in which block was the account first created




User nonce per interface

Multiple keys per index allowed for convenience?


use bitmaps for the following/follower arrays?
how big are bloom filters
https://en.wikipedia.org/wiki/Bloom_filter
https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/
https://github.com/RoaringBitmap/CRoaring
https://github.com/RoaringBitmap/RoaringBitmap#faq
https://en.wikipedia.org/wiki/Bitmap_index


