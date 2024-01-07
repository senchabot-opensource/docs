# Komutlar

## Ön Tanımlı Komutlar <Badge type="warning" text="NEW"/>

| Komut        | Senchabot'un Yanıtı                                                                                                                                                                                                                  |
| :----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cmds         | {channel.name}'s Channel Commands: ...                                                                                                                                                                                               |
| help         | Senchabot's Commands: cmds, acmd, dcmd, ucmd, acmda, dcmda, sozluk, ping, invite, help.                                                                                                                                               |
| senchabot    | An open-source, multi-platform bot designed for seamless integration with Twitch and Discord • [senchabot.app](https://senchabot.app) • [github.com/senchabot-opensource/monorepo](https://github.com/senchabot-opensource/monorepo) |
| kampus       | discord.gg/kampus - github.com/kamp-us                                                                                                                                                                                               |
| frontendship | discord.gg/frontendship                                                                                                                                                                                                              |                                                                                                                                                        |
| lurk         | Teşekkürler! {user.name}                                                                                                                                                                                                             |
| ping         | pong! VoHiYo                                                                                                                                                                                                                         |

::: info Bilgilendirme

Ön tanımlı komutlarda [`!ucmd`](/tr/twitch-bot/custom-commands#komut-guncelleme) güncelleme komutu çalışmamaktadır. `!lurk` komutu bu konuda istisnadır.
:::

## Sözlük <Badge type="warning" text="NEW"/>

```
!sozluk [term_name]
```

::: details Örnek Kullanım

Kullanıcı Mesajı

```
!sozluk senchabot
```

Senchabot'un Yanıtı

```
Açık kaynak Discord ve Twitch botu.
```

:::

## Takip Çağrısı <Badge type="warning" text="NEW"/>

```
!so {user.name}
```

::: details Örnek Kullanım

Kullanıcı Mesajı

```
!so senchabot
```

Senchabot'un Yanıtı

```
Follow @senchabot over at twitch.tv/senchabot <3
```
*Yukarıdaki mesajı yazdırıp takip çağrısı oluşturur.*
:::

## Modül Komutları

<!-- Custom API System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/custom-api-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom API Sistemi <Badge type="warning" text="NEW"/></span> 
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Command Timer System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/command-timer-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Komut Zamanlayıcı Sistemi <Badge type="info" text="planned"/></span> 
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Reminder System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/reminder-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Hatırlatıcı Sistemi <Badge type="info" text="planned"/></span> 
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Note Taking System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/note-taking-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Not Sistemi <Badge type="info" text="planned"/></span> 
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<br/>

::: info Cooldown Sistemi
Komut kullanım bekleme süresi kullanıcı başına 2 dakikadır.
:::
