var Constructor = function(name) {
    this._name = name;
};
Constructor.prototype.method = function() {};
Constructor.prototype.property1 = 'Constructor prototype property';

var instance = new Constructor('instance');
console.dir(Constructor);
console.dir(instance);

