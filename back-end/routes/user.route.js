import express from "express";
import "../config/passport.js";
const router = express.Router();

import controller from "../controllers/user.controller.js";
import userLoginMiddleware from "../middlewares/userLogin_middleware.js";

router.post("/create", controller.create);
router.post("/login", userLoginMiddleware.userLogin, controller.login);

export default router;
