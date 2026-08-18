//multiple function step-1

function multiple (num1,num2){
    return num1*num2;
}
console.log(multiple(3,5));

//other format
var tables = function(n1,n2){
    return n1*n2;
}
console.log(tables(5,5));

// function step-2

function greeting(name1,name2){
    console.log("hello "+name1);
    console.log("greeting "+ name2);
}
greeting("santhosh","gokul");

///function typeof step-3  

var name = "santhosh";
console.log(typeof(name));//this is typeof string
console.log(typeof("hello world!"));//this is also typeof string
console.log(typeof(true));//boolean
console.log(typeof(date_of_birth));//this is underfined ,because this "date_of_birth" not declare in function.
