import express from 'express';
import {registerUser, authUser, adminUser} from '../controllers/authController.js'
const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', authUser);
router.post('/admin', adminUser);
// router.post('/form', formPage);

export default router;
