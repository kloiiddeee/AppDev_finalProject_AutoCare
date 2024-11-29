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

const getUserById = (id) => {
    return db.execute('SELECT * FROM users WHERE id = ?', [id]);
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



//............................................ Visualization

const getGenderDistribution = () => {
    return db.execute('SELECT gender, COUNT(*) as count FROM users GROUP BY gender');
};

const getAddressDistribution = () => {
    return db.execute('SELECT address, COUNT(*) as count FROM users GROUP BY address');
};



//............................................ All Totals

const getTotalMechanics = () => {
    return db.execute('SELECT COUNT(*) as count FROM mechanics');
};

const getTotalPendingTransactions = () => {
    return db.execute('SELECT COUNT(*) as count FROM requests WHERE status = "pending"');
};


module.exports = {
    createUser, findUser, getAllUsers, getUserById, updateUser, deleteUser,
    getGenderDistribution, getAddressDistribution, getTotalMechanics, getTotalPendingTransactions
};  
