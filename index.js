var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function () {
    var appWindow;
    var infoWindow;
appWindow = new BrowserWindow({show: false});
appWindow.loadURL('http://gijsvermeulen.com');

infoWindow = new BrowserWindow({
    width:400, 
    height:300,
    frame: false,
    show: false
})
infoWindow.loadURL('file://' + __dirname + '/info.html');

appWindow.once('ready-to-show', function(){
    appWindow.show();
});
})