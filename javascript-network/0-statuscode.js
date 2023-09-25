#!/usr/bin/node
const request = require('request');

const url = process.argv[2];
request.get(url, (error, response) => {
    if (error) {
        console.error('Error making GET request: ${error}');
        process.exit(1);
    }
    const statusCode = response.statusCode;
    console.log('code: ${statusCode}');
});