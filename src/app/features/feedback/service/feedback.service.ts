import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddFeedback } from '../models/addFeedbackRequest';
import { ListFeedback } from '../models/listFeedbackByDate';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private readonly apiUrl = `${environment.apiUrl}/feedbacks`;

  constructor(private http:HttpClient) { }

  create(feedback:AddFeedback):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/create`,feedback);
  }
  listByDate():Observable<ListFeedback[]>{
    return this.http.get<ListFeedback[]>(`${this.apiUrl}/getAllFeedbackByDate`);
  }
}
