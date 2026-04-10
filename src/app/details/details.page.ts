import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {

  meal: any;

  ingredients: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

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
    });
  }

}
