---
title: Twitch Botu — Komutlar
description: Senchabot Twitch sistem komutlarının tam referansı; takip çağrısı, takip süresi, klip, raid grupları ve zamanlayıcılar dahil.
---

# Twitch Botu — Komutlar

## Twitch Botu Sistem Komutları <Badge type="warning" text="NEW"/>

| Komut | Yanıt |
| :-- | :-- |
| !ping | Botun yanıt verip vermediğini kontrol eder. |
| !invite | Botu Twitch kanalına davet eder (botun kendi kanal sohbetinde çalıştırılır). |
| !leave | Botu Twitch kanalından kaldırır (yalnızca yayıncı). |
| !so | Başka bir Twitch yayıncısına takip çağrısı yapar. |
| !followage | Takip süresi komutu. İzleyicinin kanalı ne kadar süredir takip ettiğini gösterir. |
| !uptime | Yayının ne kadar süredir canlı yayında olduğunu gösterir. |
| !cmds | Bot ve kanal için kullanılabilir komutları listeler. |
| !help | Sistem komut listesini gösterir. |
| !atimer | Mevcut bir özel komut için zamanlayıcı oluşturur. |
| !dtimer | Komut zamanlayıcısını siler. |
| !timers | Aktif komut zamanlayıcılarını listeler. |
| !timer | Zamanlayıcı komut kullanım yardımını gösterir. |
| !clip | O anki yayından klip oluşturur. |
| !gamecategory | Yayın kategorisini/oyununu ayarlar (yayıncı veya moderatör). |
| !argroup | Bir yayıncıyı raid grubuna ekler (yalnızca yayıncı). |
| !srgroup | Kanalı bir raid grubuna abone eder (yalnızca yayıncı). |
| !randomraid | Bir gruptan veya takiplerden rastgele raid başlatır. |
| !songreq | Şarkı iste. `!songreq Şarkı Adı - Sanatçı` |
| !songskip | Mevcut şarkıyı atla (yalnızca moderatör). |

<!-- Custom Commands Button -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/custom-commands">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Özel Komutlar</span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

## Takip Çağrısı <Badge type="warning" text="NEW"/>

```
!so [kullanıcı_adı]
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

*Yukarıdaki mesajı yazdırır ve takip çağrısı oluşturur.*
:::

## Takip Süresi <Badge type="warning" text="NEW"/>

```
!followage
```

```
!followage @kullanıcıadı
```

::: details Örnek Kullanım

Kullanıcı Mesajı

```
!followage
```

Senchabot'un Yanıtı

```
@user bu kanalı 2 yıl 3 aydır takip ediyor.
```

Kullanıcı Mesajı

```
!followage @ninja
```

Senchabot'un Yanıtı

```
@ninja bu kanalı 4 yıl 1 aydır takip ediyor.
```

*Kendiniz veya etiketlenen kullanıcı için takip süresini gösterir.*
:::

## Yayın Süresi <Badge type="warning" text="NEW"/>

::: details Örnek Kullanım

Kullanıcı Mesajı

```
!uptime
```

Senchabot'un Yanıtı

```
Yayın 3 saat 12 dakikadır canlı.
```

*Mevcut kanalın yayın süresini gösterir.*
:::

## Rastgele Raid <Badge type="warning" text="NEW"/>

```
!randomraid follows
```

::: details Örnek Kullanım

Kullanıcı Mesajı

```
!randomraid follows
```

Senchabot'un Yanıtı

```
Rastgele raid hedefi seçildi: twitch.tv/streamername
```

*Takiplerden veya gruptan rastgele raid hedefi seçer.*
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

<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/custom-commands">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Özel Komutlar</span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Command Timer System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/command-timer-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Komut Zamanlayıcı Sistemi <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Random Raid System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/random-raid-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Rastgele Raid Sistemi <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Song Requests - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/song-requests">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Şarkı İstekleri <Badge type="warning" text="NEW" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Reminder System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/reminder-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Hatırlatıcı Sistemi <Badge type="danger" text="planned | not active" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<!-- Note Taking System - CONTENT REFERANCE SMALL -->
<style src="@theme/custom.css" scoped></style>
<div>
    <a class="content-ref-s" href="/tr/twitch-bot/note-taking-system">
        <span class="ref-details-s">
            <span class="content-ref-page-title-s">Not Sistemi <Badge type="danger" text="planned | not active" /></span>
        </span>
        <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

<br/>

::: info Cooldown Sistemi
Komut kullanım bekleme süresi kullanıcı başına 1 saniyedir.
:::
