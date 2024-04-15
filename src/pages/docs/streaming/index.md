---
title: Streaming
description: Authentication is not required for accessing endpoints.
---

## Endpoint

```javascript
https://alone-dorothee-wolfey.koyeb.app?url=
```

- Deploy You Own - [Deploy Now](https://app.koyeb.com/deploy?type=git&builder=buildpack&repository=https://github.com/babyo7/stream-audio)

- Source Code - [https://github.com/babyo7/stream-audio](https://github.com/babyo7/stream-audio)

## Example

### Stream

```javascript

const axios = require('axios');

// Function to stream audio from YouTube video
async function streamAudio(videoId) {
    try {
        const endpoint = 'https://alone-dorothee-wolfey.koyeb.app?url=';
        const url = `${endpoint}${videoId}`;
        const response = await axios.get(url);

        // The response contains the audio stream
        console.log('Streaming audio:', response.data);
    } catch (error) {
        console.error('Error streaming audio:', error);
    }
}
// Example usage
const videoId = 'e-ORhEE9VVg'; // Example YouTube video ID
streamAudio(videoId);

```

### Download

```javascript

// Function to download audio from YouTube video
async function downloadAudio(videoId) {
    try {
        const endpoint = 'https://alone-dorothee-wolfey.koyeb.app/download?url=';
        const url = `${endpoint}${videoId}`;
        const response = await axios.get(url);

        // Assuming the response contains the downloadable audio file
        console.log('Downloading audio:', response.data);
    } catch (error) {
        console.error('Error downloading audio:', error);
    }
}
// Example usage
const videoId = 'e-ORhEE9VVg'; // Example YouTube video ID
downloadAudio(videoId);

```
