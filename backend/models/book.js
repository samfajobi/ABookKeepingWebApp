const mongoose = require("mongoose");


const BookSchema = mongoose.Schema(
    {
        author: {
            type: String,
            required: true  
        },
        category: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
            required: true                                                                                                                                                                                                                                                               
        }
    },
    {timestamps: true}  
) 


const BookModel = mongoose.model("BookModel", BookSchema)

module.exports = BookModel;