const express = require('express');
const userProfileController = require('../controllers/userProfileController');
const router = express.Router();

// Render profile update form (GET request)
router.get('/uprofile', userProfileController.getUserProfile);

// Handle profile update submission (POST request)
router.post('/uprofile', userProfileController.updateUserProfile);

module.exports = router;
