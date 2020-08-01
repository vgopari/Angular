import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}
  
  private recipes: Recipe[] = [
    new Recipe(
      'Tomato',
      'This is a Tomato Curry',
      'https://onedaycart.com/odcb/wp-content/uploads/2015/12/maxresdefault1.jpg',
      [
          new Ingredient('tomatoes', 1),
          new Ingredient('curry Leaves', 10)
      ]),
    new Recipe(
      'Tomato pickle',
      'This is a Tomato pickle',
      'https://onedaycart.com/odcb/wp-content/uploads/2015/12/maxresdefault1.jpg',
      [
          new Ingredient('tomatoes', 10),
          new Ingredient('chilli powder', 500)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
  }
}
