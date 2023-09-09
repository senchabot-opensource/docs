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

Twitch Stream Variables
{twitch.username}
{twitch.url}
{stream.title}
{stream.category}
