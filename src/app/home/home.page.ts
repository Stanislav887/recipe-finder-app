import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonButtons, IonIcon, IonCardSubtitle, IonCard, IonCardHeader, IonCardTitle, IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButtons, IonIcon, IonCardSubtitle, RouterLink, IonCard, IonCardHeader, IonCardTitle, IonButton, IonHeader, IonToolbar, IonTitle, CommonModule, IonContent],
})
export class HomePage {

  constructor(private router: Router) { }

}
