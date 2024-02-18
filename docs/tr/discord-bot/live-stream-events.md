# Canlı Yayın Etkinlikleri <Badge type="warning" text="NEW"/>

Senchabot, belirtilen kanallarda [canlı yayın duyurularını](/tr/discord-bot/live-stream-announcements) takip ederek sunucu etkinliği oluşturur.

## Etkinlik Kanalını Belirleme

Discord etkinliklerini oluşturmak için Senchabot'un mesajlarını takip edeceği canlı yayın duyuruları kanalı seçiniz.

<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch event-channel"
    optionPillKey="channel"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch event-channel"
    optionPillKey="channel"
    optionPillValue="twitch-streams"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
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

<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch event-channel"
    optionPillKey="channel"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch event-channel"
    optionPillKey="channel"
    optionPillValue="twitch-streams"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
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
