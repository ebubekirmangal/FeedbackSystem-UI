import { Component, Input } from '@angular/core';
import { ListFeedback } from '../../../features/feedback/models/listFeedbackByDate';
import { FeedbackService } from '../../../features/feedback/service/feedback.service';
import { FeedbackComponent } from "../../../shared/feedback/feedback.component";
import { CommonModule, DatePipe } from '@angular/common';
import { CustomerFeedbackComponent } from "../../../shared/form/form.component";
import { ReplyService } from '../../../features/reply/service/reply.service';
import { GetReplyByFeedbackId } from '../../../features/reply/models/getByFeedbackId';
import e from 'express';

@Component({
  selector: 'app-feedback-reply',
  standalone: true,
  imports: [FeedbackComponent, DatePipe, CustomerFeedbackComponent,CommonModule],
  templateUrl: './feedback-reply.component.html',
  styleUrl: './feedback-reply.component.css'
})
export class FeedbackReplyComponent {
  feedbacks: ListFeedback[];
  isActive = false;
  type: string = "Reply";
  replies: GetReplyByFeedbackId[] = []; // Array to hold replies for each feedback

  constructor(
    private feedbackService: FeedbackService,
    private replyService: ReplyService
  ) {}

  ngOnInit(): void {
    this.feedbackService.listByDate().subscribe(data => {
      this.feedbacks = data;
      this.loadReplies(); // Load replies once feedbacks are fetched
    });
  }

  onClick() {
    this.isActive = !this.isActive;
  }

  loadReplies() {
    this.feedbacks.forEach(feedback => {
      this.replyService.getByFeedbackId(feedback.id).subscribe(reply => {
        // Push each reply into replies array based on feedback index
        this.replies.push(reply);
      });
    });
  }
}
