import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel: LoginModel = this.loginForm.value as LoginModel;

      this.authService.login(loginModel).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.data.token);
          this.toastrService.info(response.message, 'LOGIN SUCCESS');
        },
        error: (err) => console.error(err),
      });
    }
  }
}
