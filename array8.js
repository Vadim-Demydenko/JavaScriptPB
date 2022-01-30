

//const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
var arr = [[[[[1,2]]]]];
function f( arr){
  
    if (Array.isArray(arr) ){  
      	var arr_pre = arr.flat(9);
        var sum = arr_pre.reduce(function(item1,item2){return item1 + item2;});
          console.log(sum); 
          return sum;    
    } else 
        console.log('Параметры не верные');
  
}



f(arr);



