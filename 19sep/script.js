function check(){
    let res = window.confirm("do you really want to logout")
    if(res){
        // window.alert("okay logging out")
        window.location.href="login.html"
    }
    else {
        window.alert("wrong input")
    }
}
check();