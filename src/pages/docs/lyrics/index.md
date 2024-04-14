---
title: Get Lyrics
description: Authentication is not required for accessing endpoints.
---

## Endpoint


```javascript
https://music-player-api-mu.vercel.app/lrc/
```

## How to use

After /lrc/ enter song name with the artist's name to get better results. The output will be in LRC Format

## Example

```javascript

const axios = require('axios');

// Function to get lyrics for a song
async function getLyrics(songInfo) {
    try {
        const endpoint = 'https://music-player-api-mu.vercel.app/lrc/';
        const url = `${endpoint}${encodeURIComponent(songInfo)}`; // Encode song info to handle spaces and special characters
        const response = await axios.get(url);

        // The response contains lyrics in LRC format
        console.log('Lyrics:', response.data);
    } catch (error) {
        console.error('Error getting lyrics:', error);
    }
}

// Example usage
const songInfo = 'Lover by Taylor Swift'; // Example song name with artist
getLyrics(songInfo);

```
