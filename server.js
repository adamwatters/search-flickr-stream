var express = require("express");
var app = express();
var http = require("http");

var pictureString = "";

var callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on("data", function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on("end", function () {
  	pictureString = str;
  });
};

app.use('/', express.static(__dirname + '/public'));

app.get("/pics", function(request, response){
  var queryString = request.query.searchTerm;
  var pathString = "/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=" + queryString
  var options = {
    host: "api.flickr.com",
    path: pathString
  };
  http.request(options, callback).end();
	response.write(pictureString);
	response.end();
});

app.listen(8000);
console.log("server listening on port 8000");