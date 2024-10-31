export interface Column{
    id:number;
    header:string;
    rowIds:number[];
    data: { [rowId: number]: any };
}