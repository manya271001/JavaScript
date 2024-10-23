let store = '';
function calc(arg){
    store = store + arg;
    let output = document.querySelector('#output')
    output.innerHTML=store
}
function calculate(){
 let output = document.querySelector('#output')
    output.innerHTML= eval(store)
    store = eval(store)
    store.toString();
}
