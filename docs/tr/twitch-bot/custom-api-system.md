---
outline: [1, 3]
---

# Custom API Sistemi <Badge type="warning" text="NEW"/>

{customapi.https://spotify.aidenwallis.co.uk/u/6480254ee1ec4a6adba45c92}

## fORMAT

```
{customapi.https://...}
```

## Custom API'yle Yapılabilecekler

### Spotify'da Çalan Şarkıyı Göster <Badge type="warning" text="NEW"/>

<!-- AidenWallis - CONTENT REFERANCE LARGE -->
<style src="@theme/style.css"></style>
<div>
    <a class="content-ref" href="https://spotify.aidenwallis.co.uk/" target="blank_">
        <span class="ref-details">
            <span class="content-ref-section-title">AIDEN WALLIS</span>
            <span class="content-ref-page-title">Spotify'ını Bağla</span>
        </span>
        <svg style="width:48px;height:48px;" viewBox="0 0 24 24" class="content-ref-svg" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

#### Yayın Sohbetine Komut Ekle

```
!acmd [komut_adı] [komut_içeriği {customapi.https://spotify.aidenwallis.co.uk/u/...}]
```

::: details Örnek Kullanım
Komut Ekleme

```
!acmd şarkı Şu An Çalan Şarkı: {customapi.https://spotify.aidenwallis.co.uk/u/...}
```

Kullanıcı Mesajı

```
!şarkı
```

Senchabot'un Yanıtı

```
Şu An Çalan Şarkı: ANGELPLAYA - DANGEROUS
```

:::

::: info Yayınınıza Spotify Widgetı Ekleme

Aiden Wallis'in sitesinde bulunan _Now Playin Widget_ başlığı altındaki `https://nowplaying.aidenwallis.co.uk/...` şeklindeki linki kullanmakta olduğunuz yayın aracına (OBS Studio, Streamlabs...) _tarayıcı kaynağı_ olarak ekleyiniz.

:::

---

!acmd [command_name] [command text with {customapi.https://spotify.aidenwallis.co.uk/u/...}]

{customapi.https://spotify.aidenwallis.co.uk/u/6480254ee1ec4a6adba45c92}

https://spotify.aidenwallis.co.uk/

https://aidenwallis.co.uk/

!acmd song Current Song: {customapi.https://spotify.aidenwallis.co.uk/u/...}
!song
Current Song: {customapi.https://spotify.aidenwallis.co.uk/u/...}

Current Song: ANGELPLAYA - DANGEROUS

https://nowplaying.aidenwallis.co.uk/...

###

{customapi.https://techy-api.vercel.app/api/text}
