const assert = require ('assert');
const User = require('../src/user');

describe('Creating records', ()=>{
    
    // //su dung callback done:
    // it('saves a user', (done) => {
    //     const joe= new User({name: 'joe'});
    //     //save vo MongoDB
    //     joe.save()
    //      .then(()=>{
    //          //Has joe been saved successfully?
    //          assert(!joe.isNew);
    //          done();
    //      })
    //     //trc khi save vo db thi fai xoa db trc ben test_helper cho beforeEach
    // });

    //su dung async-await:
    it('saves a user', async() => {
        const joe= new User({name: 'joe'});
        //save vo MongoDB
        await joe.save()
         .then(()=>{
             //Has joe been saved successfully?
             //Khi joe dc add vao db thi no se ko con dc coi la New nua nen fai them dau !
             assert(!joe.isNew);
         })
        //trc khi save vo db thi fai xoa db trc ben test_helper cho beforeEach
    });

});

//video 26