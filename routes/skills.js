const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


// All paths start with '/skills'

// GET /skills (index functionality/action --> list all skills) 
router.get('/', skillsCtrl.index);
// GET /skills/:id (show functionality/action --> display detail of a single skill)
router.get('/:id', skillsCtrl.show);

module.exports = router;
