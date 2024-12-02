const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const API_KEY = 'RGAPI-fbee62eb-7ff2-4ee9-a576-920db79e6835';
const REGION = 'na'; // Replace 'your-region' with the actual region

app.get('/api/platform-status', async (req, res) => {
    try {
        const url = `https://na.api.riotgames.com/val/status/v1/platform-data`;
        const response = await axios.get(url, {
            headers: { 'X-Riot-Token': API_KEY },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching platform status:', error.message);
        res.status(500).json({ error: 'Failed to fetch platform status' });
    }
});

app.get('/api/game-content', async (req, res) => {
    try {
        const url = `https://na.api.riotgames.com/val/content/v1/contents`;
        const response = await axios.get(url, {
            headers: { 'X-Riot-Token': API_KEY },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching game content:', error.message);
        res.status(500).json({ error: 'Failed to fetch game content' });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
