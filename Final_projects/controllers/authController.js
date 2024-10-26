const userModel = require('../models/userModel');

const registerUser = async (req, res) => {
    const { fname, lname, email, contacts, gender, address, username, password } = req.body;

    try {
        await userModel.createUser(fname, lname, email, contacts, gender, address, username, password);
        res.send('User registered successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user. Please try again.');
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [result] = await userModel.findUser(username, password);
        if (result.length > 0) {
            res.redirect('/userDash');
        } else {
            res.send('Invalid username or password.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error occurred during login.');
    }
};

module.exports = { registerUser, loginUser };
