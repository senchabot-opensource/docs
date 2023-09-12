# Canlı Yayın Etkinlikleri <Badge type="warning" text="NEW"/>

Senchabot, belirtilen kanallarda [canlı yayın duyurularını](/tr/discord-bot/live-stream-announcements) takip ederek sunucu etkinliği oluşturur.

## Etkinlik Kanalını Belirleme

Discord etkinliklerini oluşturmak için Senchabot'un mesajlarını takip edeceği canlı yayın duyuruları kanalı seçiniz.

```
/set stream-event-channel channel-name:
```

::: details Örnek Kullanım

```
User:
  /set stream-event-channel channel-name: twitch-yayınları

Senchabot:
  `twitch-yayınları` isimli kanal Twitch yayın duyurusu etkinlikleri için listeye eklendi.
```

:::

## Etkinlik Kanalını Silme

Senchabot'un mesajlarını takip ettiği kanallar listesinden belirtilen kanalı kaldırınız.

```
/delete stream-event-channel channel-name:
```

::: details Örnek Kullanım

```
User:
  /delete stream-event-channel channel-name: twitch-yayınları

Senchabot:
  `twitch-yayınları` isimli yazı kanalı yayın etkinlik yazı kanalları listesinden kaldırıldı.
```

:::
