// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
// import { DataSource, DbContent, Table, Column } from './dbContent';

// @Injectable()
// export class DbCacheService {

//     constructor(private apiService : ApiService) { }

//     getDbs() : DbContent{
//         this.apiService.runQeury("show databases")

//     }

//     getDataSources() : Array<DataSource>{
//         let dsJson = this.apiService.runQeury("show datasources")
//         let dataSources = new Array
//         for(let ds in dsJson.then(d => d.rows)){
//             dataSources.push(new DataSource())
//         }
//     }

//     getTables(dataSource : string) : Array<Table>{
//         let tabJson = this.apiService.runQeury("describe datasource " + dataSource).then(t => t.rows)
//         let tables = new Array
//         for(let tab in tabJson){
//             tables.push(new Table())
//         }
//     }

//     getColumns(table : string) : Array<Column>{
//         let colJson = this.apiService.runQeury("describe " + table).then(c => c.rows)
//         let columns = new Array
//         for(let col in colJson){
//             columns.push(new Column(col[0], col[1], col[2]))
//         }
//         return columns
//     }
  
// }