import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private UserService: UsersService,
    private router: Router,
    private formBuilder:FormBuilder
    ){}
  
    result: any;
  
    ngOnInit(): void {
      this.getAllUsers();
      this.loginForm = this.formBuilder.group({
        email: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
      });
    }
  
    getAllUsers() {
      this.UserService.getAllUsers().subscribe((res : any)=>{
        this.result = res
      });
    }
  
    get getuseremail() {
      return this.loginForm.controls['email'];
    }
  
    get getuserpassword() {
      return this.loginForm.controls['password'];
    }
  
    login(e: Event) {
      e.preventDefault();
      if (this.loginForm.valid) {
        const model = {
          email : this.loginForm.value.email,
          password : this.loginForm.value.password,
        }
  
        let index = this.result.findIndex((item : any)=>item.email == this.loginForm.value.email && item.password ==this.loginForm.value.password)
        if(index == -1 ){
          alert("Email or Password Is Not Correct")
        }
        else{

          // this.toaster.success("Welcome Back")
          const model2 = {
            userName:this.result[index].userName
          }
          this.UserService.login(model2).subscribe(res=>{
      this.UserService.user.next(res);

            alert("Looged Sucsess");
          });
          console.log("hello")
          // sessionStorage.setItem('email',this.result.email);
          this.router.navigate([""]); // path home page
        }

      } else {
        this.markAllControlsAsTouched();
      }
    }


    markAllControlsAsTouched(): void {
      for (const controlName in this.loginForm.controls) {
        if (this.loginForm.controls.hasOwnProperty(controlName)) {
          this.loginForm.controls[controlName].markAsTouched();
        }
      }
}
}