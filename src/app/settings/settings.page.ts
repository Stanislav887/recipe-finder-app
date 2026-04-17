import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {

  showImages: boolean = true;

  constructor(private storage: Storage) { }

  async toggleChanged() {
    await this.storage.set('showImages', this.showImages);
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.showImages = await this.storage.get('showImages') ?? true;
  }
  ngOnInit() {
  }

}
