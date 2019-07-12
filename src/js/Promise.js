{
    let fn = function(callback){
        console.log(111);
        setTimeout(function(){
            callback();
        },1000)
    }
    fn(function(){
        console.log(222);
    });
}
{
    let fn = function () {
        console.log('aaa');
        return new Promise((res,rej) => {
            setTimeout(() => {
                res();
            },1000)
        })
    }
    fn().then(function(){
        console.log('bbb');
        return new Promise((res,rej)=>{
            setTimeout(() => {
                res();
            },1000)
        })
    }).then(() =>{
        console.log('ccc');
    },2000)

}
{
    let fn = function(){
        return new Promise((res,rej)=>{
            res('sss')
        })
    }
    fn().then((res)=>{
        console.log(res);
    })
}

{
    let loadImage = function (srcURL) {
        return new Promise((res,rej) =>{
            let imgs = document.createElement("img");
            imgs.src = srcURL;
            imgs.onload = function(){
                res(imgs)
            }
        })
    }
    Promise.all([
        loadImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562984961800&di=e0c194cbed236eab720c4a7702c76ab0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201412%2F27%2F20141227174553_auCHe.jpeg"),
        loadImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562985715210&di=f7be2a6299c8fd2e702c8cee85f07054&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171130%2Ffd33320699814ca0a079ed24bb22e57b.jpeg"),
        loadImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562985754450&di=9099fda5c8a5afa92ce35563521617bb&imgtype=0&src=http%3A%2F%2Fforum.xitek.com%2Fpics%2F201306%2F1187%2F118704%2F118704_1372162318.jpg"),
        loadImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562984961800&di=e0c194cbed236eab720c4a7702c76ab0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201412%2F27%2F20141227174553_auCHe.jpeg")
    ]).then(function(img){
        img.forEach(item => {
            document.body.appendChild(item);
        })
    })
    loadImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562984961800&di=e0c194cbed236eab720c4a7702c76ab0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201412%2F27%2F20141227174553_auCHe.jpeg")
}

{
    let loadImage = function (srcURL) {
        return new Promise((res,rej) =>{
            let imgs = document.createElement("img");
            imgs.src = srcURL;
            imgs.onload = function(){
                res(imgs)
            }
        })
    }
    Promise.race([
        loadImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562984961800&di=e0c194cbed236eab720c4a7702c76ab0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201412%2F27%2F20141227174553_auCHe.jpeg"),
        loadImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562985715210&di=f7be2a6299c8fd2e702c8cee85f07054&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171130%2Ffd33320699814ca0a079ed24bb22e57b.jpeg"),
        loadImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562985754450&di=9099fda5c8a5afa92ce35563521617bb&imgtype=0&src=http%3A%2F%2Fforum.xitek.com%2Fpics%2F201306%2F1187%2F118704%2F118704_1372162318.jpg"),
        loadImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562984961800&di=e0c194cbed236eab720c4a7702c76ab0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201412%2F27%2F20141227174553_auCHe.jpeg")
    ]).then(function(img){
        document.body.appendChild(img);
    })
    loadImage("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562984961800&di=e0c194cbed236eab720c4a7702c76ab0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201412%2F27%2F20141227174553_auCHe.jpeg")
}