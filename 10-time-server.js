const net = require('net');

const server = net.createServer((socket) => {
  let d = new Date();
  let printD = "";

  function pad0(num) {
    return num < 10
      ? "0" + num
      : num;
  }
  printD = d.getFullYear() + "-" + pad0(d.getMonth() + 1) + "-" + pad0(d.getDate()) + " " + pad0(d.getHours()) + ":" + pad0(d.getMinutes());
  socket.end(printD + '\n');
})
server.listen(process.argv[2])
