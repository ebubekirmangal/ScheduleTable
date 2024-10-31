import { Column } from "./column";
import { Row } from "./row";

export interface Table{
id:string;
// day:string;
// date:string;
rows:Row[];
columns:Column[];
}