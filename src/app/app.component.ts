import { Component, AfterViewInit } from '@angular/core';
import { DomScriptLoader } from "assets/lib/DomScriptLoader";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    title = 'app';

    ngAfterViewInit(){
        
    }

    constructor() {  }


}
