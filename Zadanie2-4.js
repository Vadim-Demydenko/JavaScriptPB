function f(a){
  if ((typeof a === 'number') && (a >= 1) && (a <=7)){
    switch (a) {
      case 1: return 'Пн';
      case 2: return 'Вт';  
      case 3: return 'Cр';
      case 4: return 'Чт'; 
      case 5: return 'Пт';
      case 6: return 'Сб'; 
      case 7: return 'Вс';
         
    }
  }else console.log('Параметр должен быть число от 1 до 7');
}

console.log(f('3'));
