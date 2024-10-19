let str = "1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*()QWERTYUIOPASDFGHJKLZXCVBNM"
let btn=document.querySelector("#btn");
btn.addEventListener('click',run);
function run(){
let store = ''
for(let i = 0 ; i<4;i++){
    let random = Math.random();
    let ans = random*str.length;
    let afterfloor = Math.trunc(ans);
    let cha = str[afterfloor];
    store=store+cha
}
let result = document.querySelector("#output");
result.innerHTML= store;
}