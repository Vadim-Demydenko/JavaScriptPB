var array = ['a','d','f'];
var sum = "asdfgh";
function reduceRight( func , arr, sum){
  
    if ((Array.isArray(arr)) && (typeof func === 'function')&&((typeof sum === 'number')
    || (typeof sum == 'string' )) ){  
      	for(let i = 0; i < arr.length; i++) {
    		 sum = func(arr[i], sum);
        }
    return sum;	 
    }else console.log('Параметры не верные');
  
}

function add(a,b){
    return a + b;

}

//every(compare,array);
console.log(reduce(add,array,sum));


