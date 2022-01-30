function isPositive(a){
  if ((typeof a === 'number')) {
  	 return  (a > 0)?  true: false;
    
    
  }
}    

arr = [1, 2, -4, 3, -9, -1, 7];
arrPrepare = [];

for( ar of arr){
   if (isPositive(ar)){
		arrPrepare.push(ar);
  }  
}	
console.log(arrPrepare);
