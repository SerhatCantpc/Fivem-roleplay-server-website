var express = require('express');
var router=express.Router();
var ctrlTs3=require('../controller/ts3Controller')

router.get('/',ctrlTs3.ts3);

module.exports=router;