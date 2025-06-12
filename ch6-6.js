var Person = function (name) {
    this.name = name;

};
Person.prototype.getname = function(){
    return this.name = name;

};
var iu = new Person('지금');
iu.getName = function() {
    return '바로' + this.name;

};
console.log(iu.getName());