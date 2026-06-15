---
title: Discord Bot — Triggers
description: "Channel message triggers for Senchabot Discord bot: match types, permissions, response actions, variables, and cooldowns."
---

# Discord Bot — Triggers <Badge type="warning" text="NEW"/>

Triggers are message-driven rules you configure from the dashboard. When a
message in a tracked channel matches your rule, the bot fires the action you
picked — anything from a friendly reply to deleting the triggering message or
running another custom command.

Triggers are managed per server (Discord guild). They are evaluated in order
against every message in channels the bot can see; the first matching trigger
whose permission and cooldown checks pass will fire.

## Match types

| Type         | Matches when...                                                    |
|--------------|--------------------------------------------------------------------|
| `exact`      | the whole message equals your value                                |
| `contains`   | the message contains your value                                    |
| `word`       | the value appears as a whole word (word-boundary)                  |
| `starts_with`| the message starts with your value                                 |
| `ends_with`  | the message ends with your value                                   |
| `regex`      | a Go `regexp.MatchString` succeeds against your value              |
| `command`    | the trimmed message starts with `!` followed by your value         |

By default matching is **case-insensitive**. Toggle "case sensitive" on to
make the comparison literal (the `regex` type is always case-sensitive and
respects whatever flags you embed in the pattern).

## Permissions

| Level        | Who fires it                                                |
|--------------|-------------------------------------------------------------|
| `everyone`   | any guild member                                            |
| `subscriber` | server boosters, mods, admins, and the guild owner          |
| `vip`        | users with the VIP role, mods, admins, and the guild owner  |
| `moderator`  | mods, admins, and the guild owner                           |
| `broadcaster`| only the guild owner (channel creator)                      |

## Response actions

| Action                | Effect                                                                 |
|-----------------------|------------------------------------------------------------------------|
| `reply`               | post the response text in the same channel                             |
| `dm`                  | DM the response text to the triggering user                            |
| `run_command`         | execute a custom command by name (the response text is the command name, with the `!` prefix stripped if present) |
| `delete_message`      | delete the triggering message                                          |

::: warning Moderation actions on Discord
The `increment_counter`, `timeout_user`, and `ban_user` actions from the
shared trigger engine are reserved on Discord. They are accepted by the
configuration UI but currently do not perform any moderation on the server.
If you need to moderate a user, use Discord's native moderation tools (right
click → Timeout / Kick / Ban) — the bot will not do it for you from a
trigger.
:::

The `delete_message` action requires the bot to have the **Manage Messages**
permission on the channel.

## Variables

Use these placeholders in the response text — they are substituted when the
trigger fires:

- `{user}` / `{user.name}` / `{user_name}` — the triggering member's display name
- `{message}` — the full triggering message

## Cooldown

Set a per-user cooldown in seconds. Set to `0` to disable. The cooldown key is
`(trigger, user, channel)`, so two members can fire the same trigger in
parallel without blocking each other beyond their own cooldown.

## Caching

Trigger lists are cached per channel for **30 seconds**; dashboard edits
invalidate the cache immediately, so saves propagate to the bot without
waiting for the TTL.

## Cross-platform

A trigger configured for a shared channel applies to every platform the
channel is registered for. The same trigger can therefore match chat messages
on Twitch, Kick, and Discord from one dashboard entry.

## Moderation

Auto-moderation lives next to Triggers on the dashboard at
**Dashboard → `<platform>` → `<channel>` → Moderation**
(`/dashboard/discord/<server-id>/moderation`). That page exposes two
sections:

- **Moderation Presets** — turn-key rules you can toggle on or off. When
  enabled, each preset behaves like a built-in trigger that fires
  `delete_message` on the offending message.
- **Trigger Presets** — pre-built trigger rules you can enable as-is or use
  as a starting point for custom rules.

### Moderation presets

| Preset                  | What it catches                                                 |
|-------------------------|-----------------------------------------------------------------|
| All caps                | messages that are mostly uppercase                              |
| Links                   | URLs posted in chat                                             |
| Emote spam              | messages dominated by repeated emotes                           |
| Duplicate messages      | the same message posted N times within the configured window    |

For the **Duplicate messages** preset you can tune the threshold (how many
repeats count, 2–10) and the window (how many seconds to look back, 5–120).

### Blocked words

The Moderation page also exposes a **Blocked words** list — any message
containing a listed word is auto-deleted by the bot.

### Trigger presets

The Trigger Presets section is a gallery of ready-made trigger rules
(spam filters, link filters, raid-protect, etc.). Enabling a preset adds it
as a regular trigger, which you can then edit, clone, or disable like any
other trigger.

::: info Discord action differences
The Discord executor only wires up `delete_message` from the shared trigger
actions. The moderation presets therefore delete the offending message
instead of timing out or banning the user. The `delete_message` action
requires the bot to have **Manage Messages** permission on the channel.
:::

::: tip Combining presets with custom triggers
Moderation presets are independent from custom triggers. If you turn off the
"Links" preset and add a trigger of your own that matches `contains` `http`,
your trigger handles the case instead.
:::
