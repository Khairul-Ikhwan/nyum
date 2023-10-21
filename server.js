import express from "express";
import path from 'path';
import logger from 'morgan';
import favicon from 'serve-favicon';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'dist', 'vite.svg')));

app.use(express.static(path.join(__dirname, 'dist')));

// Serve the index.html for all routes (client-side routing)
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
