# Komut Değişkenleri

Komut içeriğine eklenen değişkenlerdir.

```
!acmd [komut_adı] [komut_içeriği {komut.değişkeni}]
```

## `{user.name}`

Komutu kullanan kişinin kullanıcı adını yazar.

::: details Örnek Kullanım

Komut Ekleme

```
!acmd günaydın Günaydın {user.name}!

```

Kullanıcı Mesajı ve Yanıtı

```
senchabot-app: !günaydın

Senchabot: Günaydın senchabot-app!

```

:::

## `{random_number}`

18-70 arasında rastgele sayı döndürür.

::: details Örnek Kullanım

Komut Eklleme

```
!acmd yas {random.number}
```

Kullanıcı Mesajı ve Yanıtı

```
senchabot-app: !yas

Senchabot: 29 yaşındasın, bence!
```

:::

## `{date}`

Komutun çalıştırıldığı tarihi döndürür.

::: details Örnek Kullanım

Komut Ekleme

```
!acmd tarih Bugünün tarihi: {date}
```

Kullanıcı Mesajı ve Yanıtı

```
senchabot-app: !tarih

Senchabot: Bugünün tarihi: 09/09/2023
```

:::

## `{cmd.date}`

Komutun oluşturulduğu tarihi döndürür.

::: details Örnek Kullanım

Komut Ekleme

```
!acmd zafer 30 Ağustos Zafer Bayramı Kutlu Olsun! -{cmd.date}
```

Kullanıcı Mesajı ve Yanıtı

```
senchabot-app: !zafer

Senchabot: 30 Ağustos Zafer Bayramı Kutlu Olsun! -30/08/2023
```

:::

## `{channel.name}`

Komutun çalıştırıldığı kanalın adını döndürür.

::: details Örnek Kullanım

Komut Ekleme

```
!acmd twitch-botu {channel.name}, Senchabot'u kullanmayı tercih ediyor!
```

Kullanıcı Mesajı ve Yanıtı

```
senchabot-app: !twitch-botu

Senchabot: senchabot-app, Senchabot'u kullanmayı tercih ediyor!
```

:::
