const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/mainRouter');
const userProfileRouter = require('./routes/userProfileRouter');
const authController = require('./controllers/authController');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//....................................................Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contacts', (req, res) => {
    res.render('contacts');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', authController.registerUser);

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', authController.loginUser);


app.get('/userDash', (req, res) => {
    res.render('userDash'); 
});


app.get('/uprofile', (req, res) => {
    res.render('uprofile'); 
});
app.get('/uprofile', userProfileRouter); 

//....................................................Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
