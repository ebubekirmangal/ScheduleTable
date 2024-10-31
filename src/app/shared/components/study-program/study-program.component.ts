import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../../../service/models/table';
import { ButtonComponent } from "../button/button.component";
import { Row } from '../../../service/models/row';
import { Column } from '../../../service/models/column';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-study-program',
  standalone: true,
  imports: [CommonModule, ButtonComponent,FormsModule],
  templateUrl: './study-program.component.html',
  styleUrl: './study-program.component.scss'
})
export class StudyProgramComponent{

@Input() day:string;
@Input() date:string;
@Input() times:string[];
@Input() subjects:string[];
tables: Table[] = [];

// Button properties
createShedule:string = "Yeni Ders Programı Ekle";
addRowLabel:string = "Satır Ekle";
addColLabel:string = "Sütun Ekle";
deleteLabel:string = "Ders Programını Sil";

success:string ="rgb(7, 201, 7)";
danger:string ="red"
constructor(){

}

createNewScheduleTable() {
  const newTable: Table = {
    id: `table-${this.tables.length + 1}`,
    rows: [{ id: 1, columnIds: [1] }],  
    columns: [{ id: 1, header: 'Başlık', rowIds: [1], data: { 1: '' } }]
  };
  this.tables.push(newTable);
}

addRow(tableIndex: number) {
  const table = this.tables[tableIndex];
  const newRow: Row = { id: table.rows.length + 1, columnIds: table.columns.map(col => col.id) };
  table.rows.push(newRow);

  table.columns.forEach(col => {
    col.data[newRow.id] = ''; 
    col.rowIds.push(newRow.id);
  });
}

addColumn(tableIndex: number) {
  const table = this.tables[tableIndex];
  const newColumn: Column = {
    id: table.columns.length + 1,
    header: 'Yeni Başlık',
    rowIds: table.rows.map(row => row.id),
    data: {}
  };

  table.rows.forEach(row => newColumn.data[row.id] = '');
  table.columns.push(newColumn);
}
}
