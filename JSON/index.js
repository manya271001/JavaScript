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

async function mydelete(id){
     await fetch(`http://localhost:3000/student/${id}`,{method:"DELETE"})
}
