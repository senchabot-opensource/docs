---
title: Kick Bot — Command Variables
description: Use dynamic variables like user names, dates, random numbers, and channel names in your Kick custom commands.
---

# Kick Bot — Command Variables

Variables added to the command content.

```
!acmd [command_name] [command_content {command.variable}]
```

## `{user.name}`

Returns the username of the person using the command.

Alias: `{cmd.author}`

::: details Example Usage

Command Add

```
!acmd hello Hello {user.name}, welcome to the stream!
```

User Message and Response

```
senchabot-app: !hello

Senchabot: Hello senchabot-app, welcome to the stream!
```

:::

## `{random_number}`

Returns a random number between 18-70.

::: details Example Usage

Command Add

```
!acmd age I think... You're {random.number} years old!
```

User Message and Response

```
senchabot-app: !age

Senchabot: I think... You're 29 years old!
```

:::

## `{date}`

Returns the date of the day it is used.

::: details Example Usage

Command Add

```
!acmd today Today is {date}
```

User Message and Response

```
senchabot-app: !today

Senchabot: Today is 09/09/2023
```

:::

## `{cmd.date}`

Returns the date the custom command was created.

::: details Example Usage

Command Add

```
!acmd created This command was created on {cmd.date}
```

User Message and Response

```
senchabot-app: !created

Senchabot: This command was created on 25/12/2023
```

:::

## `{channel.name}`

Returns the name of the channel that the command is used.

::: details Example Usage

Command Add

```
!acmd kick-bot {channel.name} is using Senchabot!
```

User Message and Response

```
senchabot-app: !kick-bot

Senchabot: senchabot-app is using Senchabot!
```

:::
