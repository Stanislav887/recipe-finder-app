import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonHeader, IonInput, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, FormsModule, IonInput, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  
  searchTerm: string = '';

  constructor(private router: Router) {}

  search() {
    this.router.navigate(['/results', this.searchTerm]);
  }
}
