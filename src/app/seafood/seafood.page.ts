import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
import { IonCardSubtitle, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.page.html',
  styleUrls: ['./seafood.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SeafoodPage implements OnInit {

  recipes: any[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getMealsByCategory('Seafood').subscribe(({ meals }: any) => {
      this.recipes = meals || [];
    });
  }

  openDetails(id: string) {
    this.router.navigate(['/details', id], {
      queryParams: { returnUrl: '/seafood' }
    });

  }

}
