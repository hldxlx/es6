const render = (opts={}) =>{
    let tpl = `
         <form action="" onsubmit="return false">
            <label for="">
                <input type="text" placeholder="${opts.loginUser}">
            </label>
            <label for="">
                <input type="password" placeholder="${opts.loginPas}">
            </label>
            <label for="">
                <input type="submit" value="${opts.loginBtnText}">
            </label>
        </form>
         `;
    opts.container.innerHTML = tpl;
}
export default render;