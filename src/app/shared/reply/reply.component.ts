import { Component, Input, OnInit } from '@angular/core';
import { CustomerFeedbackComponent } from "../form/form.component";
import { GetReplyByFeedbackId } from '../../features/reply/models/getByFeedbackId';
import { ReplyService } from '../../features/reply/service/reply.service';
import { ListFeedback } from '../../features/feedback/models/listFeedbackByDate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reply',
  standalone: true,
  imports: [CustomerFeedbackComponent,CommonModule],
  templateUrl: './reply.component.html',
  styleUrl: './reply.component.css'
})
export class ReplyComponent implements OnInit {
  
  isActiveMap: { [key: number]: boolean } = {}; 
  type: string = "Reply";
  replies: { [key: number]: GetReplyByFeedbackId } = {}; 
  @Input() feedbackId:number;

  constructor(private replyService:ReplyService){

  }
  ngOnInit(): void {
    this.isActiveMap[this.feedbackId] = false;
    this.loadReplies();
  }
  onClick(feedbackId: number) {
    this.isActiveMap[feedbackId] = !this.isActiveMap[feedbackId];
  }

  loadReplies() {
      this.replyService.getByFeedbackId(this.feedbackId).subscribe(reply => {
        this.replies[this.feedbackId] = reply;
      });
  }
}
