---
outline: [2, 4]
---

# Live Stream Announcements <Badge type="warning" text="NEW"/>

## Live Stream and Broadcaster Custom Settings

### Adding a Streamer
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
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

::: info Information

When adding a Twitch streamer, you must have previously added a default announcement channel with the `/set-twitch announcement default-channel`, or you can specify the channel name optionally.
:::

### Customizing the Announcement Channel

You can assign a custom announcement channel to streamers.
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    optionPillKey2="channel"
    optionPillValue2="                "
    >
</ApplicationCommands>

::: details Example Usage
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
        Live stream announcements for the Twitch user `senchabot` have been activated for the channel `twitch-streams`.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

::: info Information

If you don't specify the `channel` option when adding a streamer, the streamer's announcements will be sent to [the default announcement channel](#default-announcement-channel).
:::

### Custom Announcement Messages

<br/>

#### Adding an Announcement Message

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

::: details Example Usage
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

#### Removing an Announcement Message

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement custom-content"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
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

### Deleting a Streamer

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
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
            The Twitch streamer `senchabot` has been deleted from the database.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Default Announcement Channel

When adding Twitch streamers without specifying the `channel` option, their announcements are made in the default announcement channel.

### Adding a Channel
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement default-channel"
    optionPillKey="channel"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
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
            The channel `twitch-streams` has been set-twitch as the default announcement channel.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Removing the Channel
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement default-channel"
    >
</ApplicationCommands>

::: details Example Usage
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
            The default Twitch live stream announcement channel setting has been removed.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Default Announcement Message

### Adding an Announcement Message

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement default-content"
    optionPillKey="announcement-content"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
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
            Varsayılan yayın duyuru mesajı içeriği ayarlandı: `{twitch.username}, {stream.category} yayınına başladı! {stream.title} -> {twitch.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Removing the Announcement Message

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement default-content"
    >
</ApplicationCommands>

::: details Example Usage
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
