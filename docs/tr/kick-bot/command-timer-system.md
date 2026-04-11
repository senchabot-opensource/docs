# Komut Zamanlayıcı Sistemi <Badge type="warning" text="NEW" />

## Komut Zamanlayıcı Ekleme

```
!atimer [komut_adı] [aralık (sayı, dakika)]
```

Belirlediğiniz [özel komutu](/tr/kick-bot/custom-commands) verdiğiniz aralıkla otomatik olarak döndürür.

::: details Örnek Kullanım

Komut Zamanlayıcı Ekleme

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

`!timers` komutu ile zamanlayıcı listesini görebilirsiniz.

En fazla 3 komut zamanlayıcısı oluşturabilirsiniz.
:::

## Komut Zamanlayıcı Silme

```
!dtimer [komut_adı]
```

::: details Örnek Kullanım

Komut Zamanlayıcı Silme

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
Command Timers: su-ic, socials, discord.
```
:::
