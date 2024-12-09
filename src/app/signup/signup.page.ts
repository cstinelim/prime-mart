import { Component, OnInit } from '@angular/core';
import { SqliteService } from '../services/sqlite.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  public usersDB: any[] = [];
  confirmPassword = '';
  passwordError = '';
  passwordMismatchError = '';
  showPassword = false;
  showPassword2 = false;

  constructor(
    private database: SqliteService,
    private router: Router,
    private userService: UserService
  ) {}

  async ngOnInit() {
    console.log('Initializing database and table...');
    // Ensure the database is initialized and table is ready
    await this.database.initDb();
    await this.database.initTable();
    console.log('Database and table initialized.');
  }

  validatePassword() {
    if (this.password.length < 6) {
      this.passwordError = 'Password must be at least 6 characters long';
    } else {
      this.passwordError = '';
    }
  }

  checkPasswordMatch() {
    if (this.password !== this.confirmPassword) {
      this.passwordMismatchError = 'Passwords do not match';
    } else {
      this.passwordMismatchError = '';
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  togglePasswordVisibility2() {
    this.showPassword2 = !this.showPassword2;
  }

  async addUser() {
    if (!this.username || !this.email || !this.password) {
      alert('All fields are required!');
      return;
    }

    try {
      const users = await this.database.read();
      const userExists = users.find(
        (u: any) => u.username === this.username || u.email === this.email
      );

      if (userExists) {
        alert('Username or email already exists');
        return;
      }

      await this.database.create(this.username, this.email, this.password);
      alert('User added successfully.');

      // Store the username in the UserService
      this.userService.setUsername(this.username);

      this.username = '';
      this.email = '';
      this.password = '';

      this.router.navigate(['/tabs/category']);
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user. Please try again.');
    }
  }

  async loadUsers() {
    this.usersDB = await this.database.read();
  }
}
