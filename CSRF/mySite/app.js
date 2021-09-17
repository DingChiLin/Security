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

app.post('/signup', (req, res) => {
    // console.log(validator.escape(req.body.email))
    const email = encodeURIComponent(req.body.email);
    const password = encodeURIComponent(req.body.password);
    // const q = mysqlCon.query(`INSERT INTO user (email, password) VALUES (?, ?)`, [email, password], (error, result) => {
    res.cookie("token", "my_login_token")
    res.send('sign up success');
    // })
    // console.log(q.sql);
})

app.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // const q = mysqlCon.query('SELECT * FROM user WHERE Email = ? AND Password = ?', [email, password], (error, result) => {
        // if (result.length > 0) {
            // res.send(`<html><body>Welcome ${result[0].email}</body></html>`);
        // } else {
    res.cookie("token", "my_login_token", {SameSite: "None", HttpOnly: false, HostOnly: false})
    res.send('sign in success');
        // }
    // })
    // console.log(q.sql);
})


// API routes
app.get('/post/delete', (req, res) => {
    console.log(req.query.id)
    console.log(req.cookies.token)
    res.send("OK")
});

// Page not found
app.use(function(req, res, next) {
    res.status(404).send("Page not found")
});

// Error handling
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(500).send('Internal Server Error');
});

port = 5000
app.listen(port, () => {console.log(`Listening on port: ${port}`);});

module.exports = app;
