import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val _ = IIngredientEmpty.getInstance();
val i = <tag:item:c:plates/iron>;
val n = <tag:item:c:plates/nickel>;
val y = <item:minecraft:yellow_dye>;

<recipetype:minecraft:crafting>.removeByName("measurements:tape_measure");
<recipetype:minecraft:crafting>.addShaped(
  "libcraft/measurements/tape_measure", 
  <item:measurements:tape_measure>, 
  [
    [ _, i, y ],
    [ i, n, i ],
    [ _, i, n ]
  ]);