let a = {
    name: "manya",
    age: 23,
    course: "FSD"
}
// destructuring of object : converting key of any object as a variable to acess it easily without writing the object name
let {name}=a;
console.log(name);

// Difference BTW method and function
// defining function inside an object is called as method

let b = {
    sum: function(){

    }
}
b.sum()

function sum(){

}

