import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ApiService, ResultData } from "../services/api.service";
import { Table, Column } from "../services/dbContent";

@Component({
    selector: 'app-assist-panel',
    templateUrl: './assist-panel.component.html',
    styleUrls: ['./assist-panel.component.css']
})
export class AssistPanelComponent implements OnInit {
    tables = new Array
    constructor(private apiService : ApiService) { }

    ngOnInit() {
        this.apiService.runQeury("show tables").then((res) => {this.tables = this.generateTable(res)})
    }
    
    ngAfterViewInit(){
        
    }

    generateTable(rd : ResultData) {
        let tables = new Array
        for(let i in rd.rowData){
            tables.push(new Table(rd.rowData[i][0], rd.rowData[i][2].split('@')[1]))
        }
        console.log(tables)
        return tables
    }
}
