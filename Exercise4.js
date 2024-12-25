const os = require("os");
const util = require("util");

console.log("Temporary Directory:", os.tmpdir());
console.log("Hostname:", os.hostname());
console.log("OS Platform:", os.platform());
console.log("OS Release:", os.release());
console.log("Uptime (hours):", os.uptime() / 3600);
console.log("User Info:", util.inspect(os.userInfo()));
console.log("Total Memory (GB):", os.totalmem() / 1e9);
console.log("Free Memory (GB):", os.freemem() / 1e9);
console.log("CPU Info:", util.inspect(os.cpus()));
console.log("Network Interfaces:", util.inspect(os.networkInterfaces()));
console.log("Program Ended.");