const db = require('../db'); 


const createRequest = (first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des) => {
    return db.execute(
        'INSERT INTO requests (first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "Pending")',
        [first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des]
    );
};


const getAllRequests = () => {
    return db.execute('SELECT * FROM requests ORDER BY dCreated DESC');
};


/*
const updateRequest = (id, first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des) => {
    return db.execute(
        'UPDATE requests SET first_name = ?, last_name = ?, contact = ?, address = ?, dCreated = ?, brand = ?, model = ?, vtype = ?, stype = ?, des = ? WHERE id = ?',
        [first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des, id]
    );
};


// Get request by ID
const getRequestById = (id) => {
    return db.execute('SELECT * FROM requests WHERE id = ?', [id]);
};

*/

const deleteRequest = (id) => {
    return db.execute('DELETE FROM requests WHERE id = ?', [id]);
};

module.exports = { createRequest, getAllRequests, deleteRequest };
