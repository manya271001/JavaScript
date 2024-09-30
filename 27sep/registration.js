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
    // for name
    let selectedname=document.querySelector("#name")
     selectedname.style.borderColor="rgb(118, 118, 118) "
    selectedname.style.outlineColor="rgb(118, 118, 118)"
    selectedname.style.borderWidth="1.5px"
    selectedname.style.borderRadius="1.5PX"

    // for second name
    let selectedSecondName=document.querySelector("#secondName")
    let selectederrorsecondname=document.querySelector("#errorsecondname")
    selectederrorsecondname.innerHTML="";
    selectedSecondName.style.borderColor="rgb(118, 118, 118) "
    selectedSecondName.style.outlineColor="rgb(118, 118, 118)"
    selectedSecondName.style.borderWidth="1.5px"
    selectedSecondName.style.borderRadius="1.5PX"

    // for email
    let selectedEmail=document.querySelector("#email")
    let selectederroremail=document.querySelector("#erroremail")
    selectederroremail.innerHTML="";
    selectedEmail.style.borderColor="rgb(118, 118, 118) "
    selectedEmail.style.outlineColor="rgb(118, 118, 118)"
    selectedEmail.style.borderWidth="1.5px"
    selectedEmail.style.borderRadius="1.5PX"

    // for password
    let selectedpass=document.querySelector("#password")
    let selectederrorpassword=document.querySelector("#errorpassword")
    selectederrorpassword.innerHTML="";
    selectedpass.style.borderColor="rgb(118, 118, 118) "
    selectedpass.style.outlineColor="rgb(118, 118, 118)"
    selectedpass.style.borderWidth="1.5px"
    selectedpass.style.borderRadius="1.5PX"

    // for confirm password
    let selectedCpass = document.querySelector("#confirmpassword")
     let selectederrorCpass=document.querySelector("#errorCpass")
    selectederrorCpass.innerHTML="";
    selectedCpass.style.borderColor="rgb(118, 118, 118) "
    selectedCpass.style.outlineColor="rgb(118, 118, 118)"
    selectedCpass.style.borderWidth="1.5px"
    selectedCpass.style.borderRadius="1.5PX"

    //  for phone
    let selectednumber = document.querySelector("#number")
    let selectederrorphone=document.querySelector("#errorphone")
    selectederrorphone.innerHTML="";
    selectednumber.style.borderColor="rgb(118, 118, 118) "
    selectednumber.style.outlineColor="rgb(118, 118, 118)"
    selectednumber.style.borderWidth="1.5px"
    selectednumber.style.borderRadius="1.5PX"
   
}