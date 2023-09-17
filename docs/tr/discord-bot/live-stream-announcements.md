---
outline: [2, 4]
---

# Canlı Yayın Duyuruları <Badge type="warning" text="NEW"/>

## Yayın ve Yayıncı Özel Ayarları

### Yayıncı Ekleme

```
/set-twitch streamer url-or-username:
```

::: details Örnek Kullanım

<!-- EXAMPLE - /set-twitch streamer url-or-username: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set-twitch streamer url-or-username: senchabot
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        `senchabot` kullanıcı adlı Twitch yayıncısının yayın duyuruları `twitch-yayınları` isimli yazı kanalı için aktif edildi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

::: info Bilgilendirme

Twitch yayıncısı eklerken daha önce `/set-twitch announcement default-content` komutuyla varsayılan duyuru kanalı eklemiş olmalı veya isteğe bağlı kanal adını belirtmelisiniz.
:::

### Duyuru Kanalı Özelleştirme

Yayıncılara özel duyuru kanalı atayabilirsininiz.

```
/set-twitch streamer url-or-username: channel:

```

::: details Örnek Kullanım

<!-- EXAMPLE - /set-twitch streamer url-or-username: channel:-->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set-twitch streamer url-or-username: senchabot channel: twitch-yayınları
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        `senchabot` kullanıcı adlı Twitch yayıncısının yayın duyuruları `twitch-yayınları` isimli kanal için aktif edildi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

::: info Bilgilendirme

Yayıncı eklenirken `channel` opsiyonu yazılmazsa yayıncının duyuru mesajları [varsayılan duyuru kanalına](#varsayılan-duyuru-kanalı) gönderilir.
:::

### Özelleştirilmiş Duyuru Mesajı

<br/>

#### Duyuru Mesajı Ekleme

```
/set-twitch announcement custom-content username-or-url: content:
```

::: details Örnek Kullanım

<!-- EXAMPLE - /set-twitch announcement custom-content username-or-url: content: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set-twitch announcement custom-content username-or-url: senchabot content: {twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch announcement custom-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            senchabot kullanıcı adlı Twitch yayıncısı için duyuru mesajı içeriği ayarlandı: `{twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

#### Duyuru Mesajını Kaldırma

```
/del-twitch announcement custom-content username-or-url:
```

::: details Örnek Kullanım

<!-- EXAMPLE - /del-twitch announcement custom-content username-or-url: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /del-twitch announcement custom-content username-or-url: senchabot
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-twitch announcement custom-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            senchabot kullanıcı adlı Twitch yayıncısı için özelleştirilmiş duyuru mesajı içeriği kaldırıldı. Varsayılan duyuru mesajı içeriği: `{twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Yayıncı Silme

```
/del-twitch streamer username-or-url:
```

::: details Örnek Kullanım

<!-- EXAMPLE - /del-twitch streamer username-or-url: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /del-twitch streamer username-or-url: senchabot
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-twitch streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            `senchabot` kullanıcı adlı Twitch streamer veritabanından silindi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Varsayılan Duyuru Kanalı

Twitch yayıncıları eklenirken `channel` opsiyonu girilmediğinde yayıncıların duyuruları varsayılan duyuru kanalında yapılır.

### Kanal Ekleme

```
/set-twitch announcement default-channel channel:
```

::: details Örnek Kullanım

<!-- EXAMPLE - /set-twitch announcement default-channel channel: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set-twitch announcement default-channel channel: twitch-yayınları
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch announcement default-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            `twitch-yayınları` isimli kanal varsayılan duyuru kanalı olarak ayarlandı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Kanalı Kaldırma

```
/del-twitch announcement default-channel
```

::: details Örnek Kullanım

<!-- EXAMPLE - /del-twitch announcement default-channel -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /del-twitch announcement default-channe
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-twitch announcement default-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            Varsayılan Twitch canlı yayın duyuru kanalı ayarı kaldırıldı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Varsayılan Duyuru Mesajı

### Duyuru Mesajı Ekleme

```
/set-twitch announcement default-content content:
```

::: details Örnek Kullanım

<!-- EXAMPLE - /set-twitch announcement default-content content: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set-twitch announcement default-content content: {twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch announcement default-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            Yayın duyuru mesajı içeriği ayarlandı: `{twitch.username}, {stream.category} yayınına başladı! {stream.title} -> {twitch.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Duyuru Mesajını Kaldırma

```
/del-twitch announcement default-content
```

::: details Örnek Kullanım

<!-- EXAMPLE - /del-twitch announcement default-content -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /del-twitch announcement default-content
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-twitch announcement default-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            Varsayılan yayın duyuru mesajı içeriği kaldırıldı. Özelleştirilmiş duyuru mesajı olmayan yayıncıların duyuruları belirtilen formatta gönderilecektir. `{twitch.username}, {stream.category} yayınına başladı! {stream.title}: {twitch.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::
