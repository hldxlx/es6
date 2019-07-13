import $ from '../js/common/getId';
import formFetch from '../js/common/formFetch';
const event = () =>{
    let btn = $("btn"),
        user= $("user"),
        pwd= $("pwd");
    btn.onclick = async () =>{
        let data = await formFetch('/login',{
            user:user.value,
            pwd:pwd.value
        })
        console.log(data)
    }
    user.oninput = () =>{
        // alert("1")
    }
    pwd.oninput = () =>{
        // alert("2")
    }

}
export default event;