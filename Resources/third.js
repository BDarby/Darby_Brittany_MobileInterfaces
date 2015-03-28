exports.member = function() {
	var member = Ti.UI.createWindow({
		backgroundColor : "white"
	});

	var label = Ti.UI.createLabel({
		text : "Username",
		top : 20,
		left : 20
	});

	var label2 = Ti.UI.createLabel({
		text : "Password",
		top : 100,
		left : 20
	});

	var textfield = Titanium.UI.createTextField({
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
		hintText : 'Username',
		keyboardToolbarColor : '#999',
		keyboardToolbarHeight : 40,
		top : 50,
		width : 300,
		height : 35
	});

	var textfield2 = Titanium.UI.createTextField({
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
		hintText : 'Password',
		keyboardToolbarColor : '#999',
		keyboardToolbarHeight : 40,
		top : 140,
		width : 300,
		height : 35
	});

	member.add(textfield, label);
	member.add(textfield2, label2);
	return member;
};