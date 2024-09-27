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
    if(secondName===""){
        document.querySelector("#errorsecondname").innerHTML="enter second name"
        let selectedname=document.querySelector("#secondName")
        selectedname.style.borderColor="red"
        selectedname.style.outlineColor="red"
        return false;
    }
    if(email===""){
     document.querySelector("#erroremail").innerHTML ="enter email please"
     let selectedemail = document.querySelector("#email")
     selectedemail.style.borderColor="red"
     selectedemail.style.outlineColor="red"
     return false;
    }
    if(password ===""){
        document.querySelector("#errorpassword").innerHTML="enter passowrd"
        let selectedpass = document.querySelector("#password");
        selectedpass.style.borderColor ="red"
        selectedpass.style.outlineColor = "red"
        return false;
    }
    if(confirmpassword===""){
        document.querySelector("#errorCpass").innerHTML="enter cofirm password"
        document.querySelector('#confirmpassword').style.borderColor="red"
        document.querySelector('#confirmpassword').style.outlineColor="red"
        return false;
    }
    if(number===""){
        document.querySelector("#errorphone").innerHTML="enter phone number"
        document.querySelector("#number").style.borderColor="red"
        document.querySelector("#number").style.outlineColor="red"
        return false;
    }


}