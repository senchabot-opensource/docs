---
title: Discord Bot — Command Variables
description: Use dynamic variables in your Discord custom commands and livestream announcements with Senchabot.
---

# Discord Bot — Command Variables

Variables added to the command content.

```
/acmd [name:<command_name>] [content:<command_content {command.variable}>]
```

## Custom Command Variables

These variables work in Discord custom commands just like on Twitch and Kick.

### `{user.name}`

Returns the username of the person using the command.

Alias: `{cmd.author}`

::: details Example Usage

Command Add

```
/acmd name:greeting content:"Hello {user.name}!"
```

User Message

```
/greeting
```

Senchabot's Response

```
Hello senchabot-app!
```

:::

### `{random_number}`

Returns a random number between 18-70.

### `{date}`

Returns the current date.

### `{cmd.date}`

Returns the date the custom command was created.

### `{channel.name}`

Returns the name of the channel where the command is used.

### `{customapi.https://...}`

Fetches data from an external API. Only **one** custom API tag is processed per command response.

## Twitch Stream Variables

These variables are used in Twitch livestream announcement messages.

| Variable | Description |
| :-- | :-- |
| `{twitch.username}` | The Twitch streamer's username. |
| `{twitch.url}` | The Twitch stream URL. |
| `{stream.title}` | The current stream title. |
| `{stream.category}` | The current stream category/game. |
