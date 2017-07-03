import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MonacoEditorComponent } from "../monaco-editor/monaco-editor.component";
import { QueryResultComponent } from "../query-result/query-result.component"
import { ApiService } from "../services/api.service"

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.css']
})
export class EditorPanelComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }

  @ViewChild(MonacoEditorComponent)
  private monaco: MonacoEditorComponent;
  private result

  testGet() : void{
        this.apiService.testQuery().then(result => {this.result = result});
  }

  executeQuery() : void{
      this.apiService.runQeury(this.monaco.getValue()).then(result => {this.result = result})
  }
}
