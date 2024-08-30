import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {

  constructor(private _snackbar:MatSnackBar,private router:Router){}

  activeForm : 'signUp' | 'login'  = 'login';
  // type signupObjType = typeof signUpObj;
  signUpObj :any = {
   name:'',
   email:'',
   password:''
  }

  loginObj: any = {
    email:'',
    password:''
  }

  toggleForm(form:any)
  {
    this.activeForm= form;
  }
  onSignup()
  {
    const localUser = localStorage.getItem('users');
    if( localUser != null) //already there is an user in LS
    {
      const users=JSON.parse(localUser);  //string in LS converts to Obj
      users.push(this.signUpObj);
      localStorage.setItem("users",JSON.stringify(users));
    }
    else  //new user
    {
       const users=[];
       users.push(this.signUpObj);  //store data as in array form
       localStorage.setItem("users",JSON.stringify(users));  //while storing the data in LS convert it into string
    }
    this._snackbar.open("User registered Successfully",'Close');
  }
  onLogin()
  {
    const localUser=localStorage.getItem('users');
    if(localUser != null)
    {
      const users=JSON.parse(localUser);
      type signupObjType= typeof this.signUpObj;
      const isUserExist = users.find((m: signupObjType)=>m.email == this.loginObj.email && m.password == this.loginObj.password);
      if(isUserExist != undefined)
      {
        this._snackbar.open("User Login Successfully",'Close');
        localStorage.setItem('loggedUser',JSON.stringify(isUserExist));
        this.router.navigateByUrl('/dashboard');
      }
      else
      {
        this._snackbar.open("Email and password is incorrect!",'Close');
      }
    }
  }
}
