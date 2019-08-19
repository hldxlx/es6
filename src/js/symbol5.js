//需再撸
class UserGroup{
    constructor(users){
        this.users = users;
    }
    [Symbol.iterator](){
        let self = this;
        let i = 0;
        const names = Object.keys(this.users);
        const length = names.length;
        return {
            next:function(){
                let name = names[i++];
                let qq = self.users[name];
                return {value:{name,qq},done:i > length}
            }
        }
    }
}
let group = new UserGroup({'leo':'123456','zengliang':'3232323'});


let i = 0;
for(let user of group){
    // if(i === 0){
    //     i++;
    //     continue;
    // }
    console.log(user,'==user');
    break
}
let iteror = group[Symbol.iterator]();
console.log(iteror.next());
console.log(iteror.next());
console.log(iteror.next());