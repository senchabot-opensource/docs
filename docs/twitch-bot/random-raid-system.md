---
title: Twitch Bot — Random Raid System
description: Learn how to create raid groups and start random raids to live streamers on Twitch with Senchabot.
---

# Twitch Bot — Random Raid System <Badge type="warning" text="NEW" />

The Random Raid System lets you start a raid to a randomly selected live streamer from a raid group or from your followed channels.

## Add Streamer to Raid Group

```
!argroup [streamer_name]
```

Adds a Twitch streamer to your channel's raid group. Only the broadcaster can use this command.

::: details Example Usage

User Message

```
!argroup senchabot
```

Senchabot's Response

```
Added senchabot to your group!
```

*The streamer is added to your channel's raid group.*
:::

## Subscribe to a Raid Group

```
!srgroup [group_owner_name]
```

Subscribes your channel to another broadcaster's raid group. Only the broadcaster can use this command.

::: details Example Usage

User Message

```
!srgroup senchabot
```

Senchabot's Response

```
Successfully subscribed to group senchabot!
```

*Your channel is now subscribed to senchabot's raid group.*
:::

## Start a Random Raid

```
!randomraid [group_name|follows]
```

Starts a raid to a random live streamer from the specified source.

- If no argument is given, it uses your channel's own raid group.
- Use `follows` to raid a random live channel from your followed channels.
- Use a group name to raid from a specific group's members.

::: details Example Usage

Random raid from your own group

```
!randomraid
```

Random raid from your followed channels

```
!randomraid follows
```

Random raid from a specific group

```
!randomraid senchabot
```

Senchabot's Response

```
Random raid to streamername from group initiated!
```

*Picks a random live streamer from the selected source and starts a Twitch raid.*
:::

::: info Information

- The broadcaster's own channel is excluded from the raid targets.
- Only live streamers are considered as raid targets.
- If no one in the group or follows is currently live, the bot will notify you.
- The bot requires moderator permissions in your channel to start a raid.
:::
