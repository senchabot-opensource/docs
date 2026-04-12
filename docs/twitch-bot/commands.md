# Commands

## Twitch Bot System Commands <Badge type="warning" text="NEW"/>

| Command      | Response                                                                                                                                                                                                                             |
| :----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| !ping | Check if the bot is responding. |
| !invite | Invite the bot to your Twitch channel. |
| !leave | Remove the bot from your Twitch channel. |
| !so | Give a shoutout to another Twitch streamer. |
| !followage | Follow duration command. Shows how long a viewer has followed the channel. |
| !uptime | Show how long the stream has been live on air. |
| !cmds | List available commands for the channel. |
| !help | Show system command list. |
| !atimer | Create a timer for an existing custom command. |
| !dtimer | Delete a command timer. |
| !timers | List active command timers. |
| !timer | Show timer command usage help. |
| !clip | Create a clip from the current stream moment. |
| !argroup | Add a streamer to your raid group. |
| !srgroup | Subscribe your channel to a raid group. |
| !randomraid | Start a random raid from a group or from follows. |

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
Command usage cooldown time is 2 seconds per user.
:::
