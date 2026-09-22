---
title: Discord Botu — Tetikleyiciler
description: "Senchabot Discord botu için kanal mesaj tetikleyicileri: eşleşme tipleri, izinler, yanıt eylemleri, değişkenler ve bekleme süreleri."
---

# Discord Botu — Tetikleyiciler <Badge type="warning" text="GÜNCELLENDİ"/>

Tetikleyiciler, panodan yapılandırdığınız mesaj tabanlı kurallardır (**Panel → Discord → `<sunucu>` → Tetikleyiciler**). Botun görebildiği bir kanaldaki mesaj kuralınızla eşleştiğinde bot, seçtiğiniz eylemi tetikler — samimi bir yanıttan tetikleyen üyeye özel mesaj göndermeye, başka bir özel komutu çalıştırmaya veya kuralı ihlal eden mesajı silmeye kadar her şey olabilir.

Tetikleyiciler sunucu (Discord guild) başına yönetilir. Botun görebildiği kanallardaki her mesaja karşı sırayla değerlendirilirler; izin ve bekleme süresi kontrollerini geçen ilk eşleşen tetikleyici çalışır.

## Ne zaman çalışsın?

Discord'da tetikleyiciler sohbet mesajlarını dinler:

| Ne zaman çalışsın? | Tetiklenme Koşulu | Yapılandırma / Eşleşme Değeri |
|---|---|---|
| **Sohbette mesaj gönderildiğinde** | Bir üye botun gördüğü bir kanalda kuralınızla eşleşen bir mesaj gönderdiğinde | Eşleşme türü seçilir ve eşleşme değeri girilir |

::: info Discord olay kaynakları
Yayın olayları (yayın süresi, kategori değişiklikleri veya yayın başlangıç/bitiş olayları) yayın platformları (Twitch ve Kick) için tasarlanmıştır ve Discord sunucularında geçerli değildir.
:::

## Eşleşme türleri

| Eşleşme türü | Eşleşme koşulu |
|---|---|
| **Tam eşleşirse** | mesajın tamamı değerinize eşit olduğunda |
| **İçerirse** | mesaj değerinizi içerdiğinde |
| **Kelime eşleşmesi** | değer bağımsız bir bütün kelime olarak geçtiğinde (kelime sınırı) |
| **İle başlarsa** | mesaj değerinizle başladığında |
| **İle biterse** | mesaj değerinizle bittiğinde |
| **Komut** | kırpılmış mesaj `!` ve ardından komut adınızla başladığında (örn. `kurallar` değeri hem `!kurallar` hem de `!kurallar genel` ile eşleşir) |
| **Düzenli İfade** | düzenli ifade kalıbı mesajla eşleştiğinde |

### Büyük/küçük harf duyarlılığı ve regex

- Metin eşleştirmeleri (**Tam eşleşirse**, **İçerirse**, **Kelime eşleşmesi**, **İle başlarsa**, **İle biterse**, **Komut**) varsayılan olarak **büyük/küçük harf duyarsızdır**. Karşılaştırmayı harfi harfine yapmak için **"Büyük/küçük harf duyarlı"** seçeneğini işaretleyebilirsiniz.
- **Düzenli İfade (Regex) eşleştirmesi**: Regex kalıpları yazıldığı gibi tam olarak eşleşir (varsayılan olarak büyük/küçük harfe duyarlıdır). Regex kalıbının küçük harfe dönüştürülmesi karakter sınıflarını (ör. `[A-Z]`) ve kaçış dizilerini (ör. `\S`) bozacağından, regex tetikleyicileri her zaman harfi harfine değerlendirilir ve büyük/küçük harf onay kutusu kilitlenir. Regex desenini büyük/küçük harfe duyarsız yapmak için kalıbın başına `(?i)` ekleyin (örn. `(?i)merhaba`).

## İzinler

| İzin | Kim tetikleyebilir |
|---|---|
| **Herkes** | Tüm sunucu üyeleri |
| **Abone** | Sunucu boostçuları, modlar, yöneticiler ve sunucu sahibi |
| **VIP** | VIP rolüne sahip kullanıcılar, modlar, yöneticiler ve sunucu sahibi |
| **Moderatör** | Modlar, yöneticiler ve sunucu sahibi |
| **Yayıncı** | Yalnızca sunucu sahibi (sunucu kurucusu) |

## Yanıt eylemleri

| Eylem | Etki |
|---|---|
| **Sohbette yanıtla** | Yanıt metnini aynı kanalda yazar |
| **Özel Mesaj Gönder** | Yanıt metnini tetikleyen üyeye özel mesaj (DM) olarak gönderir |
| **Komut çalıştır** | Ada göre özel bir komutu çalıştırır (yanıt metni komut adıdır, varsa baştaki `!` kaldırılır) |
| **Mesajı sil** | Tetikleyen mesajı siler (**Mesajları Yönet** izni gerektirir) |

::: warning Discord'da moderasyon ve yayın eylemleri
Paylaşılan tetikleyici motorundaki **Sayacı artır**, **Kullanıcıya zaman aşımı**, **Kullanıcıyı banla** ve yayın meta verisi eylemleri (**Yayın Kategorisini Güncelle**, **Yayın Etiketlerini Güncelle**, **Yayın Başlığını, Etiketlerini ve Kategorisini Güncelle**) yayın platformlarına yöneliktir veya Discord'da ayrılmıştır. Discord'da bir üyeye mesaj silmenin ötesinde ceza uygulamak istiyorsanız Discord'un yerel moderasyon araçlarını veya bot moderasyon komutlarını kullanın.
:::

**Mesajı sil** eylemi, botun kanalda **Mesajları Yönet** iznine sahip olmasını gerektirir.

## Değişkenler

Yanıt metninde bu yer tutucuları kullanabilirsiniz — tetikleyici çalıştığında dinamik olarak değiştirilirler:

- `{user}` / `{user.name}` / `{user_name}` — tetikleyen üyenin görünen adı
- `{channel}` — mesajın gönderildiği kanalın adı
- `{message}` — tetikleyen mesajın tam içeriği

## Bekleme süresi

Kullanıcı başına bekleme süresini saniye cinsinden ayarlayın. Devre dışı bırakmak için `0` yapın. Bekleme süresi anahtarı `(tetikleyici, kullanıcı, kanal)` biçimindedir; yani iki üye kendi bekleme sürelerinin ötesinde birbirini engellemeden aynı tetikleyiciyi paralel olarak tetikleyebilir.

## Örnekler

Aşağıda Discord'da desteklenen yanıt eylemleri için pratik yapılandırma örnekleri yer almaktadır:

### Sohbette mesaj gönderildiğinde

| Yanıt Eylemi | Eşleşme Türü ve Değeri | Ek Ayarlar | Davranış / Örnek Yanıt Metni |
|---|---|---|---|
| **Sohbette yanıtla** | **İçerirse**: `kurallar` | — | Yanıt metni: `Lütfen sunucu kurallarımızı #kurallar kanalından inceleyin!` (Kuralları soranları yönlendirir) |
| **Özel Mesaj Gönder** | **Komut**: `baslangic` | Kim tetikleyebilir: **Herkes** | Yanıt metni: `Sunucumuza hoş geldin {user}! Başlangıç rehberin: https://discord.gg/rehber` (Özel mesajla rehber gönderir) |
| **Komut çalıştır** | **Tam eşleşirse**: `!yardim` | — | Yanıt metni: `rehber` (`!yardim` yazıldığında bot `!rehber` komutunu çalıştırır) |
| **Mesajı sil** | **Düzenli İfade**: `(?i)discord\.gg\/(?!ozelsunucu)` | — | Yanıt metni: `@{user} İzinsiz Discord davet bağlantıları paylaşmak yasaktır.` (Davet bağlantısını siler ve uyarı yazar) |

## Önbellek

Tetikleyici listeleri kanal başına **30 saniye** önbelleğe alınır; panel üzerinden yapılan düzenlemeler önbelleği anında geçersiz kılar, böylece kaydetmeler gecikmeden bota yansır.

## Çapraz platform

Paylaşılan bir kanal için yapılandırılan bir tetikleyici, kanalın kayıtlı olduğu her platforma uygulanır. Bu nedenle aynı tetikleyici, tek bir panel girişinden Twitch, Kick ve Discord'daki sohbet mesajlarını eşleştirebilir.
