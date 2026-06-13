# Pre-PR Review — Math Magic Marketing Site

This repo publishes mathmagicfun.info (Netlify deploys `main`). It is the **publication**
side of a two-repo system. The **system of record** for all privacy/data-practice facts is
`sshodhan/v0-math-app-for-kids` → `docs/PRIVACY_POLICY_BASELINE.md` (private repo). That
repo runs an automated drift check (`privacy-policy-drift.yml`) that fetches `privacy.html`
from this repo's `main` weekly and on app PRs, and fails if version stamps diverge.

## 1. Rules for `privacy.html`

- Never edit substantively on your own initiative. Substantive changes happen ONLY when an
  app-repo PR bumps the Policy version in its baseline doc and specifies the wording change.
- Every substantive change must, in ONE commit:
  1. Apply the wording change exactly as specified by the app-repo PR.
  2. Update the `<!-- policy-version: YYYY-MM-DD.N -->` comment to the new version.
  3. Update the visible "Last Updated" date to match.
- NEVER remove, rename, or reformat the `policy-version` comment — the app repo's drift
  check greps for the literal pattern `policy-version: <value>`.
- Cosmetic changes (CSS, nav, footer) are fine anytime and must NOT touch the version stamp
  or the policy text.

## 2. Rules for marketing claims (`index.html`, `beta.html`, `try.html`, new pages)

- Every privacy/data claim must be backed by a statement in `privacy.html`. If the policy
  doesn't say it, the page can't claim it.
- Banned absolute claims (known-false, previously removed — do not reintroduce):
  - "No Data Collection" / "We don't collect personal information"
  - "data stays on this device" / "stays local"
  - unqualified "never shared"
- Approved claim vocabulary: "Learning Data Only"; "We collect only what learning needs";
  "Never sold, never used for ads, never shared with advertisers"; "No ads"; "No in-app
  purchases"; "COPPA-committed".
- Adding a NEW claim requires checking it against the policy first; if the policy must
  change to support it, that change starts in the app repo (see §1).

## 3. Pre-push verification checklist (run all)

- [ ] `grep -rin "don't collect\|no data collection\|stays local\|stays on this device" *.html`
      returns nothing.
- [ ] `grep -c "policy-version:" privacy.html` returns exactly 1.
- [ ] If `privacy.html` changed: validate HTML structure (e.g., Python `html.parser` —
      no unclosed tags), and confirm the visible "Last Updated" date matches the version
      stamp's date.
- [ ] If `privacy.html` changed: confirm all seven third-party privacy-policy links are
      present and well-formed (Supabase, OpenAI, Anthropic, Resend, Statsig, Vercel,
      Netlify) — unless the app-repo change explicitly added/removed a provider.
- [ ] The beta signup form still posts via Netlify Forms (`data-netlify="true"`) — any new
      form or destination for emails is a privacy-policy change and must start in the app
      repo.

## 4. After pushing to main

- Netlify auto-deploys. Verify https://mathmagicfun.info/privacy.html renders the change.
- If this was a version bump, tell the app-repo side it can re-run its
  "Privacy Policy Drift Check" workflow (or merge the waiting PR) — it should go green.
- Current synced version: `2026-06-12.1` (update this line whenever the stamp changes).
