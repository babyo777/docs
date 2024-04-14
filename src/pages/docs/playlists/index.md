---
title: Get Playlists
description: Authentication is not required for accessing endpoints.
---

## Endpoint

```javascript
https://music-player-api-mu.vercel.app/p/
```

## How to use

After /p/ enter playlist name.

## Endpoints

Get Playlists

```javascript
https://music-player-api-mu.vercel.app/p/Billie Eilish
```

Get Playlist Songs (Takes Playlist ID)

```javascript
https://music-player-api-mu.vercel.app/ps/VLPLiyHrD1Lz34xUsqSUE2lyNRf-d_wbbqcz
```

Get Playlist Detail (Takes Playlist ID)

```javascript
https://music-player-api-mu.vercel.app/gpd/VLPLiyHrD1Lz34xUsqSUE2lyNRf-d_wbbqcz
```

## Example

### Get Playlists

```javascript
const axios = require('axios');

// Function to get playlists
async function getPlaylists(playlistName) {
    try {
        const endpoint = 'https://music-player-api-mu.vercel.app/p/';
        const url = `${endpoint}${encodeURIComponent(playlistName)}`; // Encode playlist name to handle spaces and special characters
        const response = await axios.get(url);

        // The response contains information about playlists
        console.log('Playlists:', response.data);
    } catch (error) {
        console.error('Error getting playlists:', error);
    }
}

// Example usage
const playlistName = 'Billie Eilish'; // Example playlist name
getPlaylists(playlistName);

```

### Get Playlist Songs (Takes Playlist ID)

```javascript
const axios = require('axios');

// Function to get playlist songs by playlist ID
async function getPlaylistSongs(playlistId) {
    try {
        const endpoint = 'https://music-player-api-mu.vercel.app/ps/';
        const url = `${endpoint}${playlistId}`;
        const response = await axios.get(url);

        // The response contains details about the playlist's songs
        console.log('Playlist Songs:', response.data);
    } catch (error) {
        console.error('Error getting playlist songs:', error);
    }
}

// Example usage
const playlistId = 'VLPLiyHrD1Lz34xUsqSUE2lyNRf-d_wbbqcz'; // Example playlist ID
getPlaylistSongs(playlistId);

```

### Get Playlist Detail (Takes Playlist ID)

```javascript
const axios = require('axios');

// Function to get playlist details by playlist ID
async function getPlaylistDetails(playlistId) {
    try {
        const endpoint = 'https://music-player-api-mu.vercel.app/gpd/';
        const url = `${endpoint}${playlistId}`;
        const response = await axios.get(url);

        // The response contains details about the playlist
        console.log('Playlist Details:', response.data);
    } catch (error) {
        console.error('Error getting playlist details:', error);
    }
}

// Example usage
const playlistId = 'VLPLiyHrD1Lz34xUsqSUE2lyNRf-d_wbbqcz'; // Example playlist ID
getPlaylistDetails(playlistId);
```
