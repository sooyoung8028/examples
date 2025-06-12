var arr = [1,2];
Array.prototype.constructor == Array // true
arr._proto_.constructor == Array // true
arr.constructor == Array

var arr2 = new arr.constructor(3,4);
console.log(arr2);

