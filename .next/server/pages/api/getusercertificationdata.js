"use strict";
(() => {
var exports = {};
exports.id = 602;
exports.ids = [602,816];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 5080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3516);

async function fetchUserSkillSetData(userid) {
    var dataResult = new Array();
    try {
        await _mongo__WEBPACK_IMPORTED_MODULE_0__.mongoClient.connect();
        console.log("connected");
        const database = _mongo__WEBPACK_IMPORTED_MODULE_0__.mongoClient.db('test');
        const collection = database.collection('userskillsetdata');
        //const query = { username:username };
        //const cursor = collection.find(query);
        // if ((await cursor.count()) === 0) {
        //   console.log("No documents found!");
        // }
        // await cursor.forEach(function(row){
        //   dataResult.push(row);
        // });
        const pipeline = [
            {
                '$match': {
                    'userid': userid
                }
            },
            {
                '$lookup': {
                    'from': 'users',
                    'localField': 'userid',
                    'foreignField': 'userid',
                    'as': 'userdata'
                }
            },
            {
                '$lookup': {
                    'from': 'dim_skill',
                    'localField': 'skill_id',
                    'foreignField': 'skill_id',
                    'as': 'skill_data'
                }
            },
            {
                '$lookup': {
                    'from': 'dim_skill_level',
                    'localField': 'level_id',
                    'foreignField': 'level_id',
                    'as': 'skill_level_data'
                }
            },
            {
                '$project': {
                    '_id': 1,
                    'userdata': 1,
                    'skill_data': 1,
                    'skill_level_data': 1,
                    'skillname': 1,
                    'skilllevel': 1
                }
            }
        ];
        const cursor = collection.aggregate(pipeline);
        for await (const doc of cursor){
            dataResult.push(doc);
        }
    } finally{
        // Ensures that the client will close when you finish/error
        await _mongo__WEBPACK_IMPORTED_MODULE_0__.mongoClient.close();
    }
    return dataResult;
}
async function handler(req, res) {
    var param = req.body;
    console.log(param);
    var userid = param.userid;
    var data = await fetchUserSkillSetData(userid);
    if (data) {
        res.status(200).json({
            message: "fetch success",
            data: data
        });
    } else {
        res.status(500).json({
            message: "fetch fail"
        });
    }
};


/***/ }),

/***/ 3516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mongoClient": () => (/* binding */ mongoClient)
/* harmony export */ });
const { MongoClient  } = __webpack_require__(8013);
const uri = "mongodb+srv://mongo:mongo@cluster0.u7mey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const mongoClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); // client.connect(err => {
 //   const collection = client.db("test").collection("devices");
 //   // perform actions on the collection object
 //   client.close();
 // });


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5080));
module.exports = __webpack_exports__;

})();