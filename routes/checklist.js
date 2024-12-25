import express from 'express';
const checklistrouter =express.Router();
import * as checkListController from '../controller/checklist_controoller.js'


checklistrouter.get('/', checkListController.checklist);
checklistrouter.post('/addRule', checkListController.addRule)
checklistrouter.get('/delete/:id', checkListController.deleteRule)






export default checklistrouter;