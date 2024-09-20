function salary(){
let salary_ammount = parseInt(window.prompt("enter your salary"))
if(salary_ammount<350000){
    window.alert("you don't have to pay tax")
}
else if(salary_ammount >= 350000 && salary_ammount < 800000){
    window.alert("you have to pay 10% tax of rs " + 0.1*(salary_ammount))
}
else if(salary_ammount>800000){
        window.alert("you have to pay 17% tax of rs " + 0.17*(salary_ammount))
}
else {
    window.alert("invalid input")
}
}
salary()