function send(){
    let enteredname = document.querySelector("#name").value
    let enteredemail = document.querySelector("#email").value
    let enteredcourse = document.querySelector("#course").value

    localStorage.setItem("name",enteredname)
    localStorage.setItem("email",enteredemail)
    localStorage.setItem("course",enteredcourse)
    
    let a=localStorage.getItem("name")
    let b=localStorage.getItem("email")
    let c=localStorage.getItem("course")
    document.querySelector("#first").innerHTML=a;
    document.querySelector("#second").innerHTML=b;
    document.querySelector("#third").innerHTML=c;
    let obj = {
        name:"manyaa",
        age:22,
        contact:89900909
    }
    console.log(obj)
}