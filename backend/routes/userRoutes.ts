import { Router } from 'express'
const router = Router()
import { registerController, loginController, logoutController } from '../controllers/user-controller';
import User from '../models/user-model';

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout', logoutController);

export default router
