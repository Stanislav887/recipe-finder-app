import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonButtons, IonBackButton, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {

  meal: any;
  ingredients: any[] = [];

  isIngredientsVisible: boolean = true;
  isInstructionsVisible: boolean = false;

  fullInstructions: string = '';
  isFavourite: boolean = false;

  returnUrl: string = '/home';

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private storage: Storage, private toastController: ToastController) { }

  async ngOnInit() {

  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.loadMeal();
  }

  loadMeal() {
    const id = this.route.snapshot.params['id'];

    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';

    this.recipeService.getMealById(id).subscribe(async (data: any) => {

      this.meal = data.meals[0];

      const favourites = await this.storage.get('favourites') || [];
      this.isFavourite = favourites.includes(this.meal.idMeal);

      this.extractIngredients();

      this.fullInstructions = this.meal.strInstructions;
    });
  }

  extractIngredients() {
    this.ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ing = this.meal['strIngredient' + i];
      const meas = this.meal['strMeasure' + i];

      if (ing) {
        this.ingredients.push(`${meas} ${ing}`);
      }
    }
  }

  toggleIngredients() {
    this.isIngredientsVisible = !this.isIngredientsVisible;
  }

  toggleInstructions() {
    this.isInstructionsVisible = !this.isInstructionsVisible;
  }

  getShortInstructions(): string {
    return this.fullInstructions?.substring(0, 200) || '';
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color
    });

    await toast.present();
  }

  async toggleFavourite() {
    let favourites = await this.storage.get('favourites') || [];

    if (favourites.includes(this.meal.idMeal)) {
      favourites = favourites.filter((id: string) => id !== this.meal.idMeal);
      this.isFavourite = false;
      await this.showToast('Removed from favourites 💔', 'danger');
    } else {
      favourites.push(this.meal.idMeal);
      this.isFavourite = true;
      await this.showToast('Added to favourites ❤️', 'success');
    }

    await this.storage.set('favourites', favourites);

  }

}
