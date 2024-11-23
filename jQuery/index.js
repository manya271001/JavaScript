/* on the left is selected element and on the right is function. inside ready function we write the whole js code and document here is for whole html page once the html page will load and get ready the function will run*/
$(document).ready(
    function(){
        window.alert("readyyy..!!!!!!!")
    
    $("h1").click(function() {
        window.alert("clickedd")
    })
      $("h1").onmouseover(function() {
        window.alert("hehehehehehehe")

    }

    )

}
)