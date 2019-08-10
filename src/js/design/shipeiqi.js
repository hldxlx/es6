class Adape{
    specialAdape(){
        return '美国标准插头'
    }
}
class Target{
   constructor(){
       this.adape = new Adape();

   }
   turn(){
       let info = this.adape.specialAdape();
       return `${info} -- 转为 中国插头`
   }
}
let t1 = new Target();
console.log(t1.turn());