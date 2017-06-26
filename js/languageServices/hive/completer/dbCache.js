"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DbCache = (function () {
    function DbCache() {
    }
    DbCache.prototype.getTables = function (dbName) {
        return [
            {
                type: "table",
                name: dbName + "t1"
            },
            {
                type: "table",
                name: dbName + "t2"
            },
            {
                type: "table",
                name: dbName + "t3"
            }
        ];
    };
    DbCache.prototype.getDbs = function () {
        return [
            {
                type: "db",
                name: "d1"
            },
            {
                type: "db",
                name: "d2"
            }
        ];
    };
    return DbCache;
}());
exports.DbCache = DbCache;
//# sourceMappingURL=dbCache.js.map