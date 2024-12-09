import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // Import UserService

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Get the username from the UserService
    this.username = this.userService.getUsername();
  }
}
