import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare const monaco: any;
declare const require: any;

@Component({
    selector: 'app-monaco-editor',
    templateUrl: './monaco-editor.component.html',
    styleUrls: ['./monaco-editor.component.css']
})
export class MonacoEditorComponent implements OnInit, AfterViewInit {
    title = 'app';
    editor;

    @ViewChild('editor')
    editorContent: ElementRef;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        var onGotAmdLoader = () => {
            // Load monaco
            (<any>window).require.config({ paths: { 'vs': '../assets/monaco-editor/min/vs' } });
            (<any>window).require(['vs/editor/editor.main'], () => {
                this.initMonaco();
            });
        };

        // Load AMD loader if necessary
        if (!(<any>window).require) {
            var loaderScript = document.createElement('script');
            loaderScript.type = 'text/javascript';
            loaderScript.src = '../assets/monaco-editor/min/vs/loader.js';
            loaderScript.addEventListener('load', onGotAmdLoader);
            document.body.appendChild(loaderScript);
        } else {
            onGotAmdLoader();
        }
    }

    // Will be called once monaco library is available
    initMonaco() {
        var myDiv: HTMLDivElement = this.editorContent.nativeElement;
        this.editor = monaco.editor.create(myDiv, {
            value: [
                '/**',
                ' * Powered by Monaco Editor from Microsoft.',
                '**/'
            ].join('\n'),
            language: 'sql'
        });
    }

    getValue() {
        return this.editor.getValue();
    }
}

