function powcub(n){
  if (typeof(n) === 'number'){
    return n*n*n;
  }else{
    console.log('Параметр должен быть числом');
  }
}
powcub(2);
