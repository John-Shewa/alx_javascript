#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const file = process.argv[3];
const fs = require('fs');

request(url, (error, response, body) => {
    if (error) {
        console.log(error);
    } 
    else {
        fs.writefile(file, body, 'utf8', (error) => {
            if (error) {
                console.log(error);
            }
        });
    }
});