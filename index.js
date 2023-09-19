const express = require("express");
const app = express();
const port = 8080;

const homeRoute = require("./routes/home");
const bukuRoute = require("./routes/buku");
const userRoute = require("./routes/user");
app.use("/", homeRoute);
app.use("/user", userRoute);
app.use("/buku", bukuRoute);

app.listen(port, () => {
    console.log("Server Berjalan di Port " + port)
});