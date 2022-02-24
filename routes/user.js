const express = require("express");
const upload = require("../utils/multer");
const { register } = require("../controllers/user");

const userRouter = express.Router();

userRouter.post('/register', upload.single("logo"), register);
// router.post('/signup', signup)
// router.post('/forgot', forgotPassword);
// router.post('/reset', resetPassword);

module.exports = userRouter;