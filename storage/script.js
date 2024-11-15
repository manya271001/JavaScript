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
        email:document.querySelector("#contact").value,
        course:document.querySelector("#age").value
    }

    localStorage.setItem("data",json.stringify(obj))
}