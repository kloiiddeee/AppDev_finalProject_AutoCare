const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const contactRoutes = require("./routes/contactRoutes");
const mechRoutes = require("./routes/mechRoutes");
const userProfileRouter = require("./routes/userProfileRouter");
const mechController = require('./controllers/mechController')
const scheduleRouter = require('./routes/scheduleRouter');
const authController = require('./controllers/authController');
const scheduleController = require('./controllers/scheduleController')
const invController = require('./controllers/invController')
const invRouter = require('./routes/invRouter');
const app = express();
const port = 3000;


app.use(session({
    secret: 'key', 
    resave: false,
    saveUninitialized: false,
}));


function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    } else {
        res.redirect('/');
    }
}


function isAdmin(req, res, next) {
    if (req.session && req.session.user && req.session.user.role === 'admin') {
        return next();
    } else {
        res.status(403).send('Forbidden: Admins only.');
    }
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use("/api", contactRoutes);
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
app.get('/userDash', isAuthenticated, (req, res) => {
    res.render('userDash');
});


app.get('/adminDash', isAuthenticated, isAdmin, (req, res) => {
    res.render('adminDash');
});



app.get('/logout', (req, res) => {
    res.redirect('/');
});


//...................................................................For Admin 

app.get('/api/genderDistribution', authController.getGenderDistribution);
app.get('/api/addressDistribution', authController.getAddressDistribution);

app.get('/adminMech', isAuthenticated, isAdmin, (req, res) => {
    res.render('adminMech');
});

app.get('/adminUprofile', isAuthenticated, isAdmin, (req, res) => {
    res.render('adminUprofile');
});

app.get('/adminInv', isAuthenticated, isAdmin, (req, res) => {
    res.render('adminInv');
});

app.get('/adminReq', isAuthenticated, isAdmin, (req, res) => {
    res.render('adminReq');
});

app.get('/adminHis', isAuthenticated, isAdmin, (req, res) => {
    res.render('adminHis');
});

//....................................................ReadUser
app.get('/getUsers', authController.getAllUsers);
app.get('/updateUser', authController.updateUser);
app.use(userProfileRouter);



//....................................................ReqSched
app.post('/request', scheduleRouter);
app.get('/get-all-requests', scheduleController.getAllRequests);
app.use(scheduleRouter);



//....................................................Mech
app.post('/addMechanic', mechRoutes);
app.get('/get-all-mechanics', mechController.getMechanics);
app.use(mechRoutes);




//....................................................admin Inv
app.post('/addInventory', invRouter);
app.get('/get-all-inventory', invController.getInventory);
app.use(invRouter);



//....................................................Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
