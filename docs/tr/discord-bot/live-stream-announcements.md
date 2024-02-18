---
outline: [2, 4]
---

# Canlı Yayın Duyuruları <Badge type="warning" text="NEW"/>

## Yayın ve Yayıncı Özel Ayarları

### Yayıncı Ekleme
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="senchabot"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        `senchabot` kullanıcı adlı Twitch yayıncısının yayın duyuruları `twitch-streams` isimli yazı kanalı için aktif edildi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

::: info Bilgilendirme

Twitch yayıncısı eklerken daha önce `/set-twitch announcement default-channel` komutuyla varsayılan duyuru kanalı eklemiş olmalı veya isteğe bağlı kanal adını belirtmelisiniz.
:::

### Duyuru Kanalı Özelleştirme

Yayıncılara özel duyuru kanalı atayabilirsininiz.
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    optionPillKey2="channel"
    optionPillValue2="                "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="senchabot"
    optionPillKey2="channel"
    optionPillValue2="twitch-streams"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
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
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement custom-content"
    optionPillKey="twitch-username-or-url"
    optionPillValue="            "
    optionPillKey2="announcement-content"
    optionPillValue2="            "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement custom-content"
    optionPillKey="twitch-username-or-url"
    optionPillValue="senchabot"
    optionPillKey2="announcement-content"
    optionPillValue2="{twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
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

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement custom-content"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement custom-content"
    optionPillKey="twitch-username-or-url"
    optionPillValue="senchabot"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-twitch announcement custom-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            senchabot kullanıcı adlı Twitch yayıncısına özgü yayın duyuru mesajı silindi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Yayıncı Silme

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="senchabot"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch streamer
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
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement default-channel"
    optionPillKey="channel"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement default-channel"
    optionPillKey="channel"
    optionPillValue="twitch-streams"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
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
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement default-channel"
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement default-channel"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
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

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement default-content"
    optionPillKey="announcement-content"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement default-content"
    optionPillKey="announcement-content"
    optionPillValue="{twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
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

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement default-content"
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement default-content"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
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
