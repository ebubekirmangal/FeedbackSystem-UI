import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.css'
})
export class BasicLayoutComponent {

}
