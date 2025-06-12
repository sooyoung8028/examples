var arr = [1,2]
Array.prototype.toString.call(arr); // "1,2"
Object.prototype.toString.call(arr); // [object Array]
arr.toString(); 

arr.toString = function() {
  return this.join('_');
};
arr.toString(); 