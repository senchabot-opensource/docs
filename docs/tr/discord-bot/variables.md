---
title: Discord Botu — Komut Değişkenleri
description: Senchabot ile Discord özel komutlarınızda ve canlı yayın duyurularınızda dinamik değişkenler kullanın.
---

# Discord Botu — Komut Değişkenleri

Komut içeriğine eklenen değişkenlerdir.

```
/acmd [name:<komut_adı>] [content:<komut_içeriği {komut.değişkeni}>]
```

## Özel Komut Değişkenleri

Bu değişkenler Discord özel komutlarında Twitch ve Kick'te olduğu gibi çalışır.

### `{user.name}`

Komutu kullanan kişinin kullanıcı adını yazar.

Takma ad: `{cmd.author}`

::: details Örnek Kullanım

Komut Ekleme

```
/acmd name:selam content:"Selam {user.name}!"
```

Kullanıcı Mesajı

```
/selam
```

Senchabot'un Yanıtı

```
Selam senchabot-app!
```

:::

### `{random_number}`

18-70 arasında rastgele sayı döndürür.

### `{date}`

Mevcut tarihi döndürür.

### `{cmd.date}`

Özel komutun oluşturulduğu tarihi döndürür.

### `{channel.name}`

Komutun kullanıldığı kanalın adını döndürür.

### `{customapi.https://...}`

Harici bir API'den veri çeker. Her komut yanıtında yalnızca **bir** custom API etiketi işlenir.

## Twitch Stream Değişkenleri

Bu değişkenler Twitch canlı yayın duyuru mesajlarında kullanılır.

| Değişken | Açıklama |
| :-- | :-- |
| `{twitch.username}` | Twitch yayıncısının kullanıcı adı. |
| `{twitch.url}` | Twitch yayın URL'si. |
| `{stream.title}` | Mevcut yayın başlığı. |
| `{stream.category}` | Mevcut yayın kategorisi/oyunu. |
