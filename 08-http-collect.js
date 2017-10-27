const http = require("http");

http.get(process.argv[2], (res) => {
  var allData = "";
//  res.setEncoding('utf8');
  res.on("data", (data) => {
    allData += data.toString();
  });
  res.on("end", () => {
    console.log(allData.length);
    console.log(allData);
  })
  res.on("error", (error) => console.error(error))
}).on('error', (e) => {
  console.log("Got error: " + e.message);
});


// alternative using bl
/*
const http = require("http");
const bl = require("bl");

http.get(process.argv[2], (res) => {
res.pipe(bl(function (err, data) {
  if (err) {
    return console.log(err);
  }
  data = data.toString();
  console.log(data.length);
  console.log(data);
}))
})
*/
