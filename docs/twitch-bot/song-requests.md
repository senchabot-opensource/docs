---
title: Twitch Bot — Song Requests
description: Manage song requests from your Twitch chat with manual or Spotify auto-playback modes.
---

# Song Requests <Badge type="warning" text="NEW"/>

The Song Request system lets viewers request songs via chat. It supports two modes:

- **Manual Mode** — Songs are saved to a queue you manage from the dashboard. Perfect for musicians playing instruments and singing live.
- **Spotify Mode** — Songs are automatically searched and played/queued on Spotify.

## Commands

| Command | Response |
| :-- | :-- |
| `!songreq` `!songrequest` | Request a song. Usage: `!songreq Song Title - Artist` |
| `!songskip` | Skip the current song (broadcaster/moderator only). |

## Manual Mode

In manual mode, song requests are saved to the database and appear in your dashboard. You can view the queue, mark songs as done, skip them, or delete requests.

This mode is ideal for musicians who play instruments and sing on stream — viewers request songs, and you manage the queue manually.

```
!songreq Loving This Moment - Gamma Skies
```

::: details Example Usage

User Message

```
!songreq Radiant - Harris Heller
```

Senchabot's Response

```
Added your request to the queue.
```

*Saves the request to the dashboard queue.*
:::

## Spotify Mode <Badge type="tip" text="Free" />

Spotify mode automatically searches for the requested song on Spotify and attempts to play it or add it to the queue.

Requires:
- Linked Spotify account in dashboard settings
- Spotify app open and active

```
!songreq Song Title - Artist
```

::: details Example Usage

User Message

```
!songreq Beauty In The Mundane - Bird Of Figment
```

Senchabot's Response (if playing)

```
Now playing your request on Spotify.
```

*Searches Spotify and starts playback.*

Senchabot's Response (if queued)

```
Added your request to the Spotify queue.
```

*Searches Spotify and adds to queue.*
:::

::: tip Spotify Not Configured?
If Spotify mode is enabled but no Spotify account is linked, the request is still saved to the database with a `failed` status. Viewers can see the request in the dashboard, and you can still manage it manually.
:::

## Dashboard

Visit your dashboard at **Song Requests** to manage the queue in real time:

- View all requests with song title, artist, requester, mode, and status
- Filter by status: All, Pending, Playing, Queued, Done, Skipped, Failed
- **Mark Done** — mark a song as completed
- **Skip** — skip the current song (sets status to `skipped`)
- **Delete** — permanently remove a request from the queue

The dashboard updates every 2 seconds via live polling.

### Status Meanings

| Status | Meaning |
| :-- | :-- |
| `pending` | Request received, waiting to be played (manual mode) |
| `playing` | Song is currently playing (Spotify mode) |
| `queued` | Song is in the Spotify queue (Spotify mode) |
| `done` | Song was completed (set manually via dashboard) |
| `skipped` | Song was skipped (via `!songskip` or dashboard) |
| `failed` | Spotify playback failed, but request is saved |

## Configuration

In your channel's **Settings → General**:

| Setting | Description |
| :-- | :-- |
| Song Request Command | Enable or disable `!songreq` |
| Song Requests: Subscribers Only | Restrict to subscribers + mods |
| Song Requests: Require Channel Points | Require channel points redemption (Twitch only) |
| Spotify Auto-Playback | Toggle between Spotify and Manual mode |
| Song Request User Cooldown | Per-user cooldown in seconds |
| Song Request Global Cooldown | Global channel cooldown in seconds |
| Max Pending Requests Per User | Limit active requests per user (default: 1) |

## Permissions

| Action | Who Can Use |
| :-- | :-- |
| `!songreq` / `!songrequest` | Anyone (respects sub-only and channel points settings) |
| `!songskip` | Broadcaster and moderators only |
| Mark Done / Skip / Delete | Dashboard (channel owner) |

## Spam Prevention

Each user can only have a configurable number of **active song requests** at a time (default: 1). Active requests are those with status `pending`, `playing`, or `queued`. The user must wait until their request is marked `done`, `skipped`, or deleted before making another request.

::: info Cooldown System
Command usage cooldown time is 1 second per user. Song requests have configurable per-user and global cooldowns separate from the general command cooldown.
:::
