var http=require('http')
var fs = require('fs')
var server=http.createServer((function(request,response)
{
	fs.readFile("index.html", function(err, data){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		response.end();
	  })
}));
server.listen(7000, () => {
	console.log('Server is listening on port 7000');
});
