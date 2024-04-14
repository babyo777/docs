---
title: Get Artists
description: Authentication is not required for accessing endpoints.
---

## Endpoint

Endpoint - [https://music-player-api-mu.vercel.app/a/](https://music-player-api-mu.vercel.app/a/)

## How to use

After /a/ enter artist's name.

## Endpoints

Get Artists - [https://music-player-api-mu.vercel.app/a/Taylor Swift](https://music-player-api-mu.vercel.app/a/Taylor%20Swift)

Get Artist Details (Takes Artist ID) - [https://music-player-api-mu.vercel.app/ga/UCPC0L1d253x-KuMNwa05TpA](https://music-player-api-mu.vercel.app/ga/UCPC0L1d253x-KuMNwa05TpA)

## Example

### Get Artists

```javascript
const axios = require('axios');

// Function to search for artists
async function searchArtist(artistName) {
    try {
        const endpoint = 'https://music-player-api-mu.vercel.app/a/';
        const url = `${endpoint}${encodeURIComponent(artistName)}`; // Encode artist name to handle spaces and special characters
        const response = await axios.get(url);

        // The response contains information about artists
        console.log('Artists:', response.data);
    } catch (error) {
        console.error('Error searching artists:', error);
    }
}

// Example usage
const artistName = 'Taylor Swift'; // Example artist name
searchArtist(artistName);

```

### Get Artist Details

```javascript
const axios = require('axios');

// Function to get artist details by artist ID
async function getArtistDetails(artistId) {
    try {
        const endpoint = 'https://music-player-api-mu.vercel.app/ga/';
        const url = `${endpoint}${artistId}`;
        const response = await axios.get(url);

        // The response contains details about the artist
        console.log('Artist Details:', response.data);
    } catch (error) {
        console.error('Error getting artist details:', error);
    }
}

const artistId = 'UCPC0L1d253x-KuMNwa05TpA'; // Example artist ID
getArtistDetails(artistId);

```
