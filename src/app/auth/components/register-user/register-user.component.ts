import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidatorService } from '../../services/password-validator.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  gender: string[] = [
    'Male', 'Female', 'Others'
  ]
  todayDate: Date = new Date();
  registrationForm!: FormGroup;
  show: boolean = false;
  confirmPassShow: boolean = false;

  constructor(
    private passwordValidator: PasswordValidatorService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registrationForm = new FormGroup({
      firstName: new FormControl(null, [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]),
      lastName: new FormControl(null, [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]),
      gender: new FormControl(null, Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email,]),
      alternateEmail: new FormControl(null, Validators.email),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
    }, {
      validators: this.passwordValidator.passwordMatchValidator()
    })
  }

  showPassword(): void {
    if (this.show) {
      this.show = false;
    }
    else this.show = true;
  }

  showConfirmPassword(): void {
    if (this.confirmPassShow) {
      this.confirmPassShow = false
    }
    else this.confirmPassShow = true
  }

  registerUser(): void {
    // this.dialog.open()
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      this.snackBar.open('Please fill out all the fields', 'Ok', {
        duration: 3000
      });
    }
  }

}
