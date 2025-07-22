import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';
import { createProject, getProjectsByNgo } from '../controllers/projectController.js';

const router = express.Router();

router.post('/add', protect, authorizeRoles('ngo'), createProject);
router.get('/:ngoId', getProjectsByNgo);

export default router;