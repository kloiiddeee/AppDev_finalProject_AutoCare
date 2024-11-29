const inventoryModel = require('../models/invModel');

// Add new inventory item
const addInventory = (req, res) => {
    const { name, part_type, item_type, brand, quantity, price, picture_url } = req.body;

    inventoryModel.createInventory(name, part_type, item_type, brand, quantity, price, picture_url)
        .then(() => {
            res.redirect('/adminInv');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error adding inventory item');
        });
};

// Get all inventory items
const getInventory = async (req, res) => {
    try {
        const [inventory] = await inventoryModel.getAllInventory();
        console.log(inventory);  // Log the inventory data to check if it is fetched correctly
        res.json(inventory);  // Send JSON data instead of rendering a view
    } catch (error) {
        console.error('Error fetching inventory:', error);
        res.status(500).send('Error fetching inventory');
    }
};


// Get a single inventory item by ID
const getInventoryItem = async (req, res) => {
    const { id } = req.params;
    try {
        const [inventory] = await inventoryModel.getInventoryItemById(id);
        const item = inventory[0];  
        if (!item) {
            console.error(`No inventory item found with ID ${id}`);
            return res.status(404).send('Inventory item not found');
        }

        res.render('update/updateInventory', { item });
    } catch (error) {
        console.error('Error fetching inventory item:', error);
        res.status(500).send('Error fetching inventory item');
    }
};

// Update an inventory item
const updateInventory = (req, res) => {
    const { id } = req.params;
    const { name, part_type, item_type, brand, quantity, price, picture_url } = req.body;

    inventoryModel.updateInventory(id, name, part_type, item_type, brand, quantity, price, picture_url)
        .then(() => {
            res.redirect('/adminInv');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error updating inventory item');
        });
};

// Delete an inventory item
const deleteInventory = (req, res) => {
    const { id } = req.params;

    inventoryModel.deleteInventory(id)
        .then(() => {
            res.redirect('/adminInv');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error deleting inventory item');
        });
};

module.exports = {
    addInventory,
    getInventory,
    getInventoryItem,
    updateInventory,
    deleteInventory
};
