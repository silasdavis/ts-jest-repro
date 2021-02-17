"use strict";
exports.__esModule = true;
exports.blah = exports.bluf = void 0;
require("source-map-support/register");
function bluf() {
    return { a: 1 };
}
exports.bluf = bluf;
function blah() {
    throw new Error('bah');
}
exports.blah = blah;
//# sourceMappingURL=source-map.js.map