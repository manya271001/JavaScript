$(document).ready(function(){
    $('.head1').html("hii allll")
    $('.head1').css("background-color","blue")
    // WE CAN APPLY MULTIPLE LINE CSS BY CREATING AN OBJECT
    let a = $('.head2')
    a.html("manyyaaa ")
    a.css({
        "background-color":"yellow",
        "color":"red",
        "padding":"20px"
    })
    $('#btn1').click(function(){
        $('#para1').slideUp(2000);
    })
        $('#btn2').click(function(){
        $('#para1').slideDown(2000);
    })
})