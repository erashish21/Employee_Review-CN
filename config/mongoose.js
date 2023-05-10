const mongoose = require('mongoose');
// mongoose.connect('mongodb://0.0.0.0/employeReviewSystem');
const DB = 'mongodb+srv://ashishbundela123:4ROoiZ9VErQnhrDp@cluster0.cc5ew57.mongodb.net/EmployeeReview'

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(DB).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
// module.exports = db;  
// const mongoose = require('mongoose');
// async function main(){
//     await mongoose.connect('mongodb+srv://ashishbundela123:Ashish123@@cluster0.xlcbwsz.mongodb.net/EmployeeReviewSystem');
//     console.log("connection Successfull !! ");
// }
// main().catch(error =>console.log("connection not successfull !!"));
