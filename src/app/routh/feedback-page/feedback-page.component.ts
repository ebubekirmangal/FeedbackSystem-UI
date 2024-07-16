import { Component } from '@angular/core';
import { BasicLayoutComponent } from "../../layout/basic-layout/basic-layout.component";
import { FeedbackComponent } from "../../shared/feedback/feedback.component";

@Component({
  selector: 'app-feedback-page',
  standalone: true,
  imports: [BasicLayoutComponent, FeedbackComponent],
  templateUrl: './feedback-page.component.html',
  styleUrl: './feedback-page.component.css'
})
export class FeedbackPageComponent {

}
