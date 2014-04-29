var https = require('https');
var port = process.env.port || 1337;

var fs = require('fs');
var options = {
    key: fs.readFileSync('E:/Win-8-ProgramFiles/OpenSSL-Win32/bin/myserver.key'),
    cert: fs.readFileSync('E:/Win-8-ProgramFiles/OpenSSL-Win32/bin/myserver.crt'),
    passphrase: 'shrikant' // It is used while creating certificate
};


https.createServer(options, function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World with HTTPS!\n');
}).listen(port);