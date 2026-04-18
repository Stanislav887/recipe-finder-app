import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Device } from '@capacitor/device';
import { IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {

  deviceInfo: any;

  constructor() { }

  async getDeviceInfo() {
    this.deviceInfo = await Device.getInfo();
  }

  async ionViewWillEnter() {
    await this.getDeviceInfo();
  }

  async ngOnInit() {
  }





}
