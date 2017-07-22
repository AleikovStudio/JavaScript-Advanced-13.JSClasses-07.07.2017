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
console.log(rect.calcArea());