import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { restaurantOutline, listOutline } from 'ionicons/icons';



@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {

  meal: any;
  ingredients: any[] = [];

  isExpanded: boolean = false;
  fullInstructions: string = '';
  shortInstructions: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    addIcons({
      'restaurant-outline': restaurantOutline,
      'list-outline': listOutline
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).subscribe((data: any) => {
      this.meal = data.meals[0];

      this.ingredients = [];

      for (let i = 1; i <= 20; i++) {
        const ing = this.meal['strIngredient' + i];
        const meas = this.meal['strMeasure' + i];

        if (ing) {
          this.ingredients.push(meas + ' ' + ing);
        }
      }

      this.fullInstructions = this.meal.strInstructions;
      this.shortInstructions = this.meal.strInstructions.substring(0, 150);
    });
  }

}
