function salary(){
    let ammount= parseInt(document.querySelector("#salary").value)
    if(ammount<300000){
        let resultant=document.querySelector("#output")
        resultant.innerHTML="no tax";
    }
      if(ammount>=300000 && ammount<750000){
        let tax=0.1*ammount;
        let resultant=document.querySelector("#output")
        resultant.innerHTML="tax of ammount "+ tax;
    }
      if(ammount>=750000){
         let tax=0.2*ammount;
        let resultant=document.querySelector("#output")
        resultant.innerHTML="tax of ammount "+ tax;
    }
}