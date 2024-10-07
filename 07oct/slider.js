 let count =0;
function slider(){
   
    setInterval(runslide,3000);
    function runslide(){
        if(count ===0){
            let selectedarticle=document.querySelector("#slidediv")
            selectedarticle.style.marginLeft="0px";
            selectedarticle.style.transition="margin-left .5s";
            count++;
        }
        else if(count ===1){
             let selectedarticle=document.querySelector("#slidediv")
            selectedarticle.style.marginLeft="-1000px";
            selectedarticle.style.transition="margin-left .5s";
            count++;
        }
       else if(count ===2){
              let selectedarticle=document.querySelector("#slidediv")
            selectedarticle.style.marginLeft="-2000px";
            selectedarticle.style.transition="margin-left .5s";
            count++;
        }
        else if(count===3){
            let selectedarticle=document.querySelector("#slidediv")
            selectedarticle.style.marginLeft="-1000px";
            selectedarticle.style.transition="margin-left .5s";
            count++;
        }
        else if(count===4){
            let selectedarticle=document.querySelector("#slidediv")
            selectedarticle.style.marginLeft="0px";
            selectedarticle.style.transition="margin-left .5s";
            count=0;
        }
    }

    
}