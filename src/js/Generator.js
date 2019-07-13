{

    let fn = function* (){

        yield 'a'
        yield 'b'
        yield 'c'
    }

    let f = fn();
    console.log( f.next() );
    console.log( f.next() );
    console.log( f.next() );
    console.log( f.next() );
}
{
    //1》返回统计剩余次数
    //2》－－
    let num = function(count){
        console.log(`剩余${count}次`)
    }
    let res = function *(count){
        while(count>0){
            count--;
            yield num(count);
        }
    }
    let start = res(5);
    let btn = document.createElement("button");
    btn.innerHTML = "我的抽奖";
    btn.id='btn';
    document.body.appendChild(btn);
    document.getElementById("btn").addEventListener("click",function(){
        start.next();
    })
}