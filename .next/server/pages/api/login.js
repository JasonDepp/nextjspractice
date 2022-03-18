"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994,816];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 7202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3516);
//import MongoClient from 'mongodb';

async function fetchUser(username, password) {
    var dataResult;
    try {
        await _mongo__WEBPACK_IMPORTED_MODULE_0__.mongoClient.connect();
        console.log("connected");
        const database = _mongo__WEBPACK_IMPORTED_MODULE_0__.mongoClient.db('test');
        const users = database.collection('users');
        const query = {
            $or: [
                {
                    userid: username
                },
                {
                    email: username
                }
            ]
        };
        const user = await users.findOne(query);
        console.log(user);
        dataResult = user;
    } finally{
        // Ensures that the client will close when you finish/error
        await _mongo__WEBPACK_IMPORTED_MODULE_0__.mongoClient.close();
    }
    return dataResult;
}
async function handler(req, res) {
    var param = req.body;
    console.log(param);
    var username = param.email;
    var password = param.password;
    var user = await fetchUser(username, password);
    if (user) {
        res.status(200).json({
            message: "login success",
            user: user
        });
    } else {
        res.status(500).json({
            message: "login fail"
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
var __webpack_exports__ = (__webpack_exec__(7202));
module.exports = __webpack_exports__;

})();