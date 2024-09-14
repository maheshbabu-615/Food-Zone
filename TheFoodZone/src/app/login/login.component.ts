import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenInterceptorService } from "../service/token-interceptor.service";
import { AuthService } from "../service/auth.service";



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform=new FormGroup({
     
    userEmail : new FormControl('', [Validators.required, Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]),
    password: new FormControl("",[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")]),
     
   })
   get userEmail() {return this.loginform.get("userEmail")}
   get password() {return this.loginform.get("password")}

   hide = true;
   loggedIn: boolean = false;
  
  

    constructor(
        private authService: AuthService,
        private router: Router, 
        private snackBar: MatSnackBar,
        private tokenService: TokenInterceptorService   
     ) {}

     ngOnInit(): void {

     }
     
    login(): void {
        if (this.loginform.valid) {
            console.log(this.loginform.value)
             this.loggedIn = true;
            const userDetails = {
                userEmail: this.loginform.value.userEmail,
                password: this.loginform.value.password,
                 
            }
            console.log(userDetails)
            this.authService.loginUser(userDetails).subscribe({
            
                next: response => {
                     console.log(response)
                    if(response) {
                    localStorage.setItem('token', response);
                     const email = this.tokenService.getuserEmail();
                     const storedToken = localStorage.getItem("token");

                        console.log(email);
                        if (email == "admin@gmail.com") {
                            this.router.navigateByUrl('admin');
                            this.authService.isAuthenticatedUser();     
                         }else {
                            console.log("restaurant");
                            this.authService.isAuthenticatedUser();   
                            this.router.navigateByUrl('restaurant');
                            
                         }
                         this.snackBar.open('Hii Mahesh You Logged In successfully.....', 'success',{
                            duration: 3000,
                            panelClass:['mat-toolbar', 'mat-primary']
                         });
                        }},
                        error:(err) => {
                            console.error('Error during login:', err);
                        }
                    });
                }
            }
        }                             