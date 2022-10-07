const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./routes/userRoute")
const bookRoute = require("./routes/bookRoute")
const dotenv = require("dotenv");
const app = express();

app.use(express.json());

dotenv.config();

app.use("/api/users", UserRoute);
app.use("/api/books", bookRoute);


mongoose.connect("mongodb+srv://Sammy:Sammy1234@cluster0.z17gmn2.mongodb.net/book-keeping-app")
.then(() => console.log("Database Connection Successfull"))
.catch(() => console.log("Database Connection UnSuccessful!!!"));
 

// app.get("/", (req, res) => {
//     res.send("You are Welcome Back")
// });
 
//app.use("/user", UserRoute);
 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`)
});