// first attempt
/*
const http = require("http");
const bl = require("bl");

let data1 ="";
let data2 ="";
let data3 ="";

http.get(process.argv[2], (res) => {
res.pipe(bl(function (err, data) {
  if (err) {
    return console.log(err);
  }
  data1 = data.toString();
  http.get(process.argv[3], (res) => {
  res.pipe(bl(function (err, data) {
    if (err) {
      return console.log(err);
    }
    data2 = data.toString();
    http.get(process.argv[4], (res) => {
    res.pipe(bl(function (err, data) {
      if (err) {
        return console.log(err);
      }
      data3 = data.toString();

      console.log(data1);
      console.log(data2);
      console.log(data3);
    }))
    })
  }))
  })
}))
})
*/

// second attempt
const http = require("http");
const bl = require("bl");
let dataArr = [];
let completed = 0;

function theGetter(index) {
  http.get(process.argv[2 + index], (res) => {
    res.pipe(bl((err, data) => {
      if (err) {
        return console.log(err);
      }
      dataArr[index] = data.toString();
      completed++;
       if (completed === 3) {
        printResults();
      }
    }));
  });
}

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(dataArr[i]);
  }
}

for (let i = 0; i < 3; i++) {
  theGetter(i);
}
