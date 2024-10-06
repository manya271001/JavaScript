function run(){
    let enteredammount=parseInt(document.querySelector("#ammount").value);
    let enteredsgst=parseInt(document.querySelector("#sgst").value);
    let enteredcgst=parseInt(document.querySelector("#cgst").value);
    let enteredigst=parseInt(document.querySelector("#igst").value);
    let payablesgst= (enteredsgst/100)*enteredammount;
    let payablecgst= (enteredcgst/100)*enteredammount;
    let payableigst= (enteredigst/100)*enteredammount;
    let result=document.querySelector("#result");
    result.innerHTML="SGST = "+payablesgst+" CGST = "+payablecgst+" IGST = " +payableigst;
}