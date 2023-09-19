#!/usr/bin/node
//a class Rectangle that defines a rectangle

module.exports = class Rectangle{
    constructor(w, h){
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
            console.log(TypeError)
        } else {
        this.width = w;
        this.height = h;
        }
    }
};
