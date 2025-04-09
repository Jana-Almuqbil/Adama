import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
  standalone: false,
})
export class TermsPage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  terms = [
    {
      title: '1. Introduction',
      content: `Welcome to Adama! These Terms and Conditions govern your use of the Adama mobile application and services. By accessing or using the app, you agree to comply with these terms. If you do not agree, please discontinue use of the service immediately.`,
    },
    {
      title: '2. Use of the Service',
      content: `
      <ul>
        <li><strong>Eligibility:</strong> You must be at least 18 years old to use this app or have parental/guardian consent.</li>
        <li><strong>Personal Responsibility:</strong> You are responsible for the accuracy of the information you provide, including details about your baby’s health.</li>
        <li><strong>Medical Disclaimer:</strong><br/>
        • Adama provides AI-generated preliminary diagnoses for informational purposes only.<br/>
        • AI results are not a substitute for professional medical advice, diagnosis, or treatment.<br/>
        • Always consult a licensed medical professional for health concerns.</li>
      </ul>`,
    },
    {
      title: '3. Account Registration & Security',
      content: `
      <ul>
        <li>You must provide accurate and complete information when creating an account.</li>
        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
        <li>You agree not to share your account with others or allow unauthorized access.</li>
      </ul>`,
    },
    {
      title: '4. AI Diagnosis and Doctor Verification',
      content: `
      <ul>
        <li>The AI-generated diagnosis is only a suggestion and does not guarantee accuracy.</li>
        <li>If you choose to request a doctor verification, the diagnosis will be reviewed by a licensed medical professional assigned by the platform.</li>
        <li>The app does not provide emergency medical services—seek immediate medical attention in case of urgent health concerns.</li>
      </ul>`,
    },
    {
      title: '5. Data Privacy & Security',
      content: `
      <ul>
        <li><strong>Data Collection:</strong> We collect and store certain personal information, including images uploaded for analysis.</li>
        <li><strong>Confidentiality:</strong> Your data is stored securely and not shared with third parties without your consent, except as required by law.</li>
        <li><strong>Deletion Requests:</strong> You may request deletion of your account and personal data at any time through the settings menu.</li>
      </ul>`,
    },
    {
      title: '6. Limitations of Liability',
      content: `Adama is not responsible for misdiagnosis, missed conditions, or misuse of the app. We do not guarantee uninterrupted access to the service and reserve the right to update or modify features at any time. Adama is not liable for any direct, indirect, or incidental damages resulting from reliance on AI diagnoses or doctor verifications.`,
    },
    {
      title: '7. Subscription & Payments (If Applicable)',
      content: `Certain features may require a paid subscription. Subscription plans are billed monthly or annually as per the selected plan. Cancellations and refunds are subject to the terms stated in the app.`,
    },
    {
      title: '8. Modifications to Terms',
      content: `We reserve the right to update these Terms at any time. Continued use of the app after changes constitutes acceptance of the revised Terms. We will notify users of major changes through in-app notifications.`,
    },
    {
      title: '9. Contact Information',
      content: `For any questions regarding these Terms, please contact our support team at <a href="mailto:aoj.business3@gmail.com">aoj.business3@gmail.com</a>.`,
    },
  ];
}
