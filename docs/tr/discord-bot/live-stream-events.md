# Canlı Yayın Etkinlikleri <Badge type="warning" text="NEW"/>

Senchabot, belirtilen kanallarda [canlı yayın duyurularını](/tr/discord-bot/live-stream-announcements) takip ederek sunucu etkinliği oluşturur.

## Etkinlik Kanalını Belirleme

Discord etkinliklerini oluşturmak için Senchabot'un mesajlarını takip edeceği canlı yayın duyuruları kanalı seçiniz.

```
/set-twitch event-channel channel:
```

::: details Örnek Kullanım

<!-- EXAMPLE - /set-twitch event-channel channel: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set-twitch event-channel channel: twitch-yayınları
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch event-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        `twitch-yayınları` isimli kanal Twitch yayın duyurusu etkinlikleri için listeye eklendi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Etkinlik Kanalını Silme

Senchabot'un mesajlarını takip ettiği kanallar listesinden belirtilen kanalı kaldırınız.

```
/del-twitch event-channel channel:
```

::: details Örnek Kullanım

<!-- EXAMPLE - /del-twitch event-channel channel: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /del-twitch event-channel channel: twitch-yayınları
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-twitch event-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        `twitch-yayınları` isimli yazı kanalı yayın etkinlik yazı kanalları listesinden kaldırıldı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::
