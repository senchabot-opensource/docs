---
outline: deep
---

# Markdown Usages

<div class="tip custom-block" style="padding-top: 8px">

**Here you can find syntaxes and example usages according to the criteria we have set to contribute.**

</div>

## Links

Both internal and external links gets special treatments.

### External Links

```
https://senchabot.app
```

```md
Here our cool [website](https://senchabot.app)
```

<div class="info custom-block" style="padding-top: 8px">

Here our cool [website](https://senchabot.app)

</div>

### Internal Links

Internal links are converted to router link for SPA navigation. Also, every `index.md` contained in each sub-directory will automatically be converted to `index.html`, with corresponding URL `/`.

For example, given the following directory structure:

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

And providing you are in `foo/one.md`:

```md
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extension -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->
```

## Badge

The badge lets you add status to your headers.

```html
### Title <Badge type="info" text="default" /> ### Title
<Badge type="tip" text="BETA" /> ### Title
<Badge type="warning" text="NEW" /> ### Title
<Badge type="danger" text="caution" />
```

Code above renders like:

**custom element** <Badge type="info" text="custom element" />

**Title** <Badge type="tip" text="BETA" />

**Cool NEW feature** <Badge type="warning" text="NEW" />

**Pre-Alpha** <Badge type="danger" text="pre-alpha" />

## Custom Containers

Custom containers can be defined by their types, titles, and contents.

### Default Title

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Custom Title

You may set custom title by appending the text right after the "type" of the container.

**Input**

````md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
!invite[your_channel_name];
```

:::
````

**Output**

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
!invite[your_channel_name];
```

:::

### Custom Block

You can use it with `<div>` block tag

**Input**

```js
<div class="info custom-block" style="padding-top: 8px">
  This is an info box.
</div>

<div class="tip custom-block" style="padding-top: 8px">
  This is an info box.
</div>

<div class="warning custom-block" style="padding-top: 8px">
  This is an info box.
</div>

<div class="danger custom-block" style="padding-top: 8px">
  This is an info box.
</div>

<div class="details custom-block" style="padding-top: 8px">
  This is an info box.
</div>
```

**Output**

<div class="info custom-block" style="padding-top: 8px">
  This is an info box.
</div>

<div class="tip custom-block" style="padding-top: 8px">
  This is an tip box.
</div>

<div class="warning custom-block" style="padding-top: 8px">
  This is an warning box.
</div>

<div class="danger custom-block" style="padding-top: 8px">
  This is an danger box.
</div>

<div class="details custom-block" style="padding-top: 8px">
  This is an details box.
</div>

## Buttons

We have custom button style

### Large Button Style

**Input**

```js
<style src="@theme/custom.css"></style>
<div>
  <a class="content-ref" href="/MARKDOWN-EXTENSIONS">
    <span class="ref-details">
      <span class="content-ref-section-title">EXAMPLE SECTION TITLE</span>
      <span class="content-ref-page-title">EXAMPLE PAGE REFERANCE</span>
    </span>
    <svg style="width:48px;height:48px;" viewBox="0 0 24 24" class="content-ref-svg" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
  </a>
</div>
```

**Output**

<style src="@theme/custom.css"></style>
<div>
  <a class="content-ref" href="/MARKDOWN-EXTENSIONS">
    <span class="ref-details">
      <span class="content-ref-section-title">EXAMPLE SECTION TITLE</span>
      <span class="content-ref-page-title">EXAMPLE PAGE REFERANCE</span>
    </span>
    <svg style="width:48px;height:48px;" viewBox="0 0 24 24" class="content-ref-svg" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
  </a>
</div>

### Small Button Style

**Input**

```js
<style src="@theme/custom.css"></style>
<div>
  <a class="content-ref-s" href="/MARKDOWN-EXTENSIONS">
    <span class="ref-details-s">
      <span class="content-ref-page-title-s">MARKDOWN-EXTENSIONS</span> 
    </span>
    <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
  </a>
</div>
```

**Output**

<style src="@theme/custom.css"></style>
<div>
  <a class="content-ref-s" href="/MARKDOWN-EXTENSIONS">
    <span class="ref-details-s">
      <span class="content-ref-page-title-s">MARKDOWN-EXTENSIONS</span> 
    </span>
    <svg style="width:32px;height:32px;" viewBox="0 0 24 24" class="content-ref-svg-s" aria-hidden="true"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
  </a>
</div>

## Displaying Discord messages

We use [@discord-message-components/vue](https://github.com/Danktuary/discord-message-components/blob/main/packages/vue/README.md) to display "fake" Discord messages on pages. The reason for this is to make it easy for you to create, easy for anyone in the future to edit, and avoid having to take screenshots and using too many images on a page at once. Here's a preview of the components:

<DiscordMessages>
	<DiscordMessage profile="user">
		!ping
	</DiscordMessage>
	<DiscordMessage profile="bot" >
		<DiscordMention :highlight="true" profile="user" />, pong! Took 50ms
	</DiscordMessage>
</DiscordMessages>

The syntax to make this display is quite simple as well:

```js
<DiscordMessages>
	<DiscordMessage profile="user">
		!ping
	</DiscordMessage>
	<DiscordMessage profile="bot" >
		<DiscordMention :highlight="true" profile="user" />, pong! Took 50ms
	</DiscordMessage>
</DiscordMessages>
```

These components are made with [Vue](https://vuejs.org/), but if you aren't familiar with Vue, don't worry about it. Just understand that you'll usually only need the `profile="user"`/`profile="bot"` attribute for the `<DiscordMessage>` component. All `<DiscordMessage>` components must be children of a single `<DiscordMessages>` component for it to display properly.

Do note the casing in `<DiscordMessages>` syntax instead of `<discord-messages>`. This is due to how VuePress renders markdown and HTML inside markdown files. It doesn't recognize `<discord-messages>` as an HTML element, therefore rendering anything indented inside it as a regular code block.

These components feature messages, mentions, embeds, interactions, and more. You can read more about how to use them by checking out [@discord-message-components/vue](https://github.com/Danktuary/discord-message-components/blob/main/packages/vue/README.md).

## Advanced

This docs uses [markdown-it](https://github.com/markdown-it/markdown-it) as the Markdown renderer.
