class Singer{
    login(){
        console.log('login');
    }
}
//get 为静态方法
Singer.get = (function(){
    //单例模式实现思想：如果有了直接用 如果没有就实现一个
    let instance;
    return function(){
        if(!instance){
            instance = new Singer();
        }
        return instance;
    }
})();
var s1 = Singer.get();
s1.login();
var s2 = Singer.get();
s2.login();
console.log(s1 === s2)//true  单例模式：每次获取的都是同一个东西