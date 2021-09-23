const { Router } = require('express');
const router = Router();
const { newUserForm, newUserSave } = require('../controllers/user.controller');
router.get('/new-user', newUserForm);
router.post('/new-user', newUserSave);
module.exports = router;