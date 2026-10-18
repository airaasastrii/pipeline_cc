
const express = require('express');

const app = express();
const PORT = 3000;

// Middleware untuk membaca request JSON
app.use(express.json());

// Route utama untuk mengecek server
app.get('/', (req, res) => {
    res.send('Creator Content Pipeline Tracker Backend berhasil berjalan!');
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
