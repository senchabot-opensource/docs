---
outline: [2, 4]
title: Discord Bot — Live Stream Announcements
description: Configure Twitch and Kick livestream announcements in your Discord server with Senchabot.
---

# Discord Bot — Live Stream Announcements <Badge type="warning" text="NEW"/>

## Twitch Live Stream and Broadcaster Custom Settings

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

## Category Filters <Badge type="warning" text="NEW"/>

Filter livestream announcements by stream category for each announcement channel. You can set up to **2 category filters per server**.

### Adding a Category Filter

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="               "
    optionPillKey2="filter-regex"
    optionPillValue2="               "
    optionPillKey3="condition"
    optionPillValue3="               "
    >
</ApplicationCommands>

**Parameters:**
- `channel` — **(Required)** The Discord text channel where announcements are posted.
- `filter-regex` — **(Required)** A regex pattern matching the stream category name(s). Use `|` to match multiple categories (e.g., `Just Chatting|IRL`).
- `condition` — **(Required)** Choose **matches** (only announce if category matches) or **does not match** (skip if category matches).

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="twitch-streams"
    optionPillKey2="filter-regex"
    optionPillValue2="Just Chatting"
    optionPillKey3="condition"
    optionPillValue3="matches"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true" profile="user" :command="true">set-twitch announcement game-category-filter</DiscordInteraction>
        </template>
        <DiscordMarkdown>
            The category filter for Twitch stream announcements to be sent to the `twitch-streams` text channel has been set to `Just Chatting` `matches`.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

*Only Twitch streams in the "Just Chatting" category will be announced to `#twitch-streams`.*
:::

::: details Example Usage (Does Not Match)
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="twitch-streams"
    optionPillKey2="filter-regex"
    optionPillValue2="Just Chatting"
    optionPillKey3="condition"
    optionPillValue3="does not match"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true" profile="user" :command="true">set-twitch announcement game-category-filter</DiscordInteraction>
        </template>
        <DiscordMarkdown>
            The category filter for Twitch stream announcements to be sent to the `twitch-streams` text channel has been set to `Just Chatting` `does not match`.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

*Twitch streams in the "Just Chatting" category will be skipped; all other categories will be announced to `#twitch-streams`.*
:::

::: tip Multiple Categories
Use the `|` (pipe) character to match multiple categories in a single filter, e.g., `Just Chatting|IRL|Art`.
:::

### Removing a Category Filter

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="               "
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="twitch-streams"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true" profile="user" :command="true">del-twitch announcement game-category-filter</DiscordInteraction>
        </template>
        <DiscordMarkdown>
            For the text channel named `twitch-streams`, Twitch stream announcement category filtering removed.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Kick Live Stream and Broadcaster Custom Settings

### Adding a Streamer
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick streamer"
    optionPillKey="kick-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick streamer"
    optionPillKey="kick-username-or-url"
    optionPillValue="xqc"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-kick streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        Live stream announcements for the Kick user `xqc` have been activated for the channel `kick-streams`.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

::: info Information

When adding a Kick streamer, you must have previously added a default announcement channel with the `/set-kick announcement default-channel`, or you can specify the channel name optionally.
:::

### Customizing the Announcement Channel

You can assign a custom announcement channel to streamers.
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick streamer"
    optionPillKey="kick-username-or-url"
    optionPillValue="                 "
    optionPillKey2="channel"
    optionPillValue2="                "
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick streamer"
    optionPillKey="kick-username-or-url"
    optionPillValue="xqc"
    optionPillKey2="channel"
    optionPillValue2="kick-streams"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-kick streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        Live stream announcements for the Kick user `xqc` have been activated for the channel `kick-streams`.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

::: info Information

If you don't specify the `channel` option when adding a streamer, the streamer's announcements will be sent to [the default announcement channel](#default-announcement-channel-1).
:::

### Custom Announcement Messages

<br/>

#### Adding an Announcement Message

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick announcement custom-content"
    optionPillKey="kick-username-or-url"
    optionPillValue="            "
    optionPillKey2="announcement-content"
    optionPillValue2="            "
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick announcement custom-content"
    optionPillKey="kick-username-or-url"
    optionPillValue="xqc"
    optionPillKey2="announcement-content"
    optionPillValue2="{kick.username}, {stream.category} yayınına başladı! {stream.title} → {kick.url}"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-kick announcement custom-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            senchabot kullanıcı adlı Kick yayıncısı için duyuru mesajı içeriği ayarlandı: `{kick.username}, {stream.category} yayınına başladı! {stream.title} → {kick.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

#### Removing an Announcement Message

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-kick announcement custom-content"
    optionPillKey="kick-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-kick announcement custom-content"
    optionPillKey="kick-username-or-url"
    optionPillValue="xqc"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-kick announcement custom-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            senchabot kullanıcı adlı Kick yayıncısına özgü yayın duyuru mesajı silindi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Deleting a Streamer

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-kick streamer"
    optionPillKey="kick-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-kick streamer"
    optionPillKey="kick-username-or-url"
    optionPillValue="xqc"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-kick streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            The Kick streamer `xqc` has been deleted from the database.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Default Announcement Channel {#default-announcement-channel-1}

When adding Kick streamers without specifying the `channel` option, their announcements are made in the default announcement channel.

### Adding a Channel
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick announcement default-channel"
    optionPillKey="channel"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick announcement default-channel"
    optionPillKey="channel"
    optionPillValue="kick-streams"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-kick announcement default-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            The channel `kick-streams` has been set-kick as the default announcement channel.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Removing the Channel
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-kick announcement default-channel"
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-kick announcement default-channel"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-kick announcement default-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            The default Kick live stream announcement channel setting has been removed.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Default Announcement Message

### Adding an Announcement Message

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick announcement default-content"
    optionPillKey="announcement-content"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick announcement default-content"
    optionPillKey="announcement-content"
    optionPillValue="{kick.username}, {stream.category} yayınına başladı! {stream.title} → {kick.url}"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-kick announcement default-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            Varsayılan yayın duyuru mesajı içeriği ayarlandı: `{kick.username}, {stream.category} yayınına başladı! {stream.title} -> {kick.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Removing the Announcement Message

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-kick announcement default-content"
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-kick announcement default-content"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-kick announcement default-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            Varsayılan yayın duyuru mesajı içeriği kaldırıldı. Özelleştirilmiş duyuru mesajı olmayan yayıncıların duyuruları belirtilen formatta gönderilecektir. `{kick.username}, {stream.category} yayınına başladı! {stream.title}: {kick.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Category Filters <Badge type="warning" text="NEW"/>

Filter livestream announcements by stream category for each announcement channel. You can set up to **2 category filters per server**.

### Adding a Category Filter

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="               "
    optionPillKey2="filter-regex"
    optionPillValue2="               "
    optionPillKey3="condition"
    optionPillValue3="               "
    >
</ApplicationCommands>

**Parameters:**
- `channel` — **(Required)** The Discord text channel where announcements are posted.
- `filter-regex` — **(Required)** A regex pattern matching the stream category name(s). Use `|` to match multiple categories (e.g., `Just Chatting|IRL`).
- `condition` — **(Required)** Choose **matches** (only announce if category matches) or **does not match** (skip if category matches).

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="kick-streams"
    optionPillKey2="filter-regex"
    optionPillValue2="Just Chatting"
    optionPillKey3="condition"
    optionPillValue3="matches"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true" profile="user" :command="true">set-kick announcement game-category-filter</DiscordInteraction>
        </template>
        <DiscordMarkdown>
            The category filter for Kick stream announcements to be sent to the `kick-streams` text channel has been set to `Just Chatting` `matches`.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

*Only Kick streams in the "Just Chatting" category will be announced to `#kick-streams`.*
:::

::: details Example Usage (Does Not Match)
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-kick announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="kick-streams"
    optionPillKey2="filter-regex"
    optionPillValue2="Just Chatting"
    optionPillKey3="condition"
    optionPillValue3="does not match"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true" profile="user" :command="true">set-kick announcement game-category-filter</DiscordInteraction>
        </template>
        <DiscordMarkdown>
            The category filter for Kick stream announcements to be sent to the `kick-streams` text channel has been set to `Just Chatting` `does not match`.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

*Kick streams in the "Just Chatting" category will be skipped; all other categories will be announced to `#kick-streams`.*
:::

::: tip Multiple Categories
Use the `|` (pipe) character to match multiple categories in a single filter, e.g., `Just Chatting|IRL|Art`.
:::

### Removing a Category Filter

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-kick announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="               "
    >
</ApplicationCommands>

::: details Example Usage
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-kick announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="kick-streams"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true" profile="user" :command="true">del-kick announcement game-category-filter</DiscordInteraction>
        </template>
        <DiscordMarkdown>
            For the text channel named `kick-streams`, Kick stream announcement category filtering removed.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::
