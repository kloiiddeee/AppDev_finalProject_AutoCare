const db = require('../db');  

// Add new inventory item
const createInventory = (name, part_type, item_type, brand, quantity, price, picture_url) => {
    return db.execute(
        'INSERT INTO inventory (name, part_type, item_type, brand, quantity, price, picture_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, part_type, item_type, brand, quantity, price, picture_url]
    );
};

// Get all inventory items
const getAllInventory = () => {
    return db.execute('SELECT * FROM inventory');
};

// Get a single inventory item by ID
const getInventoryItemById = (id) => {
    return db.execute('SELECT * FROM inventory WHERE id = ?', [id]);
};

// Update an inventory item
const updateInventory = (id, name, part_type, item_type, brand, quantity, price, picture_url) => {
    return db.execute(
        'UPDATE inventory SET name = ?, part_type = ?, item_type = ?, brand = ?, quantity = ?, price = ?, picture_url = ? WHERE id = ?',
        [name, part_type, item_type, brand, quantity, price, picture_url, id]
    );
};

// Delete an inventory item
const deleteInventory = (id) => {
    return db.execute('DELETE FROM inventory WHERE id = ?', [id]);
};

module.exports = {
    createInventory,
    getAllInventory,
    getInventoryItemById,
    updateInventory,
    deleteInventory
};
