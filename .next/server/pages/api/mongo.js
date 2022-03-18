"use strict";
(() => {
var exports = {};
exports.id = 816;
exports.ids = [816];
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3516));
module.exports = __webpack_exports__;

})();