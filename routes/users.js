const express=require('express');

const router=express.Router();

const userController=require('../controllers/user_controllers');
const habitController=require('../controllers/habits_controller')
router.post('/create',userController.createSession);

router.get('/tracks-habits',habitController.habits);
module.exports=router;
