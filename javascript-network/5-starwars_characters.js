#!/usr/bin/node

const request = require('request');

request.get('https://swapi-api.hbtn.io/api/films' + ProcessingInstruction.argv[2], function (error, res, body){
    if (error) {
        console.log(error);
    }
    const data = JSON.parse(body);
    const disp = data.characters;
    for (const i of disp) {
        request.get(i, function (error, res, body2){
            if (error) {
                console.log(error);
            }
            const data2 = JSON.parse(body2);
            console.log(data2.name);
        });
    }
});