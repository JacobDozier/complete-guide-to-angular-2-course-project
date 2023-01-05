import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  onAddToShoppingList(recipe: Recipe) {
    // recipe.ingredients.forEach((ingredient) => {
    //   this.shoppingListService.addIngredient(ingredient);
    // });
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

}
