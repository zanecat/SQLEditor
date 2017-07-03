import { Injectable } from "@angular/core";


export class DbContent{
  private dataBases : Array<string>
  private dataSources : Array<string>
  private tables : Array<String> = null
}

export class DataSource{
    private name : string
    private description : string
    private tables : Array<Table> = null
    constructor(name:string, desc:string){
        
    }
}

export class Table{
    private _name : string
    private _dataSource : string
    private _columns : Array<Column> = null
    private _intelliName : string

    constructor(name, datasource){
        this._name = name
        this._dataSource = datasource
        this._intelliName = datasource + "." + name
    }

    get name() : string{
        return this._name
    }

    get dataSource() : string{
        return this._dataSource
    }

    get intelliName() : string{
        return this._intelliName
    }
    
    public getColumns() : Array<Column>{
        if(this._columns){
            return this._columns
        } else {
            
        }
    } 
    public toJson(){
        return {
            "name" : this._name,
            "dataSource": this._dataSource,
            "intelliName" : this._intelliName
        }
    }
}

export class Column{
    private _name : string = null
    private _dataType : string = null
    private _comment : string = null
    constructor(name, dataType, comment){
        this._name = name
        this._dataType = dataType
        this._comment = comment
    }

    get name() : string{
        return this._name
    }

    get dataType() : string{
        return this._dataType
    }

    get comment() : string{
        return this._comment
    }

    public toJson(){
        return {
            "name" : this._name,
            "dataType" : this._dataType,
            "comment" : this._comment
        }
    }
}