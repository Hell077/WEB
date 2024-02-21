const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about.html', (req, res) => {
  res.render('about');
});

app.post('/check-user', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log(`username ---  ${username}  password --- ${password}`)
  res.redirect ('/')
});


const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Сервер работает по адресу: http://localhost:${PORT}`);
});
