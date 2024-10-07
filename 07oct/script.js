setInterval(run,1000);
    let count=0;
    function run(){
        count++;
        let result=document.querySelector("#output")
        result.innerHTML=count
    }