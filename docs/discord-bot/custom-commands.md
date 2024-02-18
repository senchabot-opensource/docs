---
outline: [2, 3]
---

# Custom Commands <Badge type="warning" text="NEW"/>

## Server Commands

### Command Add

```
!acmd [command_name] [command_content]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!acmd senchabot https://senchabot.app/
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		New Command Added: senchabot
	</DiscordMessage>
</DiscordMessages>
:::

::: info Information

In global commands, the [`!ucmd`](/twitch-bot/custom-commands#command-update) update command does not work. The `!lurk` command is an exception in this regard.
:::

### Command Update

```
!ucmd [command_name] [new_command_content]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!ucmd senchabot https://docs.senchabot.app
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Command Updated: senchabot
	</DiscordMessage>
</DiscordMessages>
:::

### Command Delete

```
!dcmd [command_name]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!dcmd senchabot
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Command Deleted: senchabot
	</DiscordMessage>
</DiscordMessages>
:::

### Alias Add

```
!acmda [command_name] [command_alias]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!acmda senchabot discord-bot
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		New Command Aliases Added: discord-bot
	</DiscordMessage>
</DiscordMessages>
:::

#### Add multiple aliases <Badge type="warning" text="new" />

```
!acmda [command_name] [command_alias(es) separated by space]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!acmda senchabot discord-bot twitch-bot
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		New Command Aliases Added: discord-bot, twitch-bot
	</DiscordMessage>
</DiscordMessages>
:::

### Alias Delete

```
!dcmda [command_alias]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!dcmda discord-bot
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Command Alias Deleted: discord-bot
	</DiscordMessage>
</DiscordMessages>
:::

#### Delete multiple aliases <Badge type="danger" text="planned | not active"/>

```
!dcmda [command_alias(es) separated by space]
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!dcmda discord-bot twitch-bot
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Command Alias Deleted: discord-bot, twitch-bot
	</DiscordMessage>
</DiscordMessages>
:::

## Access to Server Commands

```
!cmds
```

::: details Example Usage

<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!cmds
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Commands: senchabot, discord, twitch, streamers
	</DiscordMessage>
</DiscordMessages>
:::

