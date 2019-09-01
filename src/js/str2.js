'use strict'
function safe(strArr) {
    console.log(strArr)
    let res = "";
    for(var i=0,len = strArr.length;i<len;i++){
        if(i < arguments.length - 1){
            res+=strArr[i];
        }
    }
    return res;
}
let name = 'kkd';
let result = safe`<p>hello ${name}</p>`;
console.log(result);