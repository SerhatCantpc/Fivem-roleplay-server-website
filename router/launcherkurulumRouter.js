var express = require('express');
var router=express.Router();
var ctrlLuncK=require('../controller/launcherkurulumController')

router.get('/',ctrlLuncK.launcherkurulum);

module.exports=router;