---
outline: [2]
---

# Canlı Yayın Duyuruları <Badge type="warning" text="NEW"/>

## Yayıncı Ekleme ve Kaldırma

Yayın duyuru mesajı atılacak yayıncıyı ekleyiniz.

```
/set streamer twitch-url-or-username:
```

<DiscordMessages>
    <DiscordMessage :bot="true" profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :highlight="true" profile="user" :command="true">set streamer twitch-url-or-username:senchabot
</DiscordInteraction>
        </template>
        <DiscordMarkdown>
`senchabot` kullanıcı adlı Twitch yayıncısının yayın duyuruları twitch-yayınları isimli yazı kanalı için aktif edildi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

Yayıncılara özel duyuru kanalı atayabilirsininiz.

```
/set streamer twitch-url-or-username: channel-name:

```

<DiscordMessages>
    <DiscordMessage :bot="true" profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :highlight="true" profile="user" :command="true">set streamer twitch-url-or-username:senchabot
</DiscordInteraction>
        </template>
        <DiscordMarkdown>
`senchabot` kullanıcı adlı Twitch yayıncısının yayın duyuruları twitch-yayınları isimli yazı kanalı için aktif edildi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

### Yayıncı Silme

```

/delete streamer twitch-url-or-username:

```

<DiscordMessages>
    <DiscordMessage :bot="true" profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :highlight="true" profile="user" :command="true">delete streamer twitch-url-or-username:senchabot
</DiscordInteraction>
        </template>
        <DiscordMarkdown>
`senchabot` kullanıcı adlı Twitch streamer veritabanından silindi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

## Varsayılan Duyuru Kanalı

Yayın duyuru mesajlarının atılacağı varsayılan kanalı ayarlayınız.

```
/set stream-anno-default-channel channel-name:
```

<DiscordMessages>
    <DiscordMessage :bot="true" profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :highlight="true" profile="user" :command="true">set stream-anno-default-channel channel-name:twitch-yayınları
</DiscordInteraction>
        </template>
        <DiscordMarkdown>
Varsayılan Twitch canlı yayın duyuru kanalı ayarı kaldırıldı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

::: info Bilgilendirme

Yayıncı eklenirken `channel-name` opsiyonu yazılmazsa yayıncının duyuru mesajları varsayılan duyuru kanalına gönderilir.
:::

::: warning Uyarı

Twitch yayıncısı eklerken daha önce `/set stream-default-anno-channel channel-name` komutuyla varsayılan duyuru kanalı eklemiş olmalı veya isteğe bağlı kanal adını belirtmelisiniz.
:::

## Varsayılan Duyuru Mesajı

Varsayılan yayın duyuru mesajı ayarla.

```
/set stream-anno-default-content anno-content:
```

<DiscordMessages>
    <DiscordMessage :bot="true" profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :highlight="true" profile="user" :command="true">set stream-anno-default-content anno-content:
</DiscordInteraction>
        </template>
        <DiscordMarkdown>
Varsayılan Twitch canlı yayın duyuru kanalı ayarı kaldırıldı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

## Özelleştirilmiş Duyuru Mesajı

```

/set stream-anno-custom-content twitch-username-or-url: announcement-content:

```

## Delete

### del default channel

```

/delete stream-anno-default-channel channel-name:

```

###

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

```

```
