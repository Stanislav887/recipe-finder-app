import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { RecipeService } from '../services/recipe.service';
import { IonCardContent, IonCardSubtitle, IonButton, IonButtons, IonBackButton, IonCard, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonButton, IonButtons, IonBackButton, IonCard, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FavouritesPage implements OnInit {

  favourites: any[] = [];

  constructor(private storage: Storage, private recipeService: RecipeService) { }

  async ngOnInit() {

  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.loadFavourites();
  }

  async loadFavourites() {
    const favouriteIds = await this.storage.get('favourites') || [];

    this.favourites = [];

    for (const id of favouriteIds) {
      this.recipeService.getMealById(id).subscribe((data: any) => {
        this.favourites.push(data.meals[0]);
      });
    }
  }


  async removeFromFavourites(id: string) {
    let favouriteIds = await this.storage.get('favourites') || [];

    favouriteIds = favouriteIds.filter((mealId: string) => mealId !== id);

    await this.storage.set('favourites', favouriteIds);

    this.favourites = this.favourites.filter(meal => meal.idMeal !== id);
  }

}
