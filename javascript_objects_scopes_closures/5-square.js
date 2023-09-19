#!/usr/bin/node
//a class Rectangle that defines a rectangle

const Rectangle = require('./4-rectangle');

module.exports = class Square extends Rectange{
    constructor(size) {
        super(size, size);
    }   
}