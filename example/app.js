// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel({width:'auto',height:'auto',text:'adtesting'});
window.add(label);

// TODO: write your module tests here
var tiimobile4android = require('tv.harukaze.ti.imobile.android');
tiimobile4android.setMId(xxxx);
tiimobile4android.setAsId(xxxx);

// create admaker view
var imobileView = tiimobile4android.createImobileView({bottom:0,width:'auto',height:'48dp'});

window.add(imobileView);
window.open();
