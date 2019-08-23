const fs = require('fs');


/*
fs.writeFile('message.txt', "Hello there", (err) => {
    if(err) throw err;

    console.log("File written");
}) */


fs.readFile('message.txt', "utf8", (err, data) => {
    if(err) throw err;

    console.log(data);
})