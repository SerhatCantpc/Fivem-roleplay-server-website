var express = require('express');
var router=express.Router();
var ctrlIndex=require('../controller/indexController')

router.get('/',ctrlIndex.index);

module.exports=router;