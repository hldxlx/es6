let getName = Symbol("getName");
module.exports = class User{
    [getName](){
        return 'binbin'
    }
    print(){
        console.log(this[getName]());
    }
}