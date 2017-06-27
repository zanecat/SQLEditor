var HiveCompletionProvider = (function(){
    function HiveCompletionProvider(){
        var self = this;
        this.mockResult = [
            {
                label: 'SELECT',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "an SQL keyword",
                detail: "keyword",
                insertText: 'SELECT'
            },
            {
                label: 'FROM Table_01',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "select colunmes from table_01",
                insertText: 'FROM Table_01'
            },
            {
                label: '"GROUP BY"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "SQL Keyword",
                insertText: 'GROUP BY'
            }
        ]

        this.getCompletions = function(model, position){
            var textBeforeCursor = model.getValueInRange({startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column});
            console.log(textBeforeCursor);
            var parseResult = sql.parseSql(textBeforeCursor, '', 'hive', false);
            console.log(this.handleKeywords(parseResult));
            return this.handleKeywords(parseResult);
        }

        this.handleKeywords = function(parseResult){
            if(parseResult.suggestKeywords){
                var keywordSuggestions = $.map(parseResult.suggestKeywords, function (keyword) {
                    return {
                        label: keyword.value,
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        detail: "keyword",
                        insertText: keyword.value
                    };
                });
                return keywordSuggestions;
            }
        }
    }

    return HiveCompletionProvider;
})();
    