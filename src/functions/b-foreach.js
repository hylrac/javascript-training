let array = ['a','b','s','e','n','t']

let result='';

const size = array.length;
var i=0;/*
while (i<size) {
    result=result+array[i];
    i++
}*/

for (var i=0;i<size;i++) {
    result=result+array[i];
}

console.log(result)

let array2 = [1,3,5,7,9,11];
let result2='';

const size2=array2.length;

for (var i =0 ; i<size2;i++){
    result2=result2+array2[size2-i-1]+' - ';
}
result2=result2.substring(0,result2.length-3)

console.log(result2)



function reverseMinus (array) {
    const size=array.length;
    result=array[size-1];
    for (var i=1; i<size2;i++){
    result=result-array[size-i-1]
}
return result;
}


console.log(result3)
console.log(reverseMinus(array2))