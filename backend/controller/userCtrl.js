const UserModel = require("../models/user")

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
            const user = await UserModel.create({ email, password, username})
            console.log(user)
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
        

    }

}

module.exports = UserCtrl;
