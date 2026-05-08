---
title: Twitch Botu — Rastgele Raid Sistemi
description: Senchabot ile Twitch'te raid grupları oluşturmayı ve canlı yayıncılara rastgele raid başlatmayı öğrenin.
---

# Twitch Botu — Rastgele Raid Sistemi <Badge type="warning" text="NEW" />

Rastgele Raid Sistemi, bir raid grubundan veya takip ettiğiniz kanallardan rastgele seçilen canlı bir yayıncıya raid başlatmanızı sağlar.

## Yayıncıyı Raid Grubuna Ekle

```
!argroup [yayıncı_adı]
```

Bir Twitch yayıncısını kanalınızın raid grubuna ekler. Bu komutu yalnızca yayıncı kullanabilir.

::: details Örnek Kullanım

Kullanıcı Mesajı

```
!argroup senchabot
```

Senchabot'un Yanıtı

```
Added senchabot to your group!
```

*Yayıncı kanalınızın raid grubuna eklenir.*
:::

## Raid Grubuna Abone Ol

```
!srgroup [grup_sahibi_adı]
```

Kanalınızı başka bir yayıncının raid grubuna abone eder. Bu komutu yalnızca yayıncı kullanabilir.

::: details Örnek Kullanım

Kullanıcı Mesajı

```
!srgroup senchabot
```

Senchabot'un Yanıtı

```
Successfully subscribed to group senchabot!
```

*Kanalınız artık senchabot'un raid grubuna abonedir.*
:::

## Rastgele Raid Başlat

```
!randomraid [grup_adı|follows]
```

Belirtilen kaynaktan rastgele canlı bir yayıncıya raid başlatır.

- Argüman verilmezse, kanalınızın kendi raid grubu kullanılır.
- `follows` yazarak takip ettiğiniz kanallardan rastgele raid yapabilirsiniz.
- Bir grup adı yazarak belirli bir grubun üyelerinden raid yapabilirsiniz.

::: details Örnek Kullanım

Kendi grubunuzdan rastgele raid

```
!randomraid
```

Takip ettiğiniz kanallardan rastgele raid

```
!randomraid follows
```

Belirli bir gruptan rastgele raid

```
!randomraid senchabot
```

Senchabot'un Yanıtı

```
Random raid to streamername from group initiated!
```

*Seçilen kaynaktan rastgele canlı bir yayıncı seçer ve Twitch raid'i başlatır.*
:::

::: info Bilgi

- Yayıncının kendi kanalı raid hedefleri arasından çıkarılır.
- Raid hedefi olarak yalnızca canlı yayıncılar değerlendirilir.
- Grupta veya takiplerde kimse canlı değilse, bot sizi bilgilendirir.
- Raid başlatmak için botun kanalınızda moderatör yetkisine sahip olması gerekir.
:::
