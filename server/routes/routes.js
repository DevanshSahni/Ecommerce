const router = require("express").Router();
const { Signup, Login, logout, userDelete } = require("../controllers/authController");
const { Products, addCart, cart, productInfo } = require("../controllers/productController");
const { userInformation, updateUser, userAddresses, saveUserAddress, deleteAddress } = require("../controllers/userController");
const { Middleware } = require("../middleware/middleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", logout);
router.get("/delete", Middleware, userDelete);

router.get("/userInformation", Middleware, userInformation);
router.post("/updateUser", Middleware, updateUser);
router.get("/userAddresses", Middleware, userAddresses);
router.post("/saveUserAddress", Middleware, saveUserAddress);
router.post("/deleteAddress", Middleware, deleteAddress);

router.get("/products", Products);
router.post("/productInfo", Middleware, productInfo);

router.post("/addCart", Middleware, addCart);
router.get("/cart", Middleware, cart);

module.exports = router;
