const db = require('../db'); 

//............................................ addReq
const createRequest = (first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des) => {
    return db.execute(
        'INSERT INTO requests (first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "Pending")',
        [first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des]
    );
};

//............................................ Read
const getAllRequests = () => {
    return db.execute('SELECT * FROM requests ORDER BY dCreated DESC');
};


//............................................ reqbyID

const getRequestById = (id) => {
    return db.execute('SELECT * FROM requests WHERE id = ?', [id]);
};


//............................................ updateReq

const updateRequest = (id, first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des, status) => {
    return db.execute(
        'UPDATE requests SET first_name = ?, last_name = ?, contact = ?, address = ?, dCreated = ?, brand = ?, model = ?, vtype = ?, stype = ?, des = ?, status = ? WHERE id = ?',
        [first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des, status, id]
    );
};

//............................................ deleteReq

const deleteRequest = (id) => {
    return db.execute('DELETE FROM requests WHERE id = ?', [id]);
};

module.exports = { createRequest, getAllRequests, updateRequest, getRequestById, deleteRequest };
