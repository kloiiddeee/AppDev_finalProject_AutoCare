const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router.post('/request', scheduleController.requestSchedule);
router.get('/requests', scheduleController.getAllRequests);
//router.post('/update-request/:id', scheduleController.updateRequest);
//router.get('/update-request/:id', scheduleController.getRequestById);
router.delete('/delete-request/:id', scheduleController.deleteRequest);

module.exports = router;
