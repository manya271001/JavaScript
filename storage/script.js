//    let obj = {
//         name:"manyaa",
//         age:22,
//         contact:89900909
//     }
//     for (k in obj){
//         console.log(obj[k]) // to display value of key
//         console.log(k) // will only print k 
//     }

function send(){

    let obj={
        name: document.querySelector("#name").value,
        contact:document.querySelector("#contact").value,
        age:document.querySelector("#age").value
    }

    localStorage.setItem("data",JSON.stringify(obj))//convert object data into string
}
let d = JSON.parse(localStorage.getItem("data")) // convert string into object bcz we cannot access the value of string directly 
console.log(d.name);

let myname= document.querySelector("#myname")
let mycontact= document.querySelector("#mycontact")
let myage= document.querySelector("#myage")

myname.innerHTML=d.name
mycontact.innerHTML=d.contact
myage.innerHTML=d.age