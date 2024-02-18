---
outline: [2, 3]
---

# Custom API System <Badge type="warning" text="NEW"/>

This system allows you to send a GET request to a URL through the specified template and receive a response through a custom command you have added to your channel.

```
{customapi.https://...}
```

#### Adding Commands to Your Server

```
!acmd [command_name] [command_content {customapi.https://...}]
```

## What You Can Do with Custom API

### Display the Currently Playing Song on Spotify <Badge type="warning" text="NEW"/>

<!-- AidenWallis - CONTENT REFERANCE LARGE -->
<style src="@theme/style.css" scoped></style>
<div>
    <a class="content-ref" href="https://spotify.aidenwallis.co.uk/" target="blank_">
        <span class="ref-details">
            <span class="content-ref-section-title">AIDEN WALLIS</span>
            <span class="content-ref-page-title">Connect Your Spotify</span>
        </span>
        <svg style="width:48px;height:48px;" viewBox="0 0 24 24" class="content-ref-svg" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
    </a>
</div>

```
{customapi.https://spotify.aidenwallis.co.uk/u/...}
```

::: info Example Command Add
<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!acmd song Currently Playing: {customapi.https://spotify.aidenwallis.co.uk/u/...}
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		New Command Added: song
	</DiscordMessage>
</DiscordMessages>
:::

::: details Example Usage
<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!song
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		Currently Playing: ANGELPLAYA - DANGEROUS
	</DiscordMessage>
</DiscordMessages>
:::

::: info Adding Spotify Widget to Your Stream

Use the link in the format `https://nowplaying.aidenwallis.co.uk/...` under the title "_Now Playing Widget_" on Aiden Wallis' website as a _browser source_ in your streaming software (OBS Studio, Streamlabs...).

:::

### Generate Random Text <Badge type="warning" text="NEW"/>

```
{customapi.https://techy-api.vercel.app/api/text}
```
::: info Example Command Add
<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!acmd text {customapi.https://techy-api.vercel.app/api/text}
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		New Command Added: text
	</DiscordMessage>
</DiscordMessages>
:::

::: details Example Usage
<!-- EXAMPLE - Custom Commands -->
<DiscordMessages>
	<DiscordMessage profile="user">
		!text
	</DiscordMessage>
	<DiscordMessage profile="bot" role-color="#1fab89" >
		The hardest part was setting the traffic velocity
	</DiscordMessage>
</DiscordMessages>
:::
