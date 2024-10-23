let arr =['https://i.pinimg.com/enabled_hi/564x/99/d4/33/99d433726b15aee004c6ff19a01098db.jpg','https://i.pinimg.com/564x/bf/76/30/bf763033abcd05f8c66abe776797c6e3.jpg','https://i.pinimg.com/736x/3b/8d/74/3b8d748916c1398e2e7a61d63d8111ef.jpg','https://i.pinimg.com/736x/52/3f/fa/523ffadd85fcb55d63c426dcb20465b4.jpg','https://i.pinimg.com/enabled_hi/564x/1a/79/82/1a79827468d7e589f8c323d115d21579.jpg','https://i.pinimg.com/474x/6a/61/7a/6a617ae1bd57361bd1f39a47ce11f5ad.jpg','https://i.pinimg.com/736x/c3/9c/81/c39c815ea2a22f57c742973278cc8d57.jpg','https://i.pinimg.com/enabled_hi/564x/88/67/d0/8867d08fa9ce153f2c288d091c5ebce0.jpg','https://i.pinimg.com/enabled_hi/564x/a2/a6/4c/a2a64ccc3175e9610afb34ec187f3a46.jpg','https://i.pinimg.com/736x/d0/d3/40/d0d340f67f0337f2041533b799f51afc.jpg','https://i.pinimg.com/564x/ab/78/06/ab78066c340f61c8beafefcf68082df0.jpg']

function run(){
    let random = Math.random();
    let ans = random*arr.length;
    let afterfloor = Math.trunc(ans);
    let cha = arr[afterfloor];
  let result = document.querySelector("#output")
  result.innerHTML=`<img src="${arr[afterfloor]}" style="height: 700px; width: 500px;">`
}