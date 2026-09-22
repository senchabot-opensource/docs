---
title: Discord Bot — Triggers
description: "Channel message triggers for Senchabot Discord bot: match types, permissions, response actions, variables, and cooldowns."
---

# Discord Bot — Triggers <Badge type="warning" text="UPDATED"/>

Triggers are message-driven rules you configure from the dashboard (**Dashboard → Discord → `<server>` → Triggers**). When a message in a tracked channel matches your rule, the bot fires the action you picked — such as sending a reply in chat, direct messaging the member, running a custom command, or deleting the triggering message.

Triggers are managed per server (Discord guild). They are evaluated in order against every message in channels the bot can see; the first matching trigger whose permission and cooldown checks pass will fire.

## When should it run?

On Discord, triggers listen for chat messages:

| When should it run? | Trigger Condition | Configuration / Match Value |
|---|---|---|
| **A message is sent in chat** | When a member sends a message in a visible channel that matches your pattern | Choose a match type and enter a match value |

::: info Discord event sources
Stream events (such as stream uptime, stream category changes, and stream start/end) are designed for streaming platforms (Twitch & Kick) and do not apply to Discord servers.
:::

## Match types

| Match type | Matches when... |
|---|---|
| **Exact match** | the whole message equals your value |
| **Contains** | the message contains your value |
| **Word match** | the value appears as a whole standalone word (word-boundary) |
| **Starts with** | the message starts with your value |
| **Ends with** | the message ends with your value |
| **Command** | the trimmed message starts with `!` followed by your command name (e.g., value `rules` matches `!rules` and `!rules general`) |
| **Regex** | a regular expression pattern matches the message |

### Case sensitivity & regex

- By default, text matching (**Exact match**, **Contains**, **Word match**, **Starts with**, **Ends with**, **Command**) is **case-insensitive**. Toggle **"Case sensitive"** on to make the comparison literal.
- **Regex matching**: Regex patterns match exactly as written (case-sensitive by default). Because lowercasing regular expression patterns would corrupt character classes (such as `[A-Z]`) and escape sequences (such as `\S`), regex triggers are always evaluated verbatim and the case-sensitive checkbox is locked on. To make a regex pattern case-insensitive, prefix it with `(?i)` (e.g. `(?i)hello`).

## Permissions

| Permission | Who fires it |
|---|---|
| **Everyone** | Any guild member |
| **Subscriber** | Server boosters, mods, admins, and the guild owner |
| **VIP** | Users with the VIP role, mods, admins, and the guild owner |
| **Moderator** | Mods, admins, and the guild owner |
| **Broadcaster** | Only the guild owner (server creator) |

## Response actions

| Response action | Effect |
|---|---|
| **Reply in chat** | Post the response text in the same channel |
| **Send DM** | DM the response text to the triggering user |
| **Run command** | Execute a custom command by name (the response text is the command name, with the `!` prefix stripped if present) |
| **Delete message** | Delete the triggering message (requires **Manage Messages** permission) |

::: warning Moderation & Stream actions on Discord
The **Increment counter**, **Timeout user**, **Ban user**, and stream metadata actions (**Update Stream Category**, **Update Stream Tags**, **Update Stream Title, Tags & Category**) from the shared trigger engine are designed for streaming platforms or reserved. On Discord, to moderate a member beyond message deletion, use Discord's native moderation tools or bot moderation commands.
:::

The **Delete message** action requires the bot to have the **Manage Messages** permission on the channel.

## Variables

Use these placeholders in the response text — they are substituted when the trigger fires:

- `{user}` / `{user.name}` / `{user_name}` — the triggering member's display name
- `{channel}` — the channel name where the message was sent
- `{message}` — the full triggering message content

## Cooldown

Set a per-user cooldown in seconds. Set to `0` to disable. The cooldown key is `(trigger, user, channel)`, so two members can fire the same trigger in parallel without blocking each other beyond their own cooldown.

## Examples

Below are practical configuration examples for the supported response actions on Discord:

### A message is sent in chat

| Response Action | Match Type & Value | Additional Settings | Behavior / Example Response Text |
|---|---|---|---|
| **Reply in chat** | **Contains**: `rules` | — | Response text: `Please check out our server rules in #rules-and-info!` (Directs members asking about rules) |
| **Send DM** | **Command**: `onboard` | Who can trigger: **Everyone** | Response text: `Welcome to the server {user}! Here is your onboarding checklist: https://discord.gg/guide` (Sends private guide) |
| **Run command** | **Exact match**: `!help` | — | Response text: `guide` (Executes the `!guide` command via `!trigger.run: guide`) |
| **Delete message** | **Regex**: `(?i)discord\.gg\/(?!myvanity)` | — | Response text: `@{user} Unauthorized Discord invite links are not permitted.` (Deletes invite link and posts warning) |

## Caching

Trigger lists are cached per channel for **30 seconds**; dashboard edits invalidate the cache immediately, so saves propagate to the bot without waiting for the TTL.

## Cross-platform

A trigger configured for a shared channel applies to every platform the channel is registered for. The same trigger can therefore match chat messages on Twitch, Kick, and Discord from one dashboard entry.

