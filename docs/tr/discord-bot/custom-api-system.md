---
outline: [2, 3]
---

# Custom API Sistemi <Badge type="warning" text="NEW"/>

Belirtilen şablon aracılığıyla bir URL'ye GET isteği göndermenize ve kanalınıza eklemiş olduğunuz özel komut aracılığıyla yanıt almanıza olanak tanıyan sistemdir.

```
{customapi.https://...}
```

#### Sunucuna Komut Ekle

```
!acmd [komut_adı] [komut_içeriği {customapi.https://...}]
```

## Custom API'yle Yapılabilecekler

### Spotify'da Çalan Şarkıyı Göster <Badge type="warning" text="NEW"/>

<!-- AidenWallis - CONTENT REFERANCE LARGE -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref" href="https://spotify.aidenwallis.co.uk/" target="blank_">
        <span class="ref-details">
            <span class="content-ref-section-title">AIDEN WALLIS</span>
            <span class="content-ref-page-title">Spotify'ını Bağla</span>
        </span>
        <svg style="width:48px;height:48px;" viewBox="0 0 24 24" class="content-ref-svg" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>


```
{customapi.https://spotify.aidenwallis.co.uk/u/...}
```
::: info Örnek Komut Ekleme
<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!acmd şarkı Şu An Çalan Şarkı: {customapi.https://spotify.aidenwallis.co.uk/u/...}
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		New Command Added: şarkı
	</DiscordMessage>
</DiscordMessages>
:::

::: details Örnek Kullanım
<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!şarkı
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Şu An Çalan Şarkı: ANGELPLAYA - DANGEROUS
	</DiscordMessage>
</DiscordMessages>
:::

::: info Yayınınıza Spotify Widgetı Ekleme

Aiden Wallis'in sitesinde bulunan _Now Playin Widget_ başlığı altındaki `https://nowplaying.aidenwallis.co.uk/...` şeklindeki linki kullanmakta olduğunuz yayın aracına (OBS Studio, Streamlabs...) _tarayıcı kaynağı_ olarak ekleyiniz.

:::

### Rastgele Metin Yazdırma <Badge type="warning" text="NEW"/>

```
{customapi.https://techy-api.vercel.app/api/text}
```
::: info Örnek Komut Ekleme
<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!acmd metin {customapi.https://techy-api.vercel.app/api/text}.
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		New Command Added: metin
	</DiscordMessage>
</DiscordMessages>
:::

::: details Örnek Kullanım
<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!metin
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		The hardest part was setting the traffic velocity
	</DiscordMessage>
</DiscordMessages>
:::

