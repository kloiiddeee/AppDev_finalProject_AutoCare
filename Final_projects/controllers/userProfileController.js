const userModel = require('../models/userModel');

// Render user profile update form
const getUserProfile = async (req, res) => {
    try {
        // Assume userId is obtained from session or auth middleware
        const userId = req.session.userId; // Adjust based on your session handling
        const [user] = await userModel.findUserById(userId);
        
        if (user) {
            res.render('userProfile', { user });
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user profile.');
    }
};

// Update user profile
const updateUserProfile = async (req, res) => {
    const { fname, lname, email, contacts, gender, address, username, password } = req.body;
    const userId = req.session.userId; // Retrieve user ID from session
    
    try {
        await userModel.updateUser(userId, fname, lname, email, contacts, gender, address, username, password);
        res.send('Profile updated successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating profile.');
    }
};

module.exports = { getUserProfile, updateUserProfile };