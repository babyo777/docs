---
title: Get Songs
description: Authentication is not required for accessing endpoints.
---

## Endpoint

Endpoint - [https://music-player-api-mu.vercel.app/s/](https://music-player-api-mu.vercel.app/s/)

## How to use

After /s/ enter song name.

## Endpoints

Search - [https://music-player-api-mu.vercel.app/s/Lover by Taylor Swift](https://music-player-api-mu.vercel.app/s/Lover%20by%20Taylor%20Swift)

Search with Suggestion (Takes video ID)- [https://music-player-api-mu.vercel.app/ss/uLL2xTK35Qc](https://music-player-api-mu.vercel.app/ss/uLL2xTK35Qc)

## Example

### Search Songs

```javascript
const axios = require('axios');

// Function to search for a song by name
async function searchSong(songName) {
    try {
        const endpoint = 'https://music-player-api-mu.vercel.app/s/';
        const url = `${endpoint}${encodeURIComponent(songName)}`; // Encode song name to handle spaces and special characters
        const response = await axios.get(url);

        // The response contains search results or song information
        console.log('Search result:', response.data);
    } catch (error) {
        console.error('Error searching song:', error);
    }
}
// Example usage
const songName = 'Lover by Taylor Swift'; // Example song name
searchSong(songName);
```

### Search With Suggestions

```javascript

const axios = require('axios');

// Function to search for a song with suggestion (takes video ID)
async function searchSongWithSuggestion(videoId) {
    try {
        const endpoint = 'https://music-player-api-mu.vercel.app/ss/';
        const url = `${endpoint}${videoId}`;
        const response = await axios.get(url);

        // The response contains search results or song information with suggestions
        console.log('Search result with suggestion:', response.data);
    } catch (error) {
        console.error('Error searching song with suggestion:', error);
    }
}


const videoId = 'uLL2xTK35Qc'; // Example YouTube video ID
searchSongWithSuggestion(videoId);

````
