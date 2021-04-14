var express= require('express');
var usectrl=require('../controller/usercontroller');
var approutes=express.Router();

approutes.get('user', userctrl.newFile);