import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  articles = [
    {
      title: 'Understanding Common Baby Rashes',
      description: 'Learn about different types of rashes and how to manage them.',
      image: 'assets/article1.webp',
      link: '/articles/rashes'
    },
    {
      title: 'When Should You Consult a Doctor?',
      description: 'Find out which symptoms require urgent medical attention.',
      image: 'assets/article2.jpg',
      link: '/articles/consult-doctor'
    }
  ];

  previousScans = [
    {
      name: 'Mild Eczema',
      date: 'January 15, 2025',
      accuracy: 85,
      image: 'assets/eczema.webp'
    },
    {
      name: 'Diaper Rash',
      date: 'January 10, 2025',
      accuracy: 90,
      image: 'assets/diaper-rash.jpg'
    },
    {
      name: 'Heat Rash',
      date: 'December 5, 2024',
      accuracy: 88,
      image: 'assets/heat-rash.jpeg'
    },
    {
      name: 'Cradle Cap',
      date: 'January 5, 2025',
      accuracy: 92,
      image: 'assets/cradle-cap.webp'
    }
  ];

  capturedImage: string | null = null;
isFabOpen = false;

toggleFab() {
  this.isFabOpen = !this.isFabOpen;
}

// Close FAB when clicking a menu option
closeFab() {
  this.isFabOpen = false;
}


// Take a photo using the camera
async takePhoto() {
  try {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90
    });
    this.capturedImage = image.webPath!;
  } catch (error) {
    console.error("Camera access error:", error);
  }
}

// Upload a photo from gallery
async uploadPhoto() {
  try {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 90
    });
    this.capturedImage = image.webPath!;
  } catch (error) {
    console.error("Gallery access error:", error);
  }
}

  openCameraOptions() {
    console.log('Camera options opened');
  }
}
