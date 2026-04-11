# Commands

## Kick Bot System Commands <Badge type="warning" text="NEW"/>

| Command | Response |
| :-- | :-- |
| !ping | Check if the bot is responding. |
| !invite | Invite the bot to your Kick channel. |
| !leave | Remove the bot from your Kick channel. |
| !so | Give a shoutout to another Kick streamer. |
| !followage | Follow duration command. Shows how long a viewer has followed the channel. |
| !uptime | Show how long a Kick channel has been live on air. |
| !cmds | List available commands for the channel. |
| !help | Show system command list. |
| !atimer | Create a timer for an existing custom command. |
| !dtimer | Delete a command timer. |
| !timers | List active command timers. |
| !timer | Show timer command usage help. |



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
@user has been following this channel for 1 year, 2 months.
```

User Message

```
!followage @xqc
```

Senchabot's Response

```
@xqc has been following this channel for 3 years, 4 months.
```

*Returns follow duration for yourself or for the mentioned user.*
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
Command usage cooldown time is 2 seconds per user.
:::
