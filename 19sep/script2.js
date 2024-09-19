function even_odd(){
    let num = parseInt(window.prompt("enter a number"))
    if(num % 2 === 0)  // in JS we use 3 times = for comparison
    {
        window.alert("even" + num)
    }
    else {
        window.alert("odd" + num)
    }
}
even_odd()