---
title: Kick Botu — Komut Değişkenleri
description: Kick özel komutlarınızda kullanıcı adı, tarih, rastgele sayı ve kanal adı gibi dinamik değişkenleri kullanın.
---

# Kick Botu — Komut Değişkenleri

Komut içeriğine eklenen değişkenlerdir.

```
!acmd [komut_adı] [komut_içeriği {komut.değişkeni}]
```

## `{user.name}`

Komutu kullanan kişinin kullanıcı adını döndürür.

Takma ad: `{cmd.author}`

::: details Örnek Kullanım

Komut Ekleme

```
!acmd merhaba Merhaba {user.name}, yayına hoş geldin!
```

Kullanıcı Mesajı ve Yanıtı

```
senchabot-app: !merhaba

Senchabot: Merhaba senchabot-app, yayına hoş geldin!
```

:::

## `{random_number}`

18-70 arasında rastgele sayı döndürür.

::: details Örnek Kullanım

Komut Ekleme

```
!acmd yas Bence {random.number} yaşındasın!
```

Kullanıcı Mesajı ve Yanıtı

```
senchabot-app: !yas

Senchabot: Bence 29 yaşındasın!
```

:::

## `{date}`

Komutun çalıştırıldığı tarihi döndürür.

::: details Örnek Kullanım

Komut Ekleme

```
!acmd bugun Bugün {date}
```

Kullanıcı Mesajı ve Yanıtı

```
senchabot-app: !bugun

Senchabot: Bugün 09/09/2023
```

:::

## `{cmd.date}`

Komutun oluşturulduğu tarihi döndürür.

::: details Örnek Kullanım

Komut Ekleme

```
!acmd olusturuldu Bu komut {cmd.date} tarihinde oluşturuldu
```

Kullanıcı Mesajı ve Yanıtı

```
senchabot-app: !olusturuldu

Senchabot: Bu komut 25/12/2023 tarihinde oluşturuldu
```

:::

## `{channel.name}`

Komutun çalıştırıldığı kanalın adını döndürür.

::: details Örnek Kullanım

Komut Ekleme

```
!acmd kick-bot {channel.name}, Senchabot kullanıyor!
```

Kullanıcı Mesajı ve Yanıtı

```
senchabot-app: !kick-bot

Senchabot: senchabot-app, Senchabot kullanıyor!
```

:::
