declare const require: any;

export class HiveQlCompleter {
    /**
     *
     */
    constructor() {
        var onGotAmdLoader = () => {
            // Load monaco
            (<any>window).require.config({ paths: { 'lang_sever': './sql' } });
            (<any>window).require(['vs/editor/editor.main'], () => {
                this.onInit();
            });
        };

        // Load AMD loader if necessary
        if (!(<any>window).require) {
            var loaderScript = document.createElement('script');
            loaderScript.type = 'text/javascript';
            loaderScript.src = 'assets/monaco-editor/min/vs/loader.js';
            loaderScript.addEventListener('load', onGotAmdLoader);
            document.body.appendChild(loaderScript);
        } else {
            onGotAmdLoader();
        }
    }

    onInit() {

    }
}