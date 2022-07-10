var express = require('express');
var router=express.Router();
var lbrpdurm=require('../controller/lbrpdurumController')

router.get('/',lbrpdurm.lbrpdurum);

module.exports=router;