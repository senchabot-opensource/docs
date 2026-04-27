---
outline: [2, 4]
title: Discord Botu — Canlı Yayın Duyuruları
description: Discord sunucunuzda Senchabot ile Twitch ve Kick canlı yayın duyurularını yapılandırın.
---

# Discord Botu — Canlı Yayın Duyuruları <Badge type="warning" text="NEW"/>

## Yayın ve Yayıncı Özel Ayarları

### Yayıncı Ekleme
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="senchabot"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        `senchabot` kullanıcı adlı Twitch yayıncısının yayın duyuruları `twitch-streams` isimli yazı kanalı için aktif edildi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

::: info Bilgilendirme

Twitch yayıncısı eklerken daha önce `/set-twitch announcement default-channel` komutuyla varsayılan duyuru kanalı eklemiş olmalı veya isteğe bağlı kanal adını belirtmelisiniz.
:::

### Duyuru Kanalı Özelleştirme

Yayıncılara özel duyuru kanalı atayabilirsininiz.
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    optionPillKey2="channel"
    optionPillValue2="                "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="senchabot"
    optionPillKey2="channel"
    optionPillValue2="twitch-streams"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
        `senchabot` kullanıcı adlı Twitch yayıncısının yayın duyuruları `twitch-yayınları` isimli kanal için aktif edildi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

::: info Bilgilendirme

Yayıncı eklenirken `channel` opsiyonu yazılmazsa yayıncının duyuru mesajları [varsayılan duyuru kanalına](#varsayılan-duyuru-kanalı) gönderilir.
:::

### Özelleştirilmiş Duyuru Mesajı
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement custom-content"
    optionPillKey="twitch-username-or-url"
    optionPillValue="            "
    optionPillKey2="announcement-content"
    optionPillValue2="            "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement custom-content"
    optionPillKey="twitch-username-or-url"
    optionPillValue="senchabot"
    optionPillKey2="announcement-content"
    optionPillValue2="{twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch announcement custom-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            senchabot kullanıcı adlı Twitch yayıncısı için duyuru mesajı içeriği ayarlandı: `{twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

#### Duyuru Mesajını Kaldırma

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement custom-content"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement custom-content"
    optionPillKey="twitch-username-or-url"
    optionPillValue="senchabot"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-twitch announcement custom-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            senchabot kullanıcı adlı Twitch yayıncısına özgü yayın duyuru mesajı silindi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Yayıncı Silme

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch streamer"
    optionPillKey="twitch-username-or-url"
    optionPillValue="senchabot"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-twitch streamer
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            `senchabot` kullanıcı adlı Twitch streamer veritabanından silindi.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Varsayılan Duyuru Kanalı

Twitch yayıncıları eklenirken `channel` opsiyonu girilmediğinde yayıncıların duyuruları varsayılan duyuru kanalında yapılır.

### Kanal Ekleme
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement default-channel"
    optionPillKey="channel"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement default-channel"
    optionPillKey="channel"
    optionPillValue="twitch-streams"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch announcement default-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            `twitch-yayınları` isimli kanal varsayılan duyuru kanalı olarak ayarlandı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Kanalı Kaldırma
<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement default-channel"
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement default-channel"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-twitch announcement default-channel
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            Varsayılan Twitch canlı yayın duyuru kanalı ayarı kaldırıldı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Varsayılan Duyuru Mesajı

### Duyuru Mesajı Ekleme

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement default-content"
    optionPillKey="announcement-content"
    optionPillValue="                 "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement default-content"
    optionPillKey="announcement-content"
    optionPillValue="{twitch.username}, {stream.category} yayınına başladı! {stream.title} → {twitch.url}"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">set-twitch announcement default-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            Yayın duyuru mesajı içeriği ayarlandı: `{twitch.username}, {stream.category} yayınına başladı! {stream.title} -> {twitch.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

### Duyuru Mesajını Kaldırma

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement default-content"
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement default-content"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true"  profile="user" :command="true">del-twitch announcement default-content
            </DiscordInteraction>
        </template>
        <DiscordMarkdown>
            Varsayılan yayın duyuru mesajı içeriği kaldırıldı. Özelleştirilmiş duyuru mesajı olmayan yayıncıların duyuruları belirtilen formatta gönderilecektir. `{twitch.username}, {stream.category} yayınına başladı! {stream.title}: {twitch.url}`
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::

## Kategori Filtreleri <Badge type="warning" text="NEW"/>

Her duyuru kanalı için yayın kategorisine göre canlı yayın duyurularını filtreleyin. Sunucu başına en fazla **2 kategori filtresi** ayarlayabilirsiniz.

### Kategori Filtresi Ekleme

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="               "
    optionPillKey2="filter-regex"
    optionPillValue2="               "
    optionPillKey3="condition"
    optionPillValue3="               "
    >
</ApplicationCommands>

**Parametreler:**
- `channel` — **(Zorunlu)** Duyuruların gönderileceği Discord yazı kanalı.
- `filter-regex` — **(Zorunlu)** Yayın kategorisi adı(lar)ıyla eşleşen bir regex deseni. Birden fazla kategori eşleştirmek için `|` kullanın (örn. `Just Chatting|IRL`).
- `condition` — **(Zorunlu)** **matches** (kategori eşleşirse duyur) veya **does not match** (kategori eşleşirse atla) seçeneklerinden birini seçin.

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="twitch-yayınları"
    optionPillKey2="filter-regex"
    optionPillValue2="Just Chatting"
    optionPillKey3="condition"
    optionPillValue3="matches"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true" profile="user" :command="true">set-twitch announcement game-category-filter</DiscordInteraction>
        </template>
        <DiscordMarkdown>
            `twitch-yayınları` isimli duyuru kanalına atılacak Twitch yayın duyurularının kategori filtresi `Just Chatting` şekilde `matches` olarak ayarlandı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

*Yalnızca "Just Chatting" kategorisindeki Twitch yayınları `#twitch-yayınları` kanalında duyurulacaktır.*
:::

::: details Örnek Kullanım (Eşleşmezse)
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="set-twitch announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="twitch-yayınları"
    optionPillKey2="filter-regex"
    optionPillValue2="Just Chatting"
    optionPillKey3="condition"
    optionPillValue3="does not match"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true" profile="user" :command="true">set-twitch announcement game-category-filter</DiscordInteraction>
        </template>
        <DiscordMarkdown>
            `twitch-yayınları` isimli duyuru kanalına atılacak Twitch yayın duyurularının kategori filtresi `Just Chatting` şekilde `does not match` olarak ayarlandı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>

*"Just Chatting" kategorisindeki Twitch yayınları atlanacak; diğer tüm kategoriler `#twitch-yayınları` kanalında duyurulacaktır.*
:::

::: tip Birden Fazla Kategori
Tek bir filtreye `|` (pipe) karakteri kullanarak birden fazla kategori ekleyebilirsiniz, örn. `Just Chatting|IRL|Art`.
:::

### Kategori Filtresini Kaldırma

<br>
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="               "
    >
</ApplicationCommands>

::: details Örnek Kullanım
<ApplicationCommands
    appCmd-icon="https://cdn.discordapp.com/avatars/1039550209274945587/026fae6fce576363a3ea9c6ebba467bb.webp"
    appCmd-name="del-twitch announcement game-category-filter"
    optionPillKey="channel"
    optionPillValue="twitch-yayınları"
    >
</ApplicationCommands>
<br>
<DiscordMessages>
    <DiscordMessage profile="bot" role-color="#1fab89">
        <template #interactions>
            <DiscordInteraction :ephemeral="true" profile="user" :command="true">del-twitch announcement game-category-filter</DiscordInteraction>
        </template>
        <DiscordMarkdown>
            `twitch-yayınları` isimli yazı kanalı için Twitch yayın duyuru kategori filtrelemesi kaldırıldı.
        </DiscordMarkdown>
    </DiscordMessage>
</DiscordMessages>
:::
