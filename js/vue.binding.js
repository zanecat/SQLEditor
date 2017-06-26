require.config({ paths: { 'vs': 'js/vs' }});

Vue.directive('editor', {
    bind: function (el, binding, vnode) {
        require(['vs/editor/editor.main'], function() {
            var snippet = binding.value.snippet;
            var editor = monaco.editor.create(el, {
                value: snippet.statement,
                language: 'sql'
            });

            snippet.editor = editor;

            editor.onKeyUp(function(){
                binding.value.snippet.statement = editor.getValue();
            });

            monaco.languages.register({ id: 'hive' });
            var hiveCompletionProvider = new HiveCompletionProvider();
            monaco.languages.registerCompletionItemProvider('hive', {
                provideCompletionItems : hiveProvider.getProvider()
            })
        });
    }
})

