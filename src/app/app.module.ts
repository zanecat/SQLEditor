import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';
import { HiveQlLanguageProvider } from 'assets/languageServices/hive/providers/HiveQlLanguageProvider';

@NgModule({
    declarations: [
        AppComponent,
        MonacoEditorComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [HiveQlLanguageProvider],
    bootstrap: [AppComponent]
})
export class AppModule { }
