"use strict";
(() => {
var exports = {};
exports.id = 828;
exports.ids = [828,816];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

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


/***/ }),

/***/ 7851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3516);

async function putUserSkillSetData(param) {
    var dataResult = new Array();
    try {
        await _mongo__WEBPACK_IMPORTED_MODULE_0__.mongoClient.connect();
        console.log("connected");
        const database = _mongo__WEBPACK_IMPORTED_MODULE_0__.mongoClient.db('test');
        const collection = database.collection('userskillsetdata');
        var userid = param.userid;
        var skillid = param.skillid;
        var levelid = param.levelid;
        const filter = {
            userid: userid,
            skill_id: skillid
        };
        const options = {
            upsert: true
        };
        const updateDoc = {
            $set: {
                userid: userid,
                skill_id: skillid,
                level_id: levelid
            }
        };
        const result = await collection.updateOne(filter, updateDoc, options);
        console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
    } finally{
        // Ensures that the client will close when you finish/error
        await _mongo__WEBPACK_IMPORTED_MODULE_0__.mongoClient.close();
    }
    return dataResult;
}
async function handler(req, res) {
    var param = req.body;
    console.log(param);
    var data = await putUserSkillSetData(param);
    if (data) {
        res.status(200).json({
            message: "put success",
            data: data
        });
    } else {
        res.status(500).json({
            message: "put fail"
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7851));
module.exports = __webpack_exports__;

})();