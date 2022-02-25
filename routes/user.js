const express = require("express");
const upload = require("../utils/multer");
const { register, login } = require("../controllers/user");

const userRouter = express.Router();

userRouter.post('/register', upload.single("logo"), register);
userRouter.post('/login', login)
// router.post('/forgot', forgotPassword);
// router.post('/reset', resetPassword);

module.exports = userRouter;