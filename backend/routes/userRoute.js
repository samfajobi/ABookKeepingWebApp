const router = require("express").Router();
const UserCtrl = require("../controller/userCtrl")




router.post("/register", UserCtrl.register)
router.post("/login", UserCtrl.loginUser)


module.exports = router; 