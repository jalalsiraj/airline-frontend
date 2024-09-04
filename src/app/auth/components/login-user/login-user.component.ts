import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  constructor() { }

  pass: boolean = false;

  loginForm!: FormGroup

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  showPass(): void {
    if (this.pass) {
      this.pass = false;
    }
    else this.pass = true;
    console.log('Hello world')
  }

  login(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

}
