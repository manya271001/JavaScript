let arr=[34,77,89,100,"helloooooo",89,88,2000]
let arr2=[" this is js array "]
let arr3=[89,"78",8,100,700, function(){console.log("function is called")}]
console.log(arr)
console.log(arr[2])
arr3[2]()
for(let i in arr3){
    console.log(i)
}
for(let i of arr3){
    console.log(i)

}