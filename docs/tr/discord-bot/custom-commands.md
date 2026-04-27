---
outline: [2, 3]
title: Discord Botu — Özel Komutlar
description: Discord sunucunuz için Senchabot ile özel slash komutları oluşturun, güncelleyin, silin ve takma ad ekleyin.
---

# Discord Botu — Özel Komutlar <Badge type="warning" text="NEW"/>

## Sunucu Komutları

### Komut Ekleme

```
/acmd [name:<komut_adı>] [content:<komut_içeriği>]
```

::: details Örnek Kullanım

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

### Komut Güncelleme

```
/ucmd [name:<komut_adı>] [content:<yeni_komut_içeriği>]
```

::: details Örnek Kullanım
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

### Komut Silme

```
/dcmd [name:<komut_adı>]
```

::: details Örnek Kullanım
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
/acmda [name:<komut_adı>] [alias:<komut_takma_adı>]
```

::: details Örnek Kullanım
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

#### Çoklu takma ad ekleme <Badge type="warning" text="new" />

```
/acmda [name:<komut_adı>] [aliases:<komut_takma_adları (boşluk bırakarak)>]
```

::: details Örnek Kullanım

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

### Takma Ad Silme

```
/dcmda [alias:<komut_takma_adı>]
```

::: details Örnek Kullanım

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

#### Çoklu takma ad silme <Badge type="danger" text="planned | not active"/>

```
/dcmda [aliases:<komut_takma_adları (boşluk bırakarak)>]
```

::: details Örnek Kullanım

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

## Kanal Komutlarına Erişim

```
/cmds
```

::: details Örnek Yanıt

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
