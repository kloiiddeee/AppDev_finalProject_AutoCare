const express = require('express');
const router = express.Router();
const mechanicController = require('../controllers/mechController');


router.post('/addMechanic', mechanicController.addMechanic);

router.get('/get-all-mechanics', mechanicController.getMechanic);

router.get('/updateMech/:id', mechanicController.getMechanic);

router.post('/updateMech/:id', mechanicController.updateMechanic);

router.get('/deleteMechanic/:id', mechanicController.deleteMechanic);

module.exports = router;