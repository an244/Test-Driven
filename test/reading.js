const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database',()=>{
    let ThienAn;// khai bao bien nay de luu thong tin user de so sanh sau trog it

//beforeEach() nay dung de tao 1 user ThienAn trc moi khi test
    beforeEach(async()=>{
        ThienAn = new User({name: 'ThienAn'});
        await ThienAn.save()
         .then(()=>{
             console.log('Reading test');
         })
    });

    it('Find & read all users with name ThienAn', async()=>{
        await User.find({name: 'ThienAn'})
         .then((users)=>{
             console.log(users[0]._id);
             console.log(ThienAn._id);
             console.log(users);
             //kiem tra fan tu user dau tien
             assert(users[0]._id.toString() === ThienAn._id.toString());
         })
    });
});