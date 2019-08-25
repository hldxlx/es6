// let tarr = new Int16Array([1,2,3,4]);
// let tarr2 = tarr.subarray(1,3);
// console.log(tarr2);
// console.log(tarr2.buffer === tarr2.buffer);


//? 创建一个dataview就可以对很多buffer进行设置和读取
let buffer = new ArrayBuffer(10);
let dataview = new DataView(buffer);
dataview.setFloat32(2,18.9);
dataview.setInt32(6,2000);
dataview.setInt16(0,90);

let int8Arr = new Int8Array(buffer);
console.log(int8Arr);