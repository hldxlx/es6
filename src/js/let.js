// var arr = [];
// function fn() {
//     for(var i=0;i<5;i++){
//         arr.push(function(){
//             console.log(i);
//         })
// ;    }
// }
// fn();
// arr[2]();   //5

var arr = [];
function fn() {
    for(var i=0;i<5;i++){
        arr.push((function (i) {
            return function(){
                console.log(i)
            }
        })(i));
    }
}
fn();
arr[2]();//2