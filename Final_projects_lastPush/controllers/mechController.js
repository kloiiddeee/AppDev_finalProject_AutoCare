const mechanicModel = require('../models/mechModel');


//............................................ Add Mech

const addMechanic = (req, res) => {
    const { first_name, last_name, contact, gender, address, skills, availability } = req.body;

    mechanicModel.createMechanic(first_name, last_name, contact, gender, address, skills, availability)
        .then(() => {
            res.redirect('/adminMech');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error adding mechanic');
        });
};


//............................................ Display Mech

const getMechanics = async (req, res) => {
    try {
        const [mechanics] = await mechanicModel.getMechanics();
        res.json(mechanics); 
    } catch (error) {
        console.error('Error fetching mechanics:', error);
        res.status(500).send('Error fetching mechanics');
    }
};

//............................................ getMechbyID

const getMechanic = async (req, res) => {
    const { id } = req.params;
    try {
        const [mechanics] = await mechanicModel.getMechanicById(id);
        const mechanic = mechanics[0];  // Extract the first mechanic from the result

        if (!mechanic) {
            console.error(`No mechanic found with ID ${id}`);
            return res.status(404).send('Mechanic not found');
        }

        console.log('Mechanic data:', mechanic);
        res.render('update/updateMech', { mechanic });
    } catch (error) {
        console.error('Error fetching mechanic:', error);
        res.status(500).send('Error fetching mechanic');
    }
};


//............................................ updateMech

const updateMechanic = (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, contact, gender, address, skills, availability } = req.body;

    mechanicModel.updateMechanic(id, first_name, last_name, contact, gender, address, skills, availability)
        .then(() => {
            res.redirect('/adminMech');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error updating mechanic');
        });
};


//............................................ deleteMech

const deleteMechanic = (req, res) => {
    const { id } = req.params;

    mechanicModel.deleteMechanic(id)
        .then(() => {
            res.redirect('/adminMech');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error deleting mechanic');
        });
};


module.exports = {
    addMechanic,
    getMechanics,
    getMechanic,
    updateMechanic,
    deleteMechanic
};
