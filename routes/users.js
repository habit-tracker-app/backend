const express=require('express');

const router=express.Router();

const userController=require('../controllers/user_controllers');

router.get('/create',userController.createSession);

module.exports=router;
