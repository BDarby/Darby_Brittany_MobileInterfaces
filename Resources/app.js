
var username = "bdarby";
var password = "testing";
var confirmPassword = "testing";
var tableWindow = require("secondary").open();
var member = require("third").member();

//Ti.API.debug("Creating Windows");

var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

var win2 = Ti.UI.createWindow({ //for the json window
	title : "test",
	backgroundColor : "#FF0000"
});

var pic = Ti.UI.createView({
	backgroundImage : "dbz.jpg",
	top : 20,
	width : 250,
	height : 150,
	
});


var nav = Ti.UI.iOS.createNavigationWindow({
	// Set to Window 2
	window : tableWindow,
});

//Ti.API.debug("Creating Login Window Elements");

var label = Ti.UI.createLabel({
	text : "Username",
	top : 190,
	left : 20
});

var label2 = Ti.UI.createLabel({
	text : "Password",
	top : 270,
	left : 20
});

var label3 = Ti.UI.createLabel({
	text : "Confirm Password",
	top : 350,
	left : 20
});


var textfield = Titanium.UI.createTextField({
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
	hintText : 'Username',
	keyboardToolbarColor : '#999',
	keyboardToolbarHeight : 40,
	top : 220,
	width : 300,
	height : 35
});

var textfield2 = Titanium.UI.createTextField({
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
	hintText : 'Password',
	keyboardToolbarColor : '#999',
	keyboardToolbarHeight : 40,
	top : 300,
	width : 300,
	height : 35
});
var textfield3 = Titanium.UI.createTextField({
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
	hintText : 'Confirm Password',
	keyboardToolbarColor : '#999',
	keyboardToolbarHeight : 40,
	top : 380,
	width : 300,
	height : 35
});

var button = Ti.UI.createButton({
	title : "Sign up",
	bottom : 100,
});

button.addEventListener("click", function() {
	if (username == textfield.getValue() && password == textfield2.getValue() && confirmPassword == textfield3.getValue()) {
		console.log("Correct");
		nav.open();
	} else {
		alert("Wrong Username and or Password");
	};
});


var button2 = Ti.UI.createButton({
	title:"Already a Member?",
	bottom : 50,
});
button2.addEventListener("click", function(){
	member.open();
});



win.add(textfield, label);
win.add(textfield2, label2);
win.add(textfield3, label3);
win.add(button,button2, pic);
win.add(pic);
win.open(); 