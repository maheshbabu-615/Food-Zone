import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registerUser: any;
registrationForm: any;

 

  constructor(private userService: UserService,private route : Router) {}
    userForm = new FormGroup({
     
      password:new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/)]),
      userEmail: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]),

    });
  
  get userEmail(){
    return this.userForm.get('userEmail');
  }

  get password(){
    return this.userForm.get('password');
  }
  ngOnInit(): void {}

  onSubmit():void {
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      const user_Details = {
        userEmail: this.userForm.value.userEmail,
        password: this.userForm.value.password,
    }
     console.log(user_Details)
      this.userService.registerUserData(user_Details).subscribe(
        (response: any) => {
          console.log('User registration successful:', response);
          this.userForm.reset();
          this.route.navigateByUrl("") ;
        },
        (error: any) => {
          console.error('Error during user registration:', error);
        }
      );
    }
  }
}

 

  


  
    