import FetchMock from 'fetch-mock';
//FetchMock.mock('/login',{code:6000})
FetchMock.mock('/login',(url,params) =>{
    console.log(url,params);
    let p= params.params;
    if(p.user == "admin"){
        if(p.pwd == "admin"){
            return {code:400,msg:"恭喜登录成功"}
        }else{
            return {code:401,msg:"密码不对"}
        }
    }else{
        return {code:402,msg:"用户名不对"}
    }
})