// mainDataSet.js
//
// KnSampleNodeApp
// Description: Sample app KnSampleNodeApp using NodeJS, Express, and MongoDB
// Author: Kriss Nickov
// Web Site: www.kncode.us
// Initial Date: Feb 11, 2017
// 
// ----------------------------------------------------------------------------------------------------------
(function (mainDataSet) {
    mainDataSet.initialSubs = [{
        name: "George The First",
        subs: [{
            sub: "Cleaning the Road",
            author: "Jim Smith",
            color: "black",
            memo: "Go to the sea"
        },
        {
            sub: "I find that after each command",
            author: "Oal Mattoson",
            color: "red",
            memo: "reading"
        },
        {
            sub: "Big Bang Teory",
            author: "Ela Simons M",
            color: "blue",
            memo: "working"
        },
        {
            sub: "Possibly the npm program is a batch",
            author: "Olga Zam",
            color: "blue",
            memo: "need to buy"
        },
        {
            sub: "This has been soo useful",
            author: "Alber Gizbo",
            color: "blue",
            memo: "angel"
        }]
    }
    ,
        {
            name: "Big Frog Swamp",
            subs: [{
                sub: "TWe have been there last summer",
                author: "Amanda Smith",
                color: "pink",
                memo: "consulting"
            },
            {
                sub: "Big Frog",
                author: "Jade Sams",
                color: "green",
                memo: "buy"
            },
            {
                sub: "Bagger",
                author: "Eliot Dogs",
                color: "mint",
                memo: "kabagge"
            }]
        }
        ,
        {
            name: "Programming Books",
            subs: [{
                sub: "Ema knows how to code",
                author: "Amanda Smith",
                color: "pink",
                memo: "consulting"
            },
            {
                sub: "Android programming",
                author: "Bill Ian",
                color: "green",
                memo: "booking"
            }]
        }

    ]
})(module.exports);