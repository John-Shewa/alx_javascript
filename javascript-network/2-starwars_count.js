#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const char_id = 18;

request(url, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }

const output = JSON.parse(body);

let count = 0;

for (let result of output.results) {
    if (result.characters.some((url) => url.endswith(`${char_id}/`))) {
        count++;
    }
}
console.log(count);
});