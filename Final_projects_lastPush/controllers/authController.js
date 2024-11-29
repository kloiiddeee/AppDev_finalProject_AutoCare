const userModel = require('../models/userModel');



//............................................ Registration

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

//............................................ Login

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [result] = await userModel.findUser(username, password); 

        if (result.length > 0) {
            const user = result[0];

            // Store essential details in session
            req.session.user = {
                id: user.id,
                role: user.role,
                username: user.username, 
            };

            // Redirect based on user role
            if (user.role === 'admin') {
                res.redirect('/adminDash');
            } else {
                res.redirect('/userDash');
            }
        } else {
            res.render('login', { error: 'Invalid username or password.' }); 
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
        res.json(users); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving users.');
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [user] = await userModel.getUserById(id);
        if (user.length > 0) {
            res.render('update/updateUser', { user: user[0] }); 
        } else {
            res.status(404).send('User not found.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user data.');
    }
};

//.................................................Update

const updateUser = async (req, res) => {
    const { id, fname, lname, email, contacts, gender, address } = req.body;
    try {
        await userModel.updateUser(id, fname, lname, email, contacts, gender, address);
        res.redirect('/adminUprofile');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating user.');
    }
};


//.................................................Delete

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userModel.deleteUser(id);
        res.redirect('/adminUprofile'); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting user.');
    }
};



//............................................ Visualization

const getGenderDistribution = async (req, res) => {
    try {
        const [results] = await userModel.getGenderDistribution();
        const genderData = results.reduce((acc, item) => {
            acc[item.gender] = item.count;
            return acc;
        }, {});
        res.json(genderData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching gender distribution.');
    }
};

const getAddressDistribution = async (req, res) => {
    try {
        const [results] = await userModel.getAddressDistribution();
        const addressData = results.reduce((acc, item) => {
            acc[item.address] = item.count;
            return acc;
        }, {});
        res.json(addressData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching address distribution.');
    }
};



//............................................ All Totals

const getDashboardStats = async (req, res) => {
    try {
        const [users] = await userModel.getAllUsers();
        const [mechanics] = await userModel.getTotalMechanics();
        const [pendingTransactions] = await userModel.getTotalPendingTransactions();

        res.json({
            totalUsers: users.length,          
            totalMechanics: mechanics[0].count,
            totalPendingTransactions: pendingTransactions[0].count
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching dashboard stats.');
    }
};

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getGenderDistribution,
    getAddressDistribution,
    getDashboardStats
};