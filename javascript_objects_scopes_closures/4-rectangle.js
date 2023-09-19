#!/usr/bin/node
//a class Rectangle that defines a rectangle

module.exports = class Rectangle{
    constructor(w, h){
        if (w > 0 && h > 0) { [this.width, this.height] = [w, h];}
    }
    print () {
        for (let i = 0; i < this.height; i++) console.log("X".repeat(this.width));
        }
    rotate() {
        this.width = h;
        this.height = w;
    }
    double() {
        this.width = w * 2;
        this.height = h * 2;
    }
};