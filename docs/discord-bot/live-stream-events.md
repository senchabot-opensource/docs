# Live Stream Events <Badge type="warning" text="NEW"/>

Senchabot creates server activity by tracking [live stream announcements](/discord-bot/live-stream-announcements) in the specified channels.

## Selecting the Event Channel

Choose the live stream announcements channel that Senchabot will monitor to create Discord events.
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch event-channel"
    optionPillKey="channel"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
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
        The channel named `twitch-streams` has been added to the list for Twitch stream announcement events.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Removing the Event Channel

Remove the specified channel from the list of channels that Senchabot tracks.

<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch event-channel"
    optionPillKey="channel"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Example Usage
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
        The text channel named `twitch-streams` has been removed from the list of stream event text channels.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::
