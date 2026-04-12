# Komutlar

## Sistem Komutları <Badge type="warning" text="NEW"/>

| Komut | Yanıt |
| :-- | :-- |
| /set-twitch | Kanal için Twitch canlı yayın duyurusu ekler. |
| /set-kick | Kanal için Kick canlı yayın duyurusu ekler. |
| /del-twitch | Twitch canlı yayın duyurusunu kaldırır. |
| /del-kick | Kick canlı yayın duyurusunu kaldırır. |
| /streamer-list | Canlı yayın duyuruları için eklenmiş Twitch ve Kick yayıncılarını listeler. |
| /purge | Kanal mesajlarını veya bot etkinliklerini toplu siler. |
| /invite | Botun davet bağlantısını gösterir. |
| /do-not-track-my-messages | Mesaj takibinden çıkış yapar. |
| /track-my-messages | Mesaj takibine tekrar dahil olur. |
| /cmds | Sunucu için kullanılabilir komutları listeler. |

::: info Bilgilendirme

Özel slash komut yönetimi komutları [`Özel Komutlar`](/tr/discord-bot/custom-commands) sayfasında belgelenmiştir.
:::

<!-- Custom Commands Button -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/discord-bot/custom-commands">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Özel Komutlar</span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

## Purge <Badge type="warning" text="NEW"/>

```
/purge last-100-channel-messages message-content:giveaway
```

::: details Örnek Kullanım

<DiscordMessages>
    <DiscordMessage profile="user">
        /purge last-100-channel-messages message-content:giveaway
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        Purge tamamlandı. Eşleşen mesajlar silindi.
    </DiscordMessage>
</DiscordMessages>

*Eşleşen yeni mesajları veya bot tarafından oluşturulan etkinlikleri siler.*
:::

## Yayıncı Listesi <Badge type="warning" text="NEW"/>

```
/streamer-list
```

::: details Örnek Kullanım

<DiscordMessages>
    <DiscordMessage profile="user">
        /streamer-list
    </DiscordMessage>
    <DiscordMessage profile="bot" role-color="#1fab89">
        **Twitch streamers:** shroud
        **Kick streamers:** xqc
    </DiscordMessage>
</DiscordMessages>

*Takip edilen canlı yayın yayıncılarını listeler.*
:::

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
    <a class="content-ref-s" href="/tr/discord-bot/custom-api-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom API Sistemi <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Reminder System - CONTENT REFERANCE SMALL -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref-s" href="">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Hatırlatıcı Sistemi <Badge type="danger" text="planned | not active" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<br/>

::: info Cooldown Sistemi
Komut kullanım bekleme süresi kullanıcı başına 2 saniyedir.
:::
