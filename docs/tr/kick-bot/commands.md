---
title: Kick Botu — Komutlar
description: Senchabot Kick sistem komutlarının tam referansı; takip çağrısı ve yayın süresi dahil.
---

# Kick Botu — Komutlar

## Kick Botu Sistem Komutları <Badge type="warning" text="NEW"/>

| Komut | Yanıt |
| :-- | :-- |
| !ping | Botun yanıt verip vermediğini kontrol eder. |
| !invite | Botu Kick kanalına davet eder (botun kendi kanal sohbetinde çalıştırılır). |
| !leave | Botu Kick kanalından kaldırır (yalnızca yayıncı). |
| !so | Başka bir Kick yayıncısına takip çağrısı yapar. |
| !uptime | Kick kanalının ne kadar süredir canlı yayında olduğunu gösterir. |
| !cmds | Bot ve kanal için kullanılabilir komutları listeler. |
| !help | Sistem komut listesini gösterir. |
| !gamecategory | Yayın kategorisini/oyununu ayarlar (yayıncı veya moderatör). |
| !songreq | Şarkı iste. `!songreq Şarkı Adı - Sanatçı` |
| !songskip | Mevcut şarkıyı atla (yalnızca moderatör). |
| !acmd | Kanal için özel komut ekler. `!acmd <isim> <içerik>` |
| !ucmd | Mevcut bir özel komutu günceller. `!ucmd <isim> <içerik>` |
| !dcmd | Özel komutu siler. `!dcmd <isim>` |
| !acmda | Özel komut için takma ad ekler. `!acmda <takma_ad> <isim>` |
| !dcmda | Özel komut takma adını siler. `!dcmda <takma_ad>` |
| !setlang | Bu kanal için botun dilini ayarlar. `!setlang <kod>` |

::: warning Kick'te Kullanılamaz
Aşağıdaki komutlar şu anda Kick sohbetinde kullanılamamaktadır:
- `!clip` — Kick'te klip oluşturma desteklenmemektedir.
- `!followage` — Kick API'si takip süresi sorgulamasını desteklememektedir.
- `!atimer`, `!dtimer`, `!timers`, `!timer` — Zamanlayıcı sohbet komutları şu anda devre dışıdır (zamanlayıcı servisi mevcuttur ancak sohbet üzerinden yönetilemez).
:::

<!-- Custom Commands Button -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/kick-bot/custom-commands">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Özel Komutlar</span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

## Takip Çağrısı <Badge type="warning" text="NEW"/>

```
!so {user.name}
```

::: details Örnek Kullanım

Kullanıcı Mesajı

```
!so xqc
```

Senchabot'un Yanıtı

```
Follow @xqc over at kick.com/xqc <3
```

*Yukarıdaki mesajı yazdırır ve takip çağrısı oluşturur.*
:::

## Modül Komutları

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/kick-bot/custom-api-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Custom API Sistemi <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/kick-bot/command-timer-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Komut Zamanlayıcı Sistemi <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Song Requests - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/kick-bot/song-requests">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Şarkı İstekleri <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/kick-bot/triggers">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Tetikleyiciler <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/kick-bot/getting-started">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Başlamadan Önce</span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/kick-bot/custom-commands">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Özel Komutlar <Badge type="warning" text="NEW"/></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<br/>

::: info Cooldown Sistemi
Komut kullanım bekleme süresi kullanıcı başına 1 saniyedir.
:::
