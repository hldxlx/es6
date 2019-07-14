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
           var dom = document.querySelectorAll(element);
           return markAll(dom,this);
       },
        css:function(){

        },
        html:function(){

        }
    }
   e.jQuery = e.$ = jQuery;

})(window);

