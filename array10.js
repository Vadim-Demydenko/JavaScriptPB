var array = [1,2,3];

function reverse( arr){
  
    if ((Array.isArray(arr)) || (arr.length === 0) ){  
      	reversArr = new Array(arr.length);
        for(let i = 0; i < arr.length; i++) {
    		var k = arr.length - (i+1);
        
            reversArr[k] = arr[i];
        }
    return reversArr;	 
    }else console.log('Параметры не верные');
  
}



console.log(reverse(array));


