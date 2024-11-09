
const scheduleModel = require('../models/scheduleModel');

//.................................................Create
const requestSchedule = async (req, res) => {
    const { first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des } = req.body;

    
    if (!first_name || !last_name || !contact || !address || !dCreated || !brand || !model || !vtype || !stype || !des) {
        console.error('Some fields are missing or undefined:', req.body);
        return res.status(400).send('Please complete all required fields.');
    }

    try {
        await scheduleModel.createRequest(first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des);
        res.send('Request submitted successfully!');
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Error submitting request. Please try again.');
    }
};

//.................................................Read
const getAllRequests = async (req, res) => {
    try {
        const [rows] = await scheduleModel.getAllRequests();
        res.json(rows); 
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Error fetching request history. Please try again.');
    }
};

/*/.................................................Update
const updateRequest = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des } = req.body;

    // Validate that all fields are present
    if (!first_name || !last_name || !contact || !address || !dCreated || !brand || !model || !vtype || !stype || !des) {
        return res.status(400).send('Please complete all required fields.');
    }

    try {
        await scheduleModel.updateRequest(id, first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des);
        res.send('Request updated successfully!');
    } catch (error) {
        console.error('Error updating request:', error);
        res.status(500).send('Error updating request. Please try again.');
    }
};


// Read (Get request by ID)
const getRequestById = async (req, res) => {
    const { id } = req.params;

    try {
        // Fetch the request based on the ID
        const [rows] = await scheduleModel.getRequestById(id);
        const request = rows[0]; // Assuming rows is an array and request is the first item

        // Check if request exists
        if (!request) {
            return res.status(404).send('Request not found');
        }

        // Log request to verify
        console.log(request);

        // Render the admin dashboard and pass the request data
        res.render('adminDash', { request });
    } catch (error) {
        console.error('Error fetching request:', error);
        res.status(500).send('Error fetching request. Please try again.');
    }
};

*/


const deleteRequest = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await scheduleModel.deleteRequest(id);

        // Check if the request was found and deleted
        if (result.affectedRows === 0) {
            return res.status(404).send('Request not found');
        }

        res.send('Request deleted successfully!');
    } catch (error) {
        console.error('Error deleting request:', error);
        res.status(500).send('Error deleting request. Please try again.');
    }
};

module.exports = { requestSchedule, getAllRequests, deleteRequest };
