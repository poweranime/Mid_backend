//task 1
function add(x,y){
    var z = x + y;
    return z;
}
function multiply(x,y){
    var z = x * y;
    return z;
}

function division(x,y){
    var z = x / y;
    return z;
}
var a = 10;
var b = 20;
var sum = add(a,b);
var times = multiply(a,b)
var div = division(a,b)

console.log(sum);
console.log(times);
console.log(div);

//task 2

var x = 1999
if (x%100==0){
        console.log("its a not leap year");}
        
    else if (x%4 == 0) {
    if (x%100!==0); {
    if (x%400!==0) {
        console.log("its a leap year");}
        }}

else {console.log("it is not!");
}

var x = 20;
var y = 30;
var sum = add(x,y);
var times = multiply(x,y)
var div = division(x,y)

console.log(sum);
console.log(times);
console.log(div);
