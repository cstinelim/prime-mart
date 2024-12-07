import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-acc-info',
  templateUrl: 'acc-info.page.html',
  styleUrls: ['acc-info.page.scss'],
})
export class AccInfoPage {
  username: string = 'primemart';
  email: string = 'primemart@example.com';
  phone: string = '+63 123 456 789';
  password: string = ''; // Initially blank password for user to edit
  passwordVisible: boolean = false; // Toggle for password visibility

  // Track edit state for fields
  isEditing: { [key in 'username' | 'email' | 'phone' | 'password']: boolean } =
    {
      username: false,
      email: false,
      phone: false,
      password: false,
    };

  constructor(private alertController: AlertController) {}

  // Toggle edit mode for the fields (username, email, phone, password)
  async toggleEdit(field: 'username' | 'email' | 'phone' | 'password') {
    if (this.isEditing[field]) {
      // Confirm changes before saving
      const alert = await this.alertController.create({
        header: `Confirm ${
          field.charAt(0).toUpperCase() + field.slice(1)
        } Change`,
        message: `Are you sure you want to update your ${field}?`,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              this.isEditing[field] = false; // Cancel editing
              console.log(`${field} update canceled`);
            },
          },
          {
            text: 'Confirm',
            handler: () => {
              console.log(`${field} updated to:`, this[field]);
              this.isEditing[field] = false; // Exit edit mode after saving
            },
          },
        ],
      });

      await alert.present();
    } else {
      // Enable editing mode
      this.isEditing[field] = true;
    }
  }

  // Toggle visibility of password
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
