//READING DATA
async function fetData(){
    let d= await fetch("http://localhost:3000/student")
    let data =  await d.json()
    let finalData=data.map((t)=>`
     <h1>${t.id}</h1>
     <h1>${t.name}</h1>
    <h1>${t.age}</h1>
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
            <td> <button onclick="updateData('${t.id}')">EDIT</button></td>
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
//TO UPDATE DATA
async function updateData(id){
    let data = await fetch(`http://localhost:3000/student/${id}`)
    let newdata = await data.json()
    let selectedData=`
      <input type="text"  value="${newdata.id}" readonly> <br>
     <input type="text"  id="name1" value="${newdata.name}"> <br>  
       <input type="text"  id="age1" value="${newdata.age}"> <br>
     <input type="text"  id="course1" value="${newdata.course}"> <br>
     <input type="submit" onclick="finalUpDate('${newdata.id}')"> <br>

      `  
      document.querySelector("#editable").innerHTML=selectedData
     }

     function finalUpDate(id){
        let fdata={
            name:document.querySelector('#name1').value,
            age:document.querySelector('#age1').value,
            course:document.querySelector('#course1').value,
        }
        fetch(`http://localhost:3000/student/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(fdata)
        })
        .then(r=>alert("updatedd....!!!!"))
     }
