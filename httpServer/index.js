// <!-- To access web pages of any web application , you need a web server . The
// web server will handle all the http requests for the web application
// e.g IIS is a web server for ASP.NET web applications and Apache is a web
// server for PHP or Java web applications .
// Node.js provides capabilities to create your own web server which will handle HTTP
// requests asynchronously . You can use IIS or Apache to run Node.js web application
// but it is recommended to use Node.js web server . -->


// The http.createServer ( ) method includes request and response parameters which is supplied by Node.js.
// The request object can be used to get information about the current HTTP request
// e.g. , url , request header , and data .
// The response object can be used to send a response for a current HTTP request .
// If the response from the HTTP server is supposed to be displayed as HTML ,
// you should include an HTTP header with the correct content type :

const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url == "/") {
    // res.writeHead(200, {"Content-text":"text/html"});
        console.log(req.url);
        res.write("Hello from the other side");
        res.end()
    }
    else {
    res.writeHead(404, {"Content-text":"text/html"});
        res.write("<h1>404 error</h1>");
        res.end();
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port 8000");
});
