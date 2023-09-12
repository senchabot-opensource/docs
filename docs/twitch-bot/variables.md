# Command Variables

<!-- Komut içeriğine eklenen değişkenlerdir. -->

Variables added to the command content.

```
!acmd [command_name] [command_content {command.variable}]
```

## `{user.name}`

<!-- Komutu kullanan kişinin kullanıcı adını yazar. -->

Returns the username of the person using the command.

::: details Example Usage

Command Add

```
!acmd good-morning Good morning {user.name}!

```

<!-- Kullanıcı Mesajı ve Yanıtı -->

User Message and Response

```
senchabot-app: !good-morning

Senchabot: Good morning senchabot-app!

```

:::

## `{random_number}`

<!-- 18-70 arasında rastgele sayı döndürür. -->

Returns a random number between 18-70.

::: details Example Usage

Command Add

```
!acmd age {random.number}
```

<!-- Kullanıcı Mesajı ve Yanıtı -->

User Message and Response

```
senchabot-app: !age

Senchabot: I think... You're 29 years old!
```

:::

## `{date}`

<!-- Komutun çalıştırıldığı tarihi döndürür. -->

Returns the date of the day it is used.

::: details Example Usage

Command Add

```
!acmd date Date: {date}
```

<!-- Kullanıcı Mesajı ve Yanıtı -->

User Message and Response

```
senchabot-app: !date

Senchabot: Date: 09/09/2023
```

:::

## `{cmd.date}`

<!-- Komutun oluşturulduğu tarihi döndürür. -->

Returns the date of the command was created.

::: details Example Usage

Command Add

```
!acmd christmas Happy christmas! -{cmd.date}
```

<!-- Kullanıcı Mesajı ve Yanıtı -->

User Message and Response

```
senchabot-app: !christmas

Senchabot: Happy christmas! -25/12/2023
```

:::

## `{channel.name}`

<!-- Komutun çalıştırıldığı kanalın adını döndürür. -->

Returns the name of the channel that the command is used.

::: details Example Usage

Command Add

```
!acmd twitch-bot {channel.name} prefers to use the Senchabot!
```

<!-- Kullanıcı Mesajı ve Yanıtı -->

User Message and Response

```
senchabot-app: !twitch-bot

Senchabot: senchabot-app, prefers to use the Senchabot!
```

:::
