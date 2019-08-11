import StateMachine from 'javascript-state-machine';
//状态机模型
let fsm = new StateMachine({
    init:'pending',//初始化状态
    transitions:[
        {
            name:'resolve', //事件名称
            from:'pending',
            to:'fullfilled'
        },{
            name:'reject',  //事件名称
            from:'pending',
            to:'rejected'
        }
    ],
    methods:{
        //监听 resolve
        onResolve:function(state,data){
            //state 当前状态机实例  data - fsm.resolve(xxx) 传递的参数
            data.successList.forEach(fn => fn())
        },
        onReject:function(state,data){
            //state 当前状态机实例  data - fsm.reject(xxx) 传递的参数
            data.failList.forEach(fn => fn())
        }
    }
})

class MyPromise{
    constructor(fn){
        this.successList = [];
        this.failList = [];
        fn(function () {
            //resolve函数
            fsm.resolve(this);
        },function () {
            //reject函数
            fsm.reject(this);
        })
    }

    then(successFn,failFn){
        this.successList.push(successFn);
        this.failList.push(failFn);
    }
}

function loadImg(src) {
    const promise = new Promise(function(resolve,reject){
        let img = document.createElement('img');
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject();
        }
        img.src = src;
    })
    return promise;
}
let src = "https://www.vue-js.com/public/images/vue.png";
let result = loadImg(src);
result.then(function(){
    console.log('ok1');
},function(){
    console.log('fall1');
})

result.then(function(){
    console.log('ok2');
},function(){
    console.log('fall2');
})