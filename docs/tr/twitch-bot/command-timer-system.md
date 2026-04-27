---
title: Twitch Botu — Komut Zamanlayıcı Sistemi
description: Twitch'te Senchabot ile otomatik komut zamanlayıcıları oluşturmayı, yönetmeyi ve silmeyi öğrenin.
---

# Twitch Botu — Komut Zamanlayıcı Sistemi <Badge type="warning" text="NEW" />

## Komut Zamanlayıcısı Ekleme

```
!atimer [komut_adı] [aralık]
```

Belirlediğiniz süreyle istediğiniz [özel komutu](/tr/twitch-bot/custom-commands) döndürür.

Aralık düz bir tam sayı (dakika) veya `15m`, `1h` gibi bir süre dizgesi olarak yazılabilir.

::: details Örnek Kullanım

Komut Ekleme

```
!atimer su-ic 30
```

Senchabot'un Yanıtı

```
Command Timer Enabled: su-ic.
```
Örnek Sonuç
```
Senchabot (08:00 AM): Su içmeyi unutma!
Senchabot (08:30 AM): Su içmeyi unutma!
Senchabot (09:00 AM): Su içmeyi unutma!
Senchabot (09:30 AM): Su içmeyi unutma!
```
:::


::: info Bilgilendirme

- `!timers` komutuyla komut zamanlayıcı listesine ulaşabilirsiniz.
- Kanal başına en fazla **3 komut zamanlayıcısı** oluşturabilirsiniz.
- Minimum aralık **5 dakika**; maksimum **24 saat (1440 dakika)**.
- Bir zamanlayıcı, son çalıştırmasından sonra sohbette en az **10 mesaj** gönderilmişse tetiklenir.
:::


## Komut Zamanlayıcısı Silme

```
!dtimer [komut_adı]
```

::: details Örnek Kullanım

Komut Silme

```
!dtimer su-ic
```

Senchabot'un Yanıtı

```
Command Timer Deleted: su-ic.
```

:::

## Zamanlayıcı Komutlarına Erişim

```
!timers
```

::: details Örnek Yanıt

```
Command Timers: drink-water, senchabot, discord.
```
:::
