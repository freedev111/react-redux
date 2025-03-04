const express = require('express');
const mongoose = require('mongoose');
const bodyPaser = require('body-parser');
const passport = require('passport');
const config = require('./db');

const users = require('./routes/user');
const todos = require('./routes/todo');

mongoose.connect(config.DB, { useNewUrlParser: true}).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err)}
);

const app = express();

app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());

app.use('/api/users', users);
app.use('/api/todos', todos);

app.get('/', function(req, res) {
    res.send('Hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});