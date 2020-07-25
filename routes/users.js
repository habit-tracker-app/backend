const express=require('express');

const router=express.Router();

const userController=require('../controllers/user_controllers');
const habitController=require('../controllers/habits_controller');
const weekController=require('../controllers/week_controller');
router.post('/create',userController.createSession);

router.get('/tracks-habits',habitController.habits);
router.get('/changeStatus',habitController.changeStatus);
router.get('/delete',habitController.delete);

router.get('/weekViews',weekController.weekView)
module.exports=router;
