const http = require("http");

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  res.on("data", (data) => {
    console.log(data);
  })
  res.on("error", (error) => console.error(error))
}).on('error', (e) => {
  console.log("Got error: " + e.message);
});
