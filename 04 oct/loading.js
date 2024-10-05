 function loading(){
    setTimeout(()=>{
         let selectedid=document.querySelector("#popup");
         selectedid.style.display="block";
    },6000)
 }
 function removedisplay(){
    let selectedid=document.querySelector("#popup");
         selectedid.style.display="none";
 }