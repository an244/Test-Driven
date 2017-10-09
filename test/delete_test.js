const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', ()=>{

    let LeT;

    beforeEach((done)=>{
        LeT = new User({name: 'LeT'});
        LeT.save()
         .then(() => done());
    });

    //cach 1:
    it('model instance remove', (done)=>{
         LeT.remove()
         .then(()=> User.findOne({name: 'LeT'}))
         .then((userC1)=> {
             assert(userC1 === null);
             done();
        });
    });

    //cach 2:
    it('class method remove', (done)=>{
    //remove a bunch of records with some given criteria
    User.remove({name: 'LeT'})
     .then(()=> User.findOne({name: 'LeT'}))
     .then((userC2)=> {
         assert(userC2 === null);
         done();
        });
    });

    //cach 3:
    it('class method findOneAndRemove', (done)=>{
       User.findOneAndRemove({name: 'LeT'})
        .then(()=> User.findOne({name: 'LeT'}))
        .then((userC3)=> {
            assert(userC3 === null);
            done();
        });   
    });

    //cach 4:
    it('class method findbyIdAndRemove', (done)=>{
        User.findByIdAndRemove(LeT._id)
        .then(()=> User.findOne({name: 'LeT'}))
        .then((userC4)=> {
            assert(userC4 === null);
            done();
        });  
    });
});