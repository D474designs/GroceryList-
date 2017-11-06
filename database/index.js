var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',  //@TODO: Change user to your local mysql instance username
  password : '',   //@TODO: Change password to your local mysql instance password
  database : 'review'    //@TODO: Ensure database name matches the database you created
});



var selectAll = (callback) => {
  connection.query('SELECT * FROM groceries', function(err, result, fields){
    console.log(err);
    if(err) {
      callback(err,null);
    }else {
      callback(null,result);
    }
  });
};

var insertOne = (description, quantity, callback) => {
  connection.query('INSERT INTO groceries (description, quantity) value (?,?)' ,[description, quantity], function(err, result, feilds){
    if(err){
      callback(err,null);
    }else {
      callback(null, result);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;