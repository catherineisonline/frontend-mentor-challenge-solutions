// import express, { json } from 'express';
// import cors from 'cors';
// import fetch from 'node-fetch';
// const app = express();
// const port = 3000;
// app.use(cors());
// app.use(json());

// app.get('/', (req, res) => {
//     res.send('Server Deployed 🥳');
// });

// app.get(`/shortener`, async (req, res) => {
//     const { url } = req.query;

//     if (!url) {
//         return res.status(400).json({ success: false, message: 'URL parameter is required' });
//     }

//     try {
//         const response = await fetch(`https://ulvis.net/API/write/get?url=${(url)}`);
//         const data = await response.json();

//         if (data.success) {
//             const shortenedUrl = data.data.url;
//             res.json({ success: true, data: { url: shortenedUrl } });
//         } else {
//             res.status(500).json({ success: false, message: 'Failed to shorten URL' });
//         }
//     } catch (error) {
//         res.status(500).json({ success: false, message: `Error with external service: ${error.message}` });
//     }
// });

// app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = 3000;

// Middleware to handle CORS
app.use(cors());
app.use(express.json());

// Route to verify server is running
app.get('/', (req, res) => {
    res.send('Server Deployed 🥳');
});

// Proxy middleware to handle requests to the external API
app.use('/shortener', createProxyMiddleware({
    target: 'https://ulvis.net',  // Target API
    changeOrigin: true,           // Change the origin of the request to the target URL
    pathRewrite: {
        '^/shortener': '/API/write/get', // Rewrite the path to match the target API endpoint
    },
    onProxyReq: (proxyReq, req, res) => {
        const url = req.query.url;
        if (!url) {
            res.status(400).json({ success: false, message: 'URL parameter is required' });
            proxyReq.abort();  // Abort the request if URL parameter is missing
        } else {
            // Append the URL parameter to the proxied request
            proxyReq.path = `${proxyReq.path}?url=${encodeURIComponent(url)}`;
        }
    },
    onError: (err, req, res) => {
        // Handle errors during proxying
        res.status(500).json({ success: false, message: `Error with external service: ${err.message}` });
    },
    onProxyRes: (proxyRes, req, res) => {
        // Handle response from the external service
        let responseBody = '';

        proxyRes.on('data', chunk => {
            responseBody += chunk;
        });

        proxyRes.on('end', () => {
            try {
                const data = JSON.parse(responseBody);

                if (data.success) {
                    const shortenedUrl = data.data.url;
                    res.json({ success: true, data: { url: shortenedUrl } });
                } else {
                    res.status(500).json({ success: false, message: 'Failed to shorten URL' });
                }
            } catch (error) {
                res.status(500).json({ success: false, message: `Error parsing response: ${error.message}` });
            }
        });
    },
}));

// Start the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
