let string = document.querySelector("#str").value
string="hajha haghja gahgaj gahga aghav aghg abah afava "
// str=haj bjaghj gau gau  
let store="";
for(let i=0;i<string.length;i++){
    if(!(string[i]===" ")){
        store= store + string[i];
    }
}
console.log(store)