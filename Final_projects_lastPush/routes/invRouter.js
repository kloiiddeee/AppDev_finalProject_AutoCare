const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/invController');


router.post('/addInventory', inventoryController.addInventory);

router.get('/get-all-inventory', inventoryController.getInventory);

router.get('/updateInv/:id', inventoryController.getInventoryItem);

router.post('/updateInv/:id', inventoryController.updateInventory);

router.get('/deleteInv/:id', inventoryController.deleteInventory);

module.exports = router;
