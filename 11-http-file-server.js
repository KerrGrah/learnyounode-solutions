const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'});

  //connecting filesystem stream to http stream
  fs.createReadStream(process.argv[3]).pipe(res);
})
server.listen(process.argv[2])
