var MongoClient = require("mongodb").MongoClient;
function _connectDB(callback) {
    var url = "mongodb://127.0.0.1:27017/runoob";
    //链接数据库
    MongoClient.connect(url, function (err, db) {
        callback(err, db);
    });
}

//插入数据
exports.insertOne = function (collectionName, data, callback) {
    _connectDB(function (err, db) {
        if(err){
            callback(err, db);
            return;
        }
   db.db('runoob').collection(collectionName).insertOne(data, function (err, result) {
            callback(err, result);
            db.close();    //关闭数据库
        });
    });
}

exports.findAll = function (collectionName, callback){
    _connectDB(function (err, db) {
        if(err){
            callback(err, db);
            return;
        }
        db.db('runoob').collection(collectionName).find({ age :{ $gt : 18 } }).toArray(function (err,res){
            if (err) throw err;
            callback(err, res);
            db.close();
        })
    });
}
