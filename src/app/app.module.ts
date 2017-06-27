import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';
import { SqlParser } from '../assets/languageServices/hive/parser/sqlParser'

@NgModule({
    declarations: [
        AppComponent,
        MonacoEditorComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [SqlParser],
    bootstrap: [AppComponent]
})
export class AppModule { }
