var str = 'abc def';

Array.prototype.push.call(str, ', pushed string');

Array.prototype.every.call(str, function(c) {return char !=='';});
Array.prototype.some.call(str, function(c) {return char ==='';});

var newArr = Array.prototype.map.call(str, function(c) {return char +'!';});

console.log(newArr);

var newStr = Array.prototype.reduce.apply(str, [
    function(string, char, i) {return string + char + i;},
]);

console.log(newStr)

