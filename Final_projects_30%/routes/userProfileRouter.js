const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();


router.get('/getUsers', authController.getAllUsers);
router.post('/updateUser', authController.updateUser); // Update user
router.delete('/deleteUser/:id', authController.deleteUser); // Delete user


module.exports = router;