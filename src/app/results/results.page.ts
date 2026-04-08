import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ResultsPage implements OnInit {

  ingredient: string = '';


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.ingredient = this.route.snapshot.params['ingredient'];

    console.log(this.ingredient);
  }

}
