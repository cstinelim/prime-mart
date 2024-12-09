import { Component, OnInit } from '@angular/core';
import { SqliteService } from '../services/sqlite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordError: string = '';
  passwordMismatchError: string = '';
  showPassword: boolean = false;
  showPassword2: boolean = false;

  constructor(private database: SqliteService, private router: Router) {}

  async ngOnInit() {
    await this.database.initDb();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  togglePasswordVisibility2() {
    this.showPassword2 = !this.showPassword2;
  }

  validatePassword() {
    this.passwordError =
      this.password.length < 6 ? 'Password must be at least 6 characters.' : '';
  }

  checkPasswordMatch() {
    this.passwordMismatchError =
      this.password !== this.confirmPassword ? 'Passwords do not match.' : '';
  }

  async addUser() {
    if (
      !this.username ||
      !this.email ||
      !this.password ||
      this.passwordError ||
      this.passwordMismatchError
    ) {
      alert('Please fill all fields correctly.');
      return;
    }

    try {
      await this.database.insert({
        username: this.username,
        email: this.email,
        password: this.password,
      });
      alert('Sign up successful!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred. Please try again.');
    }
  }
}
