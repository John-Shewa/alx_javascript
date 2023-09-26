#!/usr/bin/node

const request = require('request');

const url = `https://swapi-api.alx-tools.com/api/films/`;

request(url).then(function(response) {
    const films = JSON.parse(response.body).results;

    const numoffilms = films.filter(film => film.characters.includes(18)).length;
    console.log(`${numoffilms}`);
});