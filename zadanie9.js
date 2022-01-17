var arr = [1,2,3,4,5,6];

for (let i = 5; i >  0; i--){
            for (let k = 0; k < i; k++){
                if (arr[k] <  arr[k+1]) {
                    let tmp = arr[k];
                    arr[k] = arr[k + 1];
                    arr[k + 1] = tmp;
                }
            }
        }
        console.log('Отсортированный массив:')    
        for(let i = 0; i < arr.length; i++){
                console.log(arr[i]);
            }
            