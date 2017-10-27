const fs = require('fs');
const path = require('path');

function filter(dir, ext, callBack) {
  let arr = [];
  fs.readdir(dir, function(err, files) {
    if (err) {
      return callBack(err, arr);
    }

    files.forEach(function(file) {
      if (path.extname(file) == ("." + ext)) {
        arr.push(file);
      }
    })
    //alternative using filter
    /*
  files = files.filter(function (file) {
         return path.extname(file) === '.' + ext;
       })
       return callBack(err, files);
       */
    return callBack(err, arr);
  });
}
module.exports = filter;
