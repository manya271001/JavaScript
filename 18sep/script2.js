function largest(){
    let num1 = parseInt(window.prompt("enter number1"));
    let num2 = parseInt(window.prompt("enter number2"));
    let num3 = parseInt(window.prompt("enter number3"));
    if(num1>num2 && num1>num3){
         window.alert("number1 is greatest");
    }
    else if(num2>num1 && num2>num3){
        window.alert("number2 is greatest");
    }
    else {
        window.alert("number3 is greatest");
    }
}
largest();