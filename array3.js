var array = [100,200,300];
var newArr = [];
function every( func , arr){
  
    if ((Array.isArray(arr)) && (typeof func === 'function') ){  
      	for(let i = 0; i < arr.length; i++) {
    		if (func(arr[i], 150)){
                return false;

            }
                
           
    }
    return true; 	 
  }else console.log('Параметры не верные');
  
}

function compare(a,b){
    return a < b;

}

//every(compare,array);
console.log(every(compare,array));


