
const scheduleModel = require('../models/scheduleModel');

//............................................ ReqbyID

const getRequestById = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await scheduleModel.getRequestById(id);
        const request = rows[0]; 

        if (!request) {
            return res.status(404).send('Request not found');
        }
 
        res.render('update/view', { request }); 
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
        res.redirect('/adminHis');
    } catch (error) {
        console.error('Error updating request:', error);
        res.status(500).send('Error updating request. Please try again.');
    }
};


const deleteRequest = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await scheduleModel.deleteRequest(id);

        if (result.affectedRows === 0) {
            return res.status(404).send('Request not found');
        }

        res.redirect('/adminHis');
    } catch (error) {
        console.error('Error deleting request:', error);
        res.status(500).send('Error deleting request. Please try again.');
    }
};



module.exports = {  getRequestById, updateRequest, deleteRequest};
