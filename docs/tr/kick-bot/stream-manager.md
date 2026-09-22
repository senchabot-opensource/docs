---
title: Kick Botu — Yayın Yöneticisi
description: "Senchabot Kick Yayın Yöneticisi: Çoklu platform canlı sohbet, yayın bilgisi düzenleyici, etkinlik akışı, gelişmiş Sesli Okuma (TTS) ve moderasyon araçları."
---

# Kick Botu — Yayın Yöneticisi <Badge type="warning" text="YENİ"/>

**Yayın Yöneticisi**, Senchabot'un yayıncılar ve moderatörler için sunduğu gerçek zamanlı merkezi kontrol panelidir. Panele **Panel → Yayın Yöneticisi** (`/dashboard/stream-manager`) yolunu takip ederek erişebilirsiniz. Canlı sohbeti, yayın bilgilerini, etkinlik akışını ve moderasyon işlemlerini tek bir ekranda toplar.

İster yalnızca Kick'te yayın yapın, ister Kick ve Twitch üzerinde aynı anda çoklu yayın gerçekleştirin; Yayın Yöneticisi farklı tarayıcı sekmeleri veya platform panelleri arasında geçiş yapmanıza gerek kalmadan tüm yayınınızı senkronize tutar.

---

## Öne Çıkan Özellikler

### 1. Yayın Bilgilerini Düzenle

Canlı kanallarınızın meta verilerini yayını bölmeden anında güncelleyin:

- **Hedef Platform Seçimi**: Değişiklikleri yalnızca **Kick**, yalnızca **Twitch** veya **Her İki Platform** için aynı anda uygulayın.
- **Yayın Başlığı**: Canlı yayın başlığınızı doğrudan panelden düzenleyin.
- **Kategori / Oyun Arama**: Oyunlar ve yayın kategorileri için gerçek zamanlı otomatik tamamlama (örn. *Just Chatting*, *Valorant*).
- **Kick Etiketleri**: Kick yayın etiketlerini pencere üzerinden ekleyin veya kaldırın.
- **Çapraz Platform Senkronizasyonu**:
  - Başlık veya kategori Kick ve Twitch arasında farklı olduğunda anında uyarı görüntüler (*"Başlık veya kategori platformlar arasında farklı"*).
  - Tek tıkla kopyalama araçları: **Twitch'ten kopyala**, **Twitch'ten başlığı kopyala**, **Twitch'ten kategoriyi kopyala** veya **Twitch'ten etiketleri kopyala**.
  - Tek tıkla eşitleme butonları: **Kick başlığını kullan** / **Twitch başlığını kullan**, **Kick kategorisini kullan** / **Twitch kategorisini kullan**.

### 2. Çoklu Platform Canlı Sohbet

Topluluğunuzu bir araya getiren düşük gecikmeli canlı sohbet akışı:

- **Birleşik Sohbet Akışı**: Kick ve Twitch mesajlarını belirgin platform ve kullanıcı rozetleriyle yan yana okuyun.
- **Platforma Özel Mesaj Gönderme**: Doğrudan Kick veya Twitch sohbetine mesaj ya da duyuru göndermek için hedef platformu seçin.
- **Doğrudan Yanıtlama**: Belirli bir izleyicinin mesajına doğrudan yanıt verin.
- **7TV İfadeleri**: Hareketli ve özel 7TV ifadelerini sohbette görüntülemek için yerleşik açma/kapatma anahtarı.
- **Kullanıcı Filtresi**: Bir izleyicinin adına tıklayarak yalnızca onun mesajlarını görüntüleyin (**@{user} kullanıcısına göre filtrele**) ve kanal profilini yeni sekmede açın.
- **Sohbeti Temizle**: Tek tıkla yerel sohbet ekranını temizleyin.
- **Otomatik Kaydırma & Yeni Mesaj Bildirimi**: Sohbeti yukarı kaydırdığınızda kaydırma duraklatılır ve hızlı sohbet anlarında mesajları kaçırmamanız için **Yeni mesajlar** butonu belirir.
- **Sohbeti Ayrı Pencerede Aç**: Çoklu monitör kurulumları veya OBS tarayıcı dock'ları için sohbeti bağımsız bir pencerede açın (**Sohbeti Ayrı Pencerede Aç**).

### 3. Sohbet İçi Moderasyon Araçları

Herhangi bir mesaj kartı üzerinden anında moderasyon işlemi gerçekleştirin:

- **Mesajı Sil**: Uygunsuz mesajları Kick sohbetinden anında kaldırın.
- **Kullanıcıyı Sustur**: Kuralları ihlal eden izleyicileri geçici olarak zaman aşımına uğratın.
- **Kullanıcıyı Yasakla**: Kötü niyetli kullanıcıları veya spam botlarını kalıcı olarak yasaklayın.
- **Yasağı Kaldır**: İhtiyaç duyulduğunda yasakları kolayca kaldırın.
- **Moderatör Bildirimi**: Bir mesaj silindiğinde moderatör bilgisini net biçimde görüntüler (`(@{user} tarafından silindi)`).
- **İzin Yardımcısı**: Hesabınızda gerekli Kick moderatör izinleri eksikse tek tıkla güncelleme bağlantısı sunar (**Kick İzinlerini Ver**).

### 4. Gelişmiş Sesli Okuma (TTS)

Yayıncılar için özel olarak optimize edilmiş tarayıcı tabanlı Sesli Okuma motoru:

- **TTS Modları**:
  - **Sabit Dil TTS**: Mesajları seçtiğiniz ses dilinde veya panelin mevcut arayüz dilinde okur.
  - **Otomatik Dil TTS**: Gelen her mesajın dilini anlık olarak tespit eder ve mesaja uygun yerel sesle okur.
- **Okuma Dili Seçimi**: Panel arayüz dilini değiştirmeden farklı bir seslendirme dili belirleyin.
- **Kullanıcı Adını Oku**: TTS'in kullanıcı adını okumasını (örn. *"Kullanıcı diyor ki..."*) veya yalnızca mesaj metnini okumasını seçin.
- **Platform Adını Oku**: Çoklu platform yayınlarında mesajın hangi platformdan geldiğini otomatik olarak seslendirir (örn. *"Twitch üzerinde..."*).
- **TTS Metin Temizleyici**: Bağlantıları (URL), spam karakter tekrarlarını ve aşırı ifadeleri okuma öncesinde otomatik olarak temizler.
- **Acil Durdurma**: Baskın veya spam anlarında **Okumayı Durdur ve Sıfırla** butonuyla sesli okumayı anında durdurun ve kuyruğu temizleyin.
- **Moderasyon Güvenlik Kilidi**: TTS kuyruğundaki bir mesaj veya kullanıcı silinir/yasaklanırsa ilgili seslendirme anında iptal edilir.

### 5. Birleşik Etkinlik Akışı

Topluluk etkileşimlerini anlık olarak takip edin:

- **Kick Etkinlikleri**:
  - Yeni takipler
  - Abonelikler, yeniden abonelikler ve hediye abonelikler (topluluk hediyeleri dahil)
  - İzleyici sayısıyla birlikte gelen baskınlar (raid)
  - Kick hediyeleri (`@{user} {kicks} Kick hediye etti`)
- **Moderasyon ve Bot Denetimleri**:
  - Kullanıcı susturma, yasaklama ve yasak kaldırma kayıtları
  - Özel komut oluşturma, güncelleme ve silme logları
- **Sesli Uyarı**: Yeni etkinliklerde sesli bildirim zilini (**Aktivite Sesi**) açıp kapatın.
- **Aktiviteyi Oku (TTS)**: Etkinliklerin gerçekleştiği anda sesli olarak okunmasını sağlayın.
- **Aktiviteyi Ayrı Pencerede Aç**: Etkinlik akışını bağımsız bir pencerede açın (**Aktiviteyi Ayrı Pencerede Aç**).

### 6. Kanal İstatistikleri ve Gerçek Zamanlı Metrikler

- **Canlı Yayın Durumu**: Kanalınızın **Canlı** veya **Çevrimdışı** olduğunu gösteren gerçek zamanlı durum göstergesi.
- **Yayın Süresi**: Canlı yayın süresi sayacı (`sa`, `dk`, `sn`).
- **Oturum İstatistikleri**: Oturumdaki toplam sohbetçi ve mesaj sayısı.
- **Son Yayınlar**: Önceki yayınların süre ve kayıt geçmişi.
- **Katlanabilir Arayüz**: Çalışma alanınızı düzenlemek için platform bölümlerini gizleyin veya tekrar açın.

---

## Moderatör Ekleme ve "Moderatörlük Yaptığım Kanallar" Sistemi

Yayıncılar, hesap şifrelerini paylaşmak zorunda kalmadan kanal yönetimini ve Yayın Yöneticisi erişimini güvenilir moderatör ekiplerine devredebilirler.

### Kanal Ayarlarından Moderatör Ekleme

Kanal sahipleri birkaç tıklamayla panellerine moderatör yetkilendirmesi yapabilir:

1. **Panel → Kick → `<kanal>` → Ayarlar → Moderatörler** (`/dashboard/kick/<kanal-id>/settings`) sayfasına gidin.
2. **Moderatör Ekle** kartındaki arama kutusuna kullanıcı adını veya platform ID'sini yazın.
3. Kullanıcının yanındaki **Ekle** butonuna tıklayarak kanalınız için moderatör erişimi verin.
4. Eklenen moderatörler **Mevcut Moderatörler** tablosunda listelenir. Yayıncılar diledikleri zaman silme simgesine tıklayarak yetkiyi geri alabilirler.

### "Moderatörlük Yaptığım Kanallar" Sistemine Erişim

Bir yayıncı sizi moderatör olarak eklediğinde, o kanal otomatik olarak panelinizde aktif hale gelir:

- **Kenar Çubuğu Kanal Değiştirici**: Sol menünün en üstündeki kanal seçiciyi açtığınızda iki bölüm görürsünüz:
  - **Kanallarım ve Sunucularım**: Size ait bağlı kanallar ve Discord sunucuları.
  - **Moderatörlük Yaptığım Kanallar**: Moderatör olarak yetkilendirildiğiniz tüm kanallar. Bir kanala tıkladığınızda yayıncı adına komutları, zamanlayıcıları ve bot modüllerini yönetebilirsiniz.
- **Yayın Yöneticisi Değiştirici ("Yayıncı Seç")**:
  - Yayın Yöneticisi'nde (`/dashboard/stream-manager`), üst kısımdaki **Yayıncı Seç** açılır menüsüne tıklayın.
  - **Kanallarım** ile moderatörlük yaptığınız yayıncılar arasında anında geçiş yapın.
  - Bir yayıncıyı seçtiğinizde, Yayın Yöneticisi doğrudan o yayıncının canlı yayın ortamını yükler; böylece moderatörler canlı sohbeti izleyebilir, mesaj silebilir, kullanıcıları susturabilir/yasaklayabilir, etkinlik akışını takip edebilir ve canlı yayında başlık ile kategoriyi yayıncı adına güncelleyebilir.

