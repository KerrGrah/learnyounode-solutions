const mymodule = require('./module.js');

let dir = process.argv[2];
let ext = process.argv[3];

mymodule(dir, ext, function(err, arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  // alternative using forEach
/*
  arr.forEach(function (file) {
       console.log(file)
     })
*/
});
