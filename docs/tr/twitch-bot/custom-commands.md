---
outline: [2, 3]
---

# Özel Komutlar <Badge type="warning" text="NEW"/>

## Kanal Komutları

### Komut Ekleme

```
!acmd [komut_adı] [komut_içeriği]
```

::: details Örnek Kullanım

```
!acmd senchabot https://senchabot.app/
```

:::

### Komut Güncelleme

```
!ucmd [komut_adı] [yeni_komut_içeriği]
```

::: details Örnek Kullanım

```
!ucmd senchabot https://github.com/senchabot-opensource/monorepo
```

:::

### Komut Silme

```
!dcmd [komut_adı]
```

::: details Örnek Kullanım

```
!dcmd senchabot
```

:::

### Alias Add

```
!acmda [komut_adı] [komut_takma_adı]
```

::: details Örnek Kullanım

```
!acmda senchabot senchabot-link
```

:::

#### Çoklu takma ad ekleme <Badge type="warning" text="new" />

```
!acmda [komut_adı] [komut_takma_adları (boşluk bırakarak)]
```

::: details Örnek Kullanım

```
!acmda senchabot senchabot-link senchabot-github senchabot-app
```

:::

### Takma Ad Silme

```
!dcmda [komut_takma_adı]
```

::: details Örnek Kullanım

```
!dcmda senchabot-link
```

:::

#### Çoklu takma ad silme <Badge type="danger" text="planned | not active"/>

```
!dcmda [komut_takma_adları (boşluk bırakarak)]
```

::: details Örnek Kullanım

```
!dcmda senchabot-link senchabot-github
```

:::

## Kanal Komutlarına Erişim

```
!cmds
```

::: details Örnek Yanıt

```
Senchabot's Channel Commands: senchabot, senchabot-site.
```

:::
