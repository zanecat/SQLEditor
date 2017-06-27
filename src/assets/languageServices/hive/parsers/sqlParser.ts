import { DomScriptLoader } from 'assets/lib/DomScriptLoader'
declare const sql: any;

export class SqlParser {
    private static isInitialized: boolean = false;
    static ensureInitialized() {
        if (!SqlParser.isInitialized) {
            DomScriptLoader.addScript('assets/lib/elder-sql-parser/sql-parse-support.js', "sql_parse_support_script", null);
            DomScriptLoader.addScript('assets/lib/elder-sql-parser/sql.js', "sql_parse_script", null);
            DomScriptLoader.addScript('assets/lib/elder-sql-parser/sql-functions.js', "sql_parse_functions_script", null);
            DomScriptLoader.addScript('assets/lib/elder-sql-parser/sql-statements-parser.js', "sql_parse_statements_script", null);
            SqlParser.isInitialized = true;
        }
    }

    static parse(textBeforeCursor: string, textAfterCursor: string, dialect: string, debug: boolean) {
        return sql.parseSql(textBeforeCursor, textAfterCursor, dialect, debug);
    }
}