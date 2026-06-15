---
title: Twitch Botu — Tetikleyiciler
description: "Senchabot Twitch botu için kanal mesaj tetikleyicileri: eşleşme tipleri, izinler, yanıt eylemleri (moderasyon dahil), değişkenler ve bekleme süreleri."
---

# Twitch Botu — Tetikleyiciler <Badge type="warning" text="NEW"/>

Tetikleyiciler, panodan yapılandırdığınız mesaj tabanlı kurallardır. Bir sohbet
mesajı kuralınızla eşleştiğinde bot, seçtiğiniz eylemi tetikler — samimi bir
yanıttan 10 dakikalık bir zaman aşımına, mesaj silmeye veya kalıcı bir
yasağa kadar her şey olabilir.

Tetikleyiciler kanal başına yönetilir. Her sohbet mesajına karşı sırayla
değerlendirilirler; izin ve bekleme süresi kontrollerini geçen ilk eşleşen
tetikleyici çalışır.

## Eşleşme tipleri

| Tür            | Eşleşme koşulu                                                |
|----------------|----------------------------------------------------------------|
| `exact`        | mesajın tamamı değerinize eşit                                |
| `contains`     | mesaj değerinizi içeriyor                                      |
| `word`         | değer bir bütün kelime olarak geçiyor (kelime sınırı)          |
| `starts_with`  | mesaj değerinizle başlıyor                                     |
| `ends_with`    | mesaj değerinizle bitiyor                                      |
| `regex`        | değerinize karşı Go `regexp.MatchString` başarılı             |
| `command`      | kırpılmış mesaj `!` ve ardından değerinizle başlıyor           |

Eşleşme varsayılan olarak **büyük/küçük harf duyarsızdır**. "Büyük/küçük harf
duyarlı" seçeneğini açarak karşılaştırmayı harfi harfine yapabilirsiniz
(`regex` türü her zaman büyük/küçük harf duyarlıdır ve desenin içine
gömülü bayraklara saygı gösterir).

## İzinler

| Seviye         | Kim tetikleyebilir                                       |
|----------------|----------------------------------------------------------|
| `everyone`     | tüm izleyiciler                                          |
| `subscriber`   | aboneler, modlar ve yayıncı                              |
| `vip`          | VIP'ler, modlar ve yayıncı                               |
| `moderator`    | modlar ve yayıncı                                        |
| `broadcaster`  | yalnızca kanal sahibi                                    |

## Yanıt eylemleri

| Eylem                  | Etki                                                                 |
|------------------------|----------------------------------------------------------------------|
| `reply`                | yanıt metnini sohbete yazar                                           |
| `dm`                   | yanıt metnini tetikleyen kullanıcıya DM olarak gönderir               |
| `run_command`          | ada göre özel bir komutu çalıştırır (yanıt metni komut adıdır)       |
| `increment_counter`    | kanalın komut sayacını artırır (`!counter` sistemi tarafından kullanılır) |
| `timeout_user`         | tetikleyen kullanıcıya 10 dakikalık Twitch zaman aşımı uygular        |
| `delete_message`       | tetikleyen mesajı siler                                               |
| `ban_user`             | kullanıcıyı kanaldan kalıcı olarak yasaklar                            |

Moderasyon eylemleri (`timeout_user`, `delete_message`, `ban_user`), botun
kanalınızda ilgili moderatör kapsamına sahip olmasını gerektirir.

## Değişkenler

Yanıt metninde bu yer tutucuları kullanabilirsiniz — tetikleyici çalıştığında
değiştirilirler:

- `{user}` / `{user.name}` / `{user_name}` — tetikleyen izleyicinin görünen adı
- `{message}` — tetikleyen mesajın tamamı

## Bekleme süresi

Kullanıcı başına bekleme süresini saniye cinsinden ayarlayın. Devre dışı
bırakmak için `0` yapın. Bekleme süresi anahtarı `(tetikleyici, kullanıcı,
kanal)` biçimindedir; yani iki izleyici kendi bekleme sürelerinin ötesinde
birbirini engellemeden aynı tetikleyiciyi paralel olarak tetikleyebilir.

## Önbellek

Tetikleyici listeleri kanal başına **30 saniye** önbelleğe alınır; panel
üzerinden yapılan düzenlemeler önbelleği anında geçersiz kılar, böylece
kaydetmeler TTL süresini beklemeden bota yansır.

## Çapraz platform

Paylaşılan bir kanal için yapılandırılan bir tetikleyici, kanalın kayıtlı
olduğu her platforma uygulanır. Bu nedenle aynı tetikleyici, tek bir panel
girişinden Twitch, Kick ve Discord'daki sohbet mesajlarını eşleştirebilir.

## Moderasyon

Otomatik moderasyon, panelde Tetikleyiciler'in yanında
**Panel → `<platform>` → `<kanal>` → Moderasyon**
(`/dashboard/twitch/<kanal-id>/moderation`) adresinde bulunur. Bu sayfa iki
bölüm sunar:

- **Moderasyon Hazır Ayarları** — açıp kapatabileceğiniz hazır kurallar.
  Etkinleştirildiğinde, her hazır ayar yerleşik bir tetikleyici gibi
  davranır ve suçlu mesaj için `delete_message` eylemini tetikler (desteklenen
  yerlerde tekrarlayan suçlular için `ban_user` da çalışır).
- **Tetikleyici Hazır Ayarları** — olduğu gibi etkinleştirebileceğiniz veya
  özel kurallar için başlangıç noktası olarak kullanabileceğiniz hazır
  tetikleyici kuralları.

### Moderasyon hazır ayarları

| Hazır Ayar            | Ne yakalanır                                                   |
|-----------------------|----------------------------------------------------------------|
| Tümü büyük harf       | ağırlıklı olarak büyük harflerden oluşan mesajlar              |
| Bağlantılar           | sohbette paylaşılan URL'ler                                    |
| Emote spam            | tekrarlanan emote'ların baskın olduğu mesajlar                  |
| Yinelenen mesajlar    | aynı mesajın yapılandırılan pencere içinde N kez gönderilmesi  |

**Yinelenen mesajlar** hazır ayarı için eşiği (tekrar sayısı, 2–10) ve
penceyi (kaç saniye geriye bakılacağı, 5–120) ayarlayabilirsiniz.

### Engellenen kelimeler

Moderasyon sayfası ayrıca bir **Engellenen kelimeler** listesi sunar — listedeki
bir kelimeyi içeren her mesaj bot tarafından otomatik olarak işlenir (silme
ve/veya zaman aşımı).

### Tetikleyici hazır ayarları

Tetikleyici Hazır Ayarları bölümü, hazır tetikleyici kurallarından oluşan
bir galeridir (spam filtreleri, bağlantı filtreleri, raid-koruma vb.). Bir
hazır ayarı etkinleştirmek onu normal bir tetikleyici olarak ekler; ardından
diğer tetikleyiciler gibi düzenleyebilir, klonlayabilir veya devre dışı
bırakabilirsiniz.

::: ipucu Hazır ayarları özel tetikleyicilerle birleştirme
Moderasyon hazır ayarları özel tetikleyicilerden bağımsızdır. "Bağlantılar"
hazır ayarını kapatıp `contains` `http` eşleşmeli kendi tetikleyicinizi
eklerseniz, durumu tetikleyiciniz ele alır.
:::
