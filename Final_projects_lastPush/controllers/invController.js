const inventoryModel = require('../models/invModel');

//............................................ addItem
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

//............................................ Display Items
const getInventory = async (req, res) => {
    try {
        const [rows] = await inventoryModel.getAllInventory();
        console.log('Fetched inventory data:', rows);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching inventory:', error);
        res.status(500).send('Error fetching inventory');
    }
};


//............................................ get Item by Id
const getInventoryItem = async (req, res) => {
    const { id } = req.params;
    try {
        const [inventory] = await inventoryModel.getInventoryItemById(id);
        const item = inventory[0];  
        if (!item) {
            console.error(`No inventory item found with ID ${id}`);
            return res.status(404).send('Inventory item not found');
        }

        res.render('update/updateInv', { item });
    } catch (error) {
        console.error('Error fetching inventory item:', error);
        res.status(500).send('Error fetching inventory item');
    }
};

//............................................ update items
const updateInventory = (req, res) => {
    const { id } = req.params;
    const { name, part_type, item_type, brand, quantity, price, picture_url } = req.body;

    inventoryModel.updateInventory(id, name, part_type, item_type, brand, quantity, price, picture_url)
        .then(() => {
            res.redirect('/adminInv?update=success');
        })
        .catch((err) => {
            console.error(err);
            res.redirect('/adminInv?update=failed');
        });
};


//............................................ delete items
const deleteInventory = (req, res) => {
    const { id } = req.params;

    inventoryModel.deleteInventory(id)
        .then(() => {
            res.redirect('/adminInv?delete=success');
        })
        .catch((err) => {
            console.error(err);
            res.redirect('/adminInv?delete=failed');
        });
};

module.exports = {
    addInventory,
    getInventory,
    getInventoryItem,
    updateInventory,
    deleteInventory
};
