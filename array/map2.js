function run(){
    let arrstring=['my name is manya','i am 23 years old','i am currently living in bhopal', 'lllalallalal','ehheheeheheheh','jsgjsgsjwgsjgsjsg','qwertyuiopasdfghjk','345678dfghjbyyhnbvcdrtyhgvcfgu']
    let output=document.querySelector('#answer')
    output.innerHTML=arrstring.map((item)=>`
    <p>${item}</p>
    `).join(" ")
}