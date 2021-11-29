const os = require("os");

console.log("Os version",os.version());
console.log("Free memory",os.freemem());
console.log("Total memory",os.totalmem());
console.log("CPU",os.cpus());
console.log("Host Name",os.hostname());
console.log("Network Interfaces",os.networkInterfaces());

