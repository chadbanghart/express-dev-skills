const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');


// All paths start with '/skills'

// GET /skills (index functionality/action --> list all skills) 
router.get('/', skillsCtrl.index);
// GET /skills/new <-- define BEFORE show route
router.get('/new', skillsCtrl.new);
// GET /skills/:id (show functionality/action --> display detail of a single skill)
router.get('/:id', skillsCtrl.show);
// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// PUT /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;
