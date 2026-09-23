---
title: Twitch Bot — Moderation
description: "Automated chat moderation for Senchabot Twitch bot: ALL CAPS detection, Link Blocker with subscriber exemptions, Timeout Repeat Offenders, and Blocked Words."
---

# Twitch Bot — Moderation <Badge type="warning" text="NEW"/>

Your chat moderates itself while you stream. Turn it on at **Dashboard → Twitch → `<channel>` → Moderation** (`/dashboard/twitch/<channel-id>/moderation`): pick a preset, choose what happens on a violation, done.

## What it watches

### ALL CAPS
Catches messages that are 70%+ uppercase. Per violation, pick one: delete + warn, timeout + warn, warn only, delete only, or timeout only. Warnings support `{username}`; timeouts run 1 minute to 7 days (10,080 min, default 1 minute).

**Repeat offenders** escalate on their own: the first strike gets your normal action, then an automatic timeout kicks in after N violations inside your time window (threshold 2–100, window 1–1,440 min, custom timeout length).

### Link Blocker
Strips URLs from viewers who shouldn't post them — no scam links, no self-promo. Optionally let subscribers share links, with a minimum tenure (1–120 months) below which links still get blocked. Same five actions, custom warning, 1-minute-to-7-day timeouts, and the same repeat-offender escalation.

## Blocked Words
One list of terms that get auto-deleted on sight. Add and remove words from the dashboard anytime.

## Bonus: Trigger Presets
The same page ships one-click **Trigger Presets** — link filters, caps filters, raid protection — installable as custom triggers.
