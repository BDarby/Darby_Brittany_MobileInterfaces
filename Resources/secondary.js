var zFighters = require("json");

// Creating Secondary Window Function

// Create Window 2

exports.open = function() {
	var tableWindow = Ti.UI.createWindow({
		backgroundColor : "",
	});
	var dbzTable = Ti.UI.createTableView({
		style : Ti.UI.iPhone.TableViewStyle.GROUPED,
		data : [dbzSection],
		headerTitle : "Dragon Ball Z Characters",
		separatorColor : "red",
	});

	var charDetail = function() {
		var win3 = Ti.UI.createWindow({
			backgroundColor : "white",
			title : this.store,
			layout : "vertical",
		});
		var charView = Ti.UI.createView({
			backgroundImage : this.pic,
			height : 200,
			weight : 200,
		});
		var who = Ti.UI.createLabel({
			text : this.who,
		});
		win3.add(who);
		nav.open(win3);
	};

	var sections = [];
	//characters is the json    and      zfighters is the export
	for (n in zFighters.characters) {
		var dbzSection = Ti.UI.createTableViewSection({
			headerTitle : n,
		});

		var characters = zFighters["characters"]["Dragon Ball Z Characters"].DBZ;

		for (var i = 0; i < characters.length; i++) {
			var character = characters[i];

			console.log(character.who);

			var row = Ti.UI.createTableViewRow({
				backgroundColor : "",
				color : "",
				title : character.who
				// who:characters[n].storeItems[i].who,
				// pic:characters[n].storeItems[i].images,
			});
			dbzSection.add(row);
			row.addEventListener("click", charDetail);
		}
		sections.push(dbzSection);
	}
	dbzTable.setData(sections);
	tableWindow.add(dbzTable);
	tableWindow.add(dbzSection);

	return tableWindow;
};
// return window 2