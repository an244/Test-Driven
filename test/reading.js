const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database',()=>{
    let ThienAn;// khai bao bien nay de luu thong tin user de so sanh sau trog it

//beforeEach() nay dung de tao 1 user ThienAn trc moi khi test
    beforeEach((done)=>{
        ThienAn = new User({name: 'ThienAn'});
        ThienAn.save()
         .then(()=> done());
    });

    it('Find & read all users with name of ThienAn', (done)=>{
        User.find({name: 'ThienAn'})
         .then((users)=>{
             //console.log(users[0]._id);
             //console.log(ThienAn._id);
             console.log(users);

             //kiem tra fan tu user dau tien
             assert(users[0]._id.toString() === ThienAn._id.toString());
             done();
            });
    });

    it('Find a user with a particular id', (done)=>{
        User.findOne({_id: ThienAn._id})
         .then((user)=>{
            assert(user.name ==='ThienAn');
            done();
         });
    });
});

