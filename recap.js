var x = 10;

console.log("Hello");

console.log('the value of x is ' + x);

var age = 30;

if (age > 40){
    console.log("Please proceed")
}   else {
    console.log('please try again after 1st of July');
}

function add(x,y){
    var z = x + y;
    return z;
}

var a = 10;
var b = 20;
var sum = add(a,b);

console.log(sum);

//anonymous function
var anon_add = function (x, y){
    var z = x + y;
    return z;
}

var a = 10;
var b = 20;
var sum = anon_add(a,b);

console.log(sum);

//arrow function
var arrow_add = (x,y) => {
    var z = x + y;
    return z;
}
var a = 10;
var b = 20;
var sum = arrow_add(a,b);

console.log(sum);

var pi = () =>{
    return 3.14
}
 console.log(pi(1));

