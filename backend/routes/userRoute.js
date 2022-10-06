const router = require("express").Router();
const UserCtrl = require("../controller/userCtrl")




router.post("/register", UserCtrl.register)


module.exports = router;