import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface auth_response {
  message: boolean,
  email: string,
  token: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  auth_res: auth_response = { message: false, email: "", token: "" };

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    check: new FormControl(false)
  });
  
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  /* Error Message for Email validation */
  getErrorMessageEmail() {
    if (this.form.controls['email'].hasError('required')) {
      return 'Você deve inserir um valor';
    }

    return this.form.controls['email'].hasError('email') ? 'Email não é válido' : '';
  }

  /* Submit form action */
  submit() {
    /* Debug */
    console.log(this.form.controls['email'].value);
    console.log(this.form.controls['password'].value);
    console.log(this.form.controls['check'].value);

    /* Only submit if the form is valid */
    if (this.form.valid) {
      /* Call authentication method here */
      if (false) {
        /* Do something */
        this._snackBar.open('Login bem sucedido!', 'Close', { "duration": 2500 });
      } else {
        this.form.controls['password'].reset();
        this._snackBar.open('Email ou Password incorretas!', 'Close', { "duration": 2500 });
      }
    } else {
      this._snackBar.open('Email ou Password incorreta!', 'Close', { "duration": 2500 });
    }
  }

}
