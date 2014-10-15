/** @jsx React.DOM */

var pictures = [];

var getPictures = function(callback, searchTerm) {

	var urlString = "/pics?searchTerm="+searchTerm;

	pictures = [];

	$.ajax({
	  	dataType: "text",
	  	url: urlString,
	  	success: function(data){
	  		data = data.replace(/\\'/g,"'");
	  		data = JSON.parse(data);
	 		for (var i = 0; i < data.items.length; i+=1){
				pictures.push(data.items[i].media.m);
			};
	  	},
	  	error: function(error, errorTwo){
	  		alert(error, errorTwo);
	  	},
	  	complete: function(){
	  		if (callback === undefined){
	  			return;
	  		}; 
	  		callback();
	  	}
	});
};

var getPicturesBySearch = function(callback, component, target) {

	pictures = [];

	$.ajax({
	  	dataType: "text",
	  	url: "/pics",
	  	success: function(data){
	  		data = data.replace(/\\'/g,"'");
	  		data = JSON.parse(data);
	 		for (var i = 0; i < data.items.length; i+=1){
				pictures.push(data.items[i].media.m);
			};
	  	},
	  	error: function(error, errorTwo){
	  		alert(error, errorTwo);
	  	},
	  	complete: function(){
	  		if (callback === undefined){
	  			return;
	  		}; 
	  		callback(component, target);
	  	}
	});
}








