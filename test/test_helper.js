const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test',{useMongoClient: true});//tell mongoose to connect to Mongo
mongoose.connection
.once('open', () => console.log('Good to go'))//mot khi ket noi dc db
.on('error', (err) => { //neu gap loi thi log ra.
    console.warn('Warning', err);
});

//trc khi chay dc npm run test thi fai chinh trong file package.json trc
//kiem trong phan:
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },

//Sua thanh:
// "scripts": {
//     "test": "mocha"
//   },
/////////////////

//trc moi lan chay test thi su dung beforeEach() bat dong bo
//cach su dung callback done:
// beforeEach((done)=>{
//     mongoose.connection.collections.users.drop(()=>{
//         //ready to run the next test!
//         done();
//     });
// });

//cach su dung async-await:
beforeEach(async()=>{
    await mongoose.connection.collections.users.drop();
        //wait to finish drop the users collection to do next test
});