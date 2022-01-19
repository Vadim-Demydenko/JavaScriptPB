function sumAll(...args) { 
  let sum = 0;

  for (let arg of args) {
   if (typeof(arg) ==='number'){
    sum += arg;
    }
   
  } 
  return sum;
}


alert( sumAll(1, 2, 3,'b',1) );
