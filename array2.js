var array = [100,200,300];
var newArr = [];
function filTer( func , arr){
  
    if ((Array.isArray(arr)) && (typeof func === 'function') ){  
      	for(let i = 0; i < arr.length; i++) {
    		if (func(arr[i], 150)){
                newArr[i] = arr[i];

            }
                
  
    }	 
  }else console.log('Параметры не верные');

}

function compare(a,b){
    return a < b;

}

filTer(compare,array);
console.log(newArr);


