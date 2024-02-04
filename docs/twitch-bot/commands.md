# Commands

## Global Commands <Badge type="warning" text="NEW"/>

| Command      | Response                                                                                                                                                                                                                             |
| :----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cmds         | {channel.name}'s Channel Commands: ...                                                                                                                                                                                               |
| help         | Senchabot's Commands: cmds, acmd, dcmd, ucmd, acmda, dcmda, sozluk, ping, invite, help.                                                                                                                                               |
| senchabot    | An open-source, multi-platform bot designed for seamless integration with Twitch and Discord • [senchabot.app](https://senchabot.app) • [github.com/senchabot-opensource/monorepo](https://github.com/senchabot-opensource/monorepo) |
| kampus       | discord.gg/kampus - github.com/kamp-us                                                                                                                                                                                               |
| frontendship | discord.gg/frontendship                                                                                                                                                                                                              |
| ping         | pong! VoHiYo                                                                                                                                                                                                                         |

::: info Information

In global commands, the [`!ucmd`](/twitch-bot/custom-commands#command-update) update command does not work. The `!lurk` command is an exception in this regard.
:::

## Shoutout <Badge type="warning" text="NEW"/>

```
!so {user.name}
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

<!-- Command Timer System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/twitch-bot/command-timer-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Command Timer System <Badge type="danger" text="planned | not active" /></span> 
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
Command usage cooldown time is 2 minutes per user.
:::
