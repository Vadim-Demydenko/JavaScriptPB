function f(a, b, c){
  if ((typeof a === 'number')&&(typeof b === 'number')&&(typeof c === 'number')){
    return ((a - b)/c)
  }else {
    console.log('Аргумент должен быть числом')
    return;
  } 
}
console.log(f(12,2,2));
//console.log(f(12,'sdds',2));
