;(function (e) {
   var jQuery = function(element){
        return new jQuery.prototype.init(element);
   }
   function markAll(dom,that) {
       var that = that || [];
       for(var i=0;i<dom.length;i++){
           that[i] = dom[i];
       }
       that.length = dom.length;
       return that;
   }
    jQuery.prototype = {
       init:function(element){
        //$("#box") 选择节点的初始化方法
           var dom = null;
           if(typeof element != 'string'){
               dom = [element];
           }else{
                dom = document.querySelectorAll(element);
           }
           return markAll(dom,this);
       },
        css:function(attr,val){
           for(var i=0;i<this.length;i++){
               this[i].style[attr] = val;
           }
            return this;
        },
        html:function(val){
            for(var i=0;i<this.length;i++){
                this[i].innerHTML = val;
            }
            return this;
        },
        hover:function (over,out) {
            for(var i=0;i<this.length;i++){
                this[i].onmouseover = over;
                this[i].onmouseout = out;
            }
            return this;
        },
        first:function () {
            return $(this[0])
        }
    }
    jQuery.prototype.init.prototype = jQuery.prototype;
   e.jQuery = e.$ = jQuery;

})(window);
console.log(
    $("li").first().css('background','red').html("改变了")
    .hover(function () {
        alert(1);
    },function () {
        alert(2);
    })
)

