const db = require('../db');

//............................................Register a new user

const createUser = (fname, lname, email, contacts, gender, address, username, password) => {
    return db.execute(
        'INSERT INTO users (fname, lname, email, contacts, gender, address, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [fname, lname, email, contacts, gender, address, username, password]
    );
};

//............................................ Login

const findUser = (username, password) => {
    return db.execute(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password]
    );
};

module.exports = { createUser, findUser };
