// const assert = require('assert');
// const User = require('../src/user');

// describe('Validating records',()=>{
 
//     it('requires a user name', ()=>{
//         //nen ghi 'name: undefined' thay vi de trong khong new User({})
//         //nham cho dev khac doc vo hieu de hieu.
//         const noName = new User({name: undefined})

//         //validateSync() tra ve 1 obj. Neu su dung noName.validate(cb) thi tra ve 1 callback
//         const validationResult = noName.validateSync();

//         //Muc dich lay cai thong tin loi ngan gon cho nguoi dung thoi
//         const message = validationResult.errors.name.message;
        
//         assert(message === 'Name is required!');
//     });

//     it('requires a user name longer than 2 characters', ()=>{
//         const user = new User ({name: 'AI3'});
//         const validationResult = user.validateSync();
//         const {message} = validationResult.errors.name;

//         assert(message === 'Name must be longer than 2 characters');
//     });
// });