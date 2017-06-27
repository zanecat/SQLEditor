import { HiveQlCompleter } from '../completers/HiveQlCompleter';

export class HiveQlLanguageProvider {
    static ensureInitialized() {
        HiveQlCompleter.ensureInitialized();
    }

    static getTextBeforeCursor(model, position): string {
        return model.getValueInRange({
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: position.lineNumber,
            endColumn: position.column
        });
    }

    static getTextAfterCursor(model, position): string {
        var endLineNumber = model.getLineCount();
        var endColumn = model.getLineMaxColumn(endLineNumber);
        return model.getValueInRange({
            startLineNumber: position.lineNumber,
            startColumn: position.column,
            endLineNumber: endLineNumber,
            endColumn: endColumn
        });
    }

    static provideCompletionItems(model, position) {
        HiveQlCompleter.ensureInitialized();
        var textBeforeCursor = HiveQlLanguageProvider.getTextBeforeCursor(model, position);
        var textAfterCursor = HiveQlLanguageProvider.getTextAfterCursor(model, position);
        var parseResult = HiveQlCompleter.getBasicCompletion(textBeforeCursor, textAfterCursor)
        var result = HiveQlLanguageProvider.handleBasicCompletion(parseResult);
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