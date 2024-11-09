const db = require('../db');

//............................................Register a new user

const createUser = (fname, lname, email, contacts, gender, address, username, password) => {
    return db.execute(
        'INSERT INTO users (fname, lname, email, contacts, gender, address, username, password, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, "user")',
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




//............................................ Read
const getAllUsers = () => {
    return db.execute(
        'SELECT * FROM users WHERE role != "admin"'
    );
};

 //............................................ Update
const updateUser = (id, fname, lname, email, contacts, gender, address) => {
    return db.execute(
        'UPDATE users SET fname = ?, lname = ?, email = ?, contacts = ?, gender = ?, address = ? WHERE id = ?',
        [fname, lname, email, contacts, gender, address, id]
    );
};



//............................................ Delete
const deleteUser = (id) => {
    return db.execute('DELETE FROM users WHERE id = ?', [id]);
};
module.exports = { createUser, findUser, getAllUsers, updateUser, deleteUser };
