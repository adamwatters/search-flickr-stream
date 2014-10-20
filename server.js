var express = require("express");
var app = express();
var http = require("http");

app.use('/', express.static(__dirname + '/public'));

app.get("/pics", function(request, response){
  var queryString = request.query.searchTerm;
  var pathString = "/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=" + queryString
  
  var request = http.request({
    host: "api.flickr.com",
    path: pathString,
    }, 
    function(flickrResponse) {
      var str = '';

    //another chunk of data has been recieved, so append it to `str`
      flickrResponse.on("data", function (chunk) {
        str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    flickrResponse.on("end", function () {
      response.end(str);
    });
  });
  request.end();
});

app.listen(8000);
console.log("server listening on port 8000");