---
outline: [2, 3]
---

# Özel Komutlar <Badge type="warning" text="NEW"/>

## Sunucu Komutları

### Komut Ekleme

```
!acmd [komut_adı] [komut_içeriği]
```

::: details Örnek Kullanım

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

### Komut Güncelleme

```
!ucmd [komut_adı] [yeni_komut_içeriği]
```

::: details Örnek Kullanım
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

### Komut Silme

```
!dcmd [komut_adı]
```

::: details Örnek Kullanım
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
!acmda [komut_adı] [komut_takma_adı]
```

::: details Örnek Kullanım
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

#### Çoklu takma ad ekleme <Badge type="warning" text="new" />

```
!acmda [komut_adı] [komut_takma_adları (boşluk bırakarak)]
```

::: details Örnek Kullanım

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

### Takma Ad Silme

```
!dcmda [komut_takma_adı]
```

::: details Örnek Kullanım

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

#### Çoklu takma ad silme <Badge type="danger" text="planned | not active"/>

```
!dcmda [komut_takma_adları (boşluk bırakarak)]
```

::: details Örnek Kullanım

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

## Kanal Komutlarına Erişim

```
!cmds
```

::: details Örnek Yanıt

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
