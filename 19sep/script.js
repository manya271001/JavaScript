function check(){
    let res = window.confirm("do you really want to logout")
    if(res){
        window.alert("okay logging out")
    }
    else {
        window.alert("wrong input")
    }
}
check();