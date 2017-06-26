importScripts("../parser/sqlParseSupport.js")
importScripts("../parser/sql.js")
importScripts("../parser/sqlFunctions.js")
export class Completer {

    constructor(private parser) {
        sql.parseSql("s","", "hive", false)
    }
}