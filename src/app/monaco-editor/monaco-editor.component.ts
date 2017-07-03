import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HiveQlLanguageProvider } from 'assets/languageServices/hive/providers/HiveQlLanguageProvider';
import { ApiService, ResultData } from '../services/api.service'

import { DomScriptLoader } from 'assets/lib/DomScriptLoader';

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
    private result;

    @ViewChild('editor')
    editorContent: ElementRef;

    constructor(private apiService : ApiService) { }

    ngOnInit() { }

    ngAfterViewInit() {
        var onGotAmdLoader = () => {
            // Load monaco
            (<any>window).require.config({ paths: { 'vs': 'assets/monaco-editor/min/vs' } });
            (<any>window).require(['vs/editor/editor.main'], () => {
                this.initMonaco();
            });
        };

        // Load AMD loader if necessary
        if (!(<any>window).require) {
            DomScriptLoader.addScript('assets/monaco-editor/min/vs/loader.js', 'monaco_amd_loader', onGotAmdLoader);
        } else {
            onGotAmdLoader();
        }
    }

    // Will be called once monaco library is available
    initMonaco() {
        HiveQlLanguageProvider.ensureInitialized();
        var editorContainer: HTMLDivElement = this.editorContent.nativeElement;
        monaco.languages.registerCompletionItemProvider('sql', {
            provideCompletionItems: HiveQlLanguageProvider.provideCompletionItems
        });
        this.editor = monaco.editor.create(editorContainer, {
            theme: "vs",
            value: [
                '/**',
                ' * Type your query here!',
                ' */',
                ''
            ].join('\n'),
            language: 'sql'
        });
    }

    getValue() : string {
        return this.editor.getValue();
    }
}

