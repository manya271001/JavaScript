let obj = [
    {
        id:1,
        name:'Manyaaa',
        age:24,
        course:"MERN",
        mobno: 1234567890
    },
      {
        id:2,
        name:'Nehaa',
        age:24,
        course:"MERN",
        mobno: 89898989898
    },
      {
        id:3,
        name:'prachi',
        age:24,
        course:"Python",
        mobno: 788378832983
    },
      {
        id:4,
        name:'Alexx',
        age:24,
        course:"Java",
        mobno: 667387387873
    },
]
// console.log(obj[3].mobno)
// console.log(obj[3].course[2])
let result = document.querySelector('#output')
result.innerHTML=obj.map((e)=>`

<tr >
<td>${e.id}</td>
<td>${e.name}</td>
<td>${e.course}</td>
<td>${e.mobno}</td>
</tr>
`
).join(" ")