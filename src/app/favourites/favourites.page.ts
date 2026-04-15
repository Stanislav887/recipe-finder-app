import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { RecipeService } from '../services/recipe.service';
import { IonButtons, IonBackButton, IonCard, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonCard, IonCardTitle, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FavouritesPage implements OnInit {

  favorites: any[] = [];

  constructor(private storage: Storage, private recipeService: RecipeService) { }

  async ngOnInit() {
    await this.storage.create();

    const favoriteIds = await this.storage.get('favorites') || [];

    this.favorites = [];

    for (const id of favoriteIds) {
      this.recipeService.getMealById(id).subscribe((data: any) => {
        this.favorites.push(data.meals[0]);
      });
    }
  }

}
