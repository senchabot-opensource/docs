---
title: Twitch Botu — Moderasyon
description: "Senchabot Twitch botu için otomatik sohbet moderasyonu: BÜYÜK HARF Tespiti, abone muafiyetli Link Engelleyici, Tekrarlayan ihlallerde zaman aşımı ve Yasaklı Kelimeler."
---

# Twitch Botu — Moderasyon <Badge type="warning" text="YENİ"/>

Sohbetin, sen yayın yaparken kendini modere eder. **Panel → Twitch → `<kanal>` → Moderasyon** (`/dashboard/twitch/<kanal-id>/moderation`) adresinden aç: bir ön ayar seç, ihlalde ne olacağını belirle, bitti.

## Neleri izler

### BÜYÜK HARF
%70 ve üzeri büyük harften oluşan mesajları yakalar. Her ihlal için birini seç: sil + uyar, zaman aşımı + uyar, sadece uyar, sadece sil veya sadece zaman aşımı. Uyarılar `{username}` destekler; zaman aşımları 1 dakikadan 7 güne kadar (10.080 dk, varsayılan 1 dakika).

**Tekrarlayan ihlaller** kendiliğinden ağırlaşır: ilk ihlalde normal işlemin uygulanır, ardından belirlediğin zaman aralığındaki N. ihlalde otomatik zaman aşımı devreye girer (eşik 2–100, aralık 1–1.440 dk, özel zaman aşımı süresi).

### Link Engelleyici
Bağlantı paylaşmaması gereken izleyicilerin URL'lerini temizler — dolandırıcılık da yok, izinsiz reklam da. İstersen abonelerin link paylaşmasına izin ver; minimum üyelik süresi (1–120 ay) altındakilerin bağlantıları engellenmeye devam eder. Aynı beş işlem, özel uyarı, 1 dakikadan 7 güne zaman aşımları ve aynı tekrar-ihlal yükseltmesi.

## Yasaklı Kelimeler
Görüldüğü anda otomatik silinen tek bir kelime listesi. Kelimeleri panelden dilediğin zaman ekle, çıkar.

## Bonus: Tetikleyici Ön Ayarları
Aynı sayfada tek tıkla kurulan hazır **Tetikleyici Ön Ayarları** da var — bağlantı filtreleri, büyük harf filtreleri, baskın koruması.
