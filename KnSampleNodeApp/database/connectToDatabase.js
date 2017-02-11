// connectToDatabase.js
// Database access Mongo DB
//
// KnSampleNodeApp
// Description: Sample app KnSampleNodeApp using NodeJS, Express, and MongoDB
// Author: Kriss Nickov
// Web Site: www.kncode.us
// Initial Date: Feb 11, 2017
// 
// ----------------------------------------------------------------------------------------------------------
(function (connectToDatabase) {

    var myMongodb = require("mongodb");
    var myMongoUrl = "mongodb://localhost:27017/KnSampleNodeAppDB";
    var myCurrentDb = null;

    connectToDatabase.loadDatabase = function (next) {

        if (!myCurrentDb) {
            // connect to database
            myMongodb.MongoClient.connect(myMongoUrl, function (err, db) {
                if (err) {
                    next(err, null);
                } else {
                    myCurrentDb = {
                        db: db,
                        subs: db.collection("subs")
                    };
                    next(null, myCurrentDb);
                }
            });
        }
        else {
            next(null, myCurrentDb);
        }
    }

})(module.exports);