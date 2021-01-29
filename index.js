#!/usr/bin/env node

const fs = require('fs'); // node js file system

fs.readdir(process.cwd(), (err, files) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(files);
})