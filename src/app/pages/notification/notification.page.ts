import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  standalone: false,
})
export class NotificationPage {
  selectedTab: string = 'all';

  notifications = [
    {
      icon: 'checkmark-circle-outline',
      title: 'Doctor Authentication Completed',
      message: 'Dr. Ahmed Malik has completed the verification of the AI diagnostic results. The diagnosis is now confirmed and available for review.',
      date: 'February 8, 2025, 3:00 PM',
      read: false,
    },
    {
      icon: 'person-outline',
      title: 'Doctor Authentication Assigned',
      message: 'The AI diagnostic results for your baby’s scan have been assigned to Dr. Ahmed Malik.',
      date: 'February 6, 2025, 10:30 AM',
      read: true,
    },
    {
      icon: 'hourglass-outline',
      title: 'Pending Doctor Authentication Review',
      message: 'The AI diagnostic results are pending review by a doctor. You will receive an update soon.',
      date: 'February 3, 2025, 9:15 AM',
      read: true,
    },
  ];

  get filteredNotifications() {
    if (this.selectedTab === 'all') return this.notifications;
    if (this.selectedTab === 'unread') return this.notifications.filter(n => !n.read);
    return this.notifications.filter(n => n.read);
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  goBack() {
    this.navCtrl.back();
  }

  constructor(private navCtrl: NavController) {}
}
