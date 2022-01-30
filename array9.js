
function arrayFil(item,length){
  
    if ((typeof length === 'number' )){  
        var arr = new Array(length);
        arr.fill(item);
        
         // console.log(arr); 
          return arr;    
    } else 
        console.log('Параметры не верные');
  
}



arritog    = arrayFil('X',5);
console.log(arritog);


