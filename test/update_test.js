// const assert = require('assert');
// const User = require('../src/user');

// describe('Updating records', ()=>{

//     let LeThien;

//     beforeEach((done)=>{
//         LeThien = new User({name: 'LeThien', postCount: 0});
//         LeThien.save();
//         done();
//     });

//     //Gom lai 1 function de tai su dung cho tat ca cac cach update
//     function assertName(operation,done){
//        operation
//         .then(()=> User.find({}))//tim kiem tat ca user co trog db
//         .then((usersUpdate)=>{
//            assert(usersUpdate.length === 1);//kiem tra xem chi co 1 user hay ko? hay co nhiu user dc add?
//            assert(usersUpdate[0].name === 'LeThienA'); //kiem tra xem coi co chua?
//            done();
//         });
//     }

//     //cach 1:
//     it('instance type using set n save',(done)=>{
        
//         //set() chua co luu vo db, moi chi luu trong bo nho tam
//         LeThien.set('name', 'LeThienA');
       
//         //save() moi thuc su luu vo database
//        assertName(LeThien.save(),done);
//     });

//     //cach 2:
//     it('A model instance can update',(done)=>{
//         assertName(LeThien.update({name: 'LeThienA'}),done);
//     });

//     it('A model class can update',(done)=>{
//       assertName(
//         User.update({name: 'LeThien'}, {name: 'LeThienA'}),done);
//     });

//     it('A model class can update one record',(done)=>{
//         assertName(
//             User.findOneAndUpdate({name: 'LeThien'}, {name: 'LeThienA'}),done);
//     });

//     it('A model class can  find a record with and Id and update',(done)=>{
//         assertName(
//             User.findByIdAndUpdate(LeThien._id,{name: 'LeThienA'})
//             ,done);
//     });

//     //test tang gia tri postCount len 1 chu ko fai gan gia tri la 1
//     it('A user can have their postcount incremented by 1',async()=>{
        
//         //$inc la co dinh de tang/giam 1 thuoc tinh nao do
//         await User.update({name:'LeThien'}, { $inc: {postCount: 2}})
//          .then(()=> User.findOne({name: 'LeThien'}))
//          .then((userLeThien)=> assert(userLeThien.postCount === 2));
//     }); 
// });