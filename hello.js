var http = require('http'); // How we require modules

http.createServer(function(request, response){
    response.writeHead(200); // Status code in header
    response.write("Dog is running");
    
    setTimeout(function(){
        response.write("Dog is done"); 
        response.end(); // Close the connection
    }, 5000);
    
}).listen(8080);