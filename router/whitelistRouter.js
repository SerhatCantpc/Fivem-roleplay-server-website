var express = require('express');
var router=express.Router();
var ctrlwl=require('../controller/whitelistController')

router.get('/',ctrlwl.whitelist);

module.exports=router;