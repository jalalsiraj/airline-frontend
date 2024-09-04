import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidatorService {

  constructor() { }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      if (password && password.valid && confirmPassword && confirmPassword.valid && confirmPassword.value !== password.value) {
        confirmPassword.setErrors({ passwordMismatch: true })
      }
      return null;
    }
  }
}
