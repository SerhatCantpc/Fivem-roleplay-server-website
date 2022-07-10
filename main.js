var express = require("express");
var app = express();
var html = require("html")
var ejs = require("ejs")
var ejsLayouts=require('express-ejs-layouts')
app.set('view engine','ejs');
app.set('views','./views')
app.use("/public", express.static(__dirname + "/public"));
app.use("/lbrpresim", express.static(__dirname + "/lbrpresim"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/vendor", express.static(__dirname + "/vendor"));
app.use("/dosyalar", express.static(__dirname + "/dosyalar"));
app.use("/Content", express.static(__dirname + "/Content"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/Scripts", express.static(__dirname + "/Scripts"));
//app.use("/", express.static(__dirname + "/"));

app.use(ejsLayouts);
require('./router/routeManager')(app);

//// Konsola Ping Yazdırma ///

var tcpp = require('tcp-ping');
var pingarea = "google.com"
tcpp.probe(pingarea, 80, function(err, available) {
    console.log(pingarea, ' Adresine Bağlantı Testi Yapılıyor' ,available);
});

tcpp.ping({ address: pingarea }, function(err, data) {
    console.log(pingarea,' Adresine Ping Testi Yapılıyor' ,data);
});

//// Bitti ////


app.use(function (req,res){

    res.render('404.ejs')

});///404 page
//// Server ////
var port = 3000
var server = app.listen(port, function(){
    console.log("Server şu anda port numarasında açılıyor:", port );
    console.log('Sunucu şu anda ', port, ' portunda çalışmaya başladı')
});

