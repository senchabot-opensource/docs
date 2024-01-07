# Komutlar

## Ön Tanımlı Komutlar <Badge type="warning" text="NEW"/>

| Komut        | Senchabot'un Yanıtı                                                                                                                                                                                                                  |
| :----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| invite       | Senchabot'un sunucu davet linkini gönderir.                                                                                                                                                                                          |
| cmds         | {channel.name}'s Channel Commands: ...                                                                                                                                                                                               |
| help         | Senchabot's Commands: cmds, acmd, dcmd, ucmd, acmda, dcmda, sozluk, ping, invite, help.                                                                                                                                              |
| senchabot    | An open-source, multi-platform bot designed for seamless integration with Twitch and Discord • [senchabot.app](https://senchabot.app) • [github.com/senchabot-opensource/monorepo](https://github.com/senchabot-opensource/monorepo) |
| kampus       | discord.gg/kampus - github.com/kamp-us                                                                                                                                                                                               |
| frontendship | discord.gg/frontendship                                                                                                                                                                                                              |
| ping         | pong! VoHiYo                                                                                                                                                                                                                         |

<!-- PURGE -->

## Temizleme <Badge type="warning" text="NEW"/>

```
/purge events
```
Tüm zamanlanmış etkinlikleri iptal eder.

::: details Örnek Kullanım

Kullanıcı Mesajı

Senchabot'un Yanıtı

<!-- Component -->
:::

```
/purge last-100-channel-messages message-content-contains: user-name-contains:
```
14 günden eski olmayan mesajları kullanıcı adı veya mesaj iceriğindeki karakterlere göre siler.


## Sözlük <Badge type="warning" text="NEW"/>

```
!sozluk [term_name]
```

::: details Örnek Kullanım

<!-- EXAMPLE - !sozluk senchabot -->
<DiscordMessages>
<!-- TODO: NEW COMPONENT (user message) => change user message -->
    <DiscordMessage profile="user">
        <DiscordMarkdown>
            !sozluk senchabot
        </DiscordMarkdown>
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <DiscordMarkdown>
        Senchabot: Açık kaynak Discord ve Twitch botu.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

<!-- Result Photo ? -->

## Modül Komutları

<!-- Live Stream Announcements - CONTENT REFERANCE SMALL -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/discord-bot/live-stream-announcements">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Canlı Yayın Duyuruları <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Live Stream Events - CONTENT REFERANCE SMALL -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/discord-bot/live-stream-events">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Canlı Yayın Etkinlikleri <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Custom API System - CONTENT REFERANCE SMALL -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom API Sistemi <Badge type="info" text="planned"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Reminder System - CONTENT REFERANCE SMALL -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Hatırlatıcı Sistemi <Badge type="info" text="planned"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<br/>

::: info Cooldown Sistemi
Komut kullanım bekleme süresi kullanıcı başına 2 dakikadır.
:::
