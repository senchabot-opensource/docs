---
title: Twitch Botu — Moderasyon
description: "Senchabot Twitch botu için otomatik sohbet moderasyonu: BÜYÜK HARF Tespiti, abone muafiyetli Link Engelleyici, Tekrarlayan ihlallerde zaman aşımı ve Yasaklı Kelimeler."
---

# Twitch Botu — Moderasyon <Badge type="warning" text="YENİ"/>

Otomatik moderasyon, sohbetteki spam ve istenmeyen bağlantılara karşı kuralları gerçek zamanlı uygulayarak yayınınızı korur. Moderasyonu panelden **Panel → Twitch → `<kanal>` → Moderasyon** (`/dashboard/twitch/<kanal-id>/moderation`) adresinden yapılandırabilirsiniz.

## Moderasyon Ön Ayarları

Senchabot, sohbeti izleyip otomatik işlem yapan kullanıma hazır moderasyon ön ayarları sunar:

### 1. BÜYÜK HARF Tespiti

Çoğunluğu büyük harflerden oluşan (%70+ büyük harf) mesajları tespit eder ve işlem uygular.

- **Moderasyon İşlemi**: İhlallerde uygulanacak işlemi seçin:
  - **Mesajı sil ve uyar**
  - **Kullanıcıyı zaman aşımına al ve uyar**
  - **Sadece uyar**
  - **Yalnızca mesajı sil**
  - **Yalnızca kullanıcıyı zaman aşımına al**
- **Uyarı Mesajı**: Sohbete gönderilecek uyarıyı özelleştirin (`{username}` desteklenir).
- **Zaman Aşımı Süresi**: Uygulanacak süreyi **1 ile 10.080 dakika** (7 güne kadar) arasında belirleyin (varsayılan: 1 dakika).
- **Tekrarlayan İhlallerde Zaman Aşımı**: Etkinleştirildiğinde, ilk ihlalde yukarıdaki işlem (ör. silme veya uyarı) uygulanırken, belirlenen zaman aralığında seçilen ihlal sayısına ulaşan kullanıcılara otomatik zaman aşımı uygulanır:
  - **Şu ihlalde zaman aşımı**: Zaman aşımını tetikleyecek tekrar sayısı (2 ile 100 arası).
  - **Tekrar zaman aralığı**: İhlallerin takip edileceği süre (1 ile 1.440 dakika arası).
  - **Zaman aşımı süresi**: Tekrarlayan suçlulara uygulanacak özel süre.

### 2. Link Engelleyici

Dolandırıcılık bağlantılarını ve izinsiz reklamları engellemek için bağlantı içeren mesajları kaldırır.

- **Aboneler Link Gönderebilir**: Kapalıyken yalnızca kanal moderatörleri ve yayıncı sohbette bağlantı paylaşabilir.
- **Minimum Abone Ay Sayısı**: Abonelerin bağlantı paylaşmasına izin verildiğinde, bağlantı paylaşabilmek için gereken asgari abonelik süresini (1 ile 120 ay) belirler. Bu sürenin altındaki kullanıcıların bağlantıları engellenir.
- **Moderasyon İşlemi**: Mesajı sil ve uyar, zaman aşımına al ve uyar, sadece uyar, yalnızca sil veya yalnızca zaman aşımına al seçeneklerinden birini belirleyin.
- **Link Kaldırma Mesajı**: Bağlantı kaldırıldığında gönderilecek uyarı metni (`{username}` desteklenir).
- **Zaman Aşımı Süresi**: Yapılandırılabilir zaman aşımı süresi (1 ile 10.080 dakika).
- **Tekrarlayan İhlallerde Zaman Aşımı**: İnatla bağlantı paylaşmaya çalışan kullanıcılara otomatik zaman aşımı uygular:
  - **Şu ihlalde zaman aşımı**: İhlal eşiği (2 ile 100 arası).
  - **Tekrar zaman aralığı**: Takip aralığı (1 ile 1.440 dakika arası).
  - **Zaman aşımı süresi**: Tekrarlayan ihlallerde uygulanacak süre.

## Yasaklı Kelimeler

**Yasaklı Kelimeler** listesi, sohbette geçtiğinde otomatik olarak silinecek ve moderasyona alınacak ifadeleri belirlemenizi sağlar. Kelimeleri doğrudan panelden yönetebilirsiniz.

## Tetikleyici Ön Ayarları

Moderasyon ön ayarlarının yanı sıra, Moderasyon sayfasında tek tıkla yükleyebileceğiniz hazır **Tetikleyici Ön Ayarları** (bağlantı filtreleri, büyük harf filtreleri vb.) yer alır.
