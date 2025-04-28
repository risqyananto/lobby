const express = require('express');
const path = require('path');
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route for homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Portofolio Saya', message: 'Selamat datang di portofolio saya!' });
});

// Set port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
