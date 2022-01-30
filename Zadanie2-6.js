function isEven(a){
  if ((typeof a === 'number')) {
  	 return  (a % 2 === 0)?  true: false;
  }
}    


console.log(isEven(4));
console.log(isEven(7));
console.log(isEven('7'));
