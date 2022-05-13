const express = require("express");
const router = express.Router();

const {joiSchema} = require("../../../schemas/user");
const {validation, controllerWrapper, authenticate} = require("../../../middlewares");
const ctrl = require("../../../controllers/auth");

router.post("/signup", validation(joiSchema), controllerWrapper(ctrl.signup));
router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));
router.post("/logout",authenticate, controllerWrapper(authenticate), controllerWrapper(ctrl.logout));
router.get("/users", validation(joiSchema), controllerWrapper(ctrl.getAllUsers));

module.exports = router; 