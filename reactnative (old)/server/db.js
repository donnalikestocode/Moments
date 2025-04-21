const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/moments');

// 2. Set up any schema and models needed by the app
const wordsSchema = new mongoose.Schema({
  date: {
    type: String,
    required:true
  },
  image: {
    type: String,
    required:true
  },
  caption: {
    type: String,
    required:true
  }
})

const Moment = mongoose.model('Moment', wordsSchema);

const find = () => {
  return Moment.find();
}

const save = (momentObj) => {

  var moment = new Moment({
    date: momentObj.date,
    image: momentObj.image,
    caption: momentObj.caption
  })

  return moment.save()
}

// 3. Export the models
module.exports.find = find;
module.exports.save = save;

// mongodb commands
// open mongodb : mongo
// show databases: show dbs
// go into db: use (db name)
// show content in tables: db.collectionName.find()
// remove all documents from database: db.collectionName.deleteMany()