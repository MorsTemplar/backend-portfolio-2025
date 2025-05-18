const express = require('express');
const router = express.Router();
const controller = require('../controllers/educationController');

router.get('/', controller.getAllEducation);
router.get('/:id', controller.getEducationById);
router.post('/', controller.createEducation);
router.put('/:id', controller.updateEducation);
router.delete('/:id', controller.deleteEducation);

module.exports = router;
