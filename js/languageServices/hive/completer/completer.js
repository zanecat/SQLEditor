"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
importScripts("../parser/sqlParseSupport.js");
importScripts("../parser/sql.js");
importScripts("../parser/sqlFunctions.js");
var Completer = (function () {
    function Completer(parser) {
        this.parser = parser;
        sql.parseSql("s", "", "hive", false);
    }
    return Completer;
}());
exports.Completer = Completer;
//# sourceMappingURL=completer.js.map