var array = [100,200,300];
var newArr = [];
function some( func , arr){
  
    if ((Array.isArray(arr)) && (typeof func === 'function') ){  
      	for(let i = 0; i < arr.length; i++) {
    		if (func(arr[i], 150)){
                return true;

            }
                
           
    }
    return false; 	 
  }else console.log('Параметры не верные');
  
}

function compare(a,b){
    return a < b;

}

//every(compare,array);
console.log(some(compare,array));


