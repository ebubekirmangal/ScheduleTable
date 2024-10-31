import { Component } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { StudyProgramComponent } from "../../shared/components/study-program/study-program.component";
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { Table } from '../../service/models/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BasicLayoutComponent, StudyProgramComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data: Table[] = []; // Gelen veriyi saklayacağımız değişken

  constructor(private dataService: DataService) {}

  // ngOnInit(): void {
  //   this.getData();
  // }

  // getData(): void {
  //   this.dataService.getData().subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.data = response; // Gelen veriyi 'data' değişkenine atıyoruz
  //     },
  //     (error) => {
  //       console.error('Veri çekilirken hata oluştu:', error);
  //     }
  //   );
  // }

}
