---
outline: [2, 3]
---

# Canlı Yayın Duyuruları <Badge type="warning" text="NEW"/>

## Yayıncı Ekleme ve Kaldırma

### Yayıncı Ekleme

```
/set streamer twitch-url-or-username:
```

<!-- EXAMPLE - /set streamer twitch-url-or-username: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set streamer twitch-url-or-username: senchabot
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        `senchabot` kullanıcı adlı Twitch yayıncısının yayın duyuruları `twitch-yayınları` isimli yazı kanalı için aktif edildi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

::: info Bilgilendirme

Twitch yayıncısı eklerken daha önce `/set stream-default-anno-channel channel-name` komutuyla varsayılan duyuru kanalı eklemiş olmalı veya isteğe bağlı kanal adını belirtmelisiniz.
:::

### Duyuru Kanalı Özelleştirme

Yayıncılara özel duyuru kanalı atayabilirsininiz.

```
/set streamer twitch-url-or-username: channel-name:

```

<!-- EXAMPLE - /set streamer twitch-url-or-username: channel-name:-->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set streamer twitch-url-or-username: senchabot channel-name: twitch-yayınları
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        `senchabot` kullanıcı adlı Twitch yayıncısının yayın duyuruları `twitch-yayınları` isimli kanal için aktif edildi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

::: info Bilgilendirme

Yayıncı eklenirken `channel-name` opsiyonu yazılmazsa yayıncının duyuru mesajları [varsayılan duyuru kanalına](#varsayılan-duyuru-kanalı) gönderilir.
:::

### Yayıncı Silme

```
/delete streamer twitch-url-or-username:
```

<!-- EXAMPLE - /delete streamer twitch-url-or-username: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /delete streamer twitch-url-or-username: senchabot
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">delete streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            `senchabot` kullanıcı adlı Twitch streamer veritabanından silindi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

## Varsayılan Duyuru Kanalı

Twitch yayıncıları eklenirken `channel-name` opsiyonu girilmediğinde yayıncıların duyuruları varsayılan duyuru kanalında yapılır.

### Kanal Ekleme

```
/set stream-anno-default-channel channel-name:
```

<!-- EXAMPLE - /set stream-anno-default-channel channel-name: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set stream-anno-default-channel channel-name: twitch-yayınları
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set stream-anno-default-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            `senchabot` isimli kanal varsayılan duyuru kanalı olarak ayarlandı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

### Kanalı Kaldırma

```
/delete stream-anno-default-channel
```

<!-- EXAMPLE - /delete stream-anno-default-channel -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /delete stream-anno-default-channel
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">delete stream-anno-default-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            Varsayılan Twitch canlı yayın duyuru kanalı ayarı kaldırıldı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

## Duyuru Mesajı

### Varsayılan Duyuru Mesajı

```
/set stream-anno-default-content anno-content:
```

<!-- EXAMPLE - /set stream-anno-default-content anno-content: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set stream-anno-default-content twitch-username-or-url:aysart announcement-content: {twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set stream-anno-default-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            Yayın duyuru mesajı içeriği ayarlandı: `{twitch.username}, {stream.category} yayınına başladı! {stream.title} -> {twitch.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

### Özelleştirilmiş Duyuru Mesajı

```
/set stream-anno-custom-content twitch-username-or-url: announcement-content:
```

<!-- EXAMPLE - /set stream-anno-custom-content twitch-username-or-url: announcement-content: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set stream-anno-custom-content twitch-username-or-url: senchabot announcement-content: {twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set stream-anno-custom-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            senchabot kullanıcı adlı Twitch yayıncısı için duyuru mesajı içeriği ayarlandı: `{twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

## Delete

```
/delete stream-anno-default-content anno-content:
```

```
/delete streamer twitch-url-or-username: channel-name:
```

```
/delete stream-anno-custom-content twitch-username-or-url: announcement-content:
```

## Önerilen Kullanım Sırası -edit title
