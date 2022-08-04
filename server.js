let http = require('http'); // import http
let fs = require('fs'); // file system
const port = 8000;
const hostname = '127.0.0.1';

// define an http server
let server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    console.log(request.url);

    fs.readFile('./index.html', null, ((err, data) => {
        if(err){
            response.statusCode = 404;
            response.write("Error ! Could not find the file :(");
        }
        response.write(data);
        let text = "The ending"; // parse query
        response.end(text); //specify an end for the retrieval
    }))
});


server.listen(port, hostname, () => {
    console.log(`server run at http://${hostname}:${port}/`);
});


