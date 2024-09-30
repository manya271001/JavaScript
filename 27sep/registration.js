function data(){
    let name = document.querySelector("#name").value;
    let secondName = document.querySelector("#secondName").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirmpassword = document.querySelector("#confirmpassword").value; 
   let number= document.querySelector("#number").value; 
    if(name ===""){
        // displaying message using message on html page and turnig the input filed red
        document.querySelector("#errorname").innerHTML="please enter name"
         // selecting the input tag to chnage its color
         let selectedname = document.querySelector('#name')
         selectedname.style.borderColor="red";
         selectedname.style.outlineColor="red";
        return false;
    }
     else if(secondName===""){
        document.querySelector("#errorsecondname").innerHTML="enter second name"
        let selectedname=document.querySelector("#secondName")
        selectedname.style.borderColor="red"
        selectedname.style.outlineColor="red"
        return false;
    }
     else if(email===""){
     document.querySelector("#erroremail").innerHTML ="enter email please"
     let selectedemail = document.querySelector("#email")
     selectedemail.style.borderColor="red"
     selectedemail.style.outlineColor="red"
     return false;
    }
     else if(password ===""){
        document.querySelector("#errorpassword").innerHTML="enter passowrd"
        let selectedpass = document.querySelector("#password");
        selectedpass.style.borderColor ="red"
        selectedpass.style.outlineColor = "red"
        return false;
    }
     else if(confirmpassword===""){
        document.querySelector("#errorCpass").innerHTML="enter cofirm password"
        document.querySelector('#confirmpassword').style.borderColor="red"
        document.querySelector('#confirmpassword').style.outlineColor="red"
        return false;
    }
     else if(number===""){
        document.querySelector("#errorphone").innerHTML="enter phone number"
        document.querySelector("#number").style.borderColor="red"
        document.querySelector("#number").style.outlineColor="red"
        return false;
    }
}
function s(){
    let selectedinput=document.querySelector('input')
     selectedinput.style.borderColor="rgb(118, 118, 118) "
    selectedinput.style.outlineColor="rgb(118, 118, 118)"
    selectedinput.style.borderWidth="1.5px"
    selectedinput.style.borderRadius="1.5PX"
        let selectederrorsecondname=document.querySelector("#errorsecondname")
    selectederrorsecondname.innerHTML="";
    selectedinput.style.borderColor="rgb(118, 118, 118) "
    selectedinput.style.outlineColor="rgb(118, 118, 118)"
    selectedinput.style.borderWidth="1.5px"
    selectedinput.style.borderRadius="1.5PX"
    let selectederroremail=document.querySelector("#erroremail")
    selectederroremail.innerHTML="";
    selectedinput.style.borderColor="rgb(118, 118, 118) "
    selectedinput.style.outlineColor="rgb(118, 118, 118)"
    selectedinput.style.borderWidth="1.5px"
    selectedinput.style.borderRadius="1.5PX"
    let selectederrorpassword=document.querySelector("#errorpassword")
    selectederrorpassword.innerHTML="";
    let selectederrorCpass=document.querySelector("#errorCpass")
    selectederrorCpass.innerHTML="";
    let selectederrorphone=document.querySelector("#errorphone")
    selectederrorphone.innerHTML="";
   
}