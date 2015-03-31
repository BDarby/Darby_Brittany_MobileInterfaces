var zFighters = require("json");


var back2 = Ti.UI.createButton({
		title : "Back",
		bottom: 10,
		//backgroundColor : "#9D3A34"
	});
	 
	 back2.addEventListener("click", function (){
	 	tableWindow.close();
	 });

exports.open = function() {
	var tableWindow = Ti.UI.createWindow({
		backgroundColor : "",
		
	});
	//tableWindow.open();
	
	
	var dbzTable = Ti.UI.createTableView({
		style : Ti.UI.iPhone.TableViewStyle.GROUPED,
		data : [dbzSection],
		//headerTitle : "Dragon Ball Z Characters",
		separatorColor : "red",
	});

	var charDetail = function() {
		var win3 = Ti.UI.createWindow({
			backgroundColor : "white",
			title : this.images,
			layout : "vertical",
		});
		var charView = Ti.UI.createView({
			backgroundImage : this.pic,
			height : 200,
			weight : 200,
			left:100,
			right:100,
			height:100,
			width:100,
		});
		var who = Ti.UI.createLabel({
			text : this.who,
			
		
		
		});
		//win3.add(who);
		//nav.open(win3);
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
			
			row.addEventListener("click", charDetail);
			dbzSection.add(row);
		}
		sections.push(dbzSection);
	}
	
	var images =Ti.UI.createView({
			backgroundImage : this.images,
		});
		
		
	dbzTable.setData(sections);
	tableWindow.add(images);
	
	//tableWindow.add(charDetail);
	tableWindow.add(dbzTable);
	tableWindow.add(dbzSection);
	tableWindow.add(back2);

	return tableWindow;
	
	
};


// var brands = require("json");
// mainWin = Ti.UI.createWindow({
	// navBarHidden : "true",
	// //statusBarStyle : Titanium.UI.android.StatusBar.LIGHT_CONTENT,
// });
// 
// //this is my table of contents page.
// contents = Ti.UI.createWindow({
	// backgroundColor : "white",
// });
// var search = Titanium.UI.createSearchBar({
    // barColor:'#000', 
    // showCancel:true,
    // height:43,
    // top:0,
// });
// //this is my navigation window
// nav=Ti.UI.iOS.createNavigationWindow({window : contents,});
// 
// //this is my button
// // startUp = Ti.UI.createButton({
	// // title : "Commencer",
	// // color : "white",
	// // font : {
		// // fontSize : 20,
		// // fontFamily : "Helvetica"
	// // },
	// // top : 500,
// // 
// // });
// 
// 
// var fashionTable = Ti.UI.createTableView({
	// style : Ti.UI.iPhone.TableViewStyle.GROUPED,
	// data : [fashionSection],
	// //headerTitle : "Clothing Brands",
	// separatorColor : "black",
// 
// });
// 
// var clothesDetail = function(){
	// var detailWin = Ti.UI.createWindow({
		// backgroundColor:"white",
		// title:this.store,
		// layout:"vertical",
	// });
	// var companyView = Ti.UI.createView({
		// backgroundImage: this.pic,
		// height:250,
		// weight:200,
		// left:100,
		// right:100,
		// height:100,
		// width:100,
	// });
	// //create labels 4 more
	// var foundedLabel =Ti.UI.createLabel({
		// text:this.founded,
// 	
	// });
// 	
	// var historyLabel=Ti.UI.createLabel({
		// text:this.history,
		// //top:50,
			// left:25,
			// right:25
	// });
	// var clothingTypeLabel=Ti.UI.createLabel({
		// text:this.clothes,
		// //top:50,
			// left:25,
			// right:25
	// });
	// var hQLabel=Ti.UI.createLabel({
		// text:this.hq,	
		// //top:50,
			// left:25,
			// right:25
	// });
	// detailWin.add(companyView);
	// detailWin.add(foundedLabel);
	// detailWin.add(historyLabel);
	// detailWin.add(clothingTypeLabel);
	// detailWin.add(hQLabel);
	// //detailWin.add(search);
	// nav.openWindow(detailWin);
// };
// var sections=[];
// for(n in brands.clothing){
	// var fashionSection = Ti.UI.createTableViewSection({
		// headerTitle:n,
	// });
	// for(i = 0; i < brands.clothing[n].storeItems.length;i++){
		// var Row = Ti.UI.createTableViewRow({
			// backgroundColor:"",
			// color:"",
			// title:brands.clothing[n].storeItems[i].store,
			// pic:brands.clothing[n].storeItems[i].images,
			// founded:brands.clothing[n].storeItems[i].Founded,
			// history:brands.clothing[n].storeItems[i].history,
			// clothes:brands.clothing[n].storeItems[i].TypeOfClothing,
			// hq:brands.clothing[n].storeItems[i].HQ,
// 			
		// });
		// fashionSection.add(Row);
		// Row.addEventListener('click',clothesDetail);
	// }
	// sections.push(fashionSection);
// }
// fashionTable.setData(sections);
// require("app");
// nav.open();
// contents.add(fashionTable,search);
// contents.add(fashionSection);

// return window 2