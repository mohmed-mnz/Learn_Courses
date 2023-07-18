import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit{
  userId: any;
  user: any;
  result : any;
  myUserForm!: FormGroup;
  EmailFlag : boolean = false;
  PhoneFlag : boolean = false;
  constructor(
    private UserService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder:FormBuilder
  ) {}

  get getusername() {
    return this.myUserForm.controls['userName'];
  }
  get getuserage() {
    return this.myUserForm.controls['age'];
  }
  get getuserphone() {
    return this.myUserForm.controls['phone'];
  }

  get getuseremail() {
    return this.myUserForm.controls['email'];
  }

  get getuserpassword() {
    return this.myUserForm.controls['password'];
  }
  getAllUsers() {
    this.UserService.getAllUsers().subscribe((res : any)=>{
      this.result = res
    });
  }
  ngOnInit(): void {
    this.getAllUsers();

    this.myUserForm = this.formBuilder.group({
      userName: new FormControl('',[ Validators.required ,Validators.pattern("^[a-zA-Z_ ]{5,25}")]),
      age: new FormControl('',[Validators.required , Validators.min(15)]),
      phone: new FormControl('',[Validators.required , Validators.pattern("^01[0125][0-9]{8}$")]),
      email: new FormControl('',[Validators.required , Validators.pattern("[a-zA-Z0-9]{1,20}@[a-zA-Z]{1,7}.com")]),
      password: new FormControl('',[Validators.required , Validators.minLength(8)]),
    });
  }

  submit(e: Event) {
    e.preventDefault();
    if(this.myUserForm.valid)
      {
        let Index = this.result.findIndex((item : any)=>item.userName == this.myUserForm.value.userName || item.email == this.myUserForm.value.email || item.phone == this.myUserForm.value.phone )
        let EmailIndex = this.result.findIndex((item : any)=>item.email == this.myUserForm.value.email)
        let PhoneIndex = this.result.findIndex((item : any)=>item.phone == this.myUserForm.value.phone)
        if(Index != -1){

          if(EmailIndex != -1 ){
            this.EmailFlag = true;

          }
          else{
            this.EmailFlag = false;
          }

          if(PhoneIndex != -1 ){
            this.PhoneFlag =true;
          }
          else{
            this.PhoneFlag = false;
          }

        }

        else{
          this.UserService.addUser(this.myUserForm.value).subscribe({
          });
          this.router.navigate(['/login'])  
          }
        }

      else{
        this.markAllControlsAsTouched();
      }                  
    }


    
    markAllControlsAsTouched(): void {
      for (const controlName in this.myUserForm.controls) {
        if (this.myUserForm.controls.hasOwnProperty(controlName)) {
          this.myUserForm.controls[controlName].markAsTouched();
        }
      }
    }
}
