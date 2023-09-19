#!/usr/bin/node
//a class Rectangle that defines a rectangle

const Sqr = require('./5-square');

class Square extends Sqr{
    constructor (size) {
        super(size);
        this.size = size;
    }
    charPrint(c) {
        if (!c) super.print();
        else {
            let S = '';
            for (let i = 0; i < this.width; i++) {
                for (let j = 0; j < this.width; j++) {
                    S += c;
                }
                if (i !== this.width - 1) S += '\n';
            }
            console.log(S);
        }
    }
}
module.exports = Square;