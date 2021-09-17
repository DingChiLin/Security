require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
// const cors = require('cors');

const app = express();

// app.use(cors());
app.set('trust proxy', true);
app.set('json spaces', 2);

app.use(cookieParser('123456789'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/', (req, res) => {
    res.send("home page")
})

// Page not found
app.use(function(req, res, next) {
    res.status(404).send("Page not found")
});

// Error handling
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(500).send('Internal Server Error');
});

port = 4000
app.listen(port, () => {console.log(`Listening on port: ${port}`);});

module.exports = app;
