import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any;
  loginFlag:boolean=false;
  constructor(private userService:UsersService) {

  }
  ngOnInit(): void {
    this.userService.user.subscribe((res:any)=>{
      if (res.userName) {
        this.loginFlag=true;
        this.user=res;
      } else{
        this.loginFlag=false;
      }
    })
  }
  logout() {
    const model={};
    this.loginFlag=false;
    this.userService.login(model).subscribe(res=>{
      this.user=null;
      this.userService.user.next(res);
    })
  }
}
