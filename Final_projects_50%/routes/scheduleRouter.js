const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router.post('/request', scheduleController.requestSchedule);

// Get all requests
router.get('/requests', scheduleController.getAllRequests);

// Get a request by ID (for pre-filling the update form)
router.get('/updateSched/:id', scheduleController.getRequestById);

// Update a request by ID
router.post('/updateSched/:id', scheduleController.updateRequest);

// Delete a request by ID
router.get('/delete-request/:id', scheduleController.deleteRequest);



module.exports = router;
