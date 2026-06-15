---
title: Discord Botu — Tetikleyiciler
description: "Senchabot Discord botu için kanal mesaj tetikleyicileri: eşleşme tipleri, izinler, yanıt eylemleri, değişkenler ve bekleme süreleri."
---

# Discord Botu — Tetikleyiciler <Badge type="warning" text="NEW"/>

Tetikleyiciler, panodan yapılandırdığınız mesaj tabanlı kurallardır. Botun
görebildiği bir kanaldaki mesaj kuralınızla eşleştiğinde bot, seçtiğiniz
eylemi tetikler — samimi bir yanıttan tetikleyen mesajı silmeye veya başka
bir özel komutu çalıştırmaya kadar her şey olabilir.

Tetikleyiciler sunucu (Discord guild) başına yönetilir. Botun görebildiği
kanallardaki her mesaja karşı sırayla değerlendirilirler; izin ve bekleme
süresi kontrollerini geçen ilk eşleşen tetikleyici çalışır.

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

| Seviye         | Kim tetikleyebilir                                                |
|----------------|-------------------------------------------------------------------|
| `everyone`     | tüm sunucu üyeleri                                                |
| `subscriber`   | sunucu boostçuları, modlar, yöneticiler ve sunucu sahibi          |
| `vip`          | VIP rolüne sahip kullanıcılar, modlar, yöneticiler ve sunucu sahibi |
| `moderator`    | modlar, yöneticiler ve sunucu sahibi                              |
| `broadcaster`  | yalnızca sunucu sahibi (kanalı oluşturan kişi)                    |

## Yanıt eylemleri

| Eylem                  | Etki                                                                 |
|------------------------|----------------------------------------------------------------------|
| `reply`                | yanıt metnini aynı kanalda yazar                                       |
| `dm`                   | yanıt metnini tetikleyen kullanıcıya DM olarak gönderir               |
| `run_command`          | ada göre özel bir komutu çalıştırır (yanıt metni komut adıdır, varsa baştaki `!` kaldırılır) |
| `delete_message`       | tetikleyen mesajı siler                                               |

::: warning Discord'da Moderasyon Eylemleri
Paylaşılan tetikleyici motorundaki `increment_counter`, `timeout_user` ve
`ban_user` eylemleri Discord'da ayrılmıştır. Yapılandırma arayüzü tarafından
kabul edilir ancak şu anda sunucuda herhangi bir moderasyon gerçekleştirmez.
Bir kullanıcıyı moderasyona almak istiyorsanız, Discord'un yerel moderasyon
araçlarını kullanın (sağ tıkla → Zaman Aşımı / At / Yasakla) — bot bunu
sizin için bir tetikleyiciden yapmaz.
:::

`delete_message` eylemi, botun kanalda **Mesajları Yönet** iznine sahip
olmasını gerektirir.

## Değişkenler

Yanıt metninde bu yer tutucuları kullanabilirsiniz — tetikleyici çalıştığında
değiştirilirler:

- `{user}` / `{user.name}` / `{user_name}` — tetikleyen üyenin görünen adı
- `{message}` — tetikleyen mesajın tamamı

## Bekleme süresi

Kullanıcı başına bekleme süresini saniye cinsinden ayarlayın. Devre dışı
bırakmak için `0` yapın. Bekleme süresi anahtarı `(tetikleyici, kullanıcı,
kanal)` biçimindedir; yani iki üye kendi bekleme sürelerinin ötesinde
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
**Panel → `<platform>` → `<sunucu>` → Moderasyon**
(`/dashboard/discord/<sunucu-id>/moderation`) adresinde bulunur. Bu sayfa iki
bölüm sunar:

- **Moderasyon Hazır Ayarları** — açıp kapatabileceğiniz hazır kurallar.
  Etkinleştirildiğinde, her hazır ayar yerleşik bir tetikleyici gibi
  davranır ve suçlu mesaj için `delete_message` eylemini tetikler.
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
bir kelimeyi içeren her mesaj bot tarafından otomatik olarak silinir.

### Tetikleyici hazır ayarları

Tetikleyici Hazır Ayarları bölümü, hazır tetikleyici kurallarından oluşan
bir galeridir (spam filtreleri, bağlantı filtreleri, raid-koruma vb.). Bir
hazır ayarı etkinleştirmek onu normal bir tetikleyici olarak ekler; ardından
diğer tetikleyiciler gibi düzenleyebilir, klonlayabilir veya devre dışı
bırakabilirsiniz.

::: bilgi Discord'daki eylem farkları
Discord yürütücüsü paylaşılan tetikleyici eylemlerinden yalnızca
`delete_message`'ı bağlar. Bu nedenle moderasyon hazır ayarları, suçlu
kullanıcıyı zaman aşımına uğratmak veya yasaklamak yerine suçlu mesajı
siler. `delete_message` eylemi botun kanalda **Mesajları Yönet** iznine
sahip olmasını gerektirir.
:::

::: ipucu Hazır ayarları özel tetikleyicilerle birleştirme
Moderasyon hazır ayarları özel tetikleyicilerden bağımsızdır. "Bağlantılar"
hazır ayarını kapatıp `contains` `http` eşleşmeli kendi tetikleyicinizi
eklerseniz, durumu tetikleyiciniz ele alır.
:::
