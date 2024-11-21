//READING DATA
async function fetData(){
    let d= await fetch("http://localhost:3000/student")
    let data =  await d.json()
    let finalData=data.map((t)=>`
    // <h1>${t.id}</h1>
    // <h1>${t.name}</h1>
    // <h1>${t.age}</h1>
     <h1>${t.course}</h1>
    `).join("")
    document.querySelector("#output").innerHTML=finalData

}
async function fet(){
       let d= await fetch("http://localhost:3000/student")
    let data =  await d.json()
    let finalData=data.map((t)=>`
         <tr>
            <td>${t.id}</td>
            <td>${t.name}</td>
            <td>${t.age}</td>
            <td>${t.course}</td>
            <td> <button onclick="mydelete('${t.id}')">DELETE</button></td>
        </tr>
    `).join("")
    document.querySelector("#output").innerHTML=finalData

}
fet()
// DELETING DATA
async function mydelete(id){
     await fetch(`http://localhost:3000/student/${id}`,{method:"DELETE"})
     // then is a function that takes place after suscessfull return of promise it is an arrow function
     .then(res=>alert("delete sucessfull ....!!!"))
}

// INSERTING DATA
function submitData(){
    let data={
        name:document.querySelector('#name').value,
        age:document.querySelector('#age').value,
        course:document.querySelector('#course').value
    }
    fetch("http://localhost:3000/student",{
        method:'POST',
        headers:{
            // tell the browser about the type of data (here we are getting data from HTML and sending it back to json and JS work as the mediator btw the two)
            'content-type':'application/json'
        },
        // convert the body data into string format
        body:JSON.stringify(data)
    })
    .then(res=>alert("inserted...!!!!!!"))
}