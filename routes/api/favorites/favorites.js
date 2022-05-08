const express = require("express");

const { joiSchema } = require("../../../schemas/favorite");
const {validation, controllerWrapper, authenticate} = require("../../../middlewares");
const ctrl = require("../../../controllers/favorites");
const router = express.Router();

router.post("/", controllerWrapper(authenticate), validation(joiSchema), controllerWrapper(ctrl.add));

router.get("/", controllerWrapper(authenticate), ctrl.getAll);

module.exports = router;
