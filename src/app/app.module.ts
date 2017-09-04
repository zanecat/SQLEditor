import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';
import { EditorPanelComponent } from './editor-panel/editor-panel.component';
import { QueryResultComponent } from './query-result/query-result.component';

import {ApiService} from './services/api.service';
import { AssistPanelComponent } from './assist-panel/assist-panel.component'

import { AngularSplitModule } from "angular-split";

@NgModule({
    declarations: [
        AppComponent,
        MonacoEditorComponent,
        EditorPanelComponent,
        QueryResultComponent,
        AssistPanelComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AngularSplitModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
