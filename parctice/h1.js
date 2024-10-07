function run(){
    let heading = document.getElementById("heading").value
    let h = `<h1>${heading}</h1>`
    document.querySelector("#result").innerHTML= h;
    document.getElementById("heading").style.display="none"
    document.querySelector("button").style.display="none"
}