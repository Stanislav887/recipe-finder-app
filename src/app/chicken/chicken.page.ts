import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCardSubtitle, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.page.html',
  styleUrls: ['./chicken.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChickenPage implements OnInit {

  recipes: any[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() { 
    
  }

  ionViewWillEnter() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getMealsByCategory('Chicken').subscribe(({ meals }: any) => {
        this.recipes = meals || [];
      });
  }

  openDetails(id: string) {
    this.router.navigate(['/details', id], {
      queryParams: { returnUrl: '/chicken' }
    });
  }

}
