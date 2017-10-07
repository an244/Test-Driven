const assert = require ('assert');
const User = require('../src/user');

describe('Creating records', ()=>{
    it('saves a user', () => {
        const an = new User({name: 'an'});
        //save vo MongoDB
        an.save();
        //trc khi save vo db thi fai xoa db trc ben test_helper cho beforeEach
    });
});