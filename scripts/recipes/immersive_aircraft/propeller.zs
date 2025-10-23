import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.recipe.MirrorAxis;

val p = <tag:item:c:plates/iron>;
val r = <tag:item:c:rods/iron>;
val _ = IIngredientEmpty.getInstance();

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:propeller");
craftingTable.addShapedMirrored(
  "libcraft/immersive_aircraft/propeller", 
  MirrorAxis.ALL,
  <item:immersive_aircraft:propeller>,
  [
    [ p, _, _ ],
    [ _, r, _ ],
    [ _, _, p ]
  ]);