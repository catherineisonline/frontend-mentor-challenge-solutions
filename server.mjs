import express, { json } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
const app = express();
const port = 3000;
app.use(cors());
app.use(json());

app.get('/', (req, res) => {
    res.send('Server Deployed 🥳');
});

app.get(`/shortener`, async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ success: false, message: 'URL parameter is required' });
    }

    try {
        const response = await fetch(`https://ulvis.net/API/write/get?url=${(url)}`);
        const data = await response.json();

        if (data.success) {
            const shortenedUrl = data.data.url;
            res.json({ success: true, data: { url: shortenedUrl } });
        } else {
            res.status(500).json({ success: false, message: 'Failed to shorten URL' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: `Error with external service: ${error.message}` });
    }
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
