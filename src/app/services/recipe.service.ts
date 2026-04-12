import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  searchRecipes(ingredient: string): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
  }

  getMealsByCategory(category: string): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }

  getMealById(id: string): Observable<any> {
    return this.http.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }


}
