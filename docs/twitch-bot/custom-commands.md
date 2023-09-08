---
outline: [1, 3]
---

# Custom Commands <Badge type="tip" text="BETA"/>

## Channel Commands

### Command Add

```
!acmd [command_name] [command_content]
```

::: details Example Usage

```
!acmd senchabot https://senchabot.app/
```

:::

### Command Update

```
!ucmd [command_name] [new_command_content]
```

::: details Example Usage

```
!ucmd senchabot https://github.com/senchabot-opensource/monorepo
```

:::

```
!ucmd [command_alias] [new_command_content]
```

::: details Example Usage

```
!ucmd senchabot-link https://github.com/senchabot-opensource/
```

:::

### Command Delete

```
!dcmd [command_name]
```

::: details Example Usage

```
!dcmd senchabot
```

:::

### Alias Add

```
acmda [command_name] [command_alias]
```

::: details Example Usage

```
!acmda senchabot senchabot-link
```

:::

#### Add multiple aliases <Badge type="warning" text="new" />

```
!acmda [command_name] [command_alias(es) separated by space]
```

::: details Example Usage

```
!acmda senchabot senchabot-link senchabot-github senchabot-app
```

:::

### Alias Delete

```
!dcmda [command_alias]
```

::: details Example Usage

```
!dcmda senchabot-link
```

:::

#### Delete multiple aliases <Badge type="info" text="planned"/>

```
!dcmda [command_alias(es) separated by space]
```

::: details Example Usage

```
!dcmda senchabot-link senchabot-github
```

:::

## Access to Channel Commands

```
!cmds
```

::: details Example Response

```
Senchabot's Channel Commands: senchabot, senchabot-site.
```

:::

<!-- Kanal komutlarına linkle erişim
    buton konulabilir
 -->
