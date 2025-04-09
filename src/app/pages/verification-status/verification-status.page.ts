import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-verification-status',
  templateUrl: './verification-status.page.html',
  styleUrls: ['./verification-status.page.scss'],
  standalone: false,

})
export class VerificationStatusPage {
  [x: string]: any;
  isExpanded = false;

  toggleDetails(index: number) {
    this.verificationDataList[index].isExpanded = !this.verificationDataList[index].isExpanded;
  }
  

 constructor(private navCtrl: NavController) {}

  // Function to navigate back
  goBack() {
    this.navCtrl.back();
  }
  
  verificationDataList = [
    {
      title: 'Heat Rash - Submitted on Feb 10, 2025',
      ready: true,
      isExpanded: true,
      steps: [
        { icon: 'checkmark-circle-outline', label: 'AI Diagnosis Submitted', date: 'Feb 10, 2025', color: 'success' },
        { icon: 'person-outline', label: 'Assigned to Dr. Ahmed Malik', date: 'Feb 11, 2025', color: 'medium' },
        { icon: 'shield-checkmark-outline', label: 'Diagnosis Verified', date: 'Feb 12, 2025', color: 'tertiary' }
      ]
    },
    {
      title: 'Cradle Cap - Submitted on Feb 5, 2025',
      ready: false,
      isExpanded: false,
      steps: [
        { icon: 'checkmark-circle-outline', label: 'AI Diagnosis Submitted', date: 'Feb 5, 2025', color: 'success' },
        { icon: 'person-outline', label: 'Awaiting Assignment', date: '—', color: 'warning' }
      ]
    },
    {
      title: 'Mild Eczema - Submitted on Jan 20, 2025',
      ready: false,
      isExpanded: false,
      steps: [
        { icon: 'checkmark-circle-outline', label: 'AI Diagnosis Submitted', date: 'Jan 20, 2025', color: 'success' }
      ]
    }
  ];
  
  
}
