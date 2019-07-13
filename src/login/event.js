import $ from '../js/common/getId'
const event = () =>{
    let btn = $("btn"),
        user= $("user"),
        pwd= $("pwd");
    btn.onclick = () =>{
        alert("成功")
    }
    user.oninput = () =>{
        alert("1")
    }
    pwd.oninput = () =>{
        alert("2")
    }

}
export default event;