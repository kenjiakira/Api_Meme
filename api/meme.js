const express = require('express');
const axios = require('axios');

const app = express();

const memes = [
    "https://imgur.com/a/AozH1m5.jpg", 
];

const ensureJpgExtension = (url) => {
  
    if (!url.endsWith('.jpg')) {
     
        return `${url}.jpg`;
    }
    return url;
};

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    let memeUrl = memes[randomIndex];

    // Đảm bảo URL có đuôi .jpg
    memeUrl = ensureJpgExtension(memeUrl);

    if (memeUrl) {
        res.json({ memeUrl }); 
    } else {
        res.status(404).json({ message: 'Không tìm thấy meme nào.' });
    }
});

module.exports = app;
