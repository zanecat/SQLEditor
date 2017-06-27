import { Component, ViewChild } from '@angular/core';

import { MonacoEditorComponent } from "./monaco-editor/monaco-editor.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    @ViewChild(MonacoEditorComponent)
    private monaco: MonacoEditorComponent;

    constructor() {

    }
}
