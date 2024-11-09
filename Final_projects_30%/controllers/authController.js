const userModel = require('../models/userModel');

const registerUser = async (req, res) => {
    const { fname, lname, email, contacts, gender, address, username, password, role } = req.body;
    try {
        await userModel.createUser(fname, lname, email, contacts, gender, address, username, password, role);
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
            const user = result[0];
            
            req.session.userId = user.id;

            if (user.role === 'admin') {
                res.redirect('/adminDash');
            } else {
                res.redirect('/userDash');
            }
        } else {
            res.send('Invalid username or password.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error occurred during login.');
    }
};


//.................................................Read
const getAllUsers = async (req, res) => {
    try {
        const [users] = await userModel.getAllUsers();
        res.json(users); // Send users data as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving users.');
    }
};

//.................................................Update
const updateUser = async (req, res) => {
    const { id, fname, lname, email, contacts, gender, address } = req.body;
    try {
        await userModel.updateUser(id, fname, lname, email, contacts, gender, address);
        res.send('User updated successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating user.');
    }
};


//.................................................Delete
const deleteUser = async (req, res) => {
    const { id } = req.params; // Assume id is passed as a URL parameter
    try {
        await userModel.deleteUser(id);
        res.send('User deleted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting user.');
    }
};

module.exports = { registerUser, loginUser, getAllUsers, updateUser, deleteUser };
