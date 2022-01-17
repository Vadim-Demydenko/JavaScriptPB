let num = 0;
let ostdiv = 1000;
while (true){
    console.log(ostdiv);
    ostdiv /= 2;
    num++;
    if (ostdiv < 50) {
        break;
    } 
    
}
console.log('Число итераций num =',num);
console.log('Число после деления ostdiv =',ostdiv);
