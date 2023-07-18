import { Injectable } from '@angular/core';
import { HttpClient
 } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  baseURL:string = "https://learnit-json.onrender.com/Questions"
  constructor(private http:HttpClient) { }

  getQuestions() {
    return (this.http.get(this.baseURL));
  }
}
