function data(){
    let selectedname = document.querySelector('#name').value;
    let selectedemail = document.querySelector('#email').value;
    let selectedpassword = document.querySelector('#password').value;
    let selectedcpassword = document.querySelector("#Cpassword").value;
    let selectedphone = document.querySelector('#phone').value;
    console.log(selectedname,selectedemail,selectedcpassword,selectedcpassword,selectedphone)
        event.preventDefault();

    if(selectedname===""){
        document.querySelector("#errorname").innerHTML="enter name"
        let selectedname = document.querySelector('#name');
        selectedname.style.borderColor="red"
        selectedname.style.outlineColor="red"
        return false
    }
    if(selectedemail===""){
           document.querySelector("#erroremail").innerHTML="enter email"
         let selectedemail = document.querySelector('#email')
         selectedemail.style.borderColor="red"
         selectedemail.style.outlineColor="red"
         return false;
    }
   
    if(!(selectedemail.includes('@') && selectedemail.includes(".com")) ){
        document.querySelector("#erroremail").innerHTML="enter valid email"
         let selectedemail = document.querySelector('#email')
         selectedemail.style.borderColor="red"
         selectedemail.style.outlineColor="red"
         return false;

    }
     if(selectedpassword===""){
    document.querySelector("#errorpassword").innerHTML="enter password"
      let selectedpassword = document.querySelector('#password')
      selectedpassword.style.borderColor="red"
      selectedpassword.style.outlineColor="red"
      return false;
    }
    if(!(selectedpassword.match(/[1234567890]/)&&selectedpassword.match(/[~!@#$%^&*()_+-]/)&&selectedpassword.match(/[qwertyuiopasdfghjklzxcvbnm]/)&&selectedpassword.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/))){
        document.querySelector("#errorpassword").innerHTML="enter STRONG  password"
      let selectedpassword = document.querySelector('#password')
      selectedpassword.style.borderColor="red"
      selectedpassword.style.outlineColor="red"
      return false;
    }
    if(selectedpassword.length<8){
        document.querySelector("#errorpassword").innerHTML="password should be 8 didgit long"
      let selectedpassword = document.querySelector('#password')
      selectedpassword.style.borderColor="red"
      selectedpassword.style.outlineColor="red"
      return false;
    }
    if(selectedcpassword===""){
      document.querySelector("#errorCpassword").innerHTML="enter confirm password"
       let selectedcpassword = document.querySelector("#Cpassword")
       selectedcpassword.style.borderColor="red"
       selectedcpassword.style.borderColor="red"
       return false

    }
    if(selectedpassword !== selectedcpassword){
    window.alert("password do not match")
     let selectedpasswordField = document.querySelector('#password');
        selectedpasswordField.value = "";
        selectedpasswordField.style.borderColor = "red";
        selectedpasswordField.style.outlineColor = "red";
        selectedpasswordField.focus();

        let selectedcpasswordField = document.querySelector("#Cpassword");
        selectedcpasswordField.value = "";
        selectedcpasswordField.style.borderColor = "red";
        selectedcpasswordField.style.outlineColor = "red";

        return false;
    }
    if(selectedphone===""){
      document.querySelector("#errorphone").innerHTML="enter phone number"
      let selectedphone = document.querySelector('#phone')
      selectedphone.style.borderColor="red"
      selectedphone.outlineColor="red"
      return false;
    }
    if(selectedphone.length!=10){
      document.querySelector("#errorphone").innerHTML="enter 10 digit phone number"
      let selectedphone = document.querySelector('#phone')
      selectedphone.style.borderColor="red"
      selectedphone.outlineColor="red"
      return false;
    }
    if(isNaN(selectedphone)){
        document.querySelector("#errorphone").innerHTML="enter only digits [1-9]"
      let selectedphone = document.querySelector('#phone')
      selectedphone.style.borderColor="red"
      selectedphone.outlineColor="red"
      return false; 
    }
}

function leaving(arg){
  let selectedfield=document.querySelector(`#${arg}`)
  selectedfield.style.borderColor="black"
  selectedfield.style.outlineColor="black"
  let selectederror=document.querySelector(`#error${arg}`).innerHTML=""
  

}