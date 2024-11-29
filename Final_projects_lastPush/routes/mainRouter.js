const express = require('express');

const authController = require('../controllers/authController');
const router = express.Router();


//............................................Home route
router.get('/', (req, res) => {
    res.render('index');  
});

//............................................About route
router.get('/about', (req, res) => {
    res.render('about');  
});

//............................................Services route
router.get('/services', (req, res) => {
    res.render('services');  
});

//............................................Contacts route
router.get('/contacts', (req, res) => {
    res.render('contacts');  
});


//............................................Register route (GET & POST request)
router.get('/register', (req, res) => {
    res.render('register');  
});

router.post('/register', authController.registerUser);  

//............................................Login route (GET  & POST request)
router.get('/login', (req, res) => {
    res.render('login');  
});

router.post('/login', authController.loginUser);  






//............................................userDash route (GET  & POST request)
router.get('/userDash', authController.getUserDash);






//............................................adminDash route (GET  & POST request)
router.get('/adminDash', authController.getUserDash);

router.get('/adminMech', (req, res) => {
    res.render('mechanicProfile');  // Renders the 'mechanicProfile.ejs' view
});

router.get('/adminUprofile', (req, res) => {
    res.render('userProfile');  // Renders the 'userProfile.ejs' view
});

router.get('/adminInv', (req, res) => {
    res.render('inventory');  // Renders the 'inventory.ejs' view
});

router.get('/adminReq', (req, res) => {
    res.render('requestSchedule');  // Renders the 'requestSchedule.ejs' view
});

router.get('/adminHis', (req, res) => {
    res.render('history');  // Renders the 'history.ejs' view
});





module.exports = router;
