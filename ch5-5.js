var outer = (function() {
    var a = 1;
    var inner = function() {
        return ++a;
    };
    return inner;
})();
console.log(outer());
console.log(outer());
outer = null;
// 클로저의 메모리 관리