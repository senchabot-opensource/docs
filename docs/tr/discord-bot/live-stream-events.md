# Canlı Yayın Etkinlikleri <Badge type="warning" text="NEW"/>

Senchabot, belirtilen kanallarda [canlı yayın duyurularını](/tr/discord-bot/live-stream-announcements) takip ederek sunucu etkinliği oluşturur.

## Etkinlik Kanalını Belirleme

Discord etkinliklerini oluşturmak için Senchabot'un mesajlarını takip edeceği canlı yayın duyuruları kanalı seçiniz.

```
/set stream-event-channel channel-name:
```

::: details Örnek Kullanım

<!-- EXAMPLE - /set stream-event-channel channel-name: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set stream-event-channel channel-name: twitch-yayınları
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set stream-event-channel
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
/delete stream-event-channel channel-name:
```

::: details Örnek Kullanım

<!-- EXAMPLE - /delete stream-event-channel channel-name: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /delete stream-event-channel channel-name: twitch-yayınları
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">delete stream-event-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        `twitch-yayınları` isimli yazı kanalı yayın etkinlik yazı kanalları listesinden kaldırıldı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::
