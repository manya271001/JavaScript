function even_odd(){
    let num = parseInt(window.prompt("enter a number"))
    if(num % 2 === 0){
        window.alert("even")
    }
    else {
        window.alert("odd")
    }
}
even_odd()