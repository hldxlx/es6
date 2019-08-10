class LoginForm{
    constructor(){
        this.status = 'hide'
    }
    show(){
        if(this.status == 'show'){
            alert("已经显示")
        }
        this.status = 'show';
        console.log('显示成功')
    }
    hide(){
        if(this.status == 'hide'){
            alert("已经隐藏")
        }
        this.status = 'hide';
        console.log('隐藏成功')
    }
}
LoginForm.getInstance = (function(){
    let instance;
    return function(){
        if(!instance){
            instance = new LoginForm();
        }
        return instance;
    }
})();
let t1 = LoginForm.getInstance();
t1.show();
let t2 = LoginForm.getInstance();
//t2.hide();
t2.show();