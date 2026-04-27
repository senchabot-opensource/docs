---
title: Twitch Bot — Command Timer System
description: Learn how to create, manage, and delete automated command timers on Twitch with Senchabot.
---

# Twitch Bot — Command Timer System <Badge type="warning" text="NEW" />

## Add Command Timer

```
!atimer [command_name] [interval]
```

Returns the [custom command](/twitch-bot/custom-commands) you specified within the specified time.

The interval can be written as a plain integer (minutes) or as a duration string such as `15m` or `1h`.

::: details Example Usage

Adding the Command Timer

```
!atimer drink-water 30
```

Senchabot's Response

```
Command Timer Enabled: drink-water.
```
Example Result
```
Senchabot (08:00 AM): Don't forget to drink water!
Senchabot (08:30 AM): Don't forget to drink water!
Senchabot (09:00 AM): Don't forget to drink water!
Senchabot (09:30 AM): Don't forget to drink water!
```
:::


::: info Information

- You can list the command timers you added with the `!timers` command.
- You can create up to **3 command timers** per channel.
- Minimum interval is **5 minutes**; maximum is **24 hours (1440 minutes)**.
- A timer only fires if at least **10 chat messages** have been posted since its last run.
:::


## Delete Command Timer

```
!dtimer [command_name]
```

::: details Example Usage

Deleting the Command

```
!dtimer drink-water
```

Senchabot's Response

```
Command Timer Deleted: drink-water.
```

:::

## Access to Command Timers

```
!timers
```

::: details Example Response

```
Command Timers: drink-water, senchabot, discord.
```
:::
