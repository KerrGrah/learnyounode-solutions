const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

  if (req.method !== 'GET') {
    return res.end("give me a get");
  }
  res.writeHead(200, {'content-type': 'application/json'});

  let parsedURL = url.parse(req.url, true);
  if (parsedURL.pathname === '/api/parsetime') {

    let d = new Date(parsedURL.query.iso);
    let obj = {
      'hour': d.getHours(),
      'minute': d.getMinutes(),
      'second': d.getSeconds()
    };
    return res.end(JSON.stringify(obj));

  } else if (parsedURL.pathname === '/api/unixtime') {
    let d = new Date(parsedURL.query.iso);
    let unix = {
      "unixtime": d.getTime()
    };
    return res.end(JSON.stringify(unix));
  }
  else {
        res.writeHead(404);
        res.end();
      }
})
server.listen(process.argv[2]);
