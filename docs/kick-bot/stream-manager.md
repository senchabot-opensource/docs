---
title: Kick Bot — Stream Manager
description: "Senchabot Stream Manager for Kick: Unified multiplatform live chat, stream metadata editor, activity feed, advanced Text-To-Speech (TTS), and moderation controls."
---

# Kick Bot — Stream Manager <Badge type="warning" text="NEW"/>

The **Stream Manager** is Senchabot's centralized real-time control center for live broadcasters and moderators. Located on the dashboard at **Dashboard → Stream Manager** (`/dashboard/stream-manager`), it unifies your live chat, stream metadata, activity feed, and moderation tools into a single, high-performance command center.

Whether you stream exclusively on Kick or multistream across Kick and Twitch, Stream Manager keeps everything in sync without needing to switch between different browser tabs or creator dashboards.

---

## Key Features

### 1. Edit Stream Information

Update your stream metadata on the fly across your live channels:

- **Target Platform Selection**: Choose to update your **Kick** channel, **Twitch** channel, or **Both Platforms** simultaneously.
- **Stream Title**: Set and update your live stream title instantly.
- **Category / Game Search**: Real-time autocomplete search for game titles and stream categories (e.g. *Just Chatting*, *Valorant*).
- **Kick Tags Management**: Add or remove Kick stream tags directly from the modal.
- **Cross-Platform Metadata Sync**:
  - Displays instant alerts when titles or categories differ between Kick and Twitch (*"Title or category differs between platforms"*).
  - One-click copy tools: **Copy from Twitch**, **Copy title from Twitch**, **Copy category from Twitch**, or **Copy tags from Twitch**.
  - One-click sync buttons: **Use Kick title** or **Use Twitch title**, **Use Kick category** or **Use Twitch category**.

### 2. Multiplatform Live Chat

A consolidated, low-latency live chat feed that brings your audience together:

- **Unified Chat Stream**: Read chat messages from Kick and Twitch side-by-side with clear platform badges and chatter badges.
- **Targeted Sending**: Select your chat platform to send messages or announcements directly to Kick or Twitch chat.
- **Inline Replies**: Reply directly to specific viewers' messages.
- **7TV Emotes**: Built-in toggle to render animated and custom 7TV emotes in chat.
- **Chatter Filter**: Click any user's name to isolate their chat history (**Filter by @user**) with a shortcut to inspect their profile.
- **Clear Chat**: Clear your local chat view with one click.
- **Auto-Scroll & New Messages Notice**: Scrolling up pauses auto-scroll and displays a **New messages** indicator so you never lose your place during high-speed chat moments.
- **Popout Chat**: Open the live chat in a standalone popup window (**Popout Chat**) for multi-monitor streaming setups or OBS custom browser docks.

### 3. In-Chat Moderation Controls

Take immediate moderation actions directly from any chat message card:

- **Delete Message**: Remove inappropriate or violating messages from Kick chat in real time.
- **Timeout User**: Temporarily time out disruptive viewers.
- **Ban User**: Permanently ban malicious users or spam bots.
- **Unban User**: Quickly lift bans when needed.
- **Attribution Notices**: Clearly marks when a message was deleted by a moderator (`(deleted by @user)`).
- **Permissions Helper**: If your account lacks required Kick moderator scopes, Stream Manager displays an authorization banner (**Authorize Kick permissions**) to grant them in one click.

### 4. Advanced Text-To-Speech (TTS)

A flexible, browser-powered Text-To-Speech engine tailored specifically for streamers:

- **TTS Modes**:
  - **Fixed Language TTS**: Reads messages in your chosen voice language or the dashboard's current interface language.
  - **Auto Language TTS**: Automatically detects the language of each incoming message in real time and speaks it using a native voice.
- **Speech Language Selection**: Choose a custom voice language independently of your dashboard interface language.
- **Read Author Toggle**: Choose whether TTS announces the chatter's name (e.g., *"Username says..."*) or speaks only the message content.
- **Read Platform Name Toggle**: When multistreaming, automatically announces which platform the message arrived from (e.g., *"On Twitch, ..."*).
- **TTS Audio Cleaner**: Intelligently cleans messages before speaking by stripping URLs, spam repetitions, and excessive emotes.
- **Emergency Stop**: Instantly silence TTS and flush the speech queue using the **Stop Reading and Reset Queue** button.
- **Moderation Safety Hook**: If a message or user is deleted or banned while in the TTS queue, it is automatically removed and canceled immediately.

### 5. Unified Activity Feed

Monitor audience events and interactions in real time:

- **Kick Events**:
  - New follows
  - Subscriptions, resubs, and gift subs (including community sub gifts)
  - Incoming raids with viewer counts
  - Kicks (`@{user} gifted {kicks} Kicks`)
- **Moderation & Bot Audits**:
  - Real-time logs when users are timed out, banned, or unbanned
  - Bot command creation, updates, and deletions
- **Audio Chimes**: Toggle audio notification sounds (**Activity Sound**) on or off.
- **Activity TTS**: Have stream activities read aloud automatically as they happen (**Read Activity (TTS)**).
- **Popout Activity**: Open the activity feed in a standalone popup window (**Popout Activity**).

### 6. Channel Metrics & Real-Time Stats

- **Live Stream Status**: Real-time status indicator showing whether your channel is **Live** or **Offline**.
- **Stream Uptime**: Live stream duration counter (`h`, `m`, `s`).
- **Session Metrics**: Tracks total session chatters and message counts.
- **Recent Streams**: Overview of previous broadcasts with duration and recording history.
- **Collapsible Layout**: Hide or restore individual platform sections to optimize your workspace layout.

---

## Adding Moderators & "Channels I Moderate"

Broadcasters can delegate channel and Stream Manager access to their trusted moderator team without sharing account credentials.

### Adding Moderators in Channel Settings

Channel owners can add dashboard moderators with a few clicks:

1. Navigate to **Dashboard → Kick → `<channel>` → Settings → Moderators** (`/dashboard/kick/<channel-id>/settings`).
2. In the **Add Moderator** card, enter the user's username or platform ID into the search field.
3. Click **Add** to grant them moderator permissions for your channel.
4. Added moderators appear in the **Current Moderators** table. Broadcasters can revoke access at any time by clicking the delete icon.

### Accessing "Channels I Moderate"

Once a streamer adds you as a moderator, their channel automatically appears across your dashboard:

- **Sidebar Channel Switcher**: Open the channel switcher at the top of the sidebar. You will see:
  - **My Channels & Servers**: Your personal linked channels and Discord servers.
  - **Channels I Moderate**: All broadcaster channels where you have been granted moderator access. Selecting a channel lets you manage commands, timers, and modules on the broadcaster's behalf.
- **Stream Manager Switcher ("Select Streamer")**:
  - In the Stream Manager (`/dashboard/stream-manager`), click the **Select Streamer** dropdown menu.
  - Switch between **My Channels** and any broadcaster under your moderated channels list.
  - When selected, Stream Manager immediately loads that streamer's live stream environment, allowing you to monitor chat, perform in-chat moderation (delete, timeout, ban), track stream activity, and update stream title and category in real time during live broadcasts.

