import express from 'express';
import { registerNgo, getAllNgos, verifyNgo } from '../controllers/ngoController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/register', protect, authorizeRoles('ngo'), registerNgo);
router.get('/', getAllNgos);
router.put('/verify/:id', protect, authorizeRoles('admin'), verifyNgo);

export default router;