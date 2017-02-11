// index.js
//
// KnSampleNodeApp
// Description: Sample app KnSampleNodeApp using NodeJS, Express, and MongoDB
// Author: Kriss Nickov
// Web Site: www.kncode.us
// Initial Date: Feb 11, 2017
// 
// ----------------------------------------------------------------------------------------------------------
(function (localdata) {

    var mainDataSet = require("./mainDataSet");
    var myConnectDb = require("./connectToDatabase");

    localdata.getSubCategories = function (next) {

        // used for the class saved data
        // next(null, mainDataSet.initialsubs);
        // using MongoDB
        myConnectDb.loadDatabase(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.subs.find().toArray(function (err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };

    // create new category
    localdata.createNewCategory = function (categoryName, next) {
        myConnectDb.loadDatabase(function (err, db) {
            if (err) {
                next(err);
            } else {
                // find if category exists
                db.subs.find({ name: categoryName }).count(function (err, count) {
                    if (err) {
                        next(err, null);
                    } else {

                        if (count != 0) {
                            next("Sub Category already exists <b>'" + categoryName + "'</b>");
                        } else {
                            // add new Category
                            var cat = {
                                name: categoryName,
                                subs: []
                            };
                            db.subs.insert(cat, function (err) {
                                if (err) {
                                    next(err);
                                } else {
                                    next(null);
                                }
                            });
                        }
                    }
                });



            }
        });
    };

    // CreateDefaultData
    function CreateDefaultData() {

        myConnectDb.loadDatabase(function (err, db) {
            if (err) {
                console.log("Fail to Connect to MongoDB Database: " + err);
            } else {
                // test to see if the data exits
                db.subs.count(function (err, count) {
                    if (err) {
                        console.log("Failed to retrieve database count.");
                    } else {
                        if (count == 0) {
                            // progress data
                            console.log("Data is in progress for database ...");

                            mainDataSet.initialSubs.forEach(function (item) {
                                db.subs.insert(item, function (err) {
                                    if (err) console.log("Failed to insert sub(s) into database");
                                });
                            });
                        } else {
                            console.log("Database is Ready ...");
                        }
                    }
                });
            }
        });
    }

    // execute the function
    CreateDefaultData();

})(module.exports);