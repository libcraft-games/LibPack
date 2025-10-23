import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val s = <tag:item:c:plates/steel>;
val p = <item:create:fluid_pipe>;
val _ = IIngredientEmpty.getInstance();

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:sturdy_pipes");

craftingTable.addShaped(
  "libcraft/immersive_aircraft/sturdy_pipes", 
  <item:immersive_aircraft:sturdy_pipes>, 
  [
    [ _, _, p ],
    [ s, p, s ],
    [ p, _, _ ]
  ]
);