var choices = parseInt(prompt("1 - Addition, 2 - Subtraction, 3 - Multiplication, 4-Division"));
var input1 = parseInt(prompt("Enter first number"));
var input2 = parseInt(prompt("Enter second number"));

addition = (a,b) => {return a + b};
subtraction = (a,b) => {return a - b};
multiplication = (a,b) => {return a * b};
division = (a,b) => {return a / b};

if (choices == 1){
    alert("Sum is: "+ addition(input1,input2));
}
if(choices == 2){
    alert("Difference is: " + subtraction(input1,input2));
}
if(choices == 3){
    alert("Product is: " + multiplication(input1,input2));
}
if(choices == 4) {
    alert("Quotient is: " + division(input1,input2));
}