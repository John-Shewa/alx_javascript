#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, {json:true}, (error, response, body) => {
    if (error) {
        console.log(error);
        return;
    }
    const completedtask = {};
    body.forEach((todo) => {
        if (todo.completed) {
            if (!completedtask[todo.userId]) {
                completedtask[todo.userId] = 1;
            } else {
                completedtask[todo.userId] += 1;
            }
        }
    });
    console.log(completedtask);
});