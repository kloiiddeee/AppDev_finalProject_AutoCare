const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();


router.get('/getUsers', authController.getAllUsers);

// Route to get user details for updating (new route)
router.get('/updateUser/:id', authController.getUserById);

// Route to update user
router.post('/updateUser', authController.updateUser);

// Route to delete user
router.get('/deleteUser/:id', authController.deleteUser);

router.get('/dashboard-stats', authController.getDashboardStats);

module.exports = router;