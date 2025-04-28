const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Simpan data website di memori (sementara, belum pakai database)
let websiteData = {
  title: "[Kosongan]",
  tagline: "[Kosongan Tagline]",
  websiteLink: "#",
  appLink: "#",
  animeLink: "#",
  logo: "/assets/logo.avif", // Ganti sesuai lokasi file kamu
  backgroundImage: "/assets/background.avif" // Ganti juga
};

// Setup view engine ke EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Untuk membaca data POST dari form
app.use(express.urlencoded({ extended: true }));

// Setup folder static
app.use(express.static(path.join(__dirname, 'public')));

// Route Home (index)
app.get('/', (req, res) => {
  res.render('index', websiteData);
});

// Route Config Page (Form pengaturan)
app.get('/config', (req, res) => {
  res.render('config', websiteData);
});

// Route untuk menerima form POST dari /config
app.post('/config', (req, res) => {
  const { title, tagline, websiteLink, appLink, animeLink, logo, backgroundImage } = req.body;

  // Update data website
  websiteData = {
    title,
    tagline,
    websiteLink,
    appLink,
    animeLink,
    logo,
    backgroundImage
  };

  console.log('Website data updated:', websiteData);

  // Setelah update, redirect ke halaman utama
  res.redirect('/');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
