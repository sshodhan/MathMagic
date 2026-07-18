# Math Magic — User Recruitment Campaign

**Audience:** Parents of upper-elementary kids (grades 3–5, ages 8–12; app curriculum is Grade-5-centered)
**Goal:** Drive web-app trials (`https://sshodhan.vercel.app/`) and Android beta signups (`/beta.html`)
**Site:** https://mathmagicfun.info/

> ✅ **Facts verified against the app repo** (`sshodhan/v0-math-app-for-kids`, 2026-07-18):
> ages **8–12**, Grade-5-centered Common Core/WA OSPI curriculum (Grade 6 built but gated off);
> **8 adventures × 10 levels** (Number Sense Masters, Decimal Discoverers, Division Champions,
> Fraction Heroes, Decimal Multiplication Masters, Decimal Division Quest, Word Problem Warriors,
> Fraction Factory) plus arcade games; per-level **difficulty scaling** is real; the coach is
> **Coach Maya**; Parent Hub labels are exactly **Strong / Growing / Let's practice**; local-first —
> kids can play with **no account**; ships as web app + **Android WebView** (no iOS workstream);
> privacy baseline in sync at `2026-06-12.1`. Do not market 1st–2nd grade content or Grade 6.

> ⚠️ **Claim compliance:** All copy in this doc uses only the approved claim vocabulary from
> `.github/claude-review.md` §2. Before publishing any NEW copy anywhere (ads, social, email),
> check it against `privacy.html`. Never use: "No Data Collection", "we don't collect personal
> information", "data stays on this device / stays local", or unqualified "never shared".
> Approved: "Learning Data Only"; "We collect only what learning needs"; "Never sold, never
> used for ads, never shared with advertisers"; "No ads"; "No in-app purchases"; "COPPA-committed".

---

## 1. Objectives & KPIs

| Objective | Metric | 90-day target |
|---|---|---|
| Awareness | Organic impressions (Search Console) | 10k/mo |
| Acquisition | Web-app sessions attributed to the site (`utm_source=mathmagicfun` on `session_started` in Statsig — site links now forward/tag UTMs via `js/attribution.js`) | 500/mo |
| Recruitment | Beta signups (Netlify Forms) — **total count only; not reportable by source** (the form captures only email, and adding source capture would be a privacy-policy change that must start in the app repo) | 200 total |
| Retention loop | Parent Hub email opt-ins as a share of **activated app accounts** (`onboarding_account_created` in Statsig) — not of beta-form signups | 30% |

## 2. Audience & personas

1. **The Homework Referee** — parent of a 4th–5th grader stuck on long division and fractions; searches "long division help", "fractions for 4th graders", "decimal practice 5th grade". Pain: nightly battles. Hook: Coach Maya explains patiently, visually, endlessly.
2. **The Screen-Time Skeptic** — wants screen time to be worth something; deeply privacy-conscious. Pain: ad-riddled "free" apps. Hook: No ads, no in-app purchases, Learning Data Only, COPPA-committed.
3. **The Confidence Builder** — child says "I'm bad at math." Pain: math anxiety. Hook: growth-framed feedback ("Strong · Growing · Let's practice"), never "weak/failing/behind".

## 3. Positioning & messaging pillars

**One-liner:** *Math practice designed to feel like play — with a coach that never runs out of patience and a privacy bar parents can trust.*

| Pillar | Message | Proof point |
|---|---|---|
| Fun that works | "Designed to make practice feel like play" | Adventures, stars, avatars, streaks |
| Sees, not memorizes | "Kids don't just need math explained — they need to visualize it" | Visual number sense, fractions, long division |
| Coach at their side | "A friendly AI coach with infinite patience" | Step-by-step help, zero judgment |
| Parent peace of mind | "No ads. No in-app purchases. Learning Data Only." | privacy.html; Parent Hub |
| Free to start | "Play in the browser in 10 seconds — no signup" | try.html / web app |

## 4. Channel plan

### A. SEO (shipped in this repo — see §7)
- New `/grades/` pillar page targeting grade-level queries ("math games for 3rd graders", "4th grade fractions practice").
- Homepage retargeted at "elementary" keywords; Organization/WebSite structured data; FAQ schema on /grades/ and /parents/.
- **Next:** one blog post per grade-level pain point (see content calendar); submit sitemap in Search Console after deploy.

### B. Content / blog (Substack + /blog/)
Weekly parent-facing posts, cross-linked to /grades/:
- "Why upper elementary is when kids decide if they're 'a math person'"
- "Long division without tears: a visual walkthrough"
- "5 signs your child has math anxiety (and what actually helps)"
- "What 'no ads' really means in a kids app" (privacy pillar — use approved wording only)

### C. Parenting communities (organic, high-trust)
- **Reddit:** r/Parenting, r/homeschool, r/ElementaryTeachers (flair rules permitting). Lead with the story ("built this for my kid…"), not the pitch. One post per subreddit, then answer questions.
- **Facebook groups:** local parent groups, homeschool co-ops. Offer the free web link, no signup required.
- **PTA / school newsletters:** ready-made blurb (§5.4). Teachers are the multiplier — offer classroom use free.

### D. Pinterest (evergreen parent search engine)
Pins: "Math games by grade" (links to /grades/), "Fraction help for 4th graders", "Screen time that teaches". Pinterest SEO compounds with the same keywords as web SEO.

### E. Paid social (small test budget)
$10–20/day Facebook/Instagram test: audience = parents of children 8–12, interests: elementary education, Khan Academy Kids, Prodigy. Creative variants in §5.1. Optimize to web-app clicks; kill anything above ~$1.50 CPC after week 2.

### F. Beta community loop
Every beta signup gets the single access email (§6). Parent Hub discovery and any share/feedback asks happen **in-product** (settings screen, Parent Hub itself) and in the digest parents explicitly opt into — not via additional marketing emails, which the current beta consent does not cover.

## 5. Ready-to-use copy (compliant)

### 5.1 Facebook/Instagram ads (3 variants)

**Ad 1 — Homework Referee**
> Long division meltdowns? There's a gentler way.
> Math Magic turns 4th- and 5th-grade math into visual adventures — with Coach Maya, a friendly AI coach that explains it again (and again) without ever losing patience.
> ✅ No ads ✅ No in-app purchases ✅ Free to try in your browser
> **CTA:** Play Free → web app URL with UTMs (see §9)

**Ad 2 — Screen-Time Skeptic**
> Screen time you don't have to feel guilty about.
> Math Magic is built for kids 8–12 (grades 3–5): no ads, no in-app purchases, and Learning Data Only — never sold, never used for ads, never shared with advertisers.
> **CTA:** See why parents trust it → mathmagicfun.info/parents/

**Ad 3 — Confidence Builder**
> "I'm bad at math" isn't a fact. It's a feeling — and it can change.
> Math Magic never says weak, failing, or behind. Kids see math, play math, and build real confidence, one small win at a time.
> **CTA:** Try it free → mathmagicfun.info/

### 5.2 Pinterest pin descriptions
- "Math games by grade: what kids learn in 3rd–5th grade and how to make practice fun. Free to play in your browser — no ads, no in-app purchases. #elementarymath #mathgames"
- "Fractions clicking ≠ fractions memorized. Visual fraction games for 3rd–5th graders with a patient AI coach. #4thgrademath #mathhelp"

### 5.3 Reddit post (founder voice, r/Parenting)
> **Title:** I built a math app for my elementary schooler because every "free" one was full of ads — sharing it here
>
> Every math app we tried was either a worksheet in disguise or an ad machine. So we built Math Magic: visual math adventures for upper-elementary kids (ages 8–12) with a friendly AI coach. It's free to play in the browser (no signup), there are no ads and no in-app purchases, and we collect only what learning needs — never sold, never used for ads, never shared with advertisers. There's also an optional Parent Hub that sends a short, growth-framed weekly recap. Would love honest feedback from other parents: https://mathmagicfun.info/

### 5.4 School / PTA newsletter blurb
> **Free math practice kids actually enjoy** — Math Magic offers visual math games for grades 3–5 (number sense, long division, fractions, decimals, word problems) with a friendly AI coach. No ads, no in-app purchases, and COPPA-committed. Families can play free in any browser at mathmagicfun.info — no signup needed to start.

### 5.5 Organic social posts (X/Instagram, rotate weekly)
1. "Kids don't just need math explained — they need to visualize it. That's the whole idea behind Math Magic. 🎨➗ mathmagicfun.info"
2. "4th grade is the long-division year. It's also the year many kids decide math 'isn't for them.' Let's change that. → mathmagicfun.info/grades/#grade-4"
3. "What's in our app: math adventures, a patient AI coach, stars to earn. What's not: ads, in-app purchases. → mathmagicfun.info/parents/"
4. "Parent Hub = your child's math week in 2 minutes. Growth-framed, never graded. → mathmagicfun.info/parents/"

## 6. Beta nurture email sequence (3 emails)

**Consent boundary (hard rule):** the beta form's consent — mirrored in `privacy.html` — covers using the email **only to notify the parent about beta access/download**. That is the only email this launch plan sends.

**Email 1 — Beta access (sent when access is granted):** "Your Math Magic beta access is ready" — download/access instructions plus minimal getting-started pointers as part of that notification. Reassure: no ads, no in-app purchases.

**Deferred (do NOT send under current consent):** a Parent Hub onboarding email and a share/feedback ask. Sending these requires, first: (1) a privacy-policy baseline update in the app repo (`sshodhan/v0-math-app-for-kids`) describing the new email use, published per the version handshake, and (2) explicit consent language added to the beta form. Until both ship, Parent Hub promotion and share asks live in-product and in the opt-in weekly digest only.

## 7. SEO work shipped in this campaign (this repo)

- **New `/grades/` pillar page** — grade-by-grade (3rd–5th) content targeting "math games for [N]th graders" and "long division practice" queries, naming the app's real adventures, with FAQPage + BreadcrumbList schema and CTAs to the web app and beta.
- **Homepage** — title/description/keywords now target grades 3–5 / upper elementary (ages 8–12); added Organization + WebSite JSON-LD.
- **Internal linking** — "Grades" added to nav, mobile menus, and footers site-wide (including privacy.html). Note: beta.html and try.html use a simplified mobile toggle that routes to the homepage rather than a full mobile menu (pre-existing pattern).
- **UTM forwarding** — `js/attribution.js` on every page forwards inbound `utm_source`/`utm_medium`/`utm_campaign` onto all web-app links (persisted for the session), and tags ordinary site-to-app launches with a stable referral (`utm_source=mathmagicfun`, `utm_medium=referral`, `utm_campaign=site-<page>`). Explicit UTMs already on a link are never overwritten.
- **sitemap.xml** — /grades/ added; lastmod refreshed.

**Post-deploy checklist:** submit sitemap in Google Search Console → request indexing for /grades/ → validate the structured data parses cleanly (Rich Results Test / Schema.org validator) and confirm the pages get indexed — do **not** expect FAQ rich-result snippets, which Google now reserves for a small set of authoritative sites → add Bing Webmaster Tools → click a site CTA and confirm the web-app URL carries the referral UTMs.

**Future SEO backlog:** per-grade child pages (/grades/3rd-grade-math-games/), blog posts on-site (not just Substack links) for topical authority, parent testimonials with Review schema (once real), backlink outreach to parenting blogs and homeschool resource lists.

## 8. 6-week launch calendar

| Week | Focus | Actions |
|---|---|---|
| 1 | Foundation | Deploy SEO changes, submit sitemap, verify UTM forwarding on CTA links, baseline metrics |
| 2 | Content | Publish 2 blog posts (long-division walkthrough, privacy explainer), first Pinterest pins |
| 3 | Community | Reddit founder post, 3 Facebook groups, send PTA blurb to 5 schools |
| 4 | Paid test | **Gate:** confirm counsel sign-off that campaign-label collection is covered by the current privacy disclosure (open item in app repo) — then launch 3 FB/IG ad variants at $10/day each; publish fraction post |
| 5 | Optimize | Kill weak ads, double down on winner; second Reddit community; more pins |
| 6 | Loop | Review KPIs, write next-6-week plan (share-ask email only if the consent expansion in §6 has shipped) |

## 9. Measurement

**The app has first-party acquisition attribution built in** — shipped **without ad SDKs or
conversion sharing**; note that confirmation that campaign-label collection is fully covered by
the current privacy disclosure remains an **open counsel follow-up** in the app repo (see
`docs/OPEN_WORKSTREAMS.md` → COPPA), and must be closed before the paid-social week begins
(`docs/ACQUISITION_ATTRIBUTION.md` in the app repo): on first load the web app captures
`utm_source`/`utm_medium`/`utm_campaign` (first-touch, stored locally; raw ad-click IDs never
persisted) and stamps them onto the Statsig funnel events `session_started` →
`onboarding_signup_prompt_shown` → `onboarding_account_created` → `first_problem_answered` →
`three_problems_completed` → `conversion`. No conversions are ever sent to ad networks.

**How to use it:**
- **Paid creatives optimized for app trials land directly on the web app** with UTMs: `https://sshodhan.vercel.app/?utm_source=...&utm_medium=paid&utm_campaign=...`. Ads that land on marketing pages (e.g. /parents/) no longer lose the source — `js/attribution.js` forwards inbound UTMs onto every app CTA for the rest of the session.
- **Ordinary site-to-app launches** are tagged `utm_source=mathmagicfun` / `utm_medium=referral` / `utm_campaign=site-<page>` by the same script, so "web-app launches from the site" is measurable in Statsig.
- **UTM convention (inbound campaigns):** `utm_source={reddit|facebook|pinterest|newsletter|substack}`, `utm_medium={organic|paid|email}`, `utm_campaign=parents-launch-2026q3`
- **Report in Statsig:** segment the funnel by `acquisitionCampaign`/`acquisitionSource`; combine with each ad platform's billing dashboard for cost-per-signup / cost-per-activated-user. **Parent Hub opt-in rate = digest opt-ins ÷ activated accounts** (`onboarding_account_created`).
- **Beta signups:** total count via Netlify Forms only — **no by-source reporting** (the form captures only email; adding source capture is a privacy-policy change that must start in the app repo).
- **Site-side:** Google Search Console (impressions/clicks for grade + long-division + fraction queries); Netlify Analytics page views.
- Weekly 15-minute review: funnel conversion by source, CPC on paid, top organic queries.
