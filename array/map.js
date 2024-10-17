function run(){
    let arrimg=['https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1530041539828-114de669390e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ' https://plus.unsplash.com/premium_photo-1677545182078-2fe0e0e6c336?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]
arrimg.join(" ")
let output = document.querySelector('#answer')
output.innerHTML=arrimg.map((imgurl)=>`
<img src="${imgurl}" alt="not found" style="height:400px;width:400px">
`).join(" ")
}
// let arr=[10,20,30,40,50,60]
// console.log(arr)
// let newarr=arr.map((item)=>{return item*10});
// console.log(newarr)