var ESS = function(name){
    this.name = name;
};
ESS.staticMethod = function(){
    return this.name + 'staticMethod';
};
ESS.prototype.instanceMethod = function(){
    return this.name + 'method';
};
var es5Instance = new ESS('es5');
console.log(ESS.staticMethod()); // es5staticMethod
console.log(es5Instance.method()); // es5method
var ES6 = class {
    constructor(name) {
        this.name = name;
    }
    static staticMethod() {
        return this.name + 'staticMethod';
    }
    instanceMethod() {
        return this.name + 'method';
    }
};
var es6Instance = new ES6('es6');
console.log(ES6.staticMethod()); 
console.log(es6Instance.method());