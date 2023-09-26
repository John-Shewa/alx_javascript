#!/usr/bin/node

const request = require('request');

const url = procee.argv[2];

request.get(url, (error, response, body)=>{
    if(!error && response.statusCode == 200){
        const movies = JSON.parse(body);
        let counter = 0;
        movies.resluts.Foreach(movie) =>{
            movie.characters.forEach((actor) => {
                const list_film = actor.split('/');
                if(list_film[list_film.length-2] == 18) {
                    counter++;
                }
            })
        }
            console.log(counter);
    }
});