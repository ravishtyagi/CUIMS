const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', {
        imagePath: '/images/cuims_logo.png',
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});