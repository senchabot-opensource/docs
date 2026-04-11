---
outline: [2, 3]
---

# Özel Komutlar <Badge type="warning" text="NEW"/>

## İzinleri Ayarlama

Web panelinden özel bir komut oluştururken (örn. `!discord`), komutu kimlerin kullanabileceğini seçebilirsiniz: "Herkes", "Aboneler (kademe ve abone olma ayına göre)", "VIP'ler" veya "Sadece Moderatörler".

## Kanal Komutları

### Komut Ekleme

```
!acmd [komut_adı] [komut_içeriği]
```

::: details Örnek Kullanım

```
!acmd socials Follow me on Kick: https://kick.com/yourname
```

:::

### Komut Güncelleme

```
!ucmd [komut_adı] [yeni_komut_içeriği]
```

::: details Örnek Kullanım

```
!ucmd socials Updated socials: https://kick.com/yourname
```

:::

### Komut Silme

```
!dcmd [komut_adı]
```

::: details Örnek Kullanım

```
!dcmd socials
```

:::

### Takma Ad Ekleme

```
!acmda [komut_adı] [komut_takma_adı]
```

::: details Örnek Kullanım

```
!acmda socials social
```

:::

### Takma Ad Silme

```
!dcmda [komut_takma_adı]
```

::: details Örnek Kullanım

```
!dcmda social
```

:::

## Kanal Komutlarına Erişim

```
!cmds
```

::: details Örnek Yanıt

```
@user, senchabot's Commands: https://senchabot.com/senchabot/commands | View bot commands: !help
```

:::

## Sistem Komutu Örnekleri

Özel komutlarla birlikte aşağıdaki sistem komutlarını da aynı kanalda kullanabilirsiniz.

```
!help
!followage
!uptime
```
