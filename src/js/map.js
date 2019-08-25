let map = new Map([
    ['name','leo'],
    ['qq','156']
])
let me  = {
    'kk':'tt'
}
map.forEach(function(k,v){
    console.log(this.kk,k,v)
},me)