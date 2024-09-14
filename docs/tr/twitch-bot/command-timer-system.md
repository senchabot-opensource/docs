# Komut Zamanlayıcı Sistemi <Badge type="warning" text="NEW" />

## Komut Ekleme

```
!atimer [command_name] [interval (integer, minute)]
```

Belirlediğiniz süreyle istediğiniz [özel komutu](/tr/twitch-bot/custom-commands) döndürür.

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
`!timers` komutuyla komut zamanlayıcı listesine ulaşabilirsiniz.

En fazla 3 komut zamanlayıcısı oluşturabilirsiniz.
:::


## Komut Silme

```
!dtimer [command_name]
```

::: details Örnek Kullanım

Komut Silme

```
!dtimer drink-water
```

Senchabot'un Yanıtı

```
Command Timer Deleted: ays.
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
