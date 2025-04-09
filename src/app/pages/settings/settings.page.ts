import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage {
  darkMode = false;

  constructor(private navCtrl: NavController) {}
  goBack() {
    this.navCtrl.back();
  }
  
  openNotifications() {
    console.log('Opening notification settings...');
  }
  
  rateApp() {
    console.log('Redirecting to app store...');
  }
  
  shareApp() {
    if (navigator.share) {
      navigator.share({
        title: 'Adama App',
        text: 'Check out Adama – your AI baby rash assistant!',
        url: window.location.href,
      });
    } else {
      alert('Sharing not supported.');
    }
  }
  
  contactSupport() {
    window.location.href = 'mailto:aoj.business3@gmail.com';
  }
  
  openFeedbackForm() {
    console.log('Opening feedback form...');
  }
  
  deleteAccount() {
    console.log('Account deletion logic here...');
  }
  
  logout() {
    console.log('User logged out.');
  }
}  
