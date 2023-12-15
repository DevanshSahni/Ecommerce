const router = require("express").Router();
const { Signup, Login, Products } = require("../controllers/authController");

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/products", Products);

module.exports = router;
