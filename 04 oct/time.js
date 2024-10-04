// settimeout and setinterval
/* setTimeout is an higher order functiom - functions who passes another function inside it : setTimeout(fun_name,5000) -> setTimeout function will execute after 5s and run the fun_name function , fun_name is a call back function id does not have paranthesis */

setTimeout(run,3000);
function run(){
    console.log("hello");
}
// different way
//arrow function menthod instead or defining function name run or anything we can directly write the function defination like this
setTimeout(()=>{
    console.log("second time hello using another way");
},5000)