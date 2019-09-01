// var str = '你好啊';
// console.log(str.indexOf('好'));
// console.log(str.includes('好啊'));
// console.log(str.startsWith('你好'));
// console.log(str.endsWith('好啊'));
// console.log(str.repeat(3));

// let html = '<div>'+
//     '<span>je</span>'+
//     '</div>';
//
// let html2 = `
// <div>
//     <span>koko</span>
// </div>
// `


// function tag(strArr,arg) {
//     console.log(strArr);
//     console.log(arg);
//     return 'what?';
// }
// let name = 'leo';
// var res = tag`hello ${name}`;
// console.log(res);


// function tag(strArr,arg) {
//     console.log(strArr);
//     console.log(arg);
// }
// let name = 'leo';
// var res = tag`${name}`;
// console.log(res);

function tag(strArr,arg1,arg2) {
    console.log(strArr);
    console.log(arg1);
    console.log(arg2);
}
let name = 'leo';
let age = 30;
var res = tag`${name}${age}`;
