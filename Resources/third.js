exports.member = function() {
	var member = Ti.UI.createWindow({
		backgroundColor : "white"
	});

	var label = Ti.UI.createLabel({
		text : "Username",
		top : 175,
		left : 20
	});

	var label2 = Ti.UI.createLabel({
		text : "Password",
		top : 275,
		left : 20
	});
	
	var back = Ti.UI.createButton({
		title : "Back",
		bottom: 105
	});
	 
	 back.addEventListener("click", function (){
	 	nav.closeWindow(member);
	 });

var button2 = Ti.UI.createButton({
	title : "Sign In",
	bottom : 150,
});

// var back2 = Ti.UI.createButton({
		// title : "Back",
		// bottom: 105
	// });
// 	 
	 // back2.addEventListener("click", function (){
	 	// testWindow.close();
	 // });



// var testWindow = Ti.UI.createWindow({backgroundColor: "blue"});
// testWindow.add(back2);




button2.addEventListener("click", function() {
	//testWindow.open();
	// if (username == textfield.getValue() && password == textfield2.getValue()) {
		// //console.log("Correct");
		 tableWindow.open();
	// } else {
		// alert("Wrong Username and or Password");
	// };
});





	var textfield = Titanium.UI.createTextField({
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
		hintText : 'Username',
		keyboardToolbarColor : '#999',
		keyboardToolbarHeight : 40,
		top : 200,
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
	
	
	
	var pic2 = Ti.UI.createView({
	backgroundImage : "dbz.jpg",
	top : 20,
	width : 250,
	height : 150,
	
});

	member.add(textfield, label);
	member.add(textfield2, label2);
	member.add(back,button2, pic2);
	return member;
};