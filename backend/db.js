// const mongoose = require('mongoose')

// const mongoURI = 'mongodb+srv://athulmk:athulmk@cluster0.txlzzdx.mongodb.net/Gofood?retryWrites=true&w=majority'

// const mongoDb = async()=>{
//  await mongoose.connect(mongoURI,{
//     useNewUrlParser:true
// })
// const fetched_data = await  mongoose.connection.db.collection("food_items");

// fetched_data.find({}).toArray(function(err,data){
//     if (err) {

//         console.log(err);
        
//     }else{
//         global.food_items = data
//         console.log(global.food_items);
//     }
// })

// }





// module.exports =mongoDb;

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://athulmk:athulmk@cluster0.txlzzdx.mongodb.net/Gofood?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


