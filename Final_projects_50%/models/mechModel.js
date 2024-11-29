const db = require('../db');  

//............................................ AddMech

const createMechanic = (first_name, last_name, contact, gender, address, skills, availability) => {
    return db.execute(
        'INSERT INTO mechanics (first_name, last_name, contact, gender, address, skills, availability) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [first_name, last_name, contact, gender, address, skills, availability]
    );
};

//............................................ getMech

const getMechanics = () => {
    return db.execute('SELECT * FROM mechanics');
}; 


//............................................ mechbyID

const getMechanicById = (id) => {
    return db.execute('SELECT * FROM mechanics WHERE id = ?', [id]);
};


//............................................ updateMech

const updateMechanic = (id, first_name, last_name, contact, gender, address, skills, availability) => {
    return db.execute(
        'UPDATE mechanics SET first_name = ?, last_name = ?, contact = ?, gender = ?, address = ?, skills = ?, availability = ? WHERE id = ?',
        [first_name, last_name, contact, gender, address, skills, availability, id]
    );
};



//............................................ deleteMech

const deleteMechanic = (id) => {
    return db.execute('DELETE FROM mechanics WHERE id = ?', [id]);
};

module.exports = {
    createMechanic,
    getMechanics,
    getMechanicById,
    updateMechanic,
    deleteMechanic
};
