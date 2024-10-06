function card(){
    let name=document.querySelector('#name').value;
    let Phone=document.querySelector('#Phone').value;
    let email=document.querySelector('#email').value;
    let designation=document.querySelector('#designation').value;
    let address=document.querySelector('#address').value;
    let image=document.querySelector('#img').value;
    console.log(name,Phone,email,designation,address,img)
    let inputvalue= `   <section id="card">
        <div id="detail">
    <h1> ${name}</h1>
    <h3>${Phone}</h3>
    <h3>${email}</h3>
    <h3>${designation}</h3>
    <h3>${address}</h3>
    </div>
    <div id="image">
        <img src="${image}" alt="img not found">
    </div>
    </section>`
    let output=document.querySelector('#output').innerHTML=inputvalue;
    document.querySelector('form').style.display="none"
    print();
    
}