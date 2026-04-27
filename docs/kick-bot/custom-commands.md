---
outline: [2, 3]
title: Kick Bot — Custom Commands
description: Create, update, delete, and alias custom commands for your Kick channel with Senchabot.
---

# Kick Bot — Custom Commands <Badge type="warning" text="NEW"/>

## Permissions

When creating a custom command (e.g., `!discord`) in the web dashboard, you can choose who can use it: "Everyone," "Subscribers (by tiers and sub month)," "VIPs," or "Mods only".

## Channel Commands

### Command Add

```
!acmd [command_name] [command_content]
```

::: details Example Usage

```
!acmd socials Follow me on Kick: https://kick.com/yourname
```

:::

### Command Update

```
!ucmd [command_name] [new_command_content]
```

::: details Example Usage

```
!ucmd socials Updated socials: https://kick.com/yourname
```

:::

### Command Delete

```
!dcmd [command_name]
```

::: details Example Usage

```
!dcmd socials
```

:::

### Alias Add

```
!acmda [command_name] [command_alias]
```

::: details Example Usage

```
!acmda socials social
```

:::

### Alias Delete

```
!dcmda [command_alias]
```

::: details Example Usage

```
!dcmda social
```

:::

## Access to Channel Commands

```
!cmds
```

::: details Example Response

```
@user, senchabot's Commands: https://senchabot.com/senchabot/commands | View bot commands: !help
```

:::

## System Command Examples

Use system commands together with your custom commands in the same channel.

```
!help
!uptime
```
