const router = require('express').Router();

const ctrl = require('../../../controllers/candidates');
const {validation, controllerWrapper} = require("../../../middlewares");
const {joiSchema} = require("../../../schemas/candidate")

router.get('/', controllerWrapper(ctrl.getAllCandidates));
router.post('/', validation(joiSchema), controllerWrapper(ctrl.addCandidate));
router.get('/:candidateId', controllerWrapper(ctrl.getCandidateById));
router.delete('/:candidateId', controllerWrapper(ctrl.deleteCandidate));
router.put('/:candidateId', validation(joiSchema), controllerWrapper(ctrl.update));

module.exports = router;