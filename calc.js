//receive the operator from the user  using prompt box
const pickOperator = prompt("Enter operator to perfom its calculation (either +, -, * 0r /):" );

//accept the number from the user through prompt box.
const num1 = parseFloat(prompt ("Enter the first number"));
const num2 = parseFloat(prompt ("Enter the other number"));

let result;

if(pickOperator == "+"){
    result = num1 + num2;
}
else if(pickOperator == "-"){
    result = num1 - num2;
}
else if(pickOperator == "*"){
    result = num1 * num2;
}
else{
    result = num1 / num2;
}

window.alert( "The result" + " " + result);