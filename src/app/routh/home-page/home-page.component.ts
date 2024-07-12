import { Component } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BasicLayoutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
