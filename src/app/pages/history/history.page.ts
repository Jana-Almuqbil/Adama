import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: false,
})
export class HistoryPage {

  aiFilter = false;
  doctorFilter = false;
  
  isFilterOpen = false; // Ensure this exists

  openFilterModal() {
    this.isFilterOpen = true;
  }

  closeFilterModal() {
    this.isFilterOpen = false;
  }
  constructor(private navCtrl: NavController) {}

  // Function to navigate back
  goBack() {
    this.navCtrl.back();
  }

  historyRecords = [
    {
      name: 'Heat Rash',
      date: 'January 15, 2025',
      accuracy: 85,
      status: 'AI Diagnosis',
      image: 'assets/heat-rash.jpeg'
    },
    {
      name: 'Cradle Cap',
      date: 'January 5, 2025',
      accuracy: 92,
      status: 'Doctor Verified',
      image: 'assets/cradle-cap.webp'
    },
    {
      name: 'Diaper Rash',
      date: 'January 10, 2025',
      accuracy: 90,
      status: 'Verified by Doctor',
      image: 'assets/diaper-rash.jpg'
    },
    {
      name: 'Mild Eczema',
      date: 'December 30, 2024',
      accuracy: 88,
      status: 'AI Diagnosis',
      image: 'assets/eczema.webp'
    }
  ];
}



