var express = require('express');
var router=express.Router();
var ctrlSalt=require('../controller/saltychatController')

router.get('/',ctrlSalt.saltychat);

module.exports=router;