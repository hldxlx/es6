import render from './render';
import event from './event'
const login = (opts={}) => {
    let obj = {
        loginBtnText:'登录',
        loginUser:'请输入用户名',
        loginPas:'请输入密码'
    }
    let loginObj = Object.assign(opts,obj);
    render(loginObj);
    event();

}
export default login;