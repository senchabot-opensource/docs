---
title: Discord Bot — Commands
description: Complete reference for Senchabot Discord slash commands including Twitch and Kick live stream announcement management, purge, and server settings.
---

# Discord Bot — Commands

## System Commands <Badge type="warning" text="NEW"/>

| Command | Response |
| :-- | :-- |
| /set-twitch | Add Twitch livestream announcement for a channel. |
| /set-kick | Add Kick livestream announcement for a channel. |
| /del-twitch | Remove Twitch livestream announcement. |
| /del-kick | Remove Kick livestream announcement. |
| /streamer-list | List tracked Twitch and Kick streamers. |
| /purge | Bulk delete channel messages or bot-created events. |
| /invite | Get the bot invite link. |
| /do-not-track-my-messages | Opt out of message tracking. |
| /track-my-messages | Opt in to message tracking. |
| /cmds | List available commands for the server. |
| /help | Show system command list. |
| /acmd | Add a custom command for the server. |
| /ucmd | Update an existing custom command. |
| /dcmd | Delete a custom command. |
| /set-lang | Set the bot's language for this server. |

::: info Information

Custom slash command management commands are documented in [`Custom Commands`](/discord-bot/custom-commands).
:::

<!-- Custom Commands Button -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="/discord-bot/custom-commands">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom Commands</span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

## Purge <Badge type="warning" text="NEW"/>

```
/purge last-100-channel-messages message-content:giveaway
```

::: details Example Usage

<DiscordMessages>
    <DiscordMessage profile="user">
        /purge last-100-channel-messages message-content:giveaway
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        Purge completed. Matching messages were removed.
    </DiscordMessage>
</DiscordMessages>

*Removes matching recent messages or bot-created events.*
:::

## Streamer List <Badge type="warning" text="NEW"/>

```
/streamer-list
```

::: details Example Usage

<DiscordMessages>
    <DiscordMessage profile="user">
        /streamer-list
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        **Twitch streamers:** shroud
        **Kick streamers:** xqc
    </DiscordMessage>
</DiscordMessages>

*Returns currently tracked livestream streamers.*
:::

## Module Commands

<!-- Live Stream Announcements - CONTENT REFERANCE SMALL -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="/discord-bot/live-stream-announcements">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Live Stream Announcements <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Live Stream Events - CONTENT REFERANCE SMALL -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="/discord-bot/live-stream-events">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Live Stream Events <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Custom API System - CONTENT REFERANCE SMALL -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="/discord-bot/custom-api-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom API System <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Triggers - CONTENT REFERANCE SMALL -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="/discord-bot/triggers">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Triggers <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

## Planned {#planned}

The following commands are planned but not yet active:

| Command | Description |
| :-- | :-- |
| /set-youtube | Add YouTube livestream announcement for a channel. |
| /del-youtube | Remove YouTube livestream announcement. |
| /youtube-list | List tracked YouTube channels. |

<!-- Reminder System - CONTENT REFERANCE SMALL -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Reminder System <Badge type="danger" text="planned | not active" /></span> 
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<br/>

::: info Cooldown System
Command usage cooldown time is 1 second per user.
:::
