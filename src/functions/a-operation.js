// add, minus, div, mult opeations

function print(){
    console.log("Hello")
}

print();

var print2 = function () {
    console.log("Hello as var")
}

print2()

var printFat = text => console.log(text)
printFat('Hello as a fat Arrow')

var printFatDirect = () => console.log("Hello as a fat direct arrow")
printFatDirect()

function add(x,y) {
    return x+y;
}
console.log(add(3,4));


const minus = function(x,y){
    return x-y;   
}
console.log(minus(12,8))

const div = (x,y) => x/y;
console.log(div(11,3))

const mux = (x,y) => x*y;
console.log(mux(10,12));


function calculator (operation, x, y) {
return operation(x,y);
}

console.log(calculator(minus, 15, 5))

function factor(x) {
    if ((x<0)|(x!=Math.trunc(x))) return NaN;
    if (x==0) {
        return 1;
    } else {
    return x*factor(x-1)
    }
}

console.log(factor(8.2))








