---
title: Twitch Botu — Şarkı İstekleri
description: Twitch sohbetinden gelen şarkı isteklerini manuel veya Spotify otomatik oynatma modlarıyla yönetin.
---

# Şarkı İstekleri <Badge type="warning" text="NEW"/>

Şarkı İstekleri sistemi, izleyicilerin sohbet üzerinden şarkı istemesine olanak tanır. İki mod destekler:

- **Manuel Mod** (ücretsiz) — Şarkılar dashboard'da yönettiğiniz bir kuyruğa kaydedilir. Canlı yayında çalgı çalıp şarkı söyleyen müzisyenler için idealdir.
- **Spotify Modu** (Pro) — Şarkılar otomatik olarak Spotify'da aranır ve çalma sırasına eklenir veya oynatılır.

## Komutlar

| Komut | Yanıt |
| :-- | :-- |
| `!songreq` `!songrequest` | Şarkı iste. Kullanım: `!songreq Şarkı Adı - Sanatçı` |
| `!songskip` | Mevcut şarkıyı atla (yalnızca yayıncı/moderatör). |

## Manuel Mod

Manuel modda, şarkı istekleri veritabanına kaydedilir ve dashboard'da görünür. Kuyruğu görüntüleyebilir, şarkıları tamamlandı olarak işaretleyebilir, atlayabilir veya istekleri silebilirsiniz.

Bu mod, canlı yayında çalgı çalıp şarkı söyleyen müzisyenler için idealdir — izleyiciler şarkı ister ve siz kuyruğu manuel olarak yönetirsiniz.

```
!songreq Loving This Moment - Gamma Skies
```

::: details Örnek Kullanım

Kullanıcı Mesajı

```
!songreq Radiant - Harris Heller
```

Senchabot'un Yanıtı

```
İsteğiniz kuyruğa eklendi.
```

*İsteği dashboard kuyruğuna kaydeder.*
:::

## Spotify Modu <Badge type="tip" text="Pro" />

Spotify modu, istenen şarkıyı otomatik olarak Spotify'da arar ve oynatmaya veya kuyruğa eklemeye çalışır.

Gereksinimler:
- Pro plan aboneliği
- Dashboard ayarlarında bağlı Spotify hesabı
- Açık ve aktif Spotify uygulaması

```
!songreq Şarkı Adı - Sanatçı
```

::: details Örnek Kullanım

Kullanıcı Mesajı

```
!songreq Beauty In The Mundane - Bird Of Figment
```

Senchabot'un Yanıtı (oynatılıyorsa)

```
İsteğiniz Spotify'da oynatılıyor.
```

*Spotify'da arama yapar ve oynatmayı başlatır.*

Senchabot'un Yanıtı (sıraya alındıysa)

```
İsteğiniz Spotify kuyruğuna eklendi.
```

*Spotify'da arama yapar ve kuyruğa ekler.*
:::

::: tip Spotify Yapılandırılmadıysa?
Spotify modu etkinleştirilmiş ancak Spotify hesabı bağlı değilse, istek yine de veritabanına `failed` durumuyla kaydedilir. İzleyiciler isteği dashboard'da görebilir ve siz yine de manuel olarak yönetebilirsiniz.
:::

## Dashboard

Kuyruğu gerçek zamanlı olarak yönetmek için dashboard'daki **Şarkı İstekleri** sayfasını ziyaret edin:

- Şarkı adı, sanatçı, isteyen, mod ve durum bilgisiyle tüm istekleri görüntüleme
- Duruma göre filtreleme: Tümü, Bekleyen, Oynatılan, Sıradaki, Tamamlandı, Atlandı, Başarısız
- **Tamamlandı** — şarkıyı tamamlandı olarak işaretleme
- **Atla** — mevcut şarkıyı atlama (durumu `atlandı` yapar)
- **Sil** — isteği kuyruktan kalıcı olarak kaldırma

Dashboard 2 saniyede bir canlı yoklama ile güncellenir.

### Durum Anlamları

| Durum | Anlamı |
| :-- | :-- |
| `pending` | İstek alındı, oynatılmayı bekliyor (manuel mod) |
| `playing` | Şarkı şu anda oynatılıyor (Spotify modu) |
| `queued` | Şarkı Spotify kuyruğunda (Spotify modu) |
| `done` | Şarkı tamamlandı (dashboard'dan manuel işaretlendi) |
| `skipped` | Şarkı atlandı (`!songskip` veya dashboard ile) |
| `failed` | Spotify oynatma başarısız oldu, ancak istek kaydedildi |

## Yapılandırma

Kanalınızın **Ayarlar → Genel** bölümünde:

| Ayar | Açıklama |
| :-- | :-- |
| Şarkı İsteği Komutu | `!songreq` komutunu etkinleştir veya devre dışı bırak |
| Şarkı İstekleri: Yalnızca Aboneler | Abonelere ve moderatörlere kısıtla |
| Şarkı İstekleri: Kanal Puanı Gerektir | Kanal puanı ile kullanıma izin ver (yalnızca Twitch) |
| Spotify Otomatik Oynatma | Spotify ve Manuel mod arasında geçiş yap (Spotify için Pro gerekir) |
| Şarkı İsteği Kullanıcı Bekleme Süresi | Kullanıcı başına bekleme süresi (saniye) |
| Şarkı İsteği Genel Bekleme Süresi | Kanal geneli bekleme süresi (saniye) |
| Kullanıcı Başına Maksimum Bekleyen İstek | Kullanıcı başına aktif istek limiti (varsayılan: 1) |

## İzinler

| Eylem | Kimler Kullanabilir |
| :-- | :-- |
| `!songreq` / `!songrequest` | Herkes (abone-only ve kanal puanı ayarlarına uygun) |
| `!songskip` | Yalnızca yayıncı ve moderatörler |
| Tamamlandı / Atla / Sil | Dashboard (kanal sahibi) |

## Spam Koruması

Her kullanıcı aynı anda yapılandırılabilir sayıda **aktif şarkı isteği** sahip olabilir (varsayılan: 1). Aktif istekler `pending`, `playing` veya `queued` durumundaki isteklerdir. Kullanıcı, isteği `done`, `skipped` olarak işaretlenene veya silinene kadar yeni bir istek yapamaz.

::: info Bekleme Sistemi
Komut kullanım bekleme süresi kullanıcı başına 1 saniyedir. Şarkı istekleri için yapılandırılabilir kullanıcı başına ve genel bekleme süreleri vardır ve bu, genel komut bekleme süresinden ayrıdır.
:::
