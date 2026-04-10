import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.page.html',
  styleUrls: ['./seafood.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SeafoodPage implements OnInit {

  recipes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').subscribe((data: any) => {
      this.recipes = data.meals;
      console.log(this.recipes);
    });
  }

}
