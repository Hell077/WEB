const mongoose = require('mongoose');
const User = require('./user_scheme');

mongoose.connect('mongodb://localhost:27017/login');
// Функция, которая добавляет пользователя в базу данных
async function addUserToDB(username, password) {
  try {
    const newUser = new User({
      username: username,
      password: password
    });
    const savedUser = await newUser.save();
    console.log('Пользователь успешно добавлен:', savedUser);
    return savedUser;
  } catch (error) {
    console.error('Ошибка при добавлении пользователя:', error);
    throw error;
  }
}

module.exports = { addUserToDB };

