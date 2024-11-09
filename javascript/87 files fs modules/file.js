const fs = require('fs');
// console.log(fs);
// here are various fs module function

// fs.writeFileSync("File.txt","This is a new file with some text") 
fs.writeFile(".\\87 files fs modules\\File2.txt", "this is also a new file", () => {
    console.log("done!!!");
    fs.readFile(".\\87 files fs modules\\File2.txt", (error, data) => {
        console.log(error, data.toString());
        // If error is zero then there will be shown null and the data will be in the format of numbers and alphabets so we will use to string
        //This way is efficient but after some time there will be a callback hell of multiple read file and write file
    })

})
// this will async the next work as it will take time and It will take time for thenextconsole.log
fs.appendFile(".\\87 files fs modules\\File2.txt"," \nThis is appeneded line",(err,data)=>{
    console.log(data);
    
})
console.log("done");
// Therefore we will use FS.write  But itwill also take a promise
//In conclusion we can say that write file is more effective than write file sync
// At the same time we can read those files in that same callback we created
// As I know how write read and append works so there is also append function