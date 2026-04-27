---
title: Kick Bot — Commands
description: Complete reference for Senchabot Kick system commands including shoutouts and uptime.
---

# Kick Bot — Commands

## Kick Bot System Commands <Badge type="warning" text="NEW"/>

| Command | Response |
| :-- | :-- |
| !ping | Check if the bot is responding. |
| !invite | Invite the bot to your Kick channel (run in the bot's channel chat). |
| !leave | Remove the bot from your Kick channel (broadcaster only). |
| !so | Give a shoutout to another Kick streamer. |
| !uptime | Show how long the Kick channel has been live. |
| !cmds | List available commands for the channel. |
| !help | Show system command list. |
| !gamecategory | Set the stream category/game (broadcaster or moderator). |

::: warning Unavailable on Kick
The following commands are currently unavailable in Kick chat:
- `!clip` — Clip creation is not supported on Kick.
- `!followage` — Follow duration lookup is not supported by the Kick API.
- `!atimer`, `!dtimer`, `!timers`, `!timer` — Timer chat commands are currently disabled (the timer service exists but cannot be managed via chat yet).
:::

<!-- Custom Commands Button -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/kick-bot/custom-commands">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom Commands</span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

## Shoutout <Badge type="warning" text="NEW"/>

```
!so {user.name}
```

::: details Example Usage

User Message

```
!so xqc
```

Senchabot's Response

```
Follow @xqc over at kick.com/xqc <3
```

*Returns the above message and generates a shoutout.*
:::

## Module Commands

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/kick-bot/custom-api-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom API System <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/kick-bot/command-timer-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Command Timer System <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/kick-bot/getting-started">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Getting Started</span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/kick-bot/custom-commands">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom Commands <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<br/>

::: info Cooldown System
Command usage cooldown time is 1 second per user.
:::
