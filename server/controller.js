// functions that help server handle different client requests

// import database management
const db = require("./db");

const create = (req, res) => {
  db.save(req.body)
    .then ((result) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).send(result);
    })
    .catch( (err) => {
      res.status(500).send('did not save word correctly')
    })
};

const read = (req, res) => {
  db.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send('could not get words')
    })
};

module.exports.create = create;
module.exports.read = read;