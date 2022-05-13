const router = require('express').Router();

const ctrl = require('../../../controllers/vacancies');
const {validation, controllerWrapper, authenticate} = require("../../../middlewares");
const {joiSchema} = require("../../../schemas/vacancy")

router.get('/', authenticate, controllerWrapper(ctrl.getAllVacancies));
router.post('/', authenticate, validation(joiSchema), controllerWrapper(ctrl.addVacancy));
router.get('/:vacancyId', authenticate, controllerWrapper(ctrl.getVacancyById));
router.delete('/:vacancyId', authenticate, controllerWrapper(ctrl.deleteVacancy));
router.put('/:vacancyId', authenticate, validation(joiSchema), controllerWrapper(ctrl.update));

module.exports = router;