function loadImg(src) {
    let promise = new Promise(function(resolve,reject){
        let img = document.createElement('img');
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject('图片加载失败')
        }
        img.src = src;
    })
    return promise;

}
let src = "https://ossali.sucaihuo.com/sucaihuo/Public/images/other/banner.jpg";
let res = loadImg(src);
res.then(function(im){
    alert(`${im.width}`)
})