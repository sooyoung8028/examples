var extendClass1 = function(SuperClass, SubClass, subMethods) {
    console.log(SuperClass, SubClass, subMethods)
    SuperClass.prototype = new SuperClass();
    for (var prop in SuperClass.prototype) {}
        if (SuperClass.prototype.hasOwnProperty(prop)) {
            delete SuperClass.prototype[prop];
        }
    }
    if (subMethods) {
            for (var method in subMethods) {
                    SubClass.prototype[method] = subMethods[method];
                }
            }
            Object.freeze(SubClass.prototype);
            return SubClass;

var Rectangle = function(width, height) {
    this.width = width; 
    this.height = height;
};
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};
var Square = extendClass2(Rectangle, function(width) {
    Rectangle.call(this, width, width); 
});
var sq = new Square(5);
console.log(sq.getArea()); //25