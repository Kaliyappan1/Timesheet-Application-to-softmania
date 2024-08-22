const express = require('express');
const { registerUser, authUser, adminUser } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', authUser);
router.post('/admin', adminUser);
// router.post('/form', formPage);

module.exports = router;
