# Centralization

<!-- toc -->

# DNS & certificate authorities


<!-- https://twitter.com/matthew_d_green/status/1604153242505584640 -->

ledger of record page - this can obsolete certificate authorities in the use of TLS
https://en.wikipedia.org/wiki/Certificate_authority
host-centric page - reliance on certificate authorities
https://en.wikipedia.org/wiki/Public_key_infrastructure
Public key infrastructure is inherently centralized


TODO: read these:
https://theinternetprotocolblog.wordpress.com/2023/01/17/reflections-on-certificates-part-1/
https://theinternetprotocolblog.wordpress.com/2023/02/12/reflections-on-certificates-part-2/



> "According to Netcraft in May 2015, the industry standard for monitoring active TLS certificates, "Although the global [TLS] ecosystem is competitive, it is dominated by a handful of major CAs — three certificate authorities (Symantec, Comodo, GoDaddy) account for three-quarters of all issued [TLS] certificates on public-facing web servers." - [Wikipedia](https://en.wikipedia.org/wiki/Certificate_authority)

The internet is decentralized as much as its weakest links which are DNS & certificate authorities

By July 2022 just 3 certificate authorities (IdenTrust, DigiCert & Sectigo) are responsible for [3 quarters of the entire market](https://w3techs.com/technologies/overview/ssl_certificate).

Certificate authorities should be a thing of the past.

Furthermore, content served by a website through HTTPS (so using SSL) cannot be cached & cryptographically frozen in time because if the certificate is revoked then there's no way to actually prove the order of events - when was the data signed (cannot rely on internal timestamps) and until when was the certificate valid. Headjack fixes this by anchoring all off-chain events with a merkle proof on-chain & sequences what's relevant.

> "In a separate disclosure unrelated to Snowden, the French Trésor public, which runs a certificate authority, was found to have issued fake certificates impersonating Google in order to facilitate spying on French government employees via man-in-the-middle attacks." - [wikipedia](https://en.wikipedia.org/wiki/Global_surveillance_disclosures_(2013%E2%80%93present))

yet more CENTRALIZATION in checking for the validity of certificates:
reliance on OCSP which is vulnerable to DDoS, replay attacks 
turtles all the way down - CAs delegate other entities to be OCSP responders
Also if a MITM attack is possible then 
If an attacker has compromised the private key of a server and is doing a MITM attack then OCSP requests will also be going through them - rendering OCSP an unreliable means of mitigating HTTPS server key compromise.
> "Because most clients will silently ignore OCSP if the query times out, OCSP is not a reliable means of mitigating HTTPS server key compromise." - [Wikipedia](https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol#Criticisms)

OCSP also leaks browsing behavior
https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol


our activity is being tracked when not using a VPN - even if using https we leak to the network which big tech service we are contacting & using

<div style="text-align: center;">
    <img src="images/meme_root_zones_certificate_authorities.jpg">
</div>

<!-- the digital revolution
decentralization through DNS
TLD zones,
ICANN, IANA,
certificate
authorities
https://imgflip.com/memegenerator/Running-Away-Balloon -->

DNSSEC was introduced to fight a wide range of DNS-related attacks but it also requires the use of certificates & a trusted third party.

The world is built on top of chains of trust which rely on certificate authorities
https://en.wikipedia.org/wiki/Chain_of_trust
https://en.wikipedia.org/wiki/Root_certificate

The internet is under U.S. control

https://whois.icann.org/en/domain-name-registration-process


# Centralized & fragmented identity/preferences

Convenience & simplicity sought by users has lead to extreme levels of centralization of identity in just a few players with network effects & [single sign-on](https://en.wikipedia.org/wiki/Single_sign-on) functionality.

> "as of 2018 the consolidation of power and control over the social web by a few large corporations seems unparalleled" - [Decentralizing the Social Web](https://hal.inria.fr/hal-01966561/document)

But despite the concentration of SSO services a lot of identity-related activity is fragmented between platforms due to the lack of standards & interoperability: settings/preferences, [direct messages](https://twitter.com/jonwu_/status/1524886818725847040), bookmarks, playlists, progress bars, etc.

> "Identity on the internet today is fragmented across many centralized services, each with its own set of user data. Signing up for a new service requires making a brand new identity and re-entering all of your information. This is not only tedious but also means that a user’s identity is going to be inconsistent between services because they are not always going to update key information on every single service every time that something changes." - [source](https://blog.sia.tech/skyid-how-to-make-decentralized-identity-using-skynet-2b282682f5b3)

[Linktree](https://en.wikipedia.org/wiki/Linktree) is just a bandaid for today’s fragmentation of identity ([valued at 1.3B$](https://techcrunch.com/2022/03/16/linktree-link-in-bio-series-c-valuation/)) - it is a symptom.


TODO: move this to another page

Contrast that to a world with interoperable & exportable identity/data:

> “each time we go from one social network to another we do not need to restate who we are, what our interests are, or who we know” - [Decentralizing the Social Web](https://hal.inria.fr/hal-01966561/document)

# Infrastructure centralization

> "Somehow people got comfortable with allowing a single public corporation being able to man-in-the-middle the entire Internet." - [`David Vorick`](https://twitter.com/DavidVorick/status/1375572267933913093)

Google is way more than just a search engine even though the majority of their revenue comes from advertising - they control large percentages of the plumbing of the web - key choke points such as submarine cables, routing, data centers, browsers, DNS, etc. [`David Vorick`](https://twitter.com/DavidVorick) puts this perfectly into perspective in [`The Worrying Depth and Scope of Censorship on the Internet`](https://blog.sia.tech/the-worrying-depth-and-scope-of-censorship-on-the-internet-ffd4bc5a5486) - some quotes:

> "If Google decides they don’t like you, then for 65% of the world you simply stop existing. You have no recourse.
The terrifying thing about this is that Google is not an elected entity. Google has turned themselves into unelected regulators of the Internet, and they are held accountable only to their own share price."

> "As our economy and services become more deeply intertwined, an increasing number of players have more influence and ability to de-platform a greater number of businesses and users. And these requirements compound against each other. If one service provider is particularly opinionated and quick to de-platform, everybody else is forced to give them a large amount of breathing room and become more oppressive towards their users to avoid potential conflict."

> "This does not scale. The end result will be a global monoculture where everybody is afraid to take risks or break the status quo because nobody can afford to upset even a single of the hundreds of services that they depend on. Our culture gets established and defined by giants like Facebook and Google rather than users and creators, because only Facebook and Google have the resources to bully everyone else into allowing changes to happen."

> "The only way to avoid this endgame is to demand infrastructure that remains neutral. At the scale of today’s Internet and global economy, infrastructure that does not remain neutral will inevitably turn on its users and coerce them into a set of moral standards that are both arbitrary and enforced without consent."

<!-- TODO: AWS & other cloud providers are also big & influential -->
