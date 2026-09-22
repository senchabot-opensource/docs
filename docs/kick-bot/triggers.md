---
title: Kick Bot — Triggers
description: "Triggers for Senchabot Kick bot: chat messages and stream events, match types, permissions and moderation audiences, response actions, variables, and cooldowns."
---

# Kick Bot — Triggers <Badge type="warning" text="UPDATED"/>

Triggers are automated rules you configure from the dashboard (**Dashboard → Kick → `<channel>` → Triggers**). They can run when a **chat message** matches your rule or when **stream events** occur (stream start, uptime milestones, category changes, or stream end).

When a trigger fires, the bot executes your chosen action — from sending a chat reply or running a custom command to updating stream category/tags, timing out a user, deleting a message, or banning an offender.

Triggers are evaluated in order per channel; the first matching trigger whose permission and cooldown checks pass will fire.

## When should it run?

When creating or editing a trigger, the **When should it run?** field selects the event source:

| When should it run? | Trigger Condition | Configuration / Match Value |
|---|---|---|
| **A message is sent in chat** | When a viewer sends a message in chat that matches your pattern | Choose a match type and enter a match value |
| **Stream reaches an uptime** | Once per live stream session when the stream reaches a specific duration | Enter uptime as `HH:MM` (e.g. `02:00`). Minimum: 1 minute, maximum: 7 days (`168:00` / 10,080 minutes) |
| **Stream category changes** | When the stream's category changes during a live broadcast | Enter the category name (e.g. `Just Chatting`) or `*` for any category |
| **Stream starts** | Once when the stream goes live | Runs automatically when the stream starts |
| **Stream ends** | Once when the stream goes offline | Runs automatically when the stream ends |

::: tip Stream event triggers
Stream event triggers (**Stream reaches an uptime**, **Stream category changes**, **Stream starts**, **Stream ends**) run automatically under broadcaster permissions and do not require user cooldowns.
:::

## Match types

For chat message triggers, the following match types are available:

| Match type | Matches when... |
|---|---|
| **Exact match** | the whole message equals your value |
| **Contains** | the message contains your value |
| **Word match** | the value appears as a whole standalone word (word-boundary) |
| **Starts with** | the message starts with your value |
| **Ends with** | the message ends with your value |
| **Command** | the trimmed message starts with `!` followed by your command name (e.g., value `hello` matches `!hello` and `!hello world`) |
| **Regex** | a regular expression pattern matches the message |

### Case sensitivity & regex

- By default, text matching (**Exact match**, **Contains**, **Word match**, **Starts with**, **Ends with**, **Command**) is **case-insensitive**. Toggle **"Case sensitive"** on to make the comparison literal.
- **Regex matching**: Regex patterns match exactly as written (case-sensitive by default). Because lowercasing regular expression patterns would corrupt character classes (such as `[A-Z]`) and escape sequences (such as `\S`), regex triggers are always evaluated verbatim and the case-sensitive checkbox is locked on. To make a regex pattern case-insensitive, prefix it with `(?i)` (e.g. `(?i)hello`).

## Permissions & target audience

The permission configuration adapts based on the response action selected:

### Who can trigger (Standard actions)

For general actions (**Reply in chat**, **Send DM**, **Run command**, **Increment counter**), permission defines who is allowed to fire the trigger:

| Permission | Who can trigger |
|---|---|
| **Everyone** | Any viewer in chat |
| **Subscriber** | Subscribers, moderators, and the broadcaster |
| **VIP** | VIPs, moderators, and the broadcaster |
| **OG** | Users with the Kick OG badge, moderators, and the broadcaster |
| **Moderator** | Moderators and the broadcaster |
| **Broadcaster** | Only the channel owner |

### Stream metadata triggers

Triggers that change stream settings (**Update Stream Category**, **Update Stream Tags**, **Update Stream Title, Tags & Category**) are restricted to trusted channel roles: **VIP**, **OG**, **Moderator**, or **Broadcaster**. Regular viewers and subscribers cannot trigger stream metadata updates.

### Apply moderation to (Moderation actions)

When configuring a moderation action (**Delete message**, **Timeout user**, **Ban user**), the field changes to **"Apply moderation to"**:

| Apply moderation to | Target Audience |
|---|---|
| **Everyone** | Moderates any viewer who triggers the rule |
| **Non-subs / below required months** | Moderates non-subscribers and subscribers below the required tenure |

When selecting **Non-subs / below required months**, you configure:

- **Minimum subscriber months**: Defaults to `1` month (configurable up to `1,200` months). Viewers who are not subscribed or whose subscription tenure is below this number of months receive the moderation action.
- VIP and OG badges do not bypass this moderation check; only channel **moderators** and the **broadcaster** are exempt.

## Response actions

| Response action | Effect |
|---|---|
| **Reply in chat** | Post the response text in chat |
| **Send DM** | Send the response text as a direct message |
| **Run command** | Execute an existing custom command by name (the response text is the command name, with or without `!`) |
| **Increment counter** | Increment the channel's trigger counter |
| **Delete message** | Delete the triggering chat message |
| **Timeout user** | Kick chat timeout on the triggering user with a configurable duration |
| **Ban user** | Permanently ban the user from the channel |
| **Update Stream Category** | Change the channel's stream category |
| **Update Stream Tags** | Change the channel's stream tags (comma-separated list) |
| **Update Stream Title, Tags & Category** | Update stream category, tags, and stream title in one action |

### Moderation options & notices

- **Configurable timeout duration**: When choosing **Timeout user**, you can specify the duration in minutes (**1 to 10,080 minutes / up to 7 days**; defaults to 1 minute).
- **Moderation warnings in chat**: If you provide response text for a **Timeout user** or **Delete message** action, the bot will post that response text in chat as a warning/notice to the user when taking action.
- Moderation actions require the bot to have moderator permissions on your Kick channel.

### Stream metadata actions

Stream metadata triggers let you update your stream details automatically from chat commands or stream events:

- **Stream Category**: Set the new category name (e.g. `Just Chatting`).
- **Stream Tags**: Set comma-separated tags (e.g. `English, Chill, Gaming`).
- **Dynamic title & default title**: When **Update Stream Title, Tags & Category** is triggered by a **Command** (e.g. `!game <title>`), any text typed after the command name is applied as the stream title. If no text is provided, the trigger falls back to your configured **Stream Default Title**.

### Actions by event source

- **A message is sent in chat**: Reply in chat, Send DM, Run command, Increment counter, Delete message, Timeout user, Ban user, Update Stream Category, Update Stream Tags, Update Stream Title, Tags & Category.
- **Stream reaches an uptime / Stream starts / Stream ends**: Reply in chat, Run command, Increment counter, Update Stream Category, Update Stream Tags, Update Stream Title, Tags & Category.
- **Stream category changes**: Reply in chat, Increment counter, Update Stream Tags, Update Stream Title, Tags & Category.

## Variables

Use these placeholders in response text — they are dynamically replaced when the trigger fires:

- `{user}` / `{user.name}` / `{user_name}` — the triggering viewer's display name
- `{channel}` — the channel name
- `{message}` — the triggering chat message content

## Cooldown

Set a per-user cooldown in seconds for chat triggers. Set to `0` to disable. The cooldown key is `(trigger, user, channel)`, allowing multiple viewers to interact with the same trigger independently without blocking one another.

Stream event triggers run once per stream occurrence/session and do not use per-user cooldowns.

## Examples

Below are practical configuration examples for every event source and response action combination.

### 1. A message is sent in chat

| Response Action | Match Type & Value | Additional Settings | Behavior / Example Response Text |
|---|---|---|---|
| **Reply in chat** | **Contains**: `discord` | — | Response text: `Join our community Discord: https://discord.gg/example` (Replies in chat when someone mentions Discord) |
| **Send DM** | **Command**: `vipinfo` | Who can trigger: **VIP** | Response text: `Hey {user}! Here is your exclusive VIP perk link: https://example.com/vip` |
| **Run command** | **Exact match**: `!socials` | — | Response text: `links` (Executes the existing `!links` command when someone types `!socials`) |
| **Increment counter** | **Command**: `death` | Who can trigger: **Moderator** | Increments the channel's death counter every time `!death` is typed |
| **Delete message** | **Regex**: `(?i)https?://\S+` | Apply moderation to: **Non-subs / below required months** (1 mo) | Response text: `@{user} Links are reserved for subscribers.` (Deletes link and posts chat warning) |
| **Timeout user** | **Word match**: `spammer` | Timeout duration: `10` min | Response text: `@{user} Inappropriate language is not tolerated. Timed out for 10 minutes.` |
| **Ban user** | **Regex**: `(?i)(buy followers|cheap viewers)` | Apply moderation to: **Everyone** | Permanently bans automated follow-bot spammers upon detection |
| **Update Stream Category** | **Command**: `chatting` | Who can trigger: **Moderator** | Stream Category: `Just Chatting` (Switches category to Just Chatting via `!chatting`) |
| **Update Stream Tags** | **Command**: `settags` | Who can trigger: **Moderator** | Stream Tags: `English, Chill, Ranked` (Updates stream tags via `!settags`) |
| **Update Stream Title, Tags & Category** | **Command**: `game` | Who can trigger: **Moderator** | Stream Category: `Minecraft`, Stream Tags: `Gaming, Survival`, Stream Default Title: `Playing Minecraft!` (Typing `!game Hardcore Day 100` dynamically sets title to "Hardcore Day 100", category to Minecraft, and tags) |

### 2. Stream reaches an uptime

| Response Action | Stream Uptime | Additional Settings | Behavior / Example Response Text |
|---|---|---|---|
| **Reply in chat** | `01:00` | — | Response text: `We've been live for 1 hour! Remember to hydrate and stretch! 💧` |
| **Run command** | `02:00` | — | Response text: `discord` (Automatically executes `!discord` custom command at the 2-hour mark) |
| **Increment counter** | `03:00` | — | Increments stream milestone counter when broadcast reaches 3 hours |
| **Update Stream Category** | `02:30` | Stream Category: `Just Chatting` | Automatically switches category to Just Chatting for a mid-stream break |
| **Update Stream Tags** | `04:00` | Stream Tags: `Late Night, Endurance, Chill` | Updates tags for late-night viewers at the 4-hour mark |
| **Update Stream Title, Tags & Category** | `02:00` | Category: `IRL`, Tags: `Cooking, Community`, Default Title: `Cooking segment starting!` | Updates stream category, tags, and title for a scheduled cooking segment |

### 3. Stream category changes

| Response Action | New Stream Category | Additional Settings | Behavior / Example Response Text |
|---|---|---|---|
| **Reply in chat** | `*` (Any category) | — | Response text: `Stream category changed to {message}! Welcome everyone tuning in! 🎉` |
| **Increment counter** | `*` (Any category) | — | Increments a "games played" counter each time category changes during the stream |
| **Update Stream Tags** | `Valorant` | Stream Tags: `FPS, Competitive, Radiant` | Automatically applies FPS tags whenever category changes to Valorant |
| **Update Stream Title, Tags & Category** | `Just Chatting` | Category: `Just Chatting`, Tags: `Chill, Q&A`, Default Title: `Just Chatting & Community Q&A` | Syncs title and tags whenever switching to Just Chatting |

### 4. Stream starts

| Response Action | Additional Settings | Behavior / Example Response Text |
|---|---|---|
| **Reply in chat** | — | Response text: `Stream is live! Welcome in, sit back and enjoy! 🚀` (Welcomes chat on stream launch) |
| **Run command** | Response text: `socials` | Executes `!socials` command in chat right as stream goes live |
| **Increment counter** | — | Increments total broadcasts counter when going live |
| **Update Stream Category** | Stream Category: `Just Chatting` | Automatically resets category to Just Chatting whenever a stream starts |
| **Update Stream Tags** | Stream Tags: `English, Starting Soon, Chill` | Sets pre-show tags automatically at stream start |
| **Update Stream Title, Tags & Category** | Category: `Just Chatting`, Tags: `Starting Soon, Chill`, Default Title: `Starting soon! / Grab a drink & say hi` | Resets stream title, category, and tags at stream launch |

### 5. Stream ends

| Response Action | Additional Settings | Behavior / Example Response Text |
|---|---|---|
| **Reply in chat** | — | Response text: `Thank you for watching today's stream! Follow our socials and see you next time! ❤️` |
| **Run command** | Response text: `socials` | Posts social links in chat when the stream concludes |
| **Increment counter** | — | Increments completed streams counter |
| **Update Stream Category** | Stream Category: `Just Chatting` | Resets stream category to Just Chatting when broadcast ends |
| **Update Stream Tags** | Stream Tags: `Offline, Community` | Updates tags to offline status |
| **Update Stream Title, Tags & Category** | Category: `Just Chatting`, Tags: `Offline, VOD`, Default Title: `Stream ended! Thanks for hanging out!` | Sets offline title, tags, and category so offline viewers see updated info |

## Caching

Trigger lists are cached per channel for **30 seconds**; dashboard edits invalidate the cache immediately so updates propagate without delay.

## Cross-platform

A trigger configured for a shared channel applies across all connected platforms (Twitch, Kick, Discord) where supported.

## Moderation

For turn-key automated moderation presets (including **ALL CAPS Detection**, **Link Blocker** with subscriber exemptions, and **Timeout Repeat Offenders**), see the dedicated [Moderation](/kick-bot/moderation) guide.

