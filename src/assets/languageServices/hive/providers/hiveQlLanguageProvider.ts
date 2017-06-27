import { HiveQlCompleter } from '../completers/HiveQlCompleter';

export class HiveQlLanguageProvider {
    static ensureInitialized() {
        HiveQlCompleter.ensureInitialized();
    }
    static provideCompletionItems(model, position) {
        HiveQlCompleter.ensureInitialized();
        var textBeforeCursor = model.getValueInRange({ startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column });
        var endLineNumber = model.getLineCount();
        var endColumn = model.getLineMaxColumn(endLineNumber);
        var textAfterCursor = model.getValueInRange({
            startLineNumber: position.lineNumber,
            startColumn: position.column,
            endLineNumber: endLineNumber,
            endColumn: endColumn
        });
        console.log(textBeforeCursor);
        console.log(textAfterCursor);
        var parseResult = HiveQlCompleter.getBasicCompletion(textBeforeCursor, textAfterCursor)
        console.log(parseResult);
        var result = HiveQlLanguageProvider.handleBasicCompletion(parseResult);
        console.log(result);
        return result;
    }

    static handleBasicCompletion(parseResult) {
        if (parseResult.suggestKeywords) {
            var result = [];
            (<Array<any>>parseResult.suggestKeywords).map((value) => {
                result.push({
                    label: value.value,
                    kind: monaco.languages.CompletionItemKind.Keyword,
                    detail: "keyword",
                    insertText: value.value
                })
            })
            return result;
        }
        return [];
    }
}