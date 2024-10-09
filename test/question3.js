function check(){
    let selectedPass=document.querySelector("#password").value
    if(selectedPass ===""){
        document.querySelector("#errorpassword").innerHTML="enter passowrd"
        let selectedpass = document.querySelector("#password");
        selectedpass.style.borderColor ="red"
        selectedpass.style.outlineColor = "red"
        return false;
    }
    if(!(selectedPass.match(/[1234567890]/)
    && 
    selectedPass.match(/[!@#$%^&*()-+]/)
    && 
    selectedPass.match(/[qwertyuiopasdfghjklzxcvbnm]/)
    && 
    selectedPass.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/) )){
         document.querySelector("#errorpassword").innerHTML="enter STRONG password"
        let selectedpass = document.querySelector("#password");
        selectedpass.style.borderColor ="red";
        selectedpass.style.outlineColor = "red";
        return false;
    }

}