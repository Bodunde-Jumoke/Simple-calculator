var firstNumber = Number(prompt("Enter First Number"));
var secondNumber= Number(prompt("Enter second Number"));
var operatorSign= prompt("Enter operator to be calculated + - / * ");


if(operatorSign ==="+"){
    alert("The answer is"+" "+(firstNumber+secondNumber));
}
else if(operatorSign==="-"){
    alert("The answer is" +" " +(firstNumber-secondNumber)) ;
} 
else if(operatorSign==="*"){
    alert("The answer is" +" " +(firstNumber*secondNumber));
}
else if(operatorSign==="/"){
    alert("The answer is" +" " +(firstNumber/secondNumber));
}




















