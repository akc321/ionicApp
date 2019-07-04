import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/2:1/w_880,c_limit/chicken-schnitzel.jpg?mbid=social_retweet',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'spaghetti',
      imageUrl: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/easy_spaghetti_bolognese_93639_16x9.jpg',
      ingredients: ['Spaghetti,', 'Meat', 'Sauce']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
