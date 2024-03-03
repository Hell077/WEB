const express = require('express');
const path = require('path');
const app = express();
const { addUserToDB } = require('./public/js/database');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about.html', (req, res) => {
    res.render('about');
});

app.get('/card', (req, res) => {
    res.render('card');
});

app.post('/check-user', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        return res.status(400).send('Имя пользователя и пароль обязательны!');
    }

    addUserToDB(username, password)
        .then(() => {
            console.log('Пользователь успешно добавлен в базу данных');
            res.redirect('/');
        })
        .catch(error => {
            console.error('Ошибка при добавлении пользователя в базу данных:', error);
            res.redirect('/');
        });
});

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Сервер работает по адресу: http://localhost:${PORT}`);
});
