function data(){
    let name = document.querySelector("#name").value;
    if(name ===""){
        window.alert("enter first name");
        return false;
    }
       let secondName = document.querySelector("#secondName").value;
    if(secondName ===""){
        window.alert("enter second name");
        return false;
    }
       let email = document.querySelector("#email").value;
    if(email ===""){
        window.alert("enter email");
        return false;
    }
       let password = document.querySelector("#password").value;
    if(password===""){
        window.alert("enter password");
        return false;
    }
       let confirmpassword = document.querySelector("#confirmpassword").value;
    if(confirmpassword===""){
        window.alert("enter confirm password");
        return false;
    }
       let number= document.querySelector("#number").value;
    if(number===""){
        window.alert("enter Contact Number");
        return false;
    }
       let course= document.querySelector("#course").value;
    if(course===""){
        window.alert("enter Course Detail");
        return false;
    }
    if(password != confirmpassword){
        window.alert("password doesnt match");
        return false;
    }
    console.log("First Name: "+name)
    console.log("Second Name: "+secondName)
    console.log("EmailId: "+email)
    console.log("Password: "+password)
    console.log("Confirm Password: "+confirmpassword)
    console.log("Contact Numner: "+number)
    console.log("Course: "+course)
    
    return false;

}