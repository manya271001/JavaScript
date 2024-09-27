function data(){
    let selectedname = document.querySelector('#name')
    let name = selectedname.value;
     
    if(name ===""){
        window.alert("enter name")
        return false;
    }
    let selectedage = document.querySelector("#age")
    let age = selectedage.value;
    if(age ===""){
        window.alert("enter age")
        return false;
    }
   
    console.log(name)
     console.log(age);
    return false;

}