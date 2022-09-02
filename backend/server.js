const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("You are Welcome Back")
});

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`)
});