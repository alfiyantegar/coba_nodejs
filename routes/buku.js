const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "../views", "buku.html"); // Menyesuaikan path dengan folder "views"
    res.sendFile(indexPath);
});

router.post("/", (req, res) => {
    res.send("Buku Berhasil Ditambahkan");
});

router.put("/", (req, res) => {
    res.send("Buku Berhasil Diupdate");
});

router.delete("/", (req, res) => {
    res.send("Buku Berhasil Dihapus");
});


module.exports = router;