export interface Column {
    name: string;
    type: string;
}

export interface Table {
    name: string;
    columns: any;
}

export interface Db {
    name: string;
}