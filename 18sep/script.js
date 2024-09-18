function class3(){
    let num1 = parseInt(window.prompt("enter number 1"));
    let num2 = parseInt(window.prompt("enter number 2"));
    window.alert( num1 + num2);
    console.log(num1 + num2);


    // difference btw var let and const

    // var can be re-declare and re- initialize
    var a="manya";
    console.log(a);
    var a=2001;
    console.log(a);

    // let can we re-initialize but not re-declare
    let b = "manya";
    console.log(b);
    b=27;
      console.log(b);
    //const cannot be re-declare or re-initialize

    const c = "manya";
      console.log(c);
}
class3();