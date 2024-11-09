const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const scheduleRouter = require('./routes/scheduleRouter');
const authController = require('./controllers/authController');
const scheduleController = require('./controllers/scheduleController')
const app = express();
const port = 3000;


app.use(session({
    secret: 'key', 
    resave: false,
    saveUninitialized: false,
}));


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


//....................................................Protected Routes
app.get('/userDash',  (req, res) => {
    res.render('userDash');
});

app.get('/adminDash',  (req, res) => {
    res.render('adminDash');
});

app.get('/logout', (req, res) => {
    res.redirect('/');
});


//...................................................................For Admin 


app.get('/adminMech', (req, res) => {
    res.render('adminMech');  
});

app.get('/adminUprofile', (req, res) => {
    res.render('adminUprofile');  // Ensure a 'userProfile.ejs' exists
});

app.get('/adminInv', (req, res) => {
    res.render('adminInv');  // Ensure an 'inventory.ejs' exists
});

app.get('/adminReq', (req, res) => {
    res.render('adminReq');  // Ensure 'requestSchedule.ejs' exists
});

app.get('/adminHis', (req, res) => {
    res.render('adminHis');  // Ensure 'history.ejs' exists
});


//....................................................ReadUser
app.get('/getUsers', authController.getAllUsers);
app.get('/updateUser', authController.updateUser);




//....................................................ReqSched
app.post('/request', scheduleRouter);
app.get('/get-all-requests', scheduleController.getAllRequests);





//....................................................admin history


/*app.get('/userDash/:id', async (req, res) => {
    const userId = req.params.id; 
    try {
        const userProfile = await authController.getUserProfile(userId); // Implement this function to get user info
        res.render('userDash', { user: userProfile });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading user dashboard.');
    }
});*/



//....................................................Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
