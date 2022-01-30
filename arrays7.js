/*
var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
arrLength[i] = arr[i].length;
}

console.log( arrLength );
*/
var arr = ['abcd', 'abcde', 'ab', 'abc'];
var arrLength = [];
arrLength = arr.map(function(leng) {return leng.length;});
console.log( arrLength );