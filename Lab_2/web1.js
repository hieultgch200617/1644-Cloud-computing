//declare server port
const port = 3000;
//declare "http" module/component/library
const http = require('http');
//create http (web) server
const server = http.createServer((req, res) => {
    res.write("hello world</b><br>")
    res.write("today is wednesday</u></i>");
    res.end();
});
//run server by listening port
server.listen(port, () => {
    console.log("http://localhost:" + port);
});