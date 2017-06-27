require.config({ paths: { 'vs': 'js/vs' }});

Vue.directive('editor', {
    bind: function (el, binding, vnode) {
        require(['vs/editor/editor.main'], function() {
            var snippet = binding.value.snippet;
            
            monaco.languages.register({ id: 'hive' });
            var hiveCompletionProvider = new HiveCompletionProvider();
            monaco.languages.registerCompletionItemProvider('hive', {
                provideCompletionItems : function(model, position){
                    return hiveCompletionProvider.getCompletions(model, position);
                }
            })

            var editor = monaco.editor.create(el, {
                value: snippet.statement,
                language: 'hive',
                wordBasedSuggestions: false,
                snippetSuggestions: false
            });

            snippet.editor = editor;

            editor.onKeyUp(function(){
                binding.value.snippet.statement = editor.getValue();
            });
        });
    }
})

