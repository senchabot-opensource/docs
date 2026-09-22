---
title: Twitch Botu — Tetikleyiciler
description: "Senchabot Twitch botu için tetikleyiciler: sohbet mesajları ve yayın olayları, eşleşme tipleri, izinler ve denetim hedef kitleleri, yanıt eylemleri, değişkenler ve bekleme süreleri."
---

# Twitch Botu — Tetikleyiciler <Badge type="warning" text="GÜNCELLENDİ"/>

Tetikleyiciler, panodan yapılandırdığınız otomatik kurallardır (**Panel → Twitch → `<kanal>` → Tetikleyiciler**). Bir **sohbet mesajı** kuralınızla eşleştiğinde veya **yayın olayları** gerçekleştiğinde (yayın başlangıcı, belirli bir yayın süresine ulaşılması, kategori değişikliği veya yayın bitişi) çalışabilirler.

Bir tetikleyici çalıştığında bot, seçtiğiniz eylemi tetikler — sohbette yanıt vermekten özel bir komut çalıştırmaya, yayın kategorisini/etiketlerini güncellemeye, kullanıcıyı zaman aşımına uğratmaya, mesaj silmeye veya kalıcı yasaklamaya kadar her şey olabilir.

Tetikleyiciler kanal başına sırayla değerlendirilir; izin ve bekleme süresi kontrollerini geçen ilk eşleşen tetikleyici çalışır.

## Ne zaman çalışsın?

Bir tetikleyici oluştururken veya düzenlerken, **Ne zaman çalışsın?** alanı olay kaynağını belirler:

| Ne zaman çalışsın? | Tetiklenme Koşulu | Yapılandırma / Eşleşme Değeri |
|---|---|---|
| **Sohbette mesaj gönderildiğinde** | Bir izleyici sohbette kuralınızla eşleşen bir mesaj gönderdiğinde | Eşleşme türü seçilir ve eşleşme değeri girilir |
| **Yayın belirli bir süreye ulaştığında** | Canlı yayın oturumu boyunca yayın belirli bir süreye ulaştığında bir kez | Süre `SS:DD` biçiminde girilir (ör. `02:00`). Minimum: 1 dakika, maksimum: 7 gün (`168:00` / 10.080 dakika) |
| **Yayın kategorisi değiştiğinde** | Canlı yayın sırasında yayının kategorisi değiştiğinde | Yeni kategori adı (örn. `Just Chatting`) veya tüm kategoriler için `*` girilir |
| **Yayın başladığında** | Yayın canlıya geçtiğinde bir kez | Yayın başladığında otomatik olarak çalışır |
| **Yayın bittiğinde** | Yayın sona erdiğinde bir kez | Yayın bittiğinde otomatik olarak çalışır |

::: tip Yayın olayı tetikleyicileri
Yayın olayı tetikleyicileri (**Yayın belirli bir süreye ulaştığında**, **Yayın kategorisi değiştiğinde**, **Yayın başladığında**, **Yayın bittiğinde**) otomatik olarak yayıncı yetkisiyle çalışır ve kullanıcı bekleme süresi gerektirmez.
:::

## Eşleşme türleri

Sohbet mesajı tetikleyicileri için aşağıdaki eşleşme türleri mevcuttur:

| Eşleşme türü | Eşleşme koşulu |
|---|---|
| **Tam eşleşirse** | mesajın tamamı değerinize eşit olduğunda |
| **İçerirse** | mesaj değerinizi içerdiğinde |
| **Kelime eşleşmesi** | değer bağımsız bir bütün kelime olarak geçtiğinde (kelime sınırı) |
| **İle başlarsa** | mesaj değerinizle başladığında |
| **İle biterse** | mesaj değerinizle bittiğinde |
| **Komut** | kırpılmış mesaj `!` ve ardından komut adınızla başladığında (örn. `selam` değeri hem `!selam` hem de `!selam herkese` ile eşleşir) |
| **Düzenli İfade** | düzenli ifade kalıbı mesajla eşleştiğinde |

### Büyük/küçük harf duyarlılığı ve regex

- Metin eşleştirmeleri (**Tam eşleşirse**, **İçerirse**, **Kelime eşleşmesi**, **İle başlarsa**, **İle biterse**, **Komut**) varsayılan olarak **büyük/küçük harf duyarsızdır**. Karşılaştırmayı harfi harfine yapmak için **"Büyük/küçük harf duyarlı"** seçeneğini işaretleyebilirsiniz.
- **Düzenli İfade (Regex) eşleştirmesi**: Regex kalıpları yazıldığı gibi tam olarak eşleşir (varsayılan olarak büyük/küçük harfe duyarlıdır). Regex kalıbının küçük harfe dönüştürülmesi karakter sınıflarını (ör. `[A-Z]`) ve kaçış dizilerini (ör. `\S`) bozacağından, regex tetikleyicileri her zaman harfi harfine değerlendirilir ve büyük/küçük harf onay kutusu kilitlenir. Regex desenini büyük/küçük harfe duyarsız yapmak için kalıbın başına `(?i)` ekleyin (örn. `(?i)merhaba`).

## İzinler ve hedef kitle

İzin yapılandırması seçilen eyleme göre uyarlanır:

### Kimler tetikleyebilir (Standart eylemler)

Genel eylemler için (**Sohbette yanıtla**, **Özel Mesaj Gönder**, **Komut çalıştır**, **Sayacı artır**), izin ayarı tetikleyiciyi kimlerin çalıştırabileceğini belirler:

| İzin | Kimler tetikleyebilir |
|---|---|
| **Herkes** | Sohbetteki tüm izleyiciler |
| **Abone** | Aboneler, modlar ve yayıncı |
| **VIP** | VIP'ler, modlar ve yayıncı |
| **Moderatör** | Modlar ve yayıncı |
| **Yayıncı** | Yalnızca kanal sahibi |

### Yayın meta verisi eylemleri

Yayın ayarlarını değiştiren eylemler (**Yayın Kategorisini Güncelle**, **Yayın Etiketlerini Güncelle**, **Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle**) güvenilir kanal rolleriyle sınırlandırılmıştır: **VIP**, **Moderatör** veya **Yayıncı**. Normal izleyiciler ve standart aboneler bu tetikleyicileri çalıştıramaz.

### Denetimi uygula (Moderasyon eylemleri)

Bir moderasyon eylemi seçildiğinde (**Mesajı sil**, **Kullanıcıya zaman aşımı**, **Kullanıcıyı banla**), bu alan **"Denetimi uygula"** olarak değişir:

| Denetimi uygula | Hedef Kitle |
|---|---|
| **Herkes** | Kuralı tetikleyen tüm izleyicilere uygulanır |
| **Abone olmayanlar / gerekli abonelik ayının altındakiler** | Abone olmayanlara veya gerekli abonelik süresinin altındakilere uygulanır |

**Abone olmayanlar / gerekli abonelik ayının altındakiler** seçildiğinde:

- **Minimum abonelik ayı**: Varsayılan olarak `1` aydır (`1.200` aya kadar ayarlanabilir). Abone olmayan veya abonelik süresi bu değerin altında kalan izleyicilere moderasyon eylemi uygulanır.
- VIP statüsü bu moderasyon kontrolünü atlayamaz; yalnızca kanal **moderatörleri** ve **yayıncı** muaftır.

## Yanıt eylemleri

| Eylem | Etki |
|---|---|
| **Sohbette yanıtla** | Yanıt metnini sohbete yazar |
| **Özel Mesaj Gönder** | Yanıt metnini özel mesaj (DM) olarak gönderir |
| **Komut çalıştır** | Ada göre mevcut bir özel komutu çalıştırır (yanıt metni komut adıdır, `!` içerse de içermese de çalışır) |
| **Sayacı artır** | Kanalın tetikleyici sayacını artırır |
| **Mesajı sil** | Tetikleyen sohbet mesajını siler |
| **Kullanıcıya zaman aşımı** | Tetikleyen kullanıcıya yapılandırılabilir süreyle Twitch sohbet zaman aşımı uygular |
| **Kullanıcıyı banla** | Kullanıcıyı kanaldan kalıcı olarak yasaklar |
| **Yayın Kategorisini Güncelle** | Kanalın oyununu/kategorisini değiştirir |
| **Yayın Etiketlerini Güncelle** | Kanalın yayın etiketlerini değiştirir (virgülle ayrılmış liste) |
| **Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle** | Yayın kategorisini, etiketlerini ve yayın başlığını tek işlemde günceller |

### Moderasyon seçenekleri ve uyarı mesajları

- **Yapılandırılabilir zaman aşımı süresi**: **Kullanıcıya zaman aşımı** seçildiğinde süreyi dakika cinsinden belirleyebilirsiniz (**1 ile 10.080 dakika / 7 güne kadar**; varsayılan: 1 dakika).
- **Sohbette moderasyon uyarısı**: **Kullanıcıya zaman aşımı** veya **Mesajı sil** eylemleri için bir yanıt metni girerseniz, bot işlem uygulandığında bu yanıt metnini sohbete bir uyarı/bilgilendirme mesajı olarak yazar.
- Moderasyon eylemleri, botun Twitch kanalınızda moderatör yetkisine sahip olmasını gerektirir.

### Yayın meta verisi eylemleri

Yayın meta verisi tetikleyicileri, Twitch yayın ayrıntılarınızı sohbet komutlarından veya yayın olaylarından otomatik olarak güncellemenize olanak tanır:

- **Yayın Kategorisi**: Yeni oyun veya kategori adını belirleyin (ör. `Just Chatting`).
- **Yayın Etiketleri**: Virgülle ayrılmış etiketleri girin (ör. `Türkçe, Hızlı Koşu`).
- **Dinamik başlık ve varsayılan başlık**: **Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle** bir **Komut** (ör. `!oyun <başlık>`) tarafından tetiklendiğinde, komuttan sonra yazılan metin yayın başlığı olarak uygulanır. Komuttan sonra bir başlık yazılmamışsa, yapılandırılan **Yayın Varsayılan Başlığı** devreye girer.

### Olay kaynağına göre desteklenen eylemler

- **Sohbette mesaj gönderildiğinde**: Sohbette yanıtla, Özel Mesaj Gönder, Komut çalıştır, Sayacı artır, Mesajı sil, Kullanıcıya zaman aşımı, Kullanıcıyı banla, Yayın Kategorisini Güncelle, Yayın Etiketlerini Güncelle, Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle.
- **Yayın belirli bir süreye ulaştığında / Yayın başladığında / Yayın bittiğinde**: Sohbette yanıtla, Komut çalıştır, Sayacı artır, Yayın Kategorisini Güncelle, Yayın Etiketlerini Güncelle, Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle.
- **Yayın kategorisi değiştiğinde**: Sohbette yanıtla, Sayacı artır, Yayın Etiketlerini Güncelle, Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle.

## Değişkenler

Yanıt metninde bu yer tutucuları kullanabilirsiniz — tetikleyici çalıştığında dinamik olarak değiştirilirler:

- `{user}` / `{user.name}` / `{user_name}` — tetikleyen izleyicinin görünen adı
- `{channel}` — kanal adı
- `{message}` — tetikleyen sohbet mesajının tam içeriği

## Bekleme süresi

Sohbet tetikleyicileri için kullanıcı başına bekleme süresini saniye cinsinden ayarlayın. Devre dışı bırakmak için `0` yapın. Bekleme süresi anahtarı `(tetikleyici, kullanıcı, kanal)` biçimindedir; yani izleyiciler birbirini engellemeden aynı tetikleyiciyi paralel olarak kullanabilir.

Yayın olayı tetikleyicileri olay/oturum başına bir kez çalışır ve kullanıcı bekleme süresi kullanmaz.

## Örnekler

Aşağıda her olay kaynağı ve yanıt eylemi kombinasyonu için pratik yapılandırma örnekleri yer almaktadır.

### 1. Sohbette mesaj gönderildiğinde

| Yanıt Eylemi | Eşleşme Türü ve Değeri | Ek Ayarlar | Davranış / Örnek Yanıt Metni |
|---|---|---|---|
| **Sohbette yanıtla** | **İçerirse**: `discord` | — | Yanıt metni: `Topluluk Discord sunucumuza katılın: https://discord.gg/ornek` (Biri sohbette Discord'dan bahsettiğinde yanıt verir) |
| **Özel Mesaj Gönder** | **Komut**: `vipbilgi` | Kimler tetikleyebilir: **VIP** | Yanıt metni: `Selam {user}! Özel VIP ayrıcalık bağlantınız: https://example.com/vip` |
| **Komut çalıştır** | **Tam eşleşirse**: `!sosyal` | — | Yanıt metni: `linkler` (Biri `!sosyal` yazdığında mevcut `!linkler` komutunu çalıştırır) |
| **Sayacı artır** | **Komut**: `olum` | Kimler tetikleyebilir: **Moderatör** | `!olum` her yazıldığında kanalın ölüm sayacını 1 artırır |
| **Mesajı sil** | **Düzenli İfade**: `(?i)https?://\S+` | Denetimi uygula: **Abone olmayanlar / gerekli abonelik ayının altındakiler** (1 ay) | Yanıt metni: `@{user} Bağlantı paylaşımı yalnızca abonelere açıktır.` (Bağlantıyı siler ve uyarı yazar) |
| **Kullanıcıya zaman aşımı** | **Kelime eşleşmesi**: `yasaklikelime` | Zaman aşımı süresi: `10` dk | Yanıt metni: `@{user} Uygunsuz dil kullanımı yasaktır. 10 dakika zaman aşımı uygulandı.` |
| **Kullanıcıyı banla** | **Düzenli İfade**: `(?i)(takipci satin al|ucuz izleyici)` | Denetimi uygula: **Herkes** | Otomatik takipçi botu spamı yapanları tespit edip kanaldan kalıcı olarak yasaklar |
| **Yayın Kategorisini Güncelle** | **Komut**: `sohbet` | Kimler tetikleyebilir: **Moderatör** | Yayın Kategorisi: `Just Chatting` (`!sohbet` komutuyla kategoriyi Just Chatting yapar) |
| **Yayın Etiketlerini Güncelle** | **Komut**: `etiketler` | Kimler tetikleyebilir: **Moderatör** | Yayın Etiketleri: `Türkçe, Dereceli, FPS` (`!etiketler` komutuyla etiketleri günceller) |
| **Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle** | **Komut**: `oyun` | Kimler tetikleyebilir: **Moderatör** | Yayın Kategorisi: `Valorant`, Yayın Etiketleri: `FPS, Rekabetçi`, Yayın Varsayılan Başlığı: `Valorant yayını!` (`!oyun Dereceli tırmanış` yazıldığında başlığı "Dereceli tırmanış", kategoriyi Valorant ve etiketleri otomatik günceller) |

### 2. Yayın belirli bir süreye ulaştığında

| Yanıt Eylemi | Yayın Süresi | Ek Ayarlar | Davranış / Örnek Yanıt Metni |
|---|---|---|---|
| **Sohbette yanıtla** | `01:00` | — | Yanıt metni: `1 saattir yayındayız! Su içmeyi ve esnemeyi unutmayın! 💧` |
| **Komut çalıştır** | `02:00` | — | Yanıt metni: `discord` (Yayın 2 saate ulaştığında otomatik olarak `!discord` komutunu çalıştırır) |
| **Sayacı artır** | `03:00` | — | Yayın 3 saate ulaştığında yayın aşama sayacını artırır |
| **Yayın Kategorisini Güncelle** | `02:30` | Yayın Kategorisi: `Just Chatting` | Yayın ortasında mola için kategoriyi otomatik olarak Just Chatting yapar |
| **Yayın Etiketlerini Güncelle** | `04:00` | Yayın Etiketleri: `Gece Yayını, Dayanıklılık, Sohbet` | 4. saatte gece izleyicilerini hedefleyen etiketleri ayarlar |
| **Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle** | `02:00` | Kategori: `IRL`, Etiketler: `Yemek, Topluluk`, Varsayılan Başlık: `Yemek bölümü başlıyor!` | Planlı bir yemek/sohbet bölümü için kategori, etiket ve başlığı günceller |

### 3. Yayın kategorisi değiştiğinde

| Yanıt Eylemi | Yeni Yayın Kategorisi | Ek Ayarlar | Davranış / Örnek Yanıt Metni |
|---|---|---|---|
| **Sohbette yanıtla** | `*` (Tüm kategoriler) | — | Yanıt metni: `Yayın kategorisi {message} olarak değiştirildi! Yeni katılanlar hoş geldi! 🎉` |
| **Sayacı artır** | `*` (Tüm kategoriler) | — | Yayında her kategori değişiminde "oynanan oyunlar" sayacını artırır |
| **Yayın Etiketlerini Güncelle** | `Valorant` | Yayın Etiketleri: `FPS, Rekabetçi, Dereceli` | Kategori Valorant yapıldığında FPS ve rekabetçi etiketlerini uygular |
| **Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle** | `Just Chatting` | Kategori: `Just Chatting`, Etiketler: `Sohbet, Soru Cevap`, Varsayılan Başlık: `Sohbet ve Soru-Cevap` | Kategori Just Chatting yapıldığında başlık ve etiketleri otomatik senkronize eder |

### 4. Yayın başladığında

| Yanıt Eylemi | Ek Ayarlar | Davranış / Örnek Yanıt Metni |
|---|---|---|
| **Sohbette yanıtla** | — | Yanıt metni: `Yayın başladı! Hoş geldiniz, arkanıza yaslanın ve keyfini çıkarın! 🚀` |
| **Komut çalıştır** | Yanıt metni: `sosyal` | Yayın açılır açılmaz sohbette `!sosyal` komutunu çalıştırır |
| **Sayacı artır** | — | Canlıya geçildiğinde toplam yayın sayacını 1 artırır |
| **Yayın Kategorisini Güncelle** | Yayın Kategorisi: `Just Chatting` | Her yayın başlangıcında kategoriyi otomatik olarak Just Chatting'e sıfırlar |
| **Yayın Etiketlerini Güncelle** | Yayın Etiketleri: `Türkçe, Başlıyor, Sohbet` | Yayın başlarken başlangıç ekranı etiketlerini ayarlar |
| **Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle** | Kategori: `Just Chatting`, Etiketler: `Türkçe, Sohbet`, Varsayılan Başlık: `Yayın başlıyor! / Bir şeyler alıp gelin` | Yayın başlangıcında başlık, kategori ve etiketleri açılış durumuna getirir |

### 5. Yayın bittiğinde

| Yanıt Eylemi | Ek Ayarlar | Davranış / Örnek Yanıt Metni |
|---|---|---|
| **Sohbette yanıtla** | — | Yanıt metni: `Bugünkü yayını izlediğiniz için teşekkürler! Sosyal medyadan takip etmeyi unutmayın, görüşmek üzere! ❤️` |
| **Komut çalıştır** | Yanıt metni: `sosyal` | Yayın kapandığında sohbete sosyal bağlantıları gönderir |
| **Sayacı artır** | — | Tamamlanan yayın sayacını artırır |
| **Yayın Kategorisini Güncelle** | Yayın Kategorisi: `Just Chatting` | Yayın bittiğinde kategoriyi Just Chatting'e sıfırlar |
| **Yayın Etiketlerini Güncelle** | Yayın Etiketleri: `Çevrim Dışı, Topluluk` | Etiketleri çevrim dışı durumuna günceller |
| **Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle** | Kategori: `Just Chatting`, Etiketler: `Çevrim Dışı, Tekrar`, Varsayılan Başlık: `Yayın bitti! Katıldığınız için teşekkürler!` | Çevrim dışı izleyicilerin güncel bilgileri görmesi için başlığı ve kategoriyi ayarlar |

## Önbellek

Tetikleyici listeleri kanal başına **30 saniye** önbelleğe alınır; panel üzerinden yapılan düzenlemeler önbelleği anında geçersiz kılarak değişikliklerin gecikmeden yansımasını sağlar.

## Çapraz platform

Paylaşılan bir kanal için yapılandırılan bir tetikleyici, desteklendiği tüm bağlı platformlarda (Twitch, Kick, Discord) geçerlidir.

## Moderasyon

Kullanıma hazır otomatik moderasyon ön ayarları (**BÜYÜK HARF Tespiti**, abone muafiyetli **Link Engelleyici** ve **Tekrarlayan İhlallerde Zaman Aşımı**) için özel [Moderasyon](/tr/twitch-bot/moderation) kılavuzuna göz atın.
