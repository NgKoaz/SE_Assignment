const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');
const data = require('./models/data.json');
//const User = require('./models/');

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;
const bcryptSalt = bcrypt.genSaltSync(10);
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

app.get('/test', (req, res) => {
    res.json("Test Ok!");
})

app.get('/profile', (req, res) => {
    const token = req.cookies?.token;
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, userData) => {
            if (err) console.error(err);
            res.json(userData);
        })
        console.log("OK");
    } else {
        res.status(203).json('No Token!');
    }
})

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if (username === "khoa"){
        jwt.sign({username}, jwtSecret, {}, (err, token) => {
            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none',
            }).status(201).json({
                username
            })
        })
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '', {
        htppOnly: true,
        secure: true,
        sameSite: 'none',
    }).json('ok');
})

const server = app.listen(4000, () => {
    console.log("Listen to port 4000");
})