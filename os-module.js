// import operating system object
const { log } = require('console')
const os = require('os')

// info about current user
// console user information username, homedir
const user = os.userInfo()
console.log(user);
// return system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

// information on OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);