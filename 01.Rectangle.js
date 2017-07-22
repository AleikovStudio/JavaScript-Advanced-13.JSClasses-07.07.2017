class Rectangle {
    constructor(width, height, color) {
        /*        this.width = width;
         this.height = height;
         this.color = color;*/
        [this.width,this.height,this.color]=[width, height, color];
    }

    calcArea() {
        return this.width * this.height;
    }
}
let rect = new Rectangle(4, 5, 'red');
//console.log(rect.width);
//console.log(rect.height);
//console.log(rect.color);
console.log(rect.calcArea());
console.log(rect);

/*
another solution with old JS legacy code used before Classes implementation in JavaScript:

function Rectangle(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;

    Rectangle.prototype.calcArea = function () {
        return this.width * this.height;
    };
}

let rect = new Rectangle(3, 4, "red");

console.log(rect);
console.log(rect.height);
console.log(rect.width);
console.log(rect.color);
console.log(rect.calcArea());*/
