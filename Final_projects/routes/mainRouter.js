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


module.exports = router;
