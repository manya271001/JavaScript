function zoomin(){
    let selectedimag=document.querySelector("#img1");
    selectedimag.style.scale="1.5"
    selectedimag.style.transition="scale 0.5s"
}
function zoomout(){
    let selectedimag=document.querySelector("#img1");
    selectedimag.style.scale="1"
    selectedimag.style.transition="scale 0.5s"
}
