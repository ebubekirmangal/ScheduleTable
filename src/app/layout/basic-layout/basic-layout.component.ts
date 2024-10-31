import { Component } from '@angular/core';
import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [NavigationBarComponent, FooterComponent],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.scss'
})
export class BasicLayoutComponent {

}
