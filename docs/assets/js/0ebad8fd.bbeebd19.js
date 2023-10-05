"use strict";(self.webpackChunkheadjack=self.webpackChunkheadjack||[]).push([[231],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(a),m=i,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||r;return a?n.createElement(d,o(o({ref:e},p),{},{components:a})):n.createElement(d,o({ref:e},p))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9705:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={},o="Throughput & scalability",l={unversionedId:"what/numbers",id:"what/numbers",title:"Throughput & scalability",description:"Everyone claims to be scalable, but here we'll prove that Headjack can handle billions of accounts and anchor unlimited amounts of off-chain content tied to identity with simple napkin math.",source:"@site/docs/what/numbers.md",sourceDirName:"what",slug:"/what/numbers",permalink:"/docs/what/numbers",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Data storage & retrievability",permalink:"/docs/what/store_and_retrieve"},next:{title:"Headjack vs the competition",permalink:"/docs/what/competition"}},s={},c=[],p={toc:c},u="wrapper";function h(t){let{components:e,...a}=t;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"throughput--scalability"},"Throughput & scalability"),(0,i.kt)("p",null,"Everyone claims to be scalable, but here we'll prove that Headjack can handle billions of accounts and anchor unlimited amounts of off-chain content tied to identity with simple napkin math."),(0,i.kt)("h1",{id:"how-big-is-a-headjack-transaction"},"How big is a Headjack transaction"),(0,i.kt)("p",null,"Applications post anchors to off-chain content with an IPFS CID hash and a merkle root. IDMs also anchor off-chain content (mainly user preferences & updates to social graph), but they also post authorizations to other accounts (applications) to post on behalf of users as integer pairs."),(0,i.kt)("p",null,"So the fields for a transaction by an application/IDM (which will be the majority) are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"version: ",(0,i.kt)("inlineCode",{parentName:"li"},"4 bytes")),(0,i.kt)("li",{parentName:"ul"},"signature: ",(0,i.kt)("a",{parentName:"li",href:"https://ethvigil.com/docs/eth_sign_example_code/#recovering-the-message-signer-in-the-smart-contract"},(0,i.kt)("inlineCode",{parentName:"a"},"65 bytes"))),(0,i.kt)("li",{parentName:"ul"},"blob IPFS address: ",(0,i.kt)("a",{parentName:"li",href:"https://proto.school/anatomy-of-a-cid/01"},(0,i.kt)("inlineCode",{parentName:"a"},"32 bytes"))),(0,i.kt)("li",{parentName:"ul"},"blob merkle root: ",(0,i.kt)("a",{parentName:"li",href:"https://www.mycryptopedia.com/merkle-tree-merkle-root-explained/"},(0,i.kt)("inlineCode",{parentName:"a"},"32 bytes"))),(0,i.kt)("li",{parentName:"ul"},"nonce: ",(0,i.kt)("inlineCode",{parentName:"li"},"4 bytes")," auto-increment integer associated with the account - to prevent reordering of anchored off-chain blobs (which would mess up internal addressing based on that nonce)"),(0,i.kt)("li",{parentName:"ul"},"value: ",(0,i.kt)("inlineCode",{parentName:"li"},"4 bytes")," amount of native token paid to validators for transaction inclusion")),(0,i.kt)("p",null,"So far that is ",(0,i.kt)("inlineCode",{parentName:"p"},"141 bytes")," which almost every transaction by an application or IDM contains. IDMs also submit a list of authorizations (or revocations) as integer pairs. For example, 1000 accounts authorizing 15 different applications to post on their behalf would be 1000 integer pairs. Assuming 8 byte integers (up to 2^64) that would be 8 ",(0,i.kt)("em",{parentName:"p"}," 2 ")," 1000 = 16k bytes."),(0,i.kt)("h1",{id:"naive-scenario"},"Naive scenario"),(0,i.kt)("p",null,"The initial version will target block bandwidth of up to 100 kb/s. This is not a problem for ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/eshita/status/1546911451125649408"}," ZK validiums")," as there are already DA solutions that offer ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/apolynya/status/1517137629334056960"},"10 mb/s or even much more"),"."),(0,i.kt)("p",null,"Assuming:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 MB block size & 10 second block time (100 kb/s of block bandwidth)"),(0,i.kt)("li",{parentName:"ul"},"1000 applications posting in every block"),(0,i.kt)("li",{parentName:"ul"},"100 IDMs authorizing as much users as possible - filling the remaining block space"),(0,i.kt)("li",{parentName:"ul"},"no on-chain actions such as keypair & name changes, account creation & direct interaction with the chain by end users")),(0,i.kt)("p",null,"We get:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1100 actors (1000 applications + 100 IDMs) that post in every block at least ",(0,i.kt)("inlineCode",{parentName:"li"},"141")," bytes for their transactions, which is ",(0,i.kt)("inlineCode",{parentName:"li"},"155100")," bytes"),(0,i.kt)("li",{parentName:"ul"},"the remaining ",(0,i.kt)("inlineCode",{parentName:"li"},"893476")," bytes (1048576 (1MB) - 155100) can be filled with authorizations and since an authorization is ",(0,i.kt)("inlineCode",{parentName:"li"},"16")," bytes (8 * 2) that would be 55842 authorizations/revocations every 10 seconds or 5584 authorizations/revocations per second"),(0,i.kt)("li",{parentName:"ul"},"for 1 billion accounts that would be 0.557 authorizations/revocations per person per day which is actually quite good - people on average do way less ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Single_sign-on"},"single sign-ons")," per day")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"completely different goals - comparing the 2 protocols just to put things into perspective"),(0,i.kt)("th",{parentName:"tr",align:null},"Headjack"),(0,i.kt)("th",{parentName:"tr",align:null},"Ethereum"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"block size"),(0,i.kt)("td",{parentName:"tr",align:null},"1 MB"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://etherscan.io/chart/blocksize"}," ~80 kb "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"block time"),(0,i.kt)("td",{parentName:"tr",align:null},"10 seconds"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ycharts.com/indicators/ethereum_average_block_time"}," ~13 seconds "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"blockchain bandwidth per second"),(0,i.kt)("td",{parentName:"tr",align:null},"100 kb/s (x16 more than Ethereum)"),(0,i.kt)("td",{parentName:"tr",align:null},"~6.15 kb/s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"blockchain bandwidth per day"),(0,i.kt)("td",{parentName:"tr",align:null},"8640 mb/d"),(0,i.kt)("td",{parentName:"tr",align:null},"~528 mb/d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"transactions/authorizations per second"),(0,i.kt)("td",{parentName:"tr",align:null},"5584 APS"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://blockchair.com/ethereum/charts/transactions-per-second"}," ~14 TPS "))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"transactions/authorizations per day"),(0,i.kt)("td",{parentName:"tr",align:null},"482,457,600 APS"),(0,i.kt)("td",{parentName:"tr",align:null},"1,209,600")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"transactions/authorizations per person per day for 1 billion accounts"),(0,i.kt)("td",{parentName:"tr",align:null},"0.482 (x400 more than Ethereum)"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0012096")))),(0,i.kt)("h1",{id:"realistic-scenario"},"Realistic scenario"),(0,i.kt)("p",null,"The naive scenario does not include on-chain actions for specific accounts such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"keypair changes (new pubkey (32 bytes) + signature (65 bytes) if there is an older key)"),(0,i.kt)("li",{parentName:"ul"},"account creation (if done by an IDM then this is just a few bytes - no pubkey)"),(0,i.kt)("li",{parentName:"ul"},"name registration & ownership changes (see the ",(0,i.kt)("a",{parentName:"li",href:"handles.md"},"dedicated page")," for more details)"),(0,i.kt)("li",{parentName:"ul"},"updating account fields such as a URI pointing towards an off-chain account directory (which could point to archived posts) or pointing to another account index for such services"),(0,i.kt)("li",{parentName:"ul"},"signed transactions by individual accounts that want to directly interact with the chain",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"authorizing an IDM, rotating keys, or even publishing off-chain content as an application")))),(0,i.kt)("p",null,"However, the realistic scenario will not be far from the naive because:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only a % of all accounts will have keypairs (even though 100% could) and will make just a few signed actions per year - leaving most block throughput for authorizations through IDMs."),(0,i.kt)("li",{parentName:"ul"},"Large % of accounts will rarely even be authorizing new applications - many people don't sign in to new services through ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Single_sign-on"},"SSO")," every single day. There could also be 2 types of log-ins: passive (viewing only - nothing on-chain) and authorized (allowing services to post on behalf of users)."),(0,i.kt)("li",{parentName:"ul"},"Many applications that don't generate a lot of off-chain activity will publish less often than on every block in order to minimize on-chain block space costs."),(0,i.kt)("li",{parentName:"ul"},"The chain throughput can be further optimized & scaled by multiple orders of magnitude.")),(0,i.kt)("h1",{id:"optimizations--scaling"},"Optimizations & scaling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Throughput of 100 kb/s is just the start & can easily go to 1-10 mb/s as a ZK rollup."),(0,i.kt)("li",{parentName:"ul"},"The chain & state can be trivially sharded - there aren't problems such as fracturing liquidity or preventing composability because accounts don't care about each other - they mostly contain authorization block numbers & keypair history."),(0,i.kt)("li",{parentName:"ul"},"Integer indexes that only need 4 bytes can be compressed/batched together - it'll take many years to go beyond 4 billion accounts so the actual throughput is ",(0,i.kt)("strong",{parentName:"li"},"2x")," of what is listed here."),(0,i.kt)("li",{parentName:"ul"},"A fee market can develop that tunes the cost of different actions so that actors don't just pay for on-chain bytes - the ways the system is used can be guided through incentives."),(0,i.kt)("li",{parentName:"ul"},"Other optimizations not listed here - this is just the starting point.")),(0,i.kt)("h1",{id:"state-growth"},"State growth"),(0,i.kt)("p",null,"Headjack's main value proposition is keeping historical records of the sequence of authorizations, key changes & off-chain content anchors and being able to generate proofs for any specific piece of off-chain content."),(0,i.kt)("p",null,"TODO: finish this"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ethereum.stackexchange.com/questions/268/ethereum-block-architecture"},"https://ethereum.stackexchange.com/questions/268/ethereum-block-architecture")),(0,i.kt)("p",null,"numbers - state - one difference from other cryptos is that this one is append-only and could be designed to be easier on memory access patterns"),(0,i.kt)("p",null,"One difference with other blockchains is that accounts in Headjack are numbers and thus the state tree could be different."),(0,i.kt)("p",null,"on eth state growth:\n",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/SalomonCrypto/status/1587983584471633921"},"https://twitter.com/SalomonCrypto/status/1587983584471633921"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://hackmd.io/@vbuterin/state_size_management"},"https://hackmd.io/@vbuterin/state_size_management")),(0,i.kt)("p",null,"All on-chain changes just append data to one of the few attributes of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"accounts:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"public keys: a map of keys and block height integer ranges (non-overlapping) "),(0,i.kt)("li",{parentName:"ul"},"authorizations: a map of indexes and arrays of block height integer ranges"),(0,i.kt)("li",{parentName:"ul"},"nonces: an array that maps autoincrement indexes to block numbers",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"appended only when publishing off-chain content (usually an application/IDM)"))))),(0,i.kt)("li",{parentName:"ul"},"names:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"owners: a map of owner indexes and block height integer ranges (non-overlapping)"),(0,i.kt)("li",{parentName:"ul"},"nonces: an array that maps autoincrement indexes to account index & nonce pairs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"appended only when publishing off-chain content (usually an application/IDM)")))))),(0,i.kt)("p",null,"TODO: should IPFS hashes & merkle roots be saved in the state?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- no?\n")),(0,i.kt)("img",{src:"/img/account_name_state.png"}),(0,i.kt)("p",null,"TODO: light clients? in addition to merkle proofs for inclusion of content they would need merkle proofs for the state of which applications a user has authorized to post on their behalf in a given block"),(0,i.kt)("p",null,"state growth:\n",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/keoneHD/status/1574451986501623808"},"https://twitter.com/keoneHD/status/1574451986501623808")),(0,i.kt)("h1",{id:"off-chain-content"},"Off-chain content"),(0,i.kt)("p",null,"There are no limits for off-chain content as it is all just anchored with merkle roots - it could be as high as hundreds of terabytes per second. There isn't a more minimal design that can link unbounded amounts of off-chain data to billions of identities that can change keys & names and yet still provide the guarantees & mental model simplicity of Headjack - it achieves consensus on the absolute bare minimum."))}h.isMDXComponent=!0}}]);