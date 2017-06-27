import { SqlParser } from "../parsers/SqlParser";
declare const require: any;

export class HiveQlCompleter {
    private static isInitialized: boolean = false;

    static ensureInitialized() {
        if (!HiveQlCompleter.isInitialized) {
            SqlParser.ensureInitialized();
            HiveQlCompleter.isInitialized = true;
        }
    }

    static getBasicCompletion(textBeforeCursor, textAfterCursor) {
        return SqlParser.parse(textBeforeCursor, textAfterCursor, "hive", false)
    }
}