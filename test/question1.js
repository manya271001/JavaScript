function average(){
   let number1=parseInt(document.querySelector("#num1").value);
    let number2=parseInt(document.querySelector("#num2").value);
    let number3=parseInt(document.querySelector("#num3").value);
    let avg=(number1+number2+number3)/3;
    let resultant=document.querySelector("#result")
    resultant.innerHTML=("your avg is :"+avg);
}