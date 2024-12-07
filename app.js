const express = require('express');
const app = express();
const path = require('path');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Setting the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('Homepage', { pageTitle: 'Technique Tree' });
});

app.get('/sport', (req, res) => {
    res.render('SportHomePage', { pageTitle: 'Sport Homepage' });
});

app.get('/tree', (req, res) => {
    res.render('SportTreePage', { pageTitle: 'Sport Tree' });
});

// Starting the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
