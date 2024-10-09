function output(){
    let str=document.querySelector("#str").value;
    let count =0;
    for(let i = 0;i<str.length;i++){
        if(str[i]===" "){
            count++;
        }
    }
    document.querySelector('#answer').innerHTML=count;
}