---
outline: [2, 4]
---

# Live Stream Announcements <Badge type="warning" text="NEW"/>

## Live Stream and Broadcaster Custom Settings

### Adding a Streamer

```
/set-twitch streamer url-or-username:
```

::: details Example Usage

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
        `senchabot` kullanıcı adlı Twitch yayıncısının yayın duyuruları `twitch-streams` isimli yazı kanalı için aktif edildi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

::: info Information

When adding a Twitch streamer, you must have previously added a default announcement channel with the `/set-twitch announcement default-content`, or you can specify the channel name optionally.
:::

### Customizing the Announcement Channel

You can assign a custom announcement channel to streamers.

```
/set-twitch streamer url-or-username: channel:
```

::: details Example Usage

<!-- EXAMPLE - /set-twitch streamer url-or-username: channel:-->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set-twitch streamer url-or-username: senchabot channel: twitch-streams
        </DiscordMarkdown>
    </DiscordMessage>
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

```
/set-twitch announcement custom-content username-or-url: content:
```

::: details Example Usage

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

#### Removing an Announcement Message

```
/del-twitch announcement custom-content username-or-url:
```

::: details Example Usage

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

### Deleting a Streamer

```
/del-twitch streamer username-or-url:
```

::: details Example Usage

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
            The Twitch streamer `senchabot` has been deleted from the database.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Default Announcement Channel

When adding Twitch streamers without specifying the `channel` option, their announcements are made in the default announcement channel.

### Adding a Channel

```
/set-twitch announcement default-channel channel:
```

::: details Example Usage

<!-- EXAMPLE - /set-twitch announcement default-channel channel: -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /set-twitch announcement default-channel channel: twitch-streams
        </DiscordMarkdown>
    </DiscordMessage>
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

```
/del-twitch announcement default-channel
```

::: details Example Usage

<!-- EXAMPLE - /del-twitch announcement default-channel -->
<DiscordMessages>
<!-- NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            /del-twitch announcement default-channel
        </DiscordMarkdown>
    </DiscordMessage>
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

```
/set-twitch announcement default-content content:
```

::: details Example Usage

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

### Removing the Announcement Message

```
/del-twitch announcement default-content
```

::: details Example Usage

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
