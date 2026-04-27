---
outline: [2, 3]
title: Discord Bot — Custom Commands
description: Create, update, delete, and alias custom slash commands for your Discord server with Senchabot.
---

# Discord Bot — Custom Commands <Badge type="warning" text="NEW"/>

## Server Commands

### Command Add

```
/acmd [name:<command_name>] [content:<command_content>]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		/acmd name:senchabot content:https://senchabot.com/
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		New Command Added: senchabot
	</DiscordMessage>
</DiscordMessages>
:::


### Command Update

```
/ucmd [name:<command_name>] [content:<new_command_content>]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		/ucmd name:senchabot content:https://senchabot.com
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Command Updated: senchabot
	</DiscordMessage>
</DiscordMessages>
:::

### Command Delete

```
/dcmd [name:<command_name>]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		/dcmd name:senchabot
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Command Deleted: senchabot
	</DiscordMessage>
</DiscordMessages>
:::

### Alias Add

```
/acmda [name:<command_name>] [alias:<command_alias>]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		/acmda name:senchabot alias:discord-bot
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		New Command Aliases Added: discord-bot
	</DiscordMessage>
</DiscordMessages>
:::

#### Add multiple aliases <Badge type="warning" text="new" />

```
/acmda [name:<command_name>] [aliases:<command_aliases separated by space>]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		/acmda name:senchabot aliases:discord-bot twitch-bot
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		New Command Aliases Added: discord-bot, twitch-bot
	</DiscordMessage>
</DiscordMessages>
:::

### Alias Delete

```
/dcmda [alias:<command_alias>]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		/dcmda alias:discord-bot
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Command Alias Deleted: discord-bot
	</DiscordMessage>
</DiscordMessages>
:::

#### Delete multiple aliases <Badge type="danger" text="planned | not active"/>

```
/dcmda [aliases:<command_aliases separated by space>]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		/dcmda aliases:discord-bot twitch-bot
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Command Alias Deleted: discord-bot, twitch-bot
	</DiscordMessage>
</DiscordMessages>
:::

## Access to Server Commands

```
/cmds
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		/cmds
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Commands: senchabot, discord, twitch, streamers
	</DiscordMessage>
</DiscordMessages>
:::

