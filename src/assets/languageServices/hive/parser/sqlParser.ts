import { DomScriptLoader } from 'assets/lib/domScriptLoader'

declare const require: any;
declare const sql: any;

export class SqlParser {
    private basicParser;
    constructor() {
        DomScriptLoader.addScript('assets/languageServices/hive/parser/sqlParseSupport.js', "sql_parse_support_script", null);
        DomScriptLoader.addScript('assets/languageServices/hive/parser/sql.js', "sql_parse_script", null);
        DomScriptLoader.addScript('assets/languageServices/hive/parser/sqlFunctions.js', "sql_parse_functions_script", null);
        DomScriptLoader.addScript('assets/languageServices/hive/parser/sqlStatementsParser.js', "sql_parse_statements_script", null);
    }

    onInit() {

    }

    parse(text: string) {
        return sql.parseSql(text, "", "hive", false);
    }
}