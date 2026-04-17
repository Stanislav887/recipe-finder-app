import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButtons, IonIcon, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonButton, IonHeader, IonInput, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButtons, IonIcon, IonCardSubtitle, RouterLink, IonCard, IonCardHeader, IonCardTitle, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  showImages: boolean = true;

  constructor(private router: Router, private storage: Storage) { }

  async ionViewWillEnter() {
    await this.storage.create();
    this.showImages = await this.storage.get('showImages') ?? true;
  }

}
