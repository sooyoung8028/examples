// 예제 1-1
var a;



// 예제 1-2
var a;
a = 'abc';

var a = 'abc';




// 예제 1-3 불변성
var a = 'abc';
a = a +'def';

var b = 5;
var c = 5;
b = 7;


// 예제 1-4 참조형 데이터의 할당
var obj1 = {
    a: 1,
    b: 'bbb'
};



// 예제 1-5 참조형 데이터의 프로퍼티 재할당
var obj1 = {
    a: 1,
    b: 'bbb'
};
obj1.a = 2;



// 예제 1-6 중첩된 참조형 데이터(객체)의 프로퍼티 할당
var obj = {
    x: 3,
    arr: [3, 4, 5]
};




// #예제 1-7
var a = 10;
var b = a;

var obj1 = { c: 10, d: 'ddd'};
var obj2 = obj1;




// #예제 1-8
var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd'};
var obj2 = obj1;

b = 15;
obj2.c = 20;
 



// #예제 1-9
var a = 10;
var b = a;
var obj1 = { c:10, d: 'ddd'};
var obj2 = obj1;

b = 15;
obj2= { c:20, d: 'ddd'};




// #예제 1-10
var user = {
    name: 'Jaenam',
    gender: 'male'
};

var changeName = function (user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name);
console.log(user === user2);




// #예제 1-11
var user = {
    name: 'Jaenam',
    gender: 'male'
};

var changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender
    };
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
};




// #예제 1-12
var copyObject = function (target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};



// #예제 1-13
var user = {
    name: 'Jaenam',
    gender: 'male'
};

var user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name);
console.log(user === user2);




// #예제 1-14
var user = {
    name: 'Jaenam',
    urls: {
        portfolio: 'http://github.com/abc',
        blog: 'http://blog.com',
        facebook: 'http://facebook.com/abc'
    }
};
var user2 = copyObject(user);

user2.name = 'Jung';
console.log(user.name, user2.name);

user.urls.portfolio = 'http:portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);




// #예제 1-15
var user2 = copyObject(user);
user2.urls = copyObject(user.urls);

user.urls.portfolio = 'http:portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);




// 예제 1-16
var copyObjectDeep = function(target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
};




// 예제 1-17
var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2]
    }
};
var obj2 = copyObjectDeep(obj)

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2);




// 예제 1-18
var copyObjectViaJSON = function (target) {
    return JSON.parse(JSON.stringify(target));
};
var obj = {
     a: 1,
    b: {
        c: null,
        d: [1, 2]
        func1: function () {console.log(3); }
    },
     func2: function () {console.log(4); }
}
var obj2 = copyObjectViaJSON(obj)

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2);




// 예제 1-19 자동으로 undefined를 부여하는 경우
var a;
console.log(a);
 
var obj = { a: 1 };
console.log(obj.a);
console.log(obj.b);
console.log(b);

var func = function() { };
var c = func();
console.log(c);




// 예제 1-20 undefined와 배열
var arr1 = [];
arr1.length = 3;
console.log(arr1);

var arr2 = new Array(3);
console.log(arr2);

var arr3 = [undefined, undefined, undefined];
console.log(arr3);




// 예제 1-21 빈 요소와 배열의 순회
var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v, i) {console.log(v, i); });
arr2.forEach(function (v, i) {console.log(v, i); });

arr1.map(function (v, i) { return v + i; });
arr2.map(function (v, i) { return v + i; });

arr1.filter(function (v) { return !v; });
arr2.filter(function (v) { return !v; });

arr1.reduce(function (p, c, i) {return p + c +i; }, '');
arr2.reduce(function (p, c, i) {return p + c +i; }, '');




// 예제 1-22 undefined와 null의 비교
var n = null;
console.log(typeof n);

console.log(n == undefined);
console.log(n == null);

console.log(n === undefined);
console.log(n === null);