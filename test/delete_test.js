const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', ()=>{

    beforeEach((done)=>{
        Le = new User({name: 'Le'});
        Le.save();
        done();
    });

    //cach 1:
    it('model instance remove', (done)=>{
         Le.remove()
         .then(()=> User.findOne({name: 'Le'}))
         .then((userC1)=> {
             assert(userC1 === null);
             done();
        });
    });

    //cach 2:
    it('class method remove', async()=>{
    //remove a bunch of records with some given criteria
    await User.remove({name: 'Le'})
     .then(()=> User.findOne({name: 'Le'}))
     .then((userC2)=> assert(userC2 === null));
    });

    //cach 3:
    it('class method findOneAndRemove', async()=>{
        await User.findOneAndRemove({name: 'Le'})
        .then(()=> User.findOne({name: 'Le'}))
        .then((userC3)=> assert(userC3 === null));   
    });

    //cach 4:
    it('class method findbyIdAndRemove', async()=>{
        await User.findByIdAndRemove(Le._id)
        .then(()=> User.findOne({name: 'Le'}))
        .then((userC4)=> assert(userC4 === null));  
    });
});