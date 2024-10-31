import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() buttonTitle: any;
@Input() @Input() action: () => void = () => {};
@Input() color:string;

function() {
  if (this.action) {
    this.action(); // Dışarıdan atanan fonksiyonu çağır
  }
}

}
