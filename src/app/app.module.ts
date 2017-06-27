import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';

@NgModule({
    declarations: [
        AppComponent,
        MonacoEditorComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
