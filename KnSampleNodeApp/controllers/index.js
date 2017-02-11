// index.js
//
// KnSampleNodeApp
// Description: Sample app KnSampleNodeApp using NodeJS, Express, and MongoDB
// Author: Kriss Nickov
// Web Site: www.kncode.us
// Initial Date: Feb 11, 2017
// 
// ----------------------------------------------------------------------------------------------------------
(function (controllers) {

    var mainController = require("./mainController");
    controllers.init = function (app) {
        mainController.init(app);
    };

})(module.exports);