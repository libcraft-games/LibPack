import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val grains = <item:minecraft:hay_block> | <item:farmersdelight:rice_bale> | <item:culturaldelights:corn_cob_crate>;
val straw = <item:farmersdelight:straw_bale>;

craftingTable.removeByName("supplementaries:fodder");
craftingTable.addShapeless(
  "libcraft/supplementaries/fodder_from_hay", 
  <item:supplementaries:fodder> * 2,
  [ grains, straw ]);

