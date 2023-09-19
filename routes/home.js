const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "../views", "index.html"); // Menyesuaikan path dengan folder "views"
    res.sendFile(indexPath);
});
router.post("/", (req, res) => {
    res.send("User Berhasil Ditambahkan");
});

router.put("/", (req, res) => {
    res.send("User Berhasil Diupdate");
});

router.delete("/", (req, res) => {
    res.send("User Berhasil Dihapus");
});
module.exports = router;
