const assert = require('assert');
const User = require('../src/user');

describe('Updating records', ()=>{

    let LeThien;

    beforeEach(async()=>{
        LeThien = new User({name: 'LeThien'});
        await LeThien.save();
    });

    //Gom lai 1 function de tai su dung cho tat ca cac cach update
    function assertName(operation,done){
       operation
        .then(()=> User.find({}))//tim kiem tat ca user co trog db
        .then((usersUpdate)=>{
           assert(usersUpdate.length === 1);//kiem tra xem chi co 1 user hay ko? hay co nhiu user dc add?
           assert(usersUpdate[0].name === 'LeThienA'); //kiem tra xem coi co chua?
           done();
        });
    }

    //cach 1:
    it('instance type using set n save',(done)=>{
        
        //set() chua co luu vo db, moi chi luu trong bo nho tam
        LeThien.set('name', 'LeThienA');
       
        //save() moi thuc su luu vo database
       assertName(LeThien.save(),done);
    });

    //cach 2:
    it('A model instance can update',(done)=>{
        assertName(LeThien.update({name: 'LeThienA'}),done);
    });

    // it('instance set n save',async()=>{
        
    // });

    // it('instance set n save',async()=>{
        
    // });

    // it('instance set n save',async()=>{
        
    // });
});