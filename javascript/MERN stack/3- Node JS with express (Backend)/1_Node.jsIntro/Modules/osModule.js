import os from 'os';

console.log(os.homedir()); // return home directory 
console.log(os.freemem()); // Returns amount of free ram  in form of bytes as integer
console.log(os.platform());
console.log(os.release());
console.log(os.cpus()); // return info about each processor cores
console.log(os.getPriority());
console.log(os.hostname()); // return hostname of os
console.log(os.machine());
function bytesToGB(bytes) {
    if (bytes === 0) return '0 GB';
    const gb = bytes / (1024 ** 3);
    return gb.toFixed(2) + ' GB';
}

let bytes = os.freemem(); // return total ram
console.log(bytesToGB(bytes));
console.log(os.uptime()/60);




