import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.page.html',
  styleUrls: ['./seafood.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SeafoodPage implements OnInit {

  recipes: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').subscribe((data: any) => {
      this.recipes = data.meals;
      console.log(this.recipes);
    });
  }

  openDetails(id: string) {
    this.router.navigate(['/details', id], {
      queryParams: { returnUrl: '/seafood' }
    });

  }

}
