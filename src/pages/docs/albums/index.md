---
title: Get Albums
description: Authentication is not required for accessing endpoints.
---

## Endpoint

Endpoint - [https://music-player-api-mu.vercel.app/al/](https://music-player-api-mu.vercel.app/al/)

## How to use

After /al/, enter the album name with the artist's name for better results.

## Example

### Get Albums

```javascript
const axios = require('axios');

// Function to get albums
async function getAlbums(albumInfo) {
    try {
        const endpoint = 'https://music-player-api-mu.vercel.app/al/';
        const url = `${endpoint}${encodeURIComponent(albumInfo)}`; // Encode album info to handle spaces and special characters
        const response = await axios.get(url);

        // The response contains information about albums
        console.log('Albums:', response.data);
    } catch (error) {
        console.error('Error getting albums:', error);
    }
}

// Example usage
const albumInfo = 'Lunch Break'; // Example album name
getAlbums(albumInfo);

```

### Get Album Songs (Takes Album ID)

```javascript
const axios = require('axios');

// Function to get album songs by album ID
async function getAlbumSongs(albumId) {
    try {
        const endpoint = 'https://music-player-api-mu.vercel.app/ga/';
        const url = `${endpoint}${albumId}`;
        const response = await axios.get(url);

        // The response contains details about the album's songs
        console.log('Album Songs:', response.data);
    } catch (error) {
        console.error('Error getting album songs:', error);
    }
}

// Example Usage
const albumId = 'MPREb_ssw2KCCsqYW'; // Example album ID
getAlbumSongs(albumId);

```
