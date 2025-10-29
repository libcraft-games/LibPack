import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val f = <item:farmersdelight:canvas>;

craftingTable.addShaped(
  "libcraft/supplementaries/doormat_from_canvas", 
  <item:supplementaries:doormat>,
  [
    [ f, f ]
  ]);

