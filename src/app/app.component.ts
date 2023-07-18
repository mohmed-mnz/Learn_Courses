import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LearnIT';
  constructor(private userService:UsersService){
  }
  ngOnInit(): void {
    this.getLogin();
  }
  getLogin() {
    this.userService.getLogin().subscribe(res=>{
      this.userService.user.next(res);
    })
  }
}
