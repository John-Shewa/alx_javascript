#!/usr/bin/node

const request = require('request');

const url = `https://swapi-api.alx-tools.com/api/films/`;

fetch(url).then(response => response.json())
.then(films => {

    const numoffilms = films.filter(film => film.characters.includes(18)).length;
    console.log(`${numoffilms}`);
});