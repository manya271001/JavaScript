async function fet(){
    let d=await fetch("https://jsonplaceholder.typicode.com/comments")
    let data=  await d.json()
    console.log(data);
    let ans = data.map((e)=>`
    <h1> ${e.id}</h1> 
    <h1> ${e.email}</h1> 
    `).join(" ")
    document.querySelector("#demo").innerHTML=ans
}
fet();