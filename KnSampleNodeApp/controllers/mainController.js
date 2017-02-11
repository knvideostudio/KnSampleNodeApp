// mainController.js
//
// KnSampleNodeApp
// Description: Sample app KnSampleNodeApp using NodeJS, Express, and MongoDB
// Author: Kriss Nickov
// Web Site: www.kncode.us
// Initial Date: Feb 11, 2017
// 
// ----------------------------------------------------------------------------------------------------------
(function (mainController) {

    var mydatabase = require("../database");

    mainController.init = function (app) {
        app.get("/", function (req, res) {
            mydatabase.getSubCategories(function (err, results) {
                res.render("index", {
                    title: "KnSampleNodeApp using NodeJS, ExpressJS, and MongoDB.",
                    error: err,
                    categories: results,
                    newErrorCategory: req.flash("newCategoryName")
                });
            });
        });

        // post the request
        app.post("/createCategory", function (req, res) {
            var categoryName = req.body.categoryName;

            // insert category
            mydatabase.createNewCategory(categoryName, function (err) {
                if (err) {

                    // handle error
                    console.log(err);

                    // using connect flash module
                    req.flash("newCategoryName", err);
                    res.redirect("/");

                } else {
                    // create new category
                    res.redirect("/subs/" + categoryName);
                }
            });
        });
    };
})(module.exports);