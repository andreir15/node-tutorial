
const os=require('os')

const user=os.userInfo()

//system uptame in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

//info about OS
const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}