const UserModel = require("../models/user")
const bcrypt = require("bcrypt")

// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   }; 


const UserCtrl =  {

    register : async (req, res) => {
        try {
            const {email, password, username} = req.body;
            if(!email || !password || !username) {
                return res.status(500).json({msg: "Please Input all Fields"})
            } else if (password.length < 6) {
                return res.status(400).json("Password Length too short!!")
            }
            const userExist = await UserModel.findOne({email: email})
            userExist &&  res.status(401).json("User Already Exist")

            const user = await UserModel.create({ email, password, username})
            return res.status(200).json(user) 
               
 
            // if(!email || !password || !username) {
            //     return res.status(500).json({msg: "Please Input all Fields"})
            // }
   
            // if(!validateEmail(email)) {
            //     return res.status(500).json({msg: "Invalid Email Address"});
            // }
            // const userOne = UserModel.findOne({email});
            // if(userOne) {
            //     return res.status(400).json({msg: "This User already Exist"})
            // } else {
            //      return res.status(400).json({msg: "Registered Successfully!!"})
            // }
    
            // if(password.length < 8) return res.status(400).json({msg: "Password must be atleast 8 characters"});

            // console.log(req.body)
            // res.status(200).json({msg: "Test Register"})
        } catch(err) {
            res.status(500).json({msg: err.message})
        }
    },

    loginUser : async (req, res) => {
        const {email, password } = req.body;
        try {
            const user = await UserModel.findOne({email: email})
            !user && res.status(200).json("Wrong Credentials. User not found!!")

            const validate = await bcrypt.compare( req.body.password, user.password)
            !validate && res.status(400).json("Password Incorrect!!!")

            const {password, ...others} = user._doc
            res.status(200).json(others)

        } catch (err) {

        }

    },

    updateUser : async (req, res) => {
        if(req.body.userId === req.params.id) {
            if(req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
            try{
                const updatedUser = await UserModel.findByIdAndUpdate(
                    req.params.id, 
                    {
                    $set: req.body
                }, {new: true});
                res.status(200).json(updatedUser)
            } catch(error) {
                res.status(401).json(error)  
            }   
        }
        else {
            res.status(401).json("You are not allowed!!")
        } 
    },


    deleteUser : async (req, res) => {
        try {
            await UserModel.findByIdAndDelete(req.params.id)
            res.status(200).json("This User has been deleted Successfully")
        } catch(err) {
            res.status(401).json(err)
        }

    },


    getUser : async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            res.status(200).json(user)
        } catch(err) {
            res.status(401).json(err)

        }

    },

    getAllUsers : async(req, res) => {
        try{
            const users = await UserModel.find({})
            res.status(200).json(users)
        } catch(err) {
            res.status(401).json(err)
        }

    }



}

module.exports = UserCtrl;
