import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';
import { EditorPanelComponent } from './editor-panel/editor-panel.component';
import { QueryResultComponent } from './query-result/query-result.component';

import {ApiService} from './api.service'

@NgModule({
    declarations: [
        AppComponent,
        MonacoEditorComponent,
        EditorPanelComponent,
        QueryResultComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
