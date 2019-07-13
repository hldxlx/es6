const render = (opts={}) =>{
    let tpl = `
         <form action="" onsubmit="return false">
            <label for="">
                <input type="text" placeholder="${opts.loginUser}" id="user">
            </label>
            <label for="">
                <input type="password" placeholder="${opts.loginPas}" id="pwd">
            </label>
            <label for="">
                <input type="submit" value="${opts.loginBtnText}" id="btn">
            </label>
        </form>
         `;
    opts.container.innerHTML = tpl;
}
export default render;