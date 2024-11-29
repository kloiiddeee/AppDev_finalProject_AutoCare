const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/invController');

// Route to add new inventory item
router.post('/addInventory', inventoryController.addInventory);

// Route to get all inventory items
router.get('/get-all-inventory', inventoryController.getInventory);

// Route to get a single inventory item by ID
router.get('/updateInventory/:id', inventoryController.getInventoryItem);

// Route to update an inventory item
router.post('/updateInventory/:id', inventoryController.updateInventory);

// Route to delete an inventory item
router.get('/deleteInventory/:id', inventoryController.deleteInventory);

module.exports = router;
