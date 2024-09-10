import express from 'express' 
import { createUser, getCurrentProfile, loginUser, logoutCurrentUser, updateCurrentUserProfile } from '../controller/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();


router.route("/").post(createUser);

router.route("/auth").post(loginUser);
router.route("/logout").post(logoutCurrentUser);

router.route("/profile")
.get(authenticate,getCurrentProfile)
.put(authenticate, updateCurrentUserProfile); ;


export default router ;