# Command Timer System <Badge type="warning" text="NEW" />

## Command Add

```
!atimer [command_name] [interval (integer, minute)]
```
Returns the [custom command](/twitch-bot/custom-commands) you specified within the specified time.

::: details Example Usage

Adding the Command

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

You can list the command timers you added with the `!timers` command. 

You can create up to 3 command timers.
:::


## Delete Command

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
Command Timer EnableDeleted: ays.
```

:::

## Access to Timer Commands

```
!timers
```

::: details Example Response

```
Command Timers: drink-water, senchabot, discord.
```
:::
