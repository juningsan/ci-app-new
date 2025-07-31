// server.js
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

app.get('/api/bing-image', async (req, res) => {
  try {
    const bingRes = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=3&mkt=ja-JP');
    const data = await bingRes.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch from Bing' });
  }
});

app.listen(3001, () => {
  console.log('Proxy server running at http://localhost:3001');
});
