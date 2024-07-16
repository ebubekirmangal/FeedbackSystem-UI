import { Component } from '@angular/core';
import { CustomerFeedbackComponent } from "../../../shared/form/form.component";
import { BasicLayoutComponent } from "../../../layout/basic-layout/basic-layout.component";

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CustomerFeedbackComponent, BasicLayoutComponent],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css'
})
export class FeedbackFormComponent {
type:string="Feedback";
}
