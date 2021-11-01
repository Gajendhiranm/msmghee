
const router = require("express").Router()
const {signin,login, order, admin} = require("../controllers/userController")
router.post("/signin", signin)
router.get("/admin-product",admin)
router.post("/login",login)
router.patch("/order",order)
module.exports = router