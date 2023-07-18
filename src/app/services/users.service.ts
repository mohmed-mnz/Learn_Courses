import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL: string ="https://learnit-json.onrender.com/";
  user = new Subject()
  constructor(private http: HttpClient) { }

  // getUserById(userId: any) {
  //   return this.http.get(`${this.baseURL}/${userId}`);
  // }
  
  addUser(user: any) {
    return this.http.post(this.baseURL+"users", user);
  }
  getAllUsers() {
    return this.http.get(this.baseURL+"users");
  }
  
  login(model2:any) {
    return this.http.put(this.baseURL+"account/1", model2);
  }
  getLogin() {
    return this.http.get(this.baseURL+"account/1")
  }
}
