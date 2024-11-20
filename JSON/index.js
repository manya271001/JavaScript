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
fetData()