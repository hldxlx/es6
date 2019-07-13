{
    let arr = ['a','b','c'];
    for(let val of arr){
        console.log(val);
    }
}
{

    let set1 = new Set(['y','u','i']);
    for(let k of set1){
        console.log(k);
    }

}
{
    let obj = {
        a:1,
        b:2
    }
    // for(let k of obj){
    // 	console.log(k);
    // }

}

{

    let arr = ['aa','bb','cc'];
    let iter = arr[Symbol.iterator]();

    console.log(	iter.next()		);
    console.log(	iter.next()		);
    console.log(	iter.next()		);
    console.log(	iter.next()		);
    console.log(	iter.next()		);

}
{
    let obj = {
        a:[1,2,3],
        [Symbol.iterator](){
            let index = 0;
            let arr = this.a;
            let len = this.a.length;
            return{
                next(){
                    if(index < len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }

    }
    for(let k of obj){
        console.log(k);
    }
}