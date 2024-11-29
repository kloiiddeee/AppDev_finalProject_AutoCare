
const scheduleModel = require('../models/scheduleModel');

//............................................ Create

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

//............................................ Read

const getAllRequests = async (req, res) => {
    try {
        const [rows] = await scheduleModel.getAllRequests();
        res.json(rows); 
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Error fetching request history. Please try again.');
    }
};


//............................................ ReqbyID

const getRequestById = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await scheduleModel.getRequestById(id);
        const request = rows[0]; 

        if (!request) {
            return res.status(404).send('Request not found');
        }
 
        res.render('update/updatesched', { request }); 
    } catch (error) {
        console.error('Error fetching request:', error);
        res.status(500).send('Error fetching request. Please try again.');
    }
};


//............................................ updateReq

const updateRequest = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des, status } = req.body;

    if (!first_name || !last_name || !contact || !address || !dCreated || !brand || !model || !vtype || !stype || !des || !status) {
        return res.status(400).send('Please complete all required fields.');
    }

    try {
        await scheduleModel.updateRequest(id, first_name, last_name, contact, address, dCreated, brand, model, vtype, stype, des, status);
        res.redirect('/adminMech');
    } catch (error) {
        console.error('Error updating request:', error);
        res.status(500).send('Error updating request. Please try again.');
    }
};



//............................................ deleteReq

const deleteRequest = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await scheduleModel.deleteRequest(id);

        if (result.affectedRows === 0) {
            return res.status(404).send('Request not found');
        }

        res.redirect('/adminReq');
    } catch (error) {
        console.error('Error deleting request:', error);
        res.status(500).send('Error deleting request. Please try again.');
    }
};;

module.exports = { requestSchedule, getAllRequests, updateRequest, getRequestById, deleteRequest };
