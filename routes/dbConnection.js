var _db;

// connect db, if success listen to port
let initDbConection = function(callback){
  const MongoClient = require('mongodb').MongoClient;
  const url = "mongodb+srv://dbMqttTest:PNThoai9x@cluster0-u7lvh.mongodb.net/test?retryWrites=true&w=majority";
  const mongoOptions = {
    poolSize: 1000,
    promiseLibrary: global.Promise,
    useUnifiedTopology: true
  };

  MongoClient.connect(url, mongoOptions, function(err, client) {
    if(err) throw err;
    _db = client.db('dbMqttTest');
    callback();
  });
};

let db = function(){ 
  return _db;
};

module.exports = { db, initDbConection };