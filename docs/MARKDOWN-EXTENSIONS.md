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

<!-- CONTENT REFERANCE LARGE -->

### Large Referance Button

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

<!-- CONTENT REFERANCE SMALL -->

### Small Referance Button

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

### Discord Button

**Input**

```js
<style src="@theme/custom.css"></style>
<div>
<a class="discord-button" href="/MARKDOWN-EXTENSIONS">
        <span class="discord-button-details">
            <span class="discord-button-title">Discord Button</span>
        </span>
        <svg style="width:25;height:25px;" viewBox="0 0 127.14 96.36" class="discord-button-svg" aria-hidden="true"><path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
</a>
</div>
```

**Output**

<!-- Discord Button -->
<style src="@theme/custom.css"></style>
<div>
<a class="discord-button" href="/MARKDOWN-EXTENSIONS">
        <span class="discord-button-details">
            <span class="discord-button-title">Discord Button</span> 
        </span>
        <svg style="width:25;height:25px;" viewBox="0 0 127.14 96.36" class="discord-button-svg" aria-hidden="true"><path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>
</a>
</div>

### Twitch Button

**Input**

```js
<style src="@theme/custom.css"></style>
<div>
<a class="twitch-button" href="/MARKDOWN-EXTENSIONS">
        <span class="twitch-button-details">
            <span class="twitch-button-title">Twitch Button</span>
        </span>
    <svg style="width:25px;height:25px;" viewBox="0 0 16 16" class="twitch-button-svg" aria-hidden="true"><path fill="currentColor" d="M4.5 1L2 3.5v9h3V15l2.5-2.5h2L14 8V1H4.5zM13 7.5l-2 2H9l-1.75 1.75V9.5H5V2h8v5.5z M11.5 3.75h-1v3h1v-3zM8.75 3.75h-1v3h1v-3z"></path></svg>
</a>
</div>
```

**Output**

<!-- Twitch Button -->
<style src="@theme/custom.css"></style>
<div>
<a class="twitch-button" href="/MARKDOWN-EXTENSIONS">
        <span class="twitch-button-details">
            <span class="twitch-button-title">Twitch Button</span> 
        </span>
    <svg style="width:25px;height:25px;" viewBox="0 0 16 16" class="twitch-button-svg" aria-hidden="true"><path fill="currentColor" d="M4.5 1L2 3.5v9h3V15l2.5-2.5h2L14 8V1H4.5zM13 7.5l-2 2H9l-1.75 1.75V9.5H5V2h8v5.5z M11.5 3.75h-1v3h1v-3zM8.75 3.75h-1v3h1v-3z"></path></svg>
</a>
</div>

## Advanced

This docs uses [markdown-it](https://github.com/markdown-it/markdown-it) as the Markdown renderer.
