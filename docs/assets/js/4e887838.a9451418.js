"use strict";(self.webpackChunkheadjack=self.webpackChunkheadjack||[]).push([[370],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(a),f=r,u=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var n=a(7462),r=(a(7294),a(3905));const i={},o="Data storage & retrievability",s={unversionedId:"what/store_and_retrieve",id:"what/store_and_retrieve",title:"Data storage & retrievability",description:"In this chapter we will see the different aspects of handling unlimited amounts of off-chain data:",source:"@site/docs/what/store_and_retrieve.md",sourceDirName:"what",slug:"/what/store_and_retrieve",permalink:"/docs/what/store_and_retrieve",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Names & paths",permalink:"/docs/what/names_and_paths"},next:{title:"Throughput & scalability",permalink:"/docs/what/numbers"}},l={},h=[],c={toc:h},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-storage--retrievability"},"Data storage & retrievability"),(0,r.kt)("p",null,"In this chapter we will see the different aspects of handling unlimited amounts of off-chain data:"),(0,r.kt)("h1",{id:"ingestion-and-transformation-of-blob-data"},"Ingestion and transformation of blob data"),(0,r.kt)("p",null,"Off-chain blobs with data will be fetched, processed and stored immediately after they are published in more optimal database formats for content to be later directly served by application infrastructure. Most of the cryptography checks will be happening instantly during this process but the proofs don't need to be stored. Users will always be able to request proofs for any event at any time (& cache them locally) because they can be regenerated on the fly as necessary."),(0,r.kt)("h1",{id:"hierarchical-data-blobs--partial-fetches"},"Hierarchical data blobs & partial fetches"),(0,r.kt)("p",null,'Blobs may be in a hierarchy such that the on-chain IPFS hash points only to the "root" blob that contains the header and the actual indexed data could be in child IPFS blobs (whose ',(0,r.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/content-addressing/"},"IPFS CIDs"),' are contained in the root blob or header) so entities listening for events by specific accounts on Headjack may download only these headers and determine which "leaf" blobs they need to fetch for the data they are interested in (if any). Sparse bitsets & ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bloom_filter"},"bloom filters")," could be used to quickly scan for the presence of activity by specific accounts."),(0,r.kt)("img",{src:"/img/root_child_blob_separation.png"}),(0,r.kt)("h1",{id:"direct-ipfs-connections--horizontal-scaling"},"Direct IPFS connections & horizontal scaling"),(0,r.kt)("p",null,"Applications can advertise the multiaddress of their IPFS nodes on-chain so that each blob of content that gets published can be downloaded by others instantly by manually connecting with IPFS\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/pinata/speeding-up-ipfs-pinning-through-swarm-connections-b509b1471986"},"\u201cswarm connect\u201d functionality")," - avoiding the use of the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Distributed_hash_table"},"DHT")," for each new blob CID which may take tens of minutes. They can provide addresses to multiple IPFS nodes as a cluster for horizontal scaling and use ",(0,r.kt)("a",{parentName:"p",href:"https://ipfscluster.io/"},"Pinset orchestration")," - designed for Automated data availability and redundancy."),(0,r.kt)("p",null,"Applications may choose not to use IPFS at all - what they must do is anchor their blobs with a Merkle root and provide some on-chain advertised means to retrieve the data (example: REST/RPC endpoints in their on-chain account). We expect that IPFS will be the lowest common denominator and will always be used no matter what other solutions are also available."),(0,r.kt)("h1",{id:"sharing-data-before-anchoring-it"},"Sharing data before anchoring it"),(0,r.kt)("p",null,'Applications can talk to each other directly by using their on-chain advertised REST/RPC endpoints and may ask for the events & messages that are not yet published by the other applications. This way they could display "remote" events locally while they are still in the "mempool" and allow their own users to interact with those events from other applications. This is possible because URIs are stable even before publication - see ',(0,r.kt)("a",{parentName:"p",href:"/docs/what/blobs_and_uris#stable-intra-blob-addressing-before-publishing"},"Stable intra-blob addressing before publishing"),". High activity applications can interoperate and no longer be a slave to the block time. However:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applications should display events that are not yet anchored in the UI differently - especially if coming from another application."),(0,r.kt)("li",{parentName:"ul"},"Events that refer to each other but are from different applications and have not yet been anchored on-chain could end up committed in the wrong order (if one of the applications skips a few blocks and commits at a later one) - such that an event from the past is referring to an event from the future - breaking ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Referential_integrity"},"referential integrity"),". However, ",(0,r.kt)("a",{parentName:"li",href:"messages.md"},"messages")," have a timestamp field and could also have the current block height at the time of creation - useful for sorting.")),(0,r.kt)("h1",{id:"how-to-retrieve-data-for-a-random-uri"},"How to retrieve data for a random URI"),(0,r.kt)("p",null,"There are multiple options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The entire original blob with an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.ipfs.io/concepts/content-addressing/"},"IPFS CID")," might still be retrievable from the original application account that posted it or anyone else that has pinned the data."),(0,r.kt)("li",{parentName:"ul"},"The user account might be using an archival service for all their activity and they can point to that archival service on-chain in their account for others to retrieve their messages."),(0,r.kt)("li",{parentName:"ul"},"Other well-known players without a direct on-chain connection to the application/user in a URI could be asked if they have the content:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Infrastructure companies that do the heavy lifting for applications and store everything."),(0,r.kt)("li",{parentName:"ul"},"The analog of the ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Internet_Archive"},"Internet Archive")," in this ecosystem that also stores everything."))),(0,r.kt)("li",{parentName:"ul"},"IPFS can be forked & reused with the following change: instead of delivering content based on the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.ipfs.tech/concepts/content-addressing/"},"CID")," hash it can deliver the data + the necessary proofs based on Headjack URIs or their hash (they are unique) - any individual off-chain message that's been anchored would be retrievable as long as someone is hosting it in this p2p network (which needs bootstrapping - could be part of Headjack nodes). However, this won't be very performant due to the granular nature of individual messages with a URI and the use of a global ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Distributed_hash_table"},"DHT"),".")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"/img/meme_we_are_not_the_same_addressability_vs_storage.jpg"})))}p.isMDXComponent=!0}}]);