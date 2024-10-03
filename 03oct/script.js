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
        document.querySelector("#errorsecondName").innerHTML="enter second name"
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
    else if(!(email.includes('@')&& email.includes('.com'))){
        document.querySelector("#erroremail").innerHTML="please enter valid email"
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
    else if(!(password.match(/[1234567890]/)
    && 
    password.match(/[!@#$%^&*()-+]/)
    && 
    password.match(/[qwertyuiopasdfghjklzxcvbnm]/)
    && 
    password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/) )){
         document.querySelector("#errorpassword").innerHTML="enter STRONG password"
        let selectedpass = document.querySelector("#password");
        selectedpass.style.borderColor ="red";
        selectedpass.style.outlineColor = "red";
        return false;
    }

     else if(confirmpassword===""){
        document.querySelector("#errorconfirmpassword").innerHTML="enter cofirm password"
        document.querySelector('#confirmpassword').style.borderColor="red"
        document.querySelector('#confirmpassword').style.outlineColor="red"
        return false;
    }
    else if(password !== confirmpassword){
        window.alert("passwrod doest not match");
        document.querySelector("#password").value = "";
          document.querySelector('#confirmpassword').value=""
        document.querySelector("#password").focus();
         document.querySelector('#confirmpassword').style.borderColor="red"
        document.querySelector('#confirmpassword').style.outlineColor="red"
              let selectedpass = document.querySelector("#password");
        selectedpass.style.borderColor ="red"
        selectedpass.style.outlineColor = "red"
        return false;
    }
     else if(number===""){
        document.querySelector("#errornumber").innerHTML="enter phone number"
        document.querySelector("#number").style.borderColor="red"
        document.querySelector("#number").style.outlineColor="red"
        return false;
    }
    else if(number.length !==10){
        document.querySelector("#errornumber").innerHTML="mobile number should be 10 digit";
        document.querySelector("#number").style.borderColor="red"
        document.querySelector("#number").style.outlineColor="red"
        return false;
    }
    // if entered number "Is Not a Number" then it will give false : for example if entered 9981777794 is 10 digit number it is a number hence this will give false and if will be skipped but if i entered wweeuiriri it will give true for not a number and we will enter in if block
        else if(isNaN(number)){
 
              document.querySelector("#errornumber").innerHTML="mobile number should be digit only";
        document.querySelector("#number").style.borderColor="red"
        document.querySelector("#number").style.outlineColor="red"
        return false;
    }
}
function s(arg){
    let selectedvalue = document.querySelector(`#${arg}`);
    selectedvalue.style.borderColor="rgb(118, 118, 118)"
    selectedvalue.style.outlineColor="rgb(118, 118, 118)"
     document.querySelector(`#error${arg}`).innerHTML="";
}