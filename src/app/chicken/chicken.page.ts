import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.page.html',
  styleUrls: ['./chicken.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChickenPage implements OnInit {

  recipes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken').subscribe((data: any) => {
      this.recipes = data.meals;
      console.log(this.recipes);
    });
  }

}
