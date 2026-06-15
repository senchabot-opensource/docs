---
title: Twitch Bot — Triggers
description: "Channel message triggers for Senchabot Twitch bot: match types, permissions, response actions (including moderation), variables, and cooldowns."
---

# Twitch Bot — Triggers <Badge type="warning" text="NEW"/>

Triggers are message-driven rules you configure from the dashboard. When a chat
message matches your rule, the bot fires the action you picked — anything from
a friendly reply to a 10-minute timeout, a message deletion, or a permanent
ban.

Triggers are managed per channel. They are evaluated in order against every
chat message; the first matching trigger whose permission and cooldown checks
pass will fire.

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

| Level        | Who fires it                                          |
|--------------|-------------------------------------------------------|
| `everyone`   | any viewer                                            |
| `subscriber` | subscribers, mods, and the broadcaster                |
| `vip`        | VIPs, mods, and the broadcaster                       |
| `moderator`  | mods and the broadcaster                              |
| `broadcaster`| only the channel owner                                |

## Response actions

| Action                | Effect                                                                 |
|-----------------------|------------------------------------------------------------------------|
| `reply`               | post the response text in chat                                         |
| `dm`                  | DM the response text to the triggering user                            |
| `run_command`         | execute a custom command by name (the response text is the command name) |
| `increment_counter`   | increment the channel's command counter (used by the `!counter` system)|
| `timeout_user`        | 10-minute Twitch timeout on the triggering user                        |
| `delete_message`      | delete the triggering message                                          |
| `ban_user`            | permanently ban the user from the channel                              |

The moderation actions (`timeout_user`, `delete_message`, `ban_user`) require
the bot to have the relevant moderator scope on your channel.

## Variables

Use these placeholders in the response text — they are substituted when the
trigger fires:

- `{user}` / `{user.name}` / `{user_name}` — the triggering viewer's display name
- `{message}` — the full triggering message

## Cooldown

Set a per-user cooldown in seconds. Set to `0` to disable. The cooldown key is
`(trigger, user, channel)`, so two viewers can fire the same trigger in
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
(`/dashboard/twitch/<channel-id>/moderation`). That page exposes two
sections:

- **Moderation Presets** — turn-key rules you can toggle on or off. When
  enabled, each preset behaves like a built-in trigger that fires
  `delete_message` on the offending message (and `ban_user` on repeat
  offenders, where supported).
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
containing a listed word is auto-handled (delete and/or timeout) by the bot.

### Trigger presets

The Trigger Presets section is a gallery of ready-made trigger rules
(spam filters, link filters, raid-protect, etc.). Enabling a preset adds it
as a regular trigger, which you can then edit, clone, or disable like any
other trigger.

::: tip Combining presets with custom triggers
Moderation presets are independent from custom triggers. If you turn off the
"Links" preset and add a trigger of your own that matches `contains` `http`,
your trigger handles the case instead.
:::
