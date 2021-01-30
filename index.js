#!/usr/bin/env node

const fs = require('fs'); // node js file system
const chalk = require('chalk');

const {lstat} = fs.promises;

fs.readdir(process.cwd(), async (err, files) =>{
    if(err){
        console.log(err);
        return;
    }

    const stats = await Promise.all(files.map(file => lstat(file)));
    for (let i = 0; i < stats.length; i++) {
        if(stats[i].isFile()){
            console.log(files[i]);
        }
        else{
            console.log(chalk.blue(files[i]));
        }
    }
})