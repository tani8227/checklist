import express from 'express';
const router =express.Router();
import checklistrouter from './checklist.js';
import * as homeController from '../controller/home_controller.js'


router.get('/', homeController.homepage);
router.use('/checklist', checklistrouter);





export default router;