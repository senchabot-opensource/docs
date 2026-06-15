---
title: Twitch Bot — Commands
description: Complete reference for Senchabot Twitch system commands including shoutouts, followage, clips, raid groups, and timers.
---

# Twitch Bot — Commands

## Twitch Bot System Commands <Badge type="warning" text="NEW"/>

| Command | Response |
| :-- | :-- |
| !ping | Check if the bot is responding. |
| !invite | Invite the bot to your Twitch channel (run in the bot's channel chat). |
| !leave | Remove the bot from your Twitch channel (broadcaster only). |
| !so | Give a shoutout to another Twitch streamer. |
| !followage | Follow duration command. Shows how long a viewer has followed the channel. |
| !uptime | Show how long the stream has been live. |
| !cmds | List available commands for the channel. |
| !help | Show system command list. |
| !atimer | Create a timer for an existing custom command. |
| !dtimer | Delete a command timer. |
| !timers | List active command timers. |
| !timer | Show timer command usage help. |
| !clip | Create a clip from the current stream moment. |
| !gamecategory | Set the stream category/game (broadcaster or moderator). |
| !argroup | Add a streamer to your raid group (broadcaster only). |
| !srgroup | Subscribe your channel to a raid group (broadcaster only). |
| !randomraid | Start a random raid from a group or from follows. |
| !songreq | Request a song. `!songreq Song Title - Artist` |
| !songskip | Skip the current song (moderator only). |
| !acmd | Add a custom command for the channel. `!acmd <name> <content>` |
| !ucmd | Update an existing custom command. `!ucmd <name> <content>` |
| !dcmd | Delete a custom command. `!dcmd <name>` |
| !acmda | Add an alias for a custom command. `!acmda <alias> <name>` |
| !dcmda | Delete a custom command alias. `!dcmda <alias>` |
| !setlang | Set the bot's language for this channel. `!setlang <code>` |

<!-- Custom Commands Button -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/twitch-bot/custom-commands">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom Commands</span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

## Shoutout <Badge type="warning" text="NEW"/>

```
!so [username]
```

::: details Example Usage

User Message

```
!so senchabot
```

Senchabot's Response

```
Follow @senchabot over at twitch.tv/senchabot <3
```

*Returns the above message and generates a shoutout.*
:::

## Followage <Badge type="warning" text="NEW"/>

```
!followage
```

```
!followage @user
```

::: details Example Usage

User Message

```
!followage
```

Senchabot's Response

```
@user has been following this channel for 2 years, 3 months.
```

User Message

```
!followage @ninja
```

Senchabot's Response

```
@ninja has been following this channel for 4 years, 1 month.
```

*Returns follow duration for yourself or for the mentioned user.*
:::

## Uptime <Badge type="warning" text="NEW"/>

::: details Example Usage

User Message

```
!uptime
```

Senchabot's Response

```
Stream has been live for 3 hours, 12 minutes.
```

*Shows uptime for the current channel.*
:::

## Random Raid <Badge type="warning" text="NEW"/>

```
!randomraid follows
```

::: details Example Usage

User Message

```
!randomraid follows
```

Senchabot's Response

```
Random raid target selected: twitch.tv/streamername
```

*Selects a random raid target from follows or from a group.*
:::

## Module Commands

<!-- Custom API System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/twitch-bot/custom-api-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom API System <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/twitch-bot/custom-commands">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom Commands</span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Command Timer System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/twitch-bot/command-timer-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Command Timer System <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Random Raid System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/twitch-bot/random-raid-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Random Raid System <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Song Requests - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/twitch-bot/song-requests">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Song Requests <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Triggers - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/twitch-bot/triggers">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Triggers <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Reminder System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/twitch-bot/reminder-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Reminder System <Badge type="danger" text="planned | not active" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Note Taking System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/twitch-bot/note-taking-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Note Taking System <Badge type="danger" text="planned | not active" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<br/>

::: info Cooldown System
Command usage cooldown time is 1 second per user.
:::
