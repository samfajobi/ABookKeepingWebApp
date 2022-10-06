const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Enter a Username"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please Enter an Emai;"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0 // user = 0, admin =1
    }
},  
    {
        timestamps: true
})

UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

module.exports = mongoose.model("UserModel", UserSchema)










