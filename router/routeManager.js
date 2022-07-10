var routeİndex=require('./indexRouter');
var routeLuncK=require('./launcherkurulumRouter')
var routeSalt=require('./saltychatRouter')
var routeTs3=require('./ts3Router')
var routeWl=require('./whitelistRouter')   
var routelbrpdurum=require('./lbrpdurumRouter')       


module.exports=function(app){
    app.use('/',routeİndex);
    app.use('/launcherkurulum',routeLuncK);
    app.use('/saltychat',routeSalt);
    app.use('/ts3',routeTs3);
    app.use('/whitelist',routeWl); 
    app.use('/lbrpdurum',routelbrpdurum);
};

