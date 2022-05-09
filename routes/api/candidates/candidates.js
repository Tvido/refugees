const router = require('express').Router();

const ctrl = require('../../../controllers/candidates');
const {validation, controllerWrapper, authenticate, roleValidation} = require("../../../middlewares");
const { joiSchema } = require("../../../schemas/candidate")

// console.log(roleValidation);

router.get('/', authenticate, roleValidation(["user", "recruiter"]), controllerWrapper(ctrl.getAllCandidates));
router.post('/',authenticate, validation(joiSchema), controllerWrapper(ctrl.addCandidate));
router.get('/:candidateId', authenticate, controllerWrapper(ctrl.getCandidateById));
router.delete('/:candidateId', authenticate, controllerWrapper(ctrl.deleteCandidate));
router.put('/:candidateId', authenticate, validation(joiSchema), controllerWrapper(ctrl.update));

module.exports = router;