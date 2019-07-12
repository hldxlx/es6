let obj = {
    names:'binsom',
    str:"es6"
}
console.log(  obj.names );
console.log(  Reflect.get(obj,"names")   )

obj.names = '123'
Reflect.set(obj,'names','456');

console.log(  obj.names );
console.log(  Reflect.get(obj,"names")   )

// delete obj.str;

Reflect.deleteProperty(obj,'str')

console.log(  obj );
