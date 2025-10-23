import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val p = <tag:item:c:plates/aluminum>;
val g = <item:create:precision_mechanism>;
val _ = IIngredientEmpty.getInstance();

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:enhanced_propeller");

craftingTable.addShaped(
  "libcraft/immersive_aircraft/enhanced_propeller", 
  <item:immersive_aircraft:enhanced_propeller>, 
  [
    [ p, _, p ],
    [ _, g, _ ],
    [ p, _, p ]
  ]);