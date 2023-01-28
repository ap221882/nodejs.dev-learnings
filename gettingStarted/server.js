const http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello');
  res.end();
});

httpServer.listen(port, hostName, () => {
  console.log(`Server listening on http://${hostName}/${port}`);
});
