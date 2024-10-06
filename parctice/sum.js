function sum(){
    let number1=parseInt(document.querySelector("#num1").value);
    let number2=parseInt(document.querySelector("#num2").value);
    let sum=number1+number2
    let resultant=document.querySelector("#result")
    resultant.innerHTML=("your sum is :"+sum);
}