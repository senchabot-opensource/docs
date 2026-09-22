---
title: Twitch Bot — Moderation
description: "Automated chat moderation for Senchabot Twitch bot: ALL CAPS detection, Link Blocker with subscriber exemptions, Timeout Repeat Offenders, and Blocked Words."
---

# Twitch Bot — Moderation <Badge type="warning" text="NEW"/>

Auto-moderation protects your stream chat in real-time by automatically enforcing rules against spam and unwanted links. Configure moderation from the dashboard at **Dashboard → Twitch → `<channel>` → Moderation** (`/dashboard/twitch/<channel-id>/moderation`).

## Moderation Presets

Senchabot provides turn-key moderation presets that monitor chat and take action automatically:

### 1. ALL CAPS Detection

Catches and handles messages dominated by uppercase characters (70%+ caps).

- **Moderation Action**: Choose how to handle violations:
  - **Delete message and warn**
  - **Timeout user and warn**
  - **Warn only**
  - **Delete message only**
  - **Timeout user only**
- **Warning Message**: Customize the notice posted in chat (supports `{username}`).
- **Timeout Duration**: Set the timeout length from **1 to 10,080 minutes** (up to 7 days; defaults to 1 minute).
- **Timeout Repeat Offenders**: When enabled, the first violation uses your primary action (e.g. warn or delete), and users who reach a configurable violation threshold within a time window receive an automatic timeout:
  - **Timeout at violation**: Number of repeat violations before timeout (2 to 100).
  - **Repeat window**: Timeframe for tracking repeat offenses in minutes (1 to 1,440 minutes).
  - **Timeout duration**: Custom timeout length applied to repeat offenders.

### 2. Link Blocker

Removes URLs posted in chat by unauthorized viewers to prevent scam links and self-promotion.

- **Allow Subscribers to Send Links**: When disabled, only channel moderators and the broadcaster may post links in chat.
- **Minimum Subscriber Months**: When subscriber links are allowed, set the minimum subscriber tenure (1 to 120 months) required to post links. Viewers below this threshold will have their links blocked.
- **Moderation Action**: Choose between delete & warn, timeout & warn, warn only, delete only, or timeout only.
- **Warning Message**: Custom notice posted when a link is removed (supports `{username}`).
- **Timeout Duration**: Configurable timeout length (1 to 10,080 minutes).
- **Timeout Repeat Offenders**: Automatically time out viewers who repeatedly attempt to post unauthorized links:
  - **Timeout at violation**: Number of link attempts (2 to 100).
  - **Repeat window**: Window in minutes (1 to 1,440 minutes).
  - **Timeout duration**: Timeout length applied to repeat offenders.

## Blocked Words

The **Blocked Words** list lets you specify terms that are automatically deleted and moderated whenever they appear in chat. Add words directly from the dashboard and manage them at any time.

## Trigger Presets

Alongside moderation presets, the Moderation page includes ready-made **Trigger Presets** (link filters, caps filters, and raid protections) that you can install as custom triggers with one click.
