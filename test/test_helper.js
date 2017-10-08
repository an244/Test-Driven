const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// //before() callback done
// before((done)=>{
//     mongoose.connect('mongodb://localhost/users_test',{useMongoClient: true});//tell mongoose to connect to Mongo
//     mongoose.connection
//     .once('open', () => {
//         console.log('Good to go');
//         done();
//     })//mot khi ket noi dc db
//     .on('error', (err) => { //neu gap loi thi log ra.
//         console.warn('Warning', err);
//     });
//     });

//before() async-await
// before(async()=>{
// mongoose.connect('mongodb://localhost/users_test',{useMongoClient: true});//tell mongoose to connect to Mongo
// //mongoose.connection
// await mongoose.connection
//   .once('open', () => {
//     console.log('Connected DB. Good to go');  
//   })//mot khi ket noi dc db

//   .on('error', (err) => { //neu gap loi thi log ra.
//     console.warn('Warning', err);
//   });
// });

mongoose.connect('mongodb://localhost/users_test',{useMongoClient: true});//tell mongoose to connect to Mongo
    //mongoose.connection
mongoose.connection
  .once('open', () => {
    console.log('Connected DB. Good to go');  
  })//mot khi ket noi dc db
    
  .on('error', (err) => { //neu gap loi thi log ra.
    console.warn('Warning', err);
  });

//Khac biet giua before() va beforeEach la before() chi chay 1 lan, con beforeEach chay nhieu lan

//trc khi chay dc npm run test thi fai chinh trong file package.json trc
//kiem trong phan:
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },

//Sua thanh:
// "scripts": {
//     "test": "mocha"
//   },

//hoac sua thanh:
// "scripts": {
//     "test": "nodemon --exec 'mocha -R min'" // -R min co nghia la clear screen doan code trc
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
