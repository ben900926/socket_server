let https = require('https');
const url = "https://www.google.com/";
https.get(
    url
    ,(res) => {
    let body = "";

    // recieve a data
    res.on("data", (data) => {
        body += data;
    });

    // receive data end
    res.on("end", () => {
        //body = JSON.parse(body);
        // console.log(body);
    });
    
});