import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ResultData } from "../api.service"

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.css']
})
export class QueryResultComponent implements OnInit {
  result;

  constructor() { }

  ngOnInit() {
  }

  @Input() resultData : ResultData

}