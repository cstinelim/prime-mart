import { Component, OnInit } from '@angular/core';
import { SqliteService } from '../services/sqlite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  loginError: string = '';
  showPassword: boolean = false;

  constructor(private database: SqliteService, private router: Router) {}

  async ngOnInit() {
    await this.database.initDb();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async login() {
    this.loginError = '';
    if (!this.email || !this.password) {
      this.loginError = 'Email and password are required.';
      return;
    }

    try {
      const users = await this.database.read();
      const user = users.find(
        (u: any) => u.email === this.email && u.password === this.password
      );

      if (user) {
        alert('Login successful!');
        this.router.navigate(['/tabs/category']);
      } else {
        this.loginError = 'Invalid email or password.';
      }
    } catch (error) {
      console.error('Error logging in:', error);
      this.loginError = 'An error occurred during login. Please try again.';
    }
  }
}
